import About from '../screens/about';
import Contact from '../screens/contact';
import Experience from '../screens/experience';
import HomeArticles from '../screens/HomeArticles';
import HomeAwards from '../screens/HomeAwards';
import HomeCertifications from '../screens/HomeCertifications';
import HomeProjects from '../screens/HomeProjects';
import Home from '../screens/index';
import Services from '../screens/services';

export function OnePagePortfolio() {
    return (
        <div className="flex flex-col">
            <section id="home" className="min-h-screen">
                <Home />
            </section>

            <section id="about" className="min-h-screen">
                <About />
            </section>

            <section id="services" className="min-h-screen">
                <Services />
            </section>

            <section id="experience" className="min-h-screen">
                <Experience />
            </section>

            <section id="awards" className="min-h-screen">
                <HomeAwards />
            </section>

            <section id="certificates" className="min-h-screen">
                <HomeCertifications />
            </section>

            <section id="projects" className="min-h-screen">
                <HomeProjects />
            </section>

            <section id="articles" className="min-h-screen">
                <HomeArticles />
            </section>

            <section id="contact" className="min-h-screen">
                <Contact />
            </section>
        </div>
    );
}
