import { SiFiverr, SiTelegram } from '@icons-pack/react-simple-icons'; // Example library for Fiverr & Telegram icons
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0">
                    {/* Left side - Institution info */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-foreground">Fnilvuwu's Portfolio</h2>
                        <p className="mt-4 uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            [ Labor of Love ]
                        </p>
                    </div>

                    {/* Right side - Quick links */}
                    <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end">
                        <div className="text-center sm:text-right">
                            <h3 className="text-sm uppercase font-medium tracking-wider mb-4 text-foreground" style={{color: '#FF5C00'}}>Connect</h3>
                            <div className="flex space-x-4 justify-center sm:justify-end">
                                <a
                                    href="https://www.fiverr.com/fnilvuwu"
                                    aria-label="Fiverr"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <SiFiverr className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://t.me/fnilvuwu"
                                    aria-label="Telegram"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <SiTelegram className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/fnilvuwu/"
                                    aria-label="LinkedIn"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/fnilvuwu/"
                                    aria-label="Instagram"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@fnilvuwu"
                                    aria-label="YouTube"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <Youtube className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://x.com/fnilvu"
                                    aria-label="Twitter"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://web.facebook.com/fnilvuwu/"
                                    aria-label="Facebook"
                                    className="text-muted-foreground hover:#FF5C00 transition"
                                >
                                    <Facebook className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-600 text-sm">
                        © {new Date().getFullYear()} Fnilvuwu, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
