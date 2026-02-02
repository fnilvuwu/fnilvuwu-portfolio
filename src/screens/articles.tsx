
import { useState } from 'react';
import type { Tag } from './services';
import { tags } from './services';


const articles = [
    {
        title: "Hello world!",
        subtitle: "I want to be the king of pirates!",
        author: "admin",
        date: "August 18, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg",
        tags: [tags.find(t => t.name === 'Writing')].filter(Boolean) as Tag[],
    },
    // Add more articles as needed
];


export default function ArticlesPage() {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | Tag['type']>('All');

    const filteredArticles = articles.filter(article => {
        if (selectedTag === 'All') return true;
        return article.tags.some(tag => tag.name === selectedTag && (selectedTagType === 'All' || tag.type === selectedTagType));
    });

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
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
                        LIST OF ARTICLES
                    </h2>
                    <div className="space-y-8">
                        {filteredArticles.map((article, index) => (
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
                                    <div className="flex flex-wrap gap-1 mb-1">
                                        {article.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 rounded text-xs font-medium border ${tag.type === 'service' ? 'bg-blue-100 text-blue-700 border-blue-300' : tag.type === 'skill' ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
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
                </section>
            </article>
        </main>
    );
}
