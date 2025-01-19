import { NavBar } from '../components/nav-bar';

const experiences = [
    {
        title: 'Mobile Development Laboratory Assistant',
        imageUrl: 'images/my_experience/Mobile Development Laboratory Assistant.jpeg',
        date: 'February 2024 - July 2024',
        duration: '6 months',
        location: 'Universitas Hasanuddin - On-site',
        link: 'https://github.com/fnilvuwu/ASISTENSI-LAB-PM-02-2024',
        details: 'Assisted in the development of internal tools and scripts. Participated in code reviews and team meetings. Gained hands-on experience with software development lifecycle.',
    },
    {
        title: 'Machine Learning Cohort',
        imageUrl: 'images/my_experience/Machine Learning Cohort.jpeg',
        date: 'August 2023 - January 2024',
        duration: '6 Months',
        location: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka - Remote',
        link: 'https://github.com/GymGuide',
        details: 'Successfully completing Bangkit, specializing in Machine Learning, with Distinction. Bangkit is a Google-led academy designed to produce high-caliber technical talent for world-class Indonesian technology companies and startups.',
    },
    {
        title: 'Object-Oriented Programming (Java) Laboratory',
        imageUrl: 'images/my_experience/Object-Oriented Programming (OOP) Laboratory Assistant.jpeg',
        date: 'February 2023 - July 2023',
        duration: '6 months',
        location: 'Universitas Hasanuddin - On-site',
        link: 'https://github.com/fnilvuwu/ASISTENSI-G-LAB-OOP-2022y',
        details: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to define, design, and ship new features. Implemented RESTful APIs and integrated third-party services.',
    },
    // Add more experiences as needed
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Experience
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        EXPERIENCES I'VE HAD
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF EXPERIENCES
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                                <img src={exp.imageUrl} alt={exp.title} className="h-48 w-auto object-contain" />
                                <div className="flex flex-col space-y-2">
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-600 hover:underline">
                                        {exp.title}
                                    </a>
                                    <p className="text-sm text-muted-foreground">{exp.date} | {exp.duration}</p>
                                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                                    <p className="text-sm leading-relaxed">{exp.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}