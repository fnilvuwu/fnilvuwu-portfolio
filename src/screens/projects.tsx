
import { useState } from 'react';
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
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
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
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
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
            "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
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


export default function ProjectsPage() {
    // For demo, you may want to add a category/tagType property to tags and filter by that
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [selectedTagType, setSelectedTagType] = useState<'All' | TagType>('All');

    // Filtering logic: filter by tag name and/or tag type
    const filteredProjects = projects.filter(p => {
        if (selectedTag === 'All') return true;
        return p.tags.some(tag => tag.name === selectedTag && (selectedTagType === 'All' || tag.type === selectedTagType));
    });

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">My Projects</h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        PROJECTS I'VE WORKED ON
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
                            onClick={() => setSelectedTagType(type as TagType)}
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
                                        className="text-xl font-bold text-blue-600 hover:underline"
                                    >
                                        {project.title}
                                    </a>
                                    <p className="text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 rounded text-xs font-medium border ${tag.type === 'service' ? 'bg-blue-100 text-blue-700 border-blue-300' : tag.type === 'skill' ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
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
