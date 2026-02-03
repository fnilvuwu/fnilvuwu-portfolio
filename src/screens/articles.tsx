
import { useState } from 'react';
import type { Tag } from './services';
import { tags } from './services';


export const articles = [
    {
        title: "Hello world!",
        subtitle: "I want to be the king of pirates!",
        author: "admin",
        date: "August 18, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
    {
        title: "Building Modern Web Applications",
        subtitle: "A comprehensive guide to building scalable web apps with React and TypeScript",
        author: "admin",
        date: "September 15, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'Development'), tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
    {
        title: "The Future of AI in Software Development",
        subtitle: "Exploring how artificial intelligence is transforming the way we write code",
        author: "admin",
        date: "October 3, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'AI'), tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
    {
        title: "Mastering Git and Version Control",
        subtitle: "Essential Git workflows and best practices for collaborative development",
        author: "admin",
        date: "November 12, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'Development'), tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
    {
        title: "Cloud Architecture Best Practices",
        subtitle: "Designing resilient and scalable cloud infrastructure for modern applications",
        author: "admin",
        date: "December 8, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'Development'), tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
];

interface ArticlesPageProps {
    limit?: number;
    showViewAll?: boolean;
}

export default function ArticlesPage({ limit, showViewAll = false }: ArticlesPageProps = {}) {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | Tag['type']>('All');

    const filteredArticles = articles.filter(article => {
        if (selectedTag === 'All') return true;
        return article.tags.some(tag => tag.name === selectedTag && (selectedTagType === 'All' || tag.type === selectedTagType));
    });

    const displayedArticles = limit ? filteredArticles.slice(0, limit) : filteredArticles;

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-3xl mx-auto px-4 py-8 md:py-8 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Articles
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        ARTICLES THAT I'VE WROTE
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
                <section>
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF ARTICLES
                    </h2>
                    <div className="space-y-8">
                        {displayedArticles.map((article, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
                                <div className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative bg-white">
                                    <img
                                        src={article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl}
                                        alt={article.title}
                                        className="object-contain object-center rounded-lg absolute inset-0 w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                                    <h3 className="text-2xl font-bold">{article.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-1">
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
