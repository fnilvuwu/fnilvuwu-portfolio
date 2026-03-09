
import { useState } from 'react';
import { FilterControls } from '../components/filter-controls';
import type { Tag } from './services';
import { tags } from './services';


type TagType = 'service' | 'skill' | 'tech';

// Example: use tags for each project
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
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
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
            "A responsive landing page for a fictional startup called Tincat, built with HTML, CSS, and Bootstrap.",
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
    {
        title: "Emotion Detection Website (TFLite on the web)",
        description:
            "A web application that performs real-time facial emotion detection using TensorFlow.js and a pre-trained TFLite model.",
        imageUrl: "images/my_projects/Emotion Detection Website (TFLite on the web).png",
        link: "https://github.com/fnilvuwu/Facial-Emotion-Detection-System",
        website: "https://fnilvuwu.github.io/Facial-Emotion-Detection-System/",
        tags: [
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'HTML'),
            tags.find(t => t.name === 'CSS'),
        ].filter(Boolean) as Tag[],
    },
    {
        title: "Facial Age Estimation Website",
        description:
            "An interactive web app that estimates a person's age from their face in real-time using TensorFlow.js.",
        imageUrl: "images/my_projects/Facial Age Estimation Website.png",
        link: "https://github.com/fnilvuwu/facial-age-estimation-website",
        website: "https://fnilvuwu.github.io/facial-age-estimation-website/",
        tags: [
            tags.find(t => t.name === 'Artificial Intelligence'),
            tags.find(t => t.name === 'TensorFlow'),
            tags.find(t => t.name === 'HTML'),
            tags.find(t => t.name === 'CSS'),
        ].filter(Boolean) as Tag[],
    },
];

const techStacks = tags.filter(t => t.type === 'tech').map(t => t.name);

const uniqueTags = Array.from(new Map(projects.flatMap(item => item.tags).map(t => [t.name, t])).values());

export default function ProjectsPage() {
    // For demo, you may want to add a category/tagType property to tags and filter by that
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | TagType>('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filtering logic: filter by tag name and/or tag type
    const filteredProjects = projects.filter(p => {
        const matchesTagType = selectedTagType === 'All' || p.tags.some(tag => tag.type === selectedTagType);
        const matchesTagName = selectedTag === 'All' || p.tags.some(tag => tag.name === selectedTag);

        const query = searchQuery.toLowerCase();
        const matchesSearch = !query ||
            p.title.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query));

        return matchesTagType && matchesTagName && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex-grow fade-in">
                <header className="space-y-6 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center" style={{ color: 'hsl(var(--foreground))' }}>Projects</h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ FEATURED PROJECTS ]
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
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8 sm:text-left">
                        LIST OF PROJECTS
                    </h2>
                    <div className="space-y-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8"
                            >
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-48 sm:w-96 sm:h-56 mb-4 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0 relative bg-white"
                                >
                                    <img
                                        loading="lazy"
                                        src={project.imageUrl.startsWith('/') ? project.imageUrl : '/' + project.imageUrl}
                                        alt={project.title}
                                        className="object-contain object-center rounded-lg absolute inset-0 w-full h-full"
                                    />
                                </a>
                                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-[#FF5C00] hover:underline"
                                    >
                                        {project.title}
                                    </a>
                                    <p className="text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
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
                </section>
            </article>
        </main>
    );
}
