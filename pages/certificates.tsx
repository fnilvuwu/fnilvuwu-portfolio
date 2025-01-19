import { NavBar } from '../components/nav-bar';

const certifications = [
    { title: 'Generative Adversarial Networks (GANs)', imageUrl: '/images/my_certificates/Generative Adversarial Networks (GANs).jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/GVKDBBB2OAUC' },
    { title: 'Red Hat Certified System Administrator (RHCSA)', imageUrl: '/images/my_certificates/Red Hat Certified System Administrator (RHCSA).png', link: 'https://www.credly.com/badges/68647f61-5159-44ac-ae53-b9de983931c4' },
    { title: 'Google Data Analytics', imageUrl: '/images/my_certificates/Google Data Analytics.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/LBYH449PQ9MF' },
    // Add more certifications as needed
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Certificates
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        CERTIFICATIONS I'VE EARNED
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF CERTIFICATES
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex flex-col items-center space-y-4 text-center">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                    <img src={cert.imageUrl} alt={cert.title} className="h-48 w-auto object-contain" />
                                    <h3 className="text-lg font-medium mt-4">{cert.title}</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
