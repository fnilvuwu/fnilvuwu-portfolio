import Image from 'next/image';
const articles = [
    {
        title: "Hello world!",
        subtitle: "I want to be the king of pirates!",
        author: "admin",
        date: "August 18, 2023",
        imageUrl: "images/my_articles/luffy-gear5.jpg"
    },
    // Add more articles as needed
];

export default function ArticlesPage() {
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

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF ARTICLES
                    </h2>
                    <div className="space-y-8">
                        {articles.map((article, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
                                <div className="flex-shrink-0 w-64 h-32 mx-auto sm:mx-0">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl}
                                            alt={article.title}
                                            width={0}
                                            height={0}
                                            className="absolute top-0 left-0 w-full h-full object-cover object-top"
                                            sizes="(max-width: 768px) 100vw, 320px"
                                            style={{ width: '256', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                                    <h3 className="text-2xl font-bold">{article.title}</h3>
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