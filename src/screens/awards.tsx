import { useState } from 'react';
import { FilterControls } from '../components/filter-controls';
import type { Tag } from './services';
import { tags } from './services';

export interface Award {
    title: string;
    description: string;
    certificateUrl: string;
    photoUrl?: string; // Real-life photo holding the award
    date: string;
    link: string;
    tags: Tag[];
}

// Awards data structure - competition wins and achievements
export const awards: Award[] = [
    {
        title: '1st Winner OpenTheGate Hackathon 2025 (BSS Parking)',
        description: 'Issued by BSS Parking',
        certificateUrl: '/images/my_awards/openthegate-2025-certificate.jfif',
        photoUrl: '/images/my_awards/openthegate-2025-photo.jfif',
        date: 'Jun 2025',
        link: '/images/my_awards/openthegate-2025-certificate.jfif',
        tags: [
            tags.find(t => t.name === 'Software Development'),
            tags.find(t => t.name === 'Artificial Intelligence'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: '2nd Winner Makassar Hackathon 2024 (Binar Academy)',
        description: 'Issued by Dispora Makassar x Binar Academy',
        certificateUrl: '/images/my_awards/makassar-hackathon-2024-certificate.jfif',
        photoUrl: '/images/my_awards/makassar-hackathon-2024-photo.jfif',
        date: 'Jun 2024',
        link: '/images/my_awards/makassar-hackathon-2024-certificate.jfif',
        tags: [
            tags.find(t => t.name === 'Software Development'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: 'PKM-PI Funding 2023',
        description: 'Received funding for Program Kreativitas Mahasiswa - Penelitian Inovatif (PKM-PI), a national student research program by the Ministry of Education.',
        certificateUrl: '/images/my_awards/pkm-pi-2023-certificate.jfif',
        photoUrl: '/images/my_awards/pkm-pi-2023-photo.jfif',
        date: 'November 2023',
        link: 'https://persuratan.kemdikbud.go.id/showpdf/tampilkandocument/363067',
        tags: [
            tags.find(t => t.name === 'Research'),
            tags.find(t => t.name === 'Project Management'),
            tags.find(t => t.name === 'Internet of Things'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: '1st Winner of Design Graphic Competition (ENIAC VOL. II)',
        description: 'Issued by Eleven Information and Technology Community, SMA Negeri 11 Makassar',
        certificateUrl: '/images/my_awards/eniac-vol-2-certificate.jfif',
        photoUrl: '/images/my_awards/eniac-vol-2-photo.jpg',
        date: 'Oct 2019',
        link: '/images/my_awards/eniac-vol-2-certificate.jfif',
        tags: [
            tags.find(t => t.name === 'Photo Editing'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: '2nd Winner Videography (Justice Show Politeknik Negeri Ujung Pandang)',
        description: 'Issued by Pers Mahasiswa Politeknik Negeri Ujung Pandang, Politeknik Negeri Ujung Pandang (PNUP)',
        certificateUrl: '/images/my_awards/justice-show-videography-photo-1.jpg',
        photoUrl: '/images/my_awards/justice-show-videography-photo-2.jpg',
        date: 'Jul 2019',
        link: '/images/my_awards/justice-show-videography-photo-1.jpg',
        tags: [
            tags.find(t => t.name === 'Video Editing'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: '1st Winner of Design Graphic Competition (ENIAC VOL. I)',
        description: 'Issued by Eleven Information and Technology Community, SMA Negeri 11 Makassar',
        certificateUrl: '/images/my_awards/eniac-vol-1-certificate.jfif',
        photoUrl: '/images/my_awards/eniac-vol-1-photo.jpg',
        date: 'Sep 2018',
        link: '/images/my_awards/eniac-vol-1-certificate.jfif',
        tags: [
            tags.find(t => t.name === 'Photo Editing'),
        ].filter(Boolean) as Tag[],
    },
];

const uniqueTags = Array.from(new Map(awards.flatMap(item => item.tags).map(t => [t.name, t])).values());

export default function AwardsPage() {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | Tag['type']>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAwards = awards.filter(award => {
        const matchesTagType = selectedTagType === 'All' || award.tags.some(tag => tag.type === selectedTagType);
        const matchesTagName = selectedTag === 'All' || award.tags.some(tag => tag.name === selectedTag);

        const query = searchQuery.toLowerCase();
        const matchesSearch = !query ||
            award.title.toLowerCase().includes(query) ||
            award.description.toLowerCase().includes(query);

        return matchesTagType && matchesTagName && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex-grow fade-in">
                <header className="space-y-6 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center" style={{ color: 'hsl(var(--foreground))' }}>
                        Awards & Achievements
                    </h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ COMPETITION WINS AND ACHIEVEMENTS ]
                    </div>
                </header>

                <FilterControls
                    availableTags={uniqueTags}
                    selectedTagType={selectedTagType}
                    setSelectedTagType={setSelectedTagType}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF AWARDS
                    </h2>
                    <div className="space-y-12">
                        {filteredAwards.map((award, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 pb-12 last:pb-0"
                                style={{ borderBottom: index < filteredAwards.length - 1 ? '1px solid hsl(var(--border))' : 'none' }}
                            >
                                <div className="flex flex-row gap-3 w-full sm:w-[28rem] lg:w-[32rem] h-48 sm:h-56 mb-6 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0">
                                    <a
                                        href={award.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 block ${award.photoUrl ? 'w-1/2' : 'w-full'}`}
                                    >
                                        <img
                                            loading="lazy"
                                            src={award.certificateUrl}
                                            alt={`${award.title} Certificate`}
                                            className="object-contain object-center absolute inset-0 w-full h-full p-2 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </a>
                                    {award.photoUrl && (
                                        <a
                                            href={award.photoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 block w-1/2"
                                        >
                                            <img
                                                loading="lazy"
                                                src={award.photoUrl}
                                                alt={`${award.title} award presentation`}
                                                className="object-cover object-center absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </a>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl font-bold text-[#FF5C00] hover:underline"
                                    >
                                        {award.title}
                                    </a>
                                    <p className="text-sm text-muted-foreground font-semibold">{award.date}</p>
                                    <p className="text-sm leading-relaxed">{award.description}</p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                                        {award.tags.map((tag, i) => (
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
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
