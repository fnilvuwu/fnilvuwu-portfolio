
import { faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faCloud, faCode, faDatabase, faEye, faImage, faMicrochip, faNetworkWired, faRobot, faSpider, faUserTie, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// --- Tag System ---
export type TagType = 'skill' | 'tech' | 'service';
export type Tag = {
    name: string;
    type: TagType;
    icon?: any; // for service/skill tags with icons
    imageUrl?: string; // for tech stack tags with images
};

// Central tag registry (extend as needed)
export const tags: Tag[] = [
    // Services
    { name: 'Software Development', type: 'service', icon: faCode },
    { name: 'Artificial Intelligence', type: 'service', icon: faMicrochip },
    { name: 'Video Editing', type: 'service', icon: faVideo },
    { name: 'Photo Editing', type: 'service', icon: faImage },
    { name: 'Presentation Design', type: 'service', icon: faChartLine },
    { name: 'Private Mentorship', type: 'service', icon: faUserTie },
    // Skills
    { name: 'Python Programming', type: 'skill', icon: faPython },
    { name: 'Machine Learning', type: 'skill', icon: faRobot },
    { name: 'Data Analysis', type: 'skill', icon: faDatabase },
    { name: 'Cloud Deployment', type: 'skill', icon: faCloud },
    { name: 'Computer Vision', type: 'skill', icon: faEye },
    { name: 'Linux Administration', type: 'skill', icon: faLinux },
    { name: 'API Development', type: 'skill', icon: faNetworkWired },
    { name: 'Data Scraping', type: 'skill', icon: faSpider },
    // Tech Stacks
    { name: 'Python', type: 'tech', imageUrl: '/images/my_tech_stacks/python-logo.svg' },
    { name: 'TensorFlow', type: 'tech', imageUrl: '/images/my_tech_stacks/tensorflow-logo.png' },
    { name: 'Keras', type: 'tech', imageUrl: '/images/my_tech_stacks/keras-logo.svg' },
    { name: 'PyTorch', type: 'tech', imageUrl: '/images/my_tech_stacks/pytorch-logo.svg' },
    { name: 'OpenCV', type: 'tech', imageUrl: '/images/my_tech_stacks/opencv-logo.svg' },
    { name: 'Flask', type: 'tech', imageUrl: '/images/my_tech_stacks/flask-logo.png' },
    { name: 'Jupyter', type: 'tech', imageUrl: '/images/my_tech_stacks/jupyter-logo.svg' },
    { name: 'Node.js', type: 'tech', imageUrl: '/images/my_tech_stacks/nodejs-logo.svg' },
    { name: 'React', type: 'tech', imageUrl: '/images/my_tech_stacks/react-logo.png' },
    { name: 'Firebase', type: 'tech', imageUrl: '/images/my_tech_stacks/firebase-logo.png' },
    { name: 'MySQL', type: 'tech', imageUrl: '/images/my_tech_stacks/mysql-logo.svg' },
    { name: 'Streamlit', type: 'tech', imageUrl: '/images/my_tech_stacks/streamlit-logo.png' },
    { name: 'PostgreSQL', type: 'tech', imageUrl: '/images/my_tech_stacks/postgresql-logo.svg' },
    { name: 'Arduino', type: 'tech', imageUrl: '/images/my_tech_stacks/arduino-logo.svg' },
    { name: 'Docker', type: 'tech', imageUrl: '/images/my_tech_stacks/docker-logo.png' },
    { name: 'scikit-learn', type: 'tech', imageUrl: '/images/my_tech_stacks/scikit_learn-logo.svg' },
    { name: 'Flutter', type: 'tech', imageUrl: '/images/my_tech_stacks/flutter-logo.svg' },
    { name: 'Dart', type: 'tech', imageUrl: '/images/my_tech_stacks/dart-logo.png' },
    { name: 'Android Studio', type: 'tech', imageUrl: '/images/my_tech_stacks/android_studio-logo.svg' },
    { name: 'Kotlin', type: 'tech', imageUrl: '/images/my_tech_stacks/kotlin-logo.png' },
    { name: 'Java', type: 'tech', imageUrl: '/images/my_tech_stacks/java-logo.svg' },
    { name: 'JavaScript', type: 'tech', imageUrl: '/images/my_tech_stacks/javascript-logo.png' },
    { name: 'TypeScript', type: 'tech', imageUrl: '/images/my_tech_stacks/typescript-logo.svg' },
    { name: 'Bootstrap', type: 'tech', imageUrl: '/images/my_tech_stacks/bootstrap-logo.svg' },
    { name: 'HuggingFace', type: 'tech', imageUrl: '/images/my_tech_stacks/huggingface-logo.svg' },
    { name: 'Kaggle', type: 'tech', imageUrl: '/images/my_tech_stacks/kaggle-logo.svg' },
    { name: 'Roboflow', type: 'tech', imageUrl: '/images/my_tech_stacks/roboflow-logo.svg' },
    { name: 'Google Cloud', type: 'tech', imageUrl: '/images/my_tech_stacks/google_cloud-logo.svg' },
    { name: 'VBA', type: 'tech', imageUrl: '/images/my_tech_stacks/vba-logo.png' },
    { name: 'Linux', type: 'tech', imageUrl: '/images/my_tech_stacks/linux-logo.png' },
    { name: 'YOLO', type: 'tech', imageUrl: '/images/my_tech_stacks/yolo-logo.png' },
    { name: 'Apache', type: 'tech', imageUrl: '/images/my_tech_stacks/apache-logo.svg' },
    { name: 'Excel', type: 'tech', imageUrl: '/images/my_tech_stacks/excel-logo.svg' },
    { name: 'Tableau', type: 'tech', imageUrl: '/images/my_tech_stacks/tableau-logo.png' },
    { name: 'PowerBI', type: 'tech', imageUrl: '/images/my_tech_stacks/powerbi-logo.svg' },
    { name: 'Matplotlib', type: 'tech', imageUrl: '/images/my_tech_stacks/matplotlib-logo.svg' },
    { name: 'Seaborn', type: 'tech', imageUrl: '/images/my_tech_stacks/seaborn-logo.svg' },
    { name: 'Pandas', type: 'tech', imageUrl: '/images/my_tech_stacks/pandas-logo.svg' },
    { name: 'NumPy', type: 'tech', imageUrl: '/images/my_tech_stacks/numpy-logo.svg' },
    { name: 'Plotly', type: 'tech', imageUrl: '/images/my_tech_stacks/plotly-logo.png' },
    { name: 'WordPress', type: 'tech', imageUrl: '/images/my_tech_stacks/wordpress-logo.png' },
    { name: 'Bash', type: 'tech', imageUrl: '/images/my_tech_stacks/bash-logo.svg' },
];


function handleTagClick(tag: Tag) {
    // Pass tag name and type as query params to /explore
    if (typeof window !== 'undefined') {
        const url = new URL('/explore', window.location.origin);
        url.searchParams.set('tag', tag.name);
        url.searchParams.set('tagType', tag.type);
        window.location.href = url.toString();
    }
}


export default function ServicesPage() {
    // Split tags by type for display
    const serviceTags = tags.filter(t => t.type === 'service');
    const skillTags = tags.filter(t => t.type === 'skill');
    const techTags = tags.filter(t => t.type === 'tech');

    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 py-8 md:py-8 flex-grow fade-in">
                {/* Services Section */}
                <section className="mb-16">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Services
                        </h1>
                        <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            [ SERVICES THAT I OFFER ]
                        </div>
                    </header>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {serviceTags.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center transform transition-transform hover:scale-110 cursor-pointer"
                                onClick={() => handleTagClick(service)}
                                title={`Show related items for ${service.name}`}
                            >
                                <div className="h-16 w-16 flex items-center justify-center">
                                    {service.icon && <FontAwesomeIcon icon={service.icon} size="3x" style={{ color: '#FF5C00' }} />}
                                </div>
                                <h3 className="text-sm text-gray-600 font-semibold mb-1">{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-16">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Skills
                        </h1>
                        <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            [ WHAT I BRING TO THE TABLE ]
                        </div>
                    </header>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                        {skillTags.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center transform transition-transform hover:scale-110 cursor-pointer"
                                onClick={() => handleTagClick(skill)}
                                title={`Show related items for ${skill.name}`}
                            >
                                <div className="h-16 w-16 flex items-center justify-center">
                                    {skill.icon && <FontAwesomeIcon icon={skill.icon} size="3x" style={{ color: '#FF5C00' }} />}
                                </div>
                                <h3 className="text-sm text-gray-600 font-semibold mb-1">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stacks Section */}
                <section className="mb-16">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Tech Stacks
                        </h1>
                        <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            [ TECHNOLOGY THAT I USE ]
                        </div>
                    </header>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {techTags.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => handleTagClick(tech)}
                                title={`Show related items for ${tech.name}`}
                            >
                                {tech.imageUrl && (
                                    <img
                                        src={tech.imageUrl}
                                        alt={tech.name + ' Icon'}
                                        width={64}
                                        height={64}
                                        className="h-16 w-16 object-contain transform transition-transform hover:scale-110"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
