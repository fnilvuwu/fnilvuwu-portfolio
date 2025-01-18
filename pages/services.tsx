import { NavBar } from '../components/nav-bar';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                {/* Tech Stacks Section */}
                <section className="mb-16">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Tech Stacks
                        </h1>
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            TECHNOLOGY THAT I USE
                        </div>
                    </header>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {[
                            '/images/arduino.png',
                            '/images/raspberry-pi.png',
                            '/images/esp8266.png',
                            '/images/nvidia-jetson.png',
                            '/images/nodejs.png',
                            '/images/react.png',
                            '/images/nextjs.png',
                            '/images/firebase.png',
                            '/images/mysql.png',
                            '/images/postgresql.png',
                            '/images/mongodb.png',
                            '/images/tensorflow.png',
                            '/images/pytorch.png',
                            '/images/aws.png',
                            '/images/opencv.png',
                            '/images/flask.png',
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt="Tech Stack Icon"
                                className="h-16 w-16 object-contain"
                            />
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section>
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            My Services
                        </h1>
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            SERVICES THAT I OFFER
                        </div>
                    </header>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {[
                            { title: 'Software Development', icon: '/images/software-development.png' },
                            { title: 'Artificial Intelligence', icon: '/images/ai.png' },
                            { title: 'Private Mentorship', icon: '/images/mentorship.png' },
                            { title: 'Webinar Speaker', icon: '/images/webinar.png' },
                            { title: 'SaaS Products', icon: '/images/saas.png' },
                            { title: 'Technical SEO', icon: '/images/seo.png' },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center"
                            >
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="h-12 w-12 object-contain"
                                />
                                <h3 className="text-lg font-medium">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
