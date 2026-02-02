import { useState } from 'react';
import type { Tag } from './services';
import { tags } from './services';

const certifications = [
    {
        title: 'Generative Adversarial Networks (GANs)',
        imageUrl: '/images/my_certificates/Generative Adversarial Networks (GANs).jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/GVKDBBB2OAUC',
        tags: [tags.find(t => t.name === 'Artificial Intelligence'), tags.find(t => t.name === 'Python'), tags.find(t => t.name === 'TensorFlow')].filter(Boolean) as Tag[],
    },
    {
        title: 'Red Hat Certified System Administrator (RHCSA)',
        imageUrl: '/images/my_certificates/Red Hat Certified System Administrator (RHCSA).png',
        link: 'https://www.credly.com/badges/68647f61-5159-44ac-ae53-b9de983931c4',
        tags: [tags.find(t => t.name === 'Linux'), tags.find(t => t.name === 'Cloud Deployment')].filter(Boolean) as Tag[],
    },
    {
        title: 'Google Data Analytics',
        imageUrl: '/images/my_certificates/Google Data Analytics.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/LBYH449PQ9MF',
        tags: [tags.find(t => t.name === 'Data Analysis'), tags.find(t => t.name === 'Python')].filter(Boolean) as Tag[],
    },
    {
        title: 'TensorFlow Developer Certificate',
        imageUrl: '/images/my_certificates/TensorFlow Developer Certificate.jpg',
        link: 'https://www.credential.net/a1fd9a03-8638-410d-b47b-b91ca5608a0a#acc.tqsjgKON',
        tags: [tags.find(t => t.name === 'Artificial Intelligence'), tags.find(t => t.name === 'TensorFlow'), tags.find(t => t.name === 'Python')].filter(Boolean) as Tag[],
    },
    // ...add more certifications and tags as needed
];


export default function CertificatesPage() {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | Tag['type']>('All');

    const filteredCerts = certifications.filter(cert => {
        if (selectedTag === 'All') return true;
        return cert.tags.some(tag => tag.name === selectedTag && (selectedTagType === 'All' || tag.type === selectedTagType));
    });

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Certificates
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        CERTIFICATIONS I'VE EARNED
                    </div>
                </header>
                {/* Filter by tag type */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <button
                        className={`px-3 py-1 rounded border text-xs font-medium ${selectedTagType === 'All' ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                        onClick={() => setSelectedTagType('All')}
                    >
                        All Types
                    </button>
                    {['service', 'skill', 'tech'].map((type) => (
                        <button
                            key={type}
                            className={`px-3 py-1 rounded border text-xs font-medium ${selectedTagType === type ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                            onClick={() => setSelectedTagType(type as Tag['type'])}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
                {/* Filter by tag name */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                    <button
                        className={`px-3 py-1 rounded border text-xs font-medium ${selectedTag === 'All' ? 'bg-green-600 text-white border-green-700' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                        onClick={() => setSelectedTag('All')}
                    >
                        All Tags
                    </button>
                    {tags.filter(t => selectedTagType === 'All' || t.type === selectedTagType).map((tag) => (
                        <button
                            key={tag.name}
                            className={`px-3 py-1 rounded border text-xs font-medium ${selectedTag === tag.name ? 'bg-green-600 text-white border-green-700' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                            onClick={() => setSelectedTag(tag.name)}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>
                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF CERTIFICATES
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {filteredCerts.map((cert, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full">
                                    <div className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 relative bg-white">
                                        <img
                                            src={cert.imageUrl}
                                            alt={cert.title}
                                            style={{ objectFit: 'contain', objectPosition: 'center', borderRadius: '0.5rem', width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">{cert.title}</h3>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {cert.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 rounded text-xs font-medium border ${tag.type === 'service' ? 'bg-blue-100 text-blue-700 border-blue-300' : tag.type === 'skill' ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
