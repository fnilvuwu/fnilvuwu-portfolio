import { NavBar } from '../components/nav-bar';

const projects = [
    {
        title: "Blog with Users",
        description: "A blog application with user authentication and CRUD functionality.",
        skills: "Data Modeling · Web Applications · SQL · Flask · MySQL · supabase · PostgreSQL",
        imageUrl: "images/my_projects/Blog with Users.png",
        link: "https://github.com/fnilvuwu/Starting-Files---blog-with-users-start",
        website: "https://starting-files-blog-with-users-start-fnilvuwus-projects.vercel.app/"
    },
    {
        title: "Drum Kit Website",
        description: "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
        skills: "HTML · CSS · JavaScript · DOM Manipulation · Event Handling · Web Design and UI/UX · Audio Integration",
        imageUrl: "images/my_projects/Drum Kit Website.png",
        link: "https://github.com/fnilvuwu/drum-kit-website",
        website: "https://fnilvuwu.github.io/drum-kit-website/"
    },
    // Add more projects as needed
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        My Projects
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        PROJECTS I'VE WORKED ON
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF PROJECTS
                    </h2>
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                                <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                    <img src={project.imageUrl} alt={project.title} className="h-64 w-64 object-contain" />
                                </a>
                                <div className="flex flex-col space-y-2">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-600 hover:underline">
                                        {project.title}
                                    </a>
                                    <p className="text-sm leading-relaxed">{project.description}</p>
                                    <p className="text-sm text-muted-foreground">{project.skills}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}