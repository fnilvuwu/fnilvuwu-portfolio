
import { useState } from 'react';
import { FilterControls } from '../components/filter-controls';
import type { Tag } from './services';
import { tags } from './services';


export const articles = [
    {
        title: "Fitpedia Sebagai Model Solusi Inovatif untuk Meningkatkan Kebugaran Masyarakat Melalui Teknologi AI",
        subtitle: "HealthSense: Journal of Public Health Perspective 1 (1), 1-7",
        author: "Rahmatullah Rahmatullah, Nabila Athira, Muh.Ilham Maulana Ramlan, Muhammad Fahdel Putra Mustafa, Muhammad Ilham Syahfitrah Hendra, Muh.Fahri, Eliyah Acantha Manapa Sampetoding*, Yulita Sirinti Pongtambing, Esther Sanda Manapa",
        date: "2024",
        imageUrl: "images/my_articles/fitpedia-paper-thumbnail.jpg",
        link: "https://journal.ininnawaparaedu.com/healthsense/article/view/142",
        tags: [
            tags.find(t => t.name === 'Research'),
            tags.find(t => t.name === 'Artificial Intelligence'),
        ].filter(Boolean) as Tag[],
    }
];

interface ArticlesPageProps {
    limit?: number;
    showViewAll?: boolean;
}

const uniqueTags = Array.from(new Map(articles.flatMap(item => item.tags).map(t => [t.name, t])).values());

export default function ArticlesPage({ limit, showViewAll = false }: ArticlesPageProps = {}) {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | Tag['type']>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articles.filter(article => {
        const matchesTagType = selectedTagType === 'All' || article.tags.some(tag => tag.type === selectedTagType);
        const matchesTagName = selectedTag === 'All' || article.tags.some(tag => tag.name === selectedTag);
        
        const query = searchQuery.toLowerCase();
        const matchesSearch = !query || 
            article.title.toLowerCase().includes(query) || 
            (article.subtitle && article.subtitle.toLowerCase().includes(query));

        return matchesTagType && matchesTagName && matchesSearch;
    });

    const displayedArticles = limit ? filteredArticles.slice(0, limit) : filteredArticles;

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex-grow fade-in">
                <header className="space-y-6 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center" style={{ color: 'hsl(var(--foreground))' }}>
                        Articles
                    </h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ ARTICLES THAT I'VE WROTE ]
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
                <section>
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF ARTICLES
                    </h2>
                    <div className="space-y-8">
                        {displayedArticles.map((article, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
                                <div className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative bg-white">
                                    <img
                                        loading="lazy"
                                        src={article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl}
                                        alt={article.title}
                                        className="object-contain object-center rounded-lg absolute inset-0 w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                                    {article.link ? (
                                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">
                                            <h3 className="text-2xl font-bold text-[#FF5C00]">{article.title}</h3>
                                        </a>
                                    ) : (
                                        <h3 className="text-2xl font-bold">{article.title}</h3>
                                    )}
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-1">
                                        {article.tags.map((tag, i) => (
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
                                    <p className="text-lg italic">{article.subtitle}</p>
                                    <p className="text-sm text-muted-foreground">Posted by {article.author} on {article.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {showViewAll && limit && filteredArticles.length > limit && (
                        <div className="flex justify-center mt-12">
                            <a
                                href="/articles"
                                className="px-6 py-3 bg-[#FF5C00] text-white font-medium rounded-lg hover:bg-[#FF7C00] transition-colors duration-200"
                            >
                                Show More
                            </a>
                        </div>
                    )}
                </section>
            </article>
        </main>
    );
}
