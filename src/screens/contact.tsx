import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Footer } from '../components/footer';

export default function ContactPage() {
    return (
        <>

            <main className="min-h-screen bg-white">
                <article className="max-w-5xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Get in Touch
                        </h1>
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            Let's Build Something Great Together
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
                                            <p className="font-medium">Location</p>
                                            <p className="text-muted-foreground">Makassar, Indonesia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <a href="mailto:mamatmks45@gmail.com" className="text-blue-600 hover:text-blue-800">
                                                mamatmks45@gmail.com
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
