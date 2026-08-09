import type { ReactNode } from 'react';
import { NavBar } from './nav-bar';
import { ImageModalProvider } from './ImageModal';

type PageLayoutProps = {
    children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <ImageModalProvider>
                <NavBar />
                {children}
            </ImageModalProvider>
        </div>
    );
}
