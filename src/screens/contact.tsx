import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Footer } from '../components/footer';

export default function ContactPage() {
    return (
        <>

            <main className="min-h-screen bg-white">
                <article className="max-w-5xl mx-auto px-4 py-8 md:py-8 flex-grow fade-in">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Get in Touch
                        </h1>
                        <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            [ Let's Build Something Great Together ]
                        </div>
                        <p className="text-center text-muted-foreground">
                            Interested in collaborating or hiring me for your project? Drop me a message—I'd love to hear from you!
                        </p>
                    </header>



                    <section className="space-y-6 mb-8">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            Contact Information
                        </h3>
                        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-8">

                            {/* Contact Information */}
                            <section className="space-y-8 md:w-1/2">

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <MapPinIcon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <p className="font-medium" style={{ color: '#FF5C00' }}>Location</p>
                                            <p className="text-muted-foreground" >Makassar, Indonesia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <p className="font-medium" style={{ color: '#FF5C00' }}>Email</p>
                                            <a href="mailto:mamatmks45@gmail.com" className="text-gray-600 hover:text-[#FF5C00] transition-colors">
                                                mamatmks45@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <div>
                                            <p className="font-medium" style={{ color: '#FF5C00' }}>Phone</p>
                                            <a href="tel:+6287788362583" className="text-gray-600 hover:text-[#FF5C00] transition-colors">
                                                +62 853 9401 8318
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-600">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                        <div>
                                            <p className="font-medium" style={{ color: '#FF5C00' }}>GitHub</p>
                                            <a href="https://github.com/fnilvuwu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF5C00] transition-colors">
                                                github.com/fnilvuwu
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Map */}
                            <section className="md:w-1/2">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps?q=Hasanuddin+University&z=18&output=embed"
                                ></iframe>
                            </section>
                        </div>
                    </section>

                </article>
            </main>
            <Footer />
        </>
    )
}
