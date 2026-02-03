import { articles } from './articles';

export default function HomeArticles() {
    // Show only first 3 articles
    const limitedArticles = articles.slice(0, 3);

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

                <section className="mb-16">
                    <h2 className="uppercase text-xs tracking-[0.3em] mb-12" style={{ color: '#FF5C00' }}>
                        &gt; FEATURED ARTICLES
                    </h2>
                    <div className="space-y-16">
                        {limitedArticles.map((article, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 pb-12 last:pb-0"
                                style={{ borderBottom: index < limitedArticles.length - 1 ? '1px solid hsl(var(--border))' : 'none' }}
                            >
                                <div className="w-full h-48 sm:w-96 sm:h-56 mb-6 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative rounded-lg overflow-hidden" style={{ backgroundColor: 'hsl(var(--muted))', border: '1px solid hsl(var(--border))' }}>
                                    <img
                                        src={article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl}
                                        alt={article.title}
                                        className="object-contain object-center absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col space-y-3 flex-grow text-center sm:text-left">
                                    <h3 className="text-2xl font-bold" style={{ color: '#FF5C00' }}>{article.title}</h3>
                                    <p className="text-sm tracking-wide" style={{ color: 'hsl(var(--muted-foreground))' }}>Posted by {article.author} on {article.date}</p>
                                    <p className="text-base italic leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>{article.subtitle}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
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
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    <div className="flex justify-center mt-16">
                        <a
                            href="/articles"
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
                            [ Show More Articles ]
                        </a>
                    </div>
                </section>
            </article>
        </main >
    );
}
