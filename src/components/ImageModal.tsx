import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
} from 'react';
import { Minus, Plus, RotateCcw, X } from 'lucide-react';

const MIN_SCALE = 0.5;
const MAX_SCALE = 8;
const DOUBLE_TAP_SCALE = 2.5;
const ZOOM_STEP = 1.35;

export const IMAGE_MODAL_OPEN_EVENT = 'image-modal:open';

interface ModalState {
    src: string;
    alt?: string;
}

export function openImageInModal(src: string, alt?: string) {
    window.dispatchEvent(
        new CustomEvent<ModalState>(IMAGE_MODAL_OPEN_EVENT, {
            detail: { src, alt },
        })
    );
}

export function ImageModalProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<ModalState | null>(null);

    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const [interacting, setInteracting] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
    const lastPinchDistRef = useRef<number | null>(null);
    const interactTimerRef = useRef<number | null>(null);

    const setInteractingTemporarily = () => {
        setInteracting(true);
        if (interactTimerRef.current) {
            window.clearTimeout(interactTimerRef.current);
        }
        interactTimerRef.current = window.setTimeout(() => {
            setInteracting(false);
        }, 150);
    };

    const isZoomed = scale > 1;

    useEffect(() => {
        const onOpen = (e: Event) => {
            const detail = (e as CustomEvent<ModalState>).detail;
            setState({ src: detail.src, alt: detail.alt });
            setScale(1);
            setTranslate({ x: 0, y: 0 });
            setInteracting(false);
            pointersRef.current = new Map();
            lastPinchDistRef.current = null;
        };
        window.addEventListener(IMAGE_MODAL_OPEN_EVENT, onOpen);
        return () => window.removeEventListener(IMAGE_MODAL_OPEN_EVENT, onOpen);
    }, []);

    // Clean up interact timer on unmount
    useEffect(() => {
        return () => {
            if (interactTimerRef.current) {
                window.clearTimeout(interactTimerRef.current);
            }
        };
    }, []);

    const close = useCallback(() => {
        setState(null);
        setScale(1);
        setTranslate({ x: 0, y: 0 });
        setInteracting(false);
        pointersRef.current = new Map();
        lastPinchDistRef.current = null;
        if (interactTimerRef.current) {
            window.clearTimeout(interactTimerRef.current);
            interactTimerRef.current = null;
        }
    }, []);

    // Clamp the pan so the image edges stay within reachable view bounds.
    // Extra factor lets the border cross the viewport slightly so the image
    // can still be centered against an edge.
    const clampTranslate = useCallback((value: { x: number; y: number }, scaleValue: number) => {
        const el = containerRef.current;
        const img = el?.querySelector('img');
        if (!el || !img) return value;

        const viewW = el.clientWidth;
        const viewH = el.clientHeight;
        const imgW = img.clientWidth;
        const imgH = img.clientHeight;
        const maxX = Math.max(0, (imgW * scaleValue - viewW) / 2) + viewW * 0.15;
        const maxY = Math.max(0, (imgH * scaleValue - viewH) / 2) + viewH * 0.15;

        return {
            x: Math.min(maxX, Math.max(-maxX, value.x)),
            y: Math.min(maxY, Math.max(-maxY, value.y)),
        };
    }, []);

    const zoomAt = useCallback(
        (nextScale: number, anchorX?: number, anchorY?: number) => {
            setScale(prevScale => {
                const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale));
                const rect = containerRef.current?.getBoundingClientRect();
                const cx = anchorX ?? (rect ? rect.width / 2 : 0);
                const cy = anchorY ?? (rect ? rect.height / 2 : 0);
                const ox = rect ? rect.width / 2 : 0;
                const oy = rect ? rect.height / 2 : 0;
                const ratio = clamped / prevScale;
                const ax = cx - ox;
                const ay = cy - oy;

                setTranslate(t => {
                    if (clamped <= 1) {
                        return { x: 0, y: 0 };
                    }
                    const next = {
                        x: ax - (ax - t.x) * ratio,
                        y: ay - (ay - t.y) * ratio,
                    };
                    return clampTranslate(next, clamped);
                });
                return clamped;
            });
        },
        [clampTranslate]
    );

    const resetZoom = useCallback(() => {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
    }, []);

    const zoomIn = useCallback(() => {
        zoomAt(scale * ZOOM_STEP);
    }, [scale, zoomAt]);

    const zoomOut = useCallback(() => {
        zoomAt(scale / ZOOM_STEP);
    }, [scale, zoomAt]);

    // Lock body scroll + handle Escape + non-passive wheel listener
    useEffect(() => {
        if (!state) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        };
        window.addEventListener('keydown', onKeyDown);

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            setInteractingTemporarily();
            const el = containerRef.current;
            const rect = el?.getBoundingClientRect();
            zoomAt(
                e.deltaY < 0 ? scale * ZOOM_STEP : scale / ZOOM_STEP,
                rect ? e.clientX - rect.left : undefined,
                rect ? e.clientY - rect.top : undefined
            );
        };

        const el = containerRef.current;
        el?.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKeyDown);
            el?.removeEventListener('wheel', onWheel);
        };
    }, [state, close, scale, zoomAt, setInteractingTemporarily]);

    const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        setInteracting(true);

        if (pointersRef.current.size === 2) {
            const [p1, p2] = [...pointersRef.current.values()];
            lastPinchDistRef.current = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        }
    };

    const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const pointers = pointersRef.current;
        if (!pointers.has(e.pointerId)) return;

        const prev = pointers.get(e.pointerId)!;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointers.size === 2) {
            const [p1, p2] = [...pointers.values()];
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (lastPinchDistRef.current && lastPinchDistRef.current > 0) {
                // anchor point relative to the container (not the viewport)
                const rect = containerRef.current?.getBoundingClientRect();
                const rectLeft = rect ? rect.left : 0;
                const rectTop = rect ? rect.top : 0;
                const midX = (p1.x + p2.x) / 2 - rectLeft;
                const midY = (p1.y + p2.y) / 2 - rectTop;
                zoomAt(scale * (dist / lastPinchDistRef.current), midX, midY);
            }
            lastPinchDistRef.current = dist;
        } else if (pointers.size === 1 && isZoomed) {
            const dx = e.clientX - prev.x;
            const dy = e.clientY - prev.y;
            setTranslate(t => clampTranslate({ x: t.x + dx, y: t.y + dy }, scale));
        }
    };

    const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
        pointersRef.current.delete(e.pointerId);
        if (pointersRef.current.size < 2) {
            lastPinchDistRef.current = null;
        }
        if (pointersRef.current.size === 0) {
            setInteracting(false);
        }
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    };

    const onDoubleClick = (e: ReactPointerEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        const anchorX = rect ? e.clientX - rect.left : undefined;
        const anchorY = rect ? e.clientY - rect.top : undefined;
        if (scale === 1) {
            zoomAt(DOUBLE_TAP_SCALE, anchorX, anchorY);
        } else {
            resetZoom();
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        if (!isZoomed) {
            close();
        }
    };

    return (
        <>
            {children}

            {state && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={state.alt || 'Image viewer'}
                    className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center overflow-hidden"
                >
                    <div
                        ref={containerRef}
                        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                        style={{ touchAction: 'none' }}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerUp}
                        onDoubleClick={onDoubleClick}
                        onClick={handleBackdropClick}
                    >
                        <img
                            src={state.src}
                            alt={state.alt || ''}
                            draggable={false}
                            className={`max-w-[90vw] max-h-[85vh] object-contain mx-auto my-auto touch-none cursor-zoom-in ${interacting ? '' : 'transition-transform duration-200 ease-out'}`}
                            style={{
                                transformOrigin: 'center',
                                willChange: 'transform',
                                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                            }}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close image viewer"
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                        <button
                            type="button"
                            onClick={zoomOut}
                            aria-label="Zoom out"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={resetZoom}
                            aria-label="Reset zoom"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                        >
                            <RotateCcw className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={zoomIn}
                            aria-label="Zoom in"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                        {state.alt && (
                            <span className="hidden sm:block text-white/80 text-xs px-2 truncate max-w-[40vw]">
                                {state.alt}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

interface ZoomableImageProps {
    src: string;
    alt?: string;
    className?: string;
    imgClassName?: string;
    style?: React.CSSProperties;
}

export function ZoomableImage({ src, alt = '', className = '', imgClassName = '', style }: ZoomableImageProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        openImageInModal(src, alt);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={`View ${alt || 'image'}`}
            style={style}
            className={`block relative cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] w-full h-full overflow-hidden ${className}`}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                draggable={false}
                className={imgClassName}
            />
        </button>
    );
}