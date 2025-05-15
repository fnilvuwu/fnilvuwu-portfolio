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

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        let isTransitioning = false;

        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();
            if (isTransitioning) return;

            const currentIndex = sectionOrder.indexOf(currentSection);
            const container = document.documentElement;
            const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
            const isAtTop = container.scrollTop === 0;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (event.deltaY > 0 && currentIndex < sectionOrder.length - 1 && isAtBottom) {
                    // Scrolling down and at bottom
                    isTransitioning = true;
                    const nextSection = sectionOrder[currentIndex + 1];
                    router.push(nextSection).then(() => {
                        setCurrentSection(nextSection);
                        isTransitioning = false;
                    });
                } else if (event.deltaY < 0 && currentIndex > 0 && isAtTop) {
                    // Scrolling up and at top
                    isTransitioning = true;
                    const prevSection = sectionOrder[currentIndex - 1];
                    router.push(prevSection).then(() => {
                        setCurrentSection(prevSection);
                        isTransitioning = false;
                    });
                }
            }, 150); // Debounce time
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSection, router]);

    useEffect(() => {
        setCurrentSection(router.pathname);
    }, [router.pathname]);

    const navigateToSection = (section: string) => {
        router.push(section);
        setCurrentSection(section);
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