import Image from 'next/image';
const experiences = [
    {
        title: "ML Engineer Division",
        imageUrl: "images/my_experience/ML Engineer Division.png",
        date: "January 2024 - Present",
        duration: "1 year 1 month",
        location: "Braincore.id - Remote",
        link: "https://github.com/Braincore-Engineering",
        details:
            "Assisted in the development of internal tools and scripts. Participated in code reviews and team meetings. Gained hands-on experience with software development lifecycle.",
    },
    {
        title: "IBM Academy : Hybrid Cloud & Red Hat Cohort",
        imageUrl: "images/my_experience/IBM Academy - Hybrid Cloud & Red Hat Cohort.jpeg",
        date: "February 2024 - July 2024",
        duration: "6 months",
        location: "Infinite Learning Indonesia - Batam, Kepulauan Riau, Indonesia - Hybrid",
        link: "https://www.linkedin.com/posts/infinite-learning-indonesia_infinitelearning-infinitelearningindonesia-ugcPost-7203642454216966144-jS7v?utm_source=social_share_send&utm_medium=member_desktop_web",
        details:
            "Assisted in the development of internal tools and scripts. Participated in code reviews and team meetings. Gained hands-on experience with software development lifecycle.",
    },
    {
        title: "Mobile Development Laboratory Assistant",
        imageUrl: "images/my_experience/Mobile Development Laboratory Assistant.jpeg",
        date: "February 2024 - July 2024",
        duration: "6 months",
        location: "Universitas Hasanuddin - On-site",
        link: "https://github.com/fnilvuwu/ASISTENSI-LAB-PM-02-2024",
        details:
            "Assisted in the development of internal tools and scripts. Participated in code reviews and team meetings. Gained hands-on experience with software development lifecycle.",
    },
    {
        title: "Machine Learning Cohort",
        imageUrl: "images/my_experience/Machine Learning Cohort.jpeg",
        date: "August 2023 - January 2024",
        duration: "6 Months",
        location: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka - Remote",
        link: "https://github.com/GymGuide",
        details:
            "Successfully completing Bangkit, specializing in Machine Learning, with Distinction. Bangkit is a Google-led academy designed to produce high-caliber technical talent for world-class Indonesian technology companies and startups.",
    },
    {
        title: "Object-Oriented Programming (Java) Laboratory",
        imageUrl: "images/my_experience/Object-Oriented Programming (OOP) Laboratory Assistant.jpeg",
        date: "February 2023 - July 2023",
        duration: "6 months",
        location: "Universitas Hasanuddin - On-site",
        link: "https://github.com/fnilvuwu/ASISTENSI-G-LAB-OOP-2022y",
        details:
            "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to define, design, and ship new features. Implemented RESTful APIs and integrated third-party services.",
    },
    {
        title: "Freelance Graphic Designer",
        imageUrl: "images/my_experience/Freelance Graphic Designer.png",
        date: "January 2020 - December 2020",
        duration: "1 year",
        location: "Fiverr (Self-employed) - Remote",
        link: "https://www.fiverr.com/fnilvuwu",
        details:
            "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to define, design, and ship new features. Implemented RESTful APIs and integrated third-party services.",
    },
    {
        title: "Leader of Smada Information and Technology Community (SITe.Com)",
        imageUrl: "images/my_experience/Leader.jpeg",
        date: "January 2018 - January 2019",
        duration: "1 year 1 month",
        location: "SMA Negeri 2 Makassar - On-site",
        link: "https://www.instagram.com/sitecom02",
        details:
            "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to define, design, and ship new features. Implemented RESTful APIs and integrated third-party services.",
    },
    // Add more experiences as needed
]

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Experience</h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">EXPERIENCES I'VE HAD</div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF EXPERIENCES
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8"
                            >
                                <Image
                                    src={exp.imageUrl.startsWith('/') ? exp.imageUrl : '/' + exp.imageUrl}
                                    alt={exp.title}
                                    width={192}
                                    height={192}
                                    className="h-48 w-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, 192px"
                                />
                                <div className="flex flex-col space-y-2 text-center md:text-left">
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-center md:text-left text-blue-600 hover:underline"
                                    >
                                        {exp.title}
                                    </a>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.date} | {exp.duration}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                                    <p className="text-sm leading-relaxed">{exp.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    )
}

