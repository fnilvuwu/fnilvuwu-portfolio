import { NavBar } from '../components/nav-bar'

export default function AboutPage() {
    // put hobby, and contact here instead
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
                                alt="Rahmatullah R."
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground mb-8">
                        Introduction
                    </div>

                    <div className="space-y-8">
                        <p className="leading-relaxed">
                            Hi, I'm <strong>Rahmatullah R.</strong>, also known as <em>Fnilvuwu</em>, a versatile AI engineer, fullstack developer, video editor, and PowerPoint designer with over 5 years of experience. I specialize in a wide range of services, including cutting-edge machine learning solutions, professional video editing, motion graphics, and sleek PowerPoint presentations.
                        </p>
                        <p className="leading-relaxed">
                            Whether you're looking to optimize your business with AI, enhance your content with top-tier visuals, or build robust software solutions, I am here to help. My goal is to bring your ideas to life with creativity, precision, and dedication.
                        </p>
                        <p className="leading-relaxed">
                            I'm constantly evolving and learning, and I look forward to collaborating with you to create impactful and innovative projects. 
                        </p>
                        <p className="leading-relaxed text-center">
                            Feel free to explore my portfolio to see how my skills and services can contribute to your success. Let's work together!
                        </p>
                    </div>
                </section>
            </article>
        </main>
    )
}
