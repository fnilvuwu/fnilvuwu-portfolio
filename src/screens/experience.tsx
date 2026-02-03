
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
            <article className="max-w-6xl mx-auto px-4 py-8 md:py-8 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Experience</h1>
                    <div className="text-center uppercase tracking-[0.2em] text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        [ TIMELINE OF EXPERIENCES ]
                    </div>
                </header>

                <section className="mb-16">
                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical line - centered on desktop, left-aligned on mobile */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF5C00] via-[#FF5C00] to-[#FF5C00]"></div>
                        <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF5C00] via-[#FF5C00] to-[#FF5C00]"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative">
                                        {/* Desktop Layout - Alternating */}
                                        <div className={`hidden md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                            {/* Content Side */}
                                            <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                                <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xl font-bold text-[#FF5C00] hover:underline block mb-2"
                                                    >
                                                        {exp.title}
                                                    </a>
                                                    <p className="text-sm text-gray-600 font-semibold mb-1">
                                                        {exp.date}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
                                                    <p className="text-sm text-gray-600 mb-4">{exp.location}</p>
                                                    <p className="text-sm leading-relaxed text-gray-700">{exp.details}</p>
                                                </div>
                                            </div>

                                            {/* Center Dot */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF5C00] rounded-full border-4 border-white shadow-lg z-10"></div>

                                            {/* Image Side */}
                                            <div className={`w-1/2 ${isLeft ? 'pl-12' : 'pr-12'}`}>
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <div className="relative h-56 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                                        <img
                                                            src={exp.imageUrl.startsWith('/') ? exp.imageUrl : '/' + exp.imageUrl}
                                                            alt={exp.title}
                                                            className="object-contain object-center w-full h-full bg-white"
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Mobile Layout - Left-aligned Timeline */}
                                        <div className="md:hidden relative pl-8">
                                            {/* Timeline dot on the left - vertically centered */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FF5C00] rounded-full border-4 border-white shadow-lg z-10"></div>

                                            <div className="space-y-4">
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                                                        <img
                                                            src={exp.imageUrl.startsWith('/') ? exp.imageUrl : '/' + exp.imageUrl}
                                                            alt={exp.title}
                                                            className="object-contain object-center w-full h-full bg-white"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xl font-bold text-[#FF5C00] hover:underline block mb-2"
                                                    >
                                                        {exp.title}
                                                    </a>
                                                    <p className="text-sm text-gray-600 font-semibold mb-1">
                                                        {exp.date}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
                                                    <p className="text-sm text-gray-600 mb-4">{exp.location}</p>
                                                    <p className="text-sm leading-relaxed text-gray-700">{exp.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}
