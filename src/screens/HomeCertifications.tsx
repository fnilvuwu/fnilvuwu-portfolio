import type { Tag } from './services';
import { tags } from './services';

// Reuse certifications data (first 3)
const certifications = [
    {
        title: 'Generative Adversarial Networks (GANs)',
        imageUrl: '/images/my_certificates/Generative Adversarial Networks (GANs).jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/GVKDBBB2OAUC',
        tags: [
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'Deep Learning'),
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'Python'),
            tags.find(t => t.name === 'TensorFlow'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Red Hat Certified System Administrator (RHCSA)',
        imageUrl: '/images/my_certificates/Red Hat Certified System Administrator (RHCSA).png',
        link: 'https://www.credly.com/badges/68647f61-5159-44ac-ae53-b9de983931c4',
        tags: [
            tags.find(t => t.name === 'Linux'),
            tags.find(t => t.name === 'System Administration'),
            tags.find(t => t.name === 'DevOps'),
            tags.find(t => t.name === 'Infrastructure'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Google Data Analytics',
        imageUrl: '/images/my_certificates/Google Data Analytics.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/LBYH449PQ9MF',
        tags: [
            tags.find(t => t.name === 'Data Analytics'),
            tags.find(t => t.name === 'Data Visualization'),
            tags.find(t => t.name === 'SQL'),
            tags.find(t => t.name === 'Business Intelligence'),
        ].filter(Boolean) as Tag[],
    },
];

export default function HomeCertifications() {
    // Show only first 3 certifications
    const limitedCerts = certifications.slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex-grow fade-in">
                <header className="space-y-6 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center" style={{ color: 'hsl(var(--foreground))' }}>
                        Certificates
                    </h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ FEATURED CERTIFICATIONS ]
                    </div>
                </header>

                <section>
                    <h2 className="uppercase text-xs tracking-[0.3em] mb-12" style={{ color: '#FF5C00' }}>
                        &gt; RECENT CERTIFICATES
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {limitedCerts.map((cert, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full">
                                    <div className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 relative rounded-lg overflow-hidden" style={{ backgroundColor: 'hsl(var(--muted))', border: '1px solid hsl(var(--border))' }}>
                                        <img
                                            src={cert.imageUrl}
                                            alt={cert.title}
                                            className="transition-transform duration-300 hover:scale-105"
                                            style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <h3 className="text-lg font-medium mt-6 transition-colors duration-200 hover:underline" style={{}}>{cert.title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-3 justify-center">
                                        {cert.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs tracking-wide"
                                                style={{
                                                    backgroundColor: tag.type === 'service' ? 'rgba(255, 92, 0, 0.15)' : tag.type === 'skill' ? 'rgba(124, 58, 237, 0.25)' : 'rgba(156, 163, 175, 0.2)',
                                                    color: tag.type === 'service' ? '#FF5C00' : tag.type === 'skill' ? '#7c3aed' : 'hsl(var(--muted-foreground))',
                                                    border: `1px solid ${tag.type === 'service' ? '#FF5C00' : tag.type === 'skill' ? '#7c3aed' : 'hsl(var(--border))'}`,
                                                    borderRadius: '2px'
                                                }}
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    <div className="flex justify-center mt-16">
                        <a
                            href="/certificates"
                            className="px-8 py-3 text-sm tracking-wider uppercase transition-all duration-200"
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid #FF5C00',
                                borderRadius: '2px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#FF5C00';
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#FF5C00';
                            }}
                        >
                            [ Show More Certificates ]
                        </a>
                    </div>
                </section>
            </article>
        </main >
    );
}
