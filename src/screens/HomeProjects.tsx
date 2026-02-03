import type { Tag } from './services';
import { tags } from './services';

// Reuse projects data from projects.tsx
const projects = [
    {
        title: "Blog with Users",
        description: "A blog application with user authentication and CRUD functionality.",
        imageUrl: "images/my_projects/Blog with Users.png",
        link: "https://github.com/fnilvuwu/Starting-Files---blog-with-users-start",
        website: "https://starting-files-blog-with-users-start-fnilvuwus-projects.vercel.app/",
        tags: [
            tags.find(t => t.name === 'Software Development'),
            tags.find(t => t.name === 'Python'),
            tags.find(t => t.name === 'Flask'),
            tags.find(t => t.name === 'MySQL'),
            tags.find(t => t.name === 'PostgreSQL'),
            tags.find(t => t.name === 'Jupyter'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: "Drum Kit Website",
        description:
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements.",
        imageUrl: "images/my_projects/Drum Kit Website.png",
        link: "https://github.com/fnilvuwu/drum-kit-website",
        website: "https://fnilvuwu.github.io/drum-kit-website/",
        tags: [
            tags.find(t => t.name === 'Software Development'),
            tags.find(t => t.name === 'JavaScript'),
            tags.find(t => t.name === 'HTML'),
            tags.find(t => t.name === 'CSS'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: "Bootstrap Tincat Website",
        description:
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements.",
        imageUrl: "images/my_projects/Bootstrap Tincat Website.png",
        link: "https://github.com/fnilvuwu/tincat-bootstrap",
        website: "https://fnilvuwu.github.io/tincat-bootstrap/",
        tags: [
            tags.find(t => t.name === 'Software Development'),
            tags.find(t => t.name === 'Bootstrap'),
            tags.find(t => t.name === 'HTML'),
            tags.find(t => t.name === 'CSS'),
        ].filter(Boolean) as Tag[],
    },
];

export default function HomeProjects() {
    // Show only first 3 projects
    const limitedProjects = projects.slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex-grow fade-in">
                <header className="space-y-6 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center" style={{ color: 'hsl(var(--foreground))' }}>My Projects</h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ FEATURED PROJECTS ]
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-xs tracking-[0.3em] mb-12 sm:text-left" style={{ color: '#FF5C00' }}>
                        &gt; RECENT PROJECTS
                    </h2>
                    <div className="space-y-16">
                        {limitedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 pb-12 last:pb-0"
                                style={{ borderBottom: index < limitedProjects.length - 1 ? '1px solid hsl(var(--border))' : 'none' }}
                            >
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-48 sm:w-96 sm:h-56 mb-6 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative rounded-lg overflow-hidden"
                                    style={{ backgroundColor: 'hsl(var(--muted))', border: '1px solid hsl(var(--border))' }}
                                >
                                    <img
                                        src={project.imageUrl.startsWith('/') ? project.imageUrl : '/' + project.imageUrl}
                                        alt={project.title}
                                        className="object-contain object-center absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </a>
                                <div className="flex flex-col space-y-3 flex-grow text-center sm:text-left">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold transition-colors duration-200 hover:underline"
                                        style={{}}
                                    >
                                        {project.title}
                                    </a>
                                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag, i) => (
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
                            href="/projects"
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
                            [ Show More Projects ]
                        </a>
                    </div>
                </section>
            </article>
        </main >
    );
}
