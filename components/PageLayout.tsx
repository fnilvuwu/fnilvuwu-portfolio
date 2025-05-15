'use client'

import { ReactNode } from 'react';
import { ScrollProvider } from '../contexts/ScrollContext';
import { NavBar } from './nav-bar';

type PageLayoutProps = {
    children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <ScrollProvider>
            <div className="min-h-screen bg-white flex flex-col">
                <NavBar />
                {children}
            </div>
        </ScrollProvider>
    );
}