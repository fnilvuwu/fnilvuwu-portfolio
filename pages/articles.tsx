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
                            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
                                <div className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative bg-white">
                                    <Image
                                        src={article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl}
                                        alt={article.title}
                                        fill
                                        className="object-contain object-center rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 320px"
                                    />
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