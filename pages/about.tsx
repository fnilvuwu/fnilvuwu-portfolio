import { NavBar } from '../components/nav-bar'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        About Me
                    </h1>
                </header>

                <section className="mb-8">
                    <div className="flex flex-col items-center p-4 space-y-4 mb-4">
                        <div className="w-40 h-40 rounded-full overflow-hidden">
                            <img
                                src="/images/me.png"
                                alt="research-roadmap"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground mb-8">
                        Introduction
                    </div>


                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            Hello! I'm <strong>Rahmatullah R.</strong> also known as <em>Fnilvuwu</em>, a tech-savvy and results-driven Machine Learning Engineer with a passion for crafting innovative solutions at the intersection of data science and artificial intelligence. With a solid foundation in Python, TensorFlow, and cloud technologies, I specialize in developing and deploying machine learning models to solve real-world problems.
                        </p>
                        <p className="leading-relaxed">
                            My journey in technology is fueled by curiosity and a desire to make meaningful contributions, especially in areas like medical AI, predictive analytics, and IoT-powered systems. Whether it’s developing smart cultivation systems, creating AI-powered applications, or winning hackathons, I thrive on leveraging data to drive impactful decisions and change.
                        </p>
                        <p className="leading-relaxed">
                            I'm constantly learning and evolving, having earned distinctions from top-tier programs like Bangkit Academy and certifications such as TensorFlow Developer and RHCSA. When I'm not coding or experimenting with new AI tools, you’ll find me exploring innovative technologies and collaborating on groundbreaking projects.
                        </p>
                        <p className="leading-relaxed text-center">
                            Feel free to explore my portfolio to see how my skills, projects, and experiences align with my passion for technology and innovation. Let’s build something amazing together!
                        </p>
                    </div>
                </section>

            </article>
        </main >
    )
}
