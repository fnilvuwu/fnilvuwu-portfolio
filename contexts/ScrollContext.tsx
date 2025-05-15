'use client'

import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ScrollContextType = {
    currentSection: string;
    navigateToSection: (section: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

const sectionOrder = [
    '/',
    '/about',
    '/services',
    '/certificates',
    '/experience',
    '/projects',
    '/articles',
    '/contact'
];

export function ScrollProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [currentSection, setCurrentSection] = useState<string>('/');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);
    const [excessScrollDistance, setExcessScrollDistance] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Configuration for threshold
    const EXCESS_SCROLL_THRESHOLD = 200; // Excess scroll distance required before transition (px)
    
    // Detect mobile device on mount
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
            const mobile = Boolean(
                userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
            );
            setIsMobile(mobile);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        // Update the current section based on router path
        setCurrentSection(router.pathname);
    }, [router.pathname]);

    // Handle wheel scrolling (desktop)
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleWheel = (event: WheelEvent) => {
            if (isTransitioning) return;

            const currentIndex = sectionOrder.indexOf(currentSection);
            const container = document.documentElement;
            const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
            const isAtTop = container.scrollTop <= 10;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Scrolling down and at bottom
                if (event.deltaY > 0 && currentIndex < sectionOrder.length - 1 && isAtBottom) {
                    // Accumulate excess scroll distance
                    setExcessScrollDistance(prev => {
                        const newValue = prev + event.deltaY;
                        
                        // If we've reached the threshold, navigate and reset
                        if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                            navigateToNextSection();
                            return 0;
                        }
                        return newValue;
                    });
                } 
                // Scrolling up and at top
                else if (event.deltaY < 0 && currentIndex > 0 && isAtTop) {
                    // Accumulate excess scroll distance (use absolute value for easier comparison)
                    setExcessScrollDistance(prev => {
                        const newValue = prev + Math.abs(event.deltaY);
                        
                        // If we've reached the threshold, navigate and reset
                        if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                            navigateToPrevSection();
                            return 0;
                        }
                        return newValue;
                    });
                } else {
                    // Reset excess scroll distance if not at the edge
                    setExcessScrollDistance(0);
                }
            }, 50); // Reduced debounce time for smoother experience
        };

        window.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            clearTimeout(scrollTimeout);
        };
    }, [currentSection, isTransitioning, excessScrollDistance]);

    // Handle touch events (mobile)
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isTransitioning || touchStartY === null) return;

            const touchEndY = e.changedTouches[0].clientY;
            const touchDiff = touchStartY - touchEndY;
            const container = document.documentElement;
            const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
            const currentIndex = sectionOrder.indexOf(currentSection);

            // Minimum swipe distance to detect
            const minSwipeDistance = 50;

            // Swiping up and at bottom - allow navigation forward on mobile
            if (touchDiff > minSwipeDistance && currentIndex < sectionOrder.length - 1 && isAtBottom) {
                // For touch events, we'll use the swipe distance directly
                setExcessScrollDistance(prev => {
                    const newValue = prev + touchDiff;
                    
                    // If we've reached the threshold, navigate and reset
                    if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                        navigateToNextSection();
                        return 0;
                    }
                    return newValue;
                });
            } 
            // Swiping down and at top - ONLY allow navigation backward on desktop
            else if (!isMobile && touchDiff < -minSwipeDistance && currentIndex > 0) {
                // For touch events, we'll use the absolute swipe distance
                setExcessScrollDistance(prev => {
                    const newValue = prev + Math.abs(touchDiff);
                    
                    // If we've reached the threshold, navigate and reset
                    if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                        navigateToPrevSection();
                        return 0;
                    }
                    return newValue;
                });
            } else {
                // Reset excess scroll distance if not at the edge
                setExcessScrollDistance(0);
            }

            setTouchStartY(null);
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [touchStartY, currentSection, isTransitioning, excessScrollDistance, isMobile]);

    // Handle keyboard navigation (accessibility)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isTransitioning) return;
            
            const currentIndex = sectionOrder.indexOf(currentSection);
            const container = document.documentElement;
            const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
            const isAtTop = container.scrollTop <= 10;

            const keyScrollAmount = 50; // Amount to accumulate per key press

            // Down arrow or Page Down at bottom
            if ((e.key === 'ArrowDown' || e.key === 'PageDown') && 
                currentIndex < sectionOrder.length - 1 && isAtBottom) {
                
                // Accumulate excess scroll distance
                setExcessScrollDistance(prev => {
                    const newValue = prev + keyScrollAmount;
                    
                    // If we've reached the threshold, navigate and reset
                    if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                        navigateToNextSection();
                        return 0;
                    }
                    return newValue;
                });
            }
            // Up arrow or Page Up at top
            else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && 
                     currentIndex > 0 && isAtTop) {
                
                // Accumulate excess scroll distance
                setExcessScrollDistance(prev => {
                    const newValue = prev + keyScrollAmount;
                    
                    // If we've reached the threshold, navigate and reset
                    if (newValue >= EXCESS_SCROLL_THRESHOLD) {
                        navigateToPrevSection();
                        return 0;
                    }
                    return newValue;
                });
            } else {
                // Reset excess scroll distance if not at the edge
                setExcessScrollDistance(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection, isTransitioning, excessScrollDistance]);

    // Helper functions for navigation
    const navigateToNextSection = () => {
        const currentIndex = sectionOrder.indexOf(currentSection);
        if (currentIndex < sectionOrder.length - 1) {
            const nextSection = sectionOrder[currentIndex + 1];
            performNavigation(nextSection);
        }
    };

    const navigateToPrevSection = () => {
        const currentIndex = sectionOrder.indexOf(currentSection);
        if (currentIndex > 0) {
            const prevSection = sectionOrder[currentIndex - 1];
            performNavigation(prevSection);
        }
    };

    const performNavigation = (section: string) => {
        setIsTransitioning(true);
        router.push(section)
            .then(() => {
                setCurrentSection(section);
                // Add a small delay before allowing new transitions
                setTimeout(() => setIsTransitioning(false), 500);
            })
            .catch(() => {
                setIsTransitioning(false);
            });
    };

    const navigateToSection = (section: string) => {
        if (isTransitioning) return;
        performNavigation(section);
    };

    return (
        <ScrollContext.Provider value={{ currentSection, navigateToSection }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScroll() {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}