import { useState } from 'react';
import type { Tag } from './services';
import { tags } from './services';

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
    {
        title: 'TensorFlow Developer Certificate',
        imageUrl: '/images/my_certificates/TensorFlow Developer Certificate.jpg',
        link: 'https://www.credential.net/a1fd9a03-8638-410d-b47b-b91ca5608a0a#acc.tqsjgKON',
        tags: [
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'Deep Learning'),
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'Python'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Bangkit Machine Learning Graduate with Distinction',
        imageUrl: '/images/my_certificates/Bangkit Machine Learning Graduate with Distinction.jpeg',
        link: 'https://github.com/GymGuide',
        tags: [
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'Google Cloud'),
            tags.find(t => t.name === 'Artificial Intelligence'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'PKM - PI Pendanaan 2023',
        imageUrl: '/images/my_certificates/PKM- PI Pendanaan 2023.jpeg',
        link: 'https://persuratan.kemdikbud.go.id/showpdf/tampilkandocument/363067',
        tags: [
            tags.find(t => t.name === 'Research'),
            tags.find(t => t.name === 'Project Management'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'TensorFlow: Data and Deployment',
        imageUrl: '/images/my_certificates/TensorFlow Data and Deployment.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/HTAMCE68FUX5',
        tags: [
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'Deployment'),
            tags.find(t => t.name === 'MLOps'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'DeepLearning.AI TensorFlow Developer',
        imageUrl: '/images/my_certificates/DeepLearning.AI TensorFlow Developer.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/RGUQWJZADZQW',
        tags: [
            tags.find(t => t.name === 'Deep Learning'),
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'Python'),
            tags.find(t => t.name === 'Machine Learning'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Machine Learning',
        imageUrl: '/images/my_certificates/Machine Learning.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/XW36JLBZRNQP',
        tags: [
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'Python'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Mathematics for Machine Learning and Data Science',
        imageUrl: '/images/my_certificates/Mathematics for Machine Learning and Data Science.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/8XPVYV8KBTNE',
        tags: [
            tags.find(t => t.name === 'Mathematics'),
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'Data Science'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'IBM Cybersecurity Analyst',
        imageUrl: '/images/my_certificates/IBM Cybersecurity Analyst.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/65MZW7VMU678',
        tags: [
            tags.find(t => t.name === 'Cybersecurity'),
            tags.find(t => t.name === 'Networking'),
            tags.find(t => t.name === 'Security'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: '100 Days of Code: The Complete Python Pro Bootcamp',
        imageUrl: '/images/my_certificates/100 Days of Code The Complete Python Pro Bootcamp.jpg',
        link: 'https://www.udemy.com/certificate/UC-00e84d19-a804-40ef-831a-f3aeef40fc33',
        tags: [
            tags.find(t => t.name === 'Python'),
            tags.find(t => t.name === 'Programming'),
            tags.find(t => t.name === 'Software Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Certified International Specialist in Data Visualization (CISDV)',
        imageUrl: '/images/my_certificates/Certified International Specialist in Data Visualization (CISDV).jpg',
        link: 'https://drive.google.com/file/d/1wEHj9ukcqROFhuOS1h6i7wOpM3lUntra/view',
        tags: [
            tags.find(t => t.name === 'Data Visualization'),
            tags.find(t => t.name === 'Business Intelligence'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Certified International Specialist in Data Visualization (CISDV) Training Certification',
        imageUrl: '/images/my_certificates/Certified International Specialist in Data Visualization (CISDV) Training Certification.jpg',
        link: 'https://drive.google.com/file/d/1vbLPYuvCUgTTTb8G_Lw_NFN35pRkV7Nc/view',
        tags: [
            tags.find(t => t.name === 'Data Visualization'),
            tags.find(t => t.name === 'Training'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Java (Basic)',
        imageUrl: '/images/my_certificates/Java (Basic).png',
        link: 'https://www.hackerrank.com/certificates/b4a6d351dc71',
        tags: [
            tags.find(t => t.name === 'Java'),
            tags.find(t => t.name === 'Programming'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'JavaScript (Basic)',
        imageUrl: '/images/my_certificates/JavaScript (Basic).png',
        link: 'https://www.hackerrank.com/certificates/cd72c346478c',
        tags: [
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'Web Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'JavaScript (Intermediate)',
        imageUrl: '/images/my_certificates/JavaScript (Intermediate).png',
        link: 'https://www.hackerrank.com/certificates/905e95f78c58',
        tags: [
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'Web Development'),
            tags.find(t => t.name === 'Programming'),
        ].filter(Boolean) as Tag[],
    },

    // --- Cloud Journey ---
    {
        title: 'Journey to Cloud: Envisioning Your Solution',
        imageUrl: '/images/my_certificates/Journey to Cloud Envisioning Your Solution.png',
        link: 'https://www.credly.com/badges/446e647b-f030-4727-90d8-91c4a24d9e01',
        tags: [tags.find(t => t.name === 'Cloud Computing'), tags.find(t => t.name === 'Cloud Architecture')].filter(Boolean) as Tag[],
    },
    {
        title: 'Journey to Cloud: Orchestrating Your Solution',
        imageUrl: '/images/my_certificates/Journey to Cloud Orchestrating Your Solution.png',
        link: 'https://www.credly.com/badges/5d29a580-f765-4683-91e9-6e083168c132',
        tags: [tags.find(t => t.name === 'Cloud Computing'), tags.find(t => t.name === 'DevOps')].filter(Boolean) as Tag[],
    },
    {
        title: 'Journey to Cloud: Transforming Your Culture',
        imageUrl: '/images/my_certificates/Journey to Cloud Transforming Your Culture.png',
        link: 'https://www.credly.com/badges/ea8e8b7e-7925-466a-b2fb-63fe4140f537',
        tags: [tags.find(t => t.name === 'Cloud Computing'), tags.find(t => t.name === 'Digital Transformation')].filter(Boolean) as Tag[],
    },

    // --- Remaining grouped logically (Web, Mobile, Programming, etc.) ---
    {
        title: 'Belajar Dasar Structured Query Language (SQL)',
        imageUrl: '/images/my_certificates/Belajar Dasar Structured Query Language (SQL).jpg',
        link: 'https://www.dicoding.com/certificates/1OP81234LZQK',
        tags: [tags.find(t => t.name === 'SQL'), tags.find(t => t.name === 'Database')].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Aplikasi Web dengan React',
        imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Web dengan React.jpg',
        link: 'https://www.dicoding.com/certificates/GRX5397JVZ0M',
        tags: [tags.find(t => t.name === 'React'), tags.find(t => t.name === 'JavaScript'), tags.find(t => t.name === 'Web Development')].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Flutter untuk Pemula.jpg',
        link: 'https://www.dicoding.com/certificates/53XENGW19XRN',
        tags: [tags.find(t => t.name === 'Flutter'), tags.find(t => t.name === 'Mobile Development')].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Aplikasi Android untuk Pemula',
        imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Android untuk Pemula.jpg',
        link: 'https://www.dicoding.com/certificates/2VX3JM1QVPYQ',
        tags: [tags.find(t => t.name === 'Android'), tags.find(t => t.name === 'Mobile Development'), tags.find(t => t.name === 'Kotlin')].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Flutter untuk Pemula.jpg',
        link: 'https://www.dicoding.com/certificates/53XENGW19XRN',
        tags: [
            tags.find(t => t.name === 'Flutter'),
            tags.find(t => t.name === 'Dart'),
            tags.find(t => t.name === 'Mobile Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Prinsip Pemrograman SOLID',
        imageUrl: '/images/my_certificates/Belajar Prinsip Pemrograman SOLID.jpg',
        link: 'https://www.dicoding.com/certificates/81P236YQ8XOY',
        tags: [
            tags.find(t => t.name === 'Software Engineering'),
            tags.find(t => t.name === 'OOP'),
            tags.find(t => t.name === 'Best Practices'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
        imageUrl: '/images/my_certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg',
        link: 'https://www.dicoding.com/certificates/QLZ9QO9R7Z5D',
        tags: [
            tags.find(t => t.name === 'Programming'),
            tags.find(t => t.name === 'Software Development'),
            tags.find(t => t.name === 'Fundamentals'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Memulai Pemrograman Dengan Dart',
        imageUrl: '/images/my_certificates/Memulai Pemrograman dengan Dart.jpg',
        link: 'https://www.dicoding.com/certificates/JMZV908ENPN9',
        tags: [
            tags.find(t => t.name === 'Dart'),
            tags.find(t => t.name === 'Programming'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Memulai Pemrograman Dengan Kotlin',
        imageUrl: '/images/my_certificates/Memulai Pemrograman dengan Kotlin.jpg',
        link: 'https://www.dicoding.com/certificates/JLX1DRRM2Z72',
        tags: [
            tags.find(t => t.name === 'Kotlin'),
            tags.find(t => t.name === 'Programming'),
            tags.find(t => t.name === 'Android'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
        imageUrl: '/images/my_certificates/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg',
        link: 'https://www.dicoding.com/certificates/QLZ9QN5O7Z5D',
        tags: [
            tags.find(t => t.name === 'Programming'),
            tags.find(t => t.name === 'Algorithms'),
            tags.find(t => t.name === 'Fundamentals'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Dasar AI',
        imageUrl: '/images/my_certificates/Belajar Dasar AI.jpg',
        link: 'https://www.dicoding.com/certificates/MRZMN4V50PYQ',
        tags: [
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'Machine Learning'),
            tags.find(t => t.name === 'Fundamentals'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Dasar Pemrograman Web',
        imageUrl: '/images/my_certificates/Belajar Dasar Pemrograman Web.jpg',
        link: 'https://www.dicoding.com/certificates/98XWE486LXM3',
        tags: [
            tags.find(t => t.name === 'Web Development'),
            tags.find(t => t.name === 'HTML'),
            tags.find(t => t.name === 'CSS'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Front-End Web untuk Pemula',
        imageUrl: '/images/my_certificates/Belajar Membuat Front-End Web untuk Pemula.jpg',
        link: 'https://www.dicoding.com/certificates/53XEDJ6YVPRN',
        tags: [
            tags.find(t => t.name === 'Front-End Development'),
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'Web Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Membuat Aplikasi Web dengan React',
        imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Web dengan React.jpg',
        link: 'https://www.dicoding.com/certificates/GRX5397JVZ0M',
        tags: [
            tags.find(t => t.name === 'React'),
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'Web Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'Belajar Dasar Pemrograman JavaScript',
        imageUrl: '/images/my_certificates/Belajar Dasar Pemrograman JavaScript.jpg',
        link: 'https://www.dicoding.com/certificates/81P2L3QDQZOY',
        tags: [
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'Programming'),
            tags.find(t => t.name === 'Web Development'),
        ].filter(Boolean) as Tag[],
    },
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
            <article className="max-w-6xl mx-auto px-4 py-8 md:py-8 flex-grow fade-in">
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
                        className="px-3 py-1 text-xs tracking-wide"
                        style={{
                            backgroundColor: selectedTagType === 'All' ? '#FF5C00' : 'transparent',
                            color: selectedTagType === 'All' ? '#ffffff' : 'hsl(var(--foreground))',
                            border: selectedTagType === 'All' ? '1px solid #FF5C00' : '1px solid hsl(var(--border))',
                            borderRadius: '2px',
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedTagType('All')}
                    >
                        All Types
                    </button>
                    {['service', 'skill', 'tech'].map((type) => (
                        <button
                            key={type}
                            className="px-3 py-1 text-xs tracking-wide"
                            style={{
                                backgroundColor: selectedTagType === type ? '#FF5C00' : 'transparent',
                                color: selectedTagType === type ? '#ffffff' : 'hsl(var(--foreground))',
                                border: selectedTagType === type ? '1px solid #FF5C00' : '1px solid hsl(var(--border))',
                                borderRadius: '2px',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelectedTagType(type as Tag['type'])}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
                {/* Filter by tag name */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                    <button
                        className="px-3 py-1 text-xs tracking-wide"
                        style={{
                            backgroundColor: selectedTag === 'All' ? '#7c3aed' : 'transparent',
                            color: selectedTag === 'All' ? '#ffffff' : 'hsl(var(--foreground))',
                            border: selectedTag === 'All' ? '1px solid #7c3aed' : '1px solid hsl(var(--border))',
                            borderRadius: '2px',
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedTag('All')}
                    >
                        All Tags
                    </button>
                    {tags.filter(t => selectedTagType === 'All' || t.type === selectedTagType).map((tag) => (
                        <button
                            key={tag.name}
                            className="px-3 py-1 text-xs tracking-wide"
                            style={{
                                backgroundColor: selectedTag === tag.name ? '#7c3aed' : 'transparent',
                                color: selectedTag === tag.name ? '#ffffff' : 'hsl(var(--foreground))',
                                border: selectedTag === tag.name ? '1px solid #7c3aed' : '1px solid hsl(var(--border))',
                                borderRadius: '2px',
                                cursor: 'pointer'
                            }}
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
                                    <div className="flex flex-wrap gap-2 mt-2">
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
                </section>
            </article>
        </main>
    );
}
