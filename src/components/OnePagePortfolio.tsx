import About from '../screens/about';
import Articles from '../screens/articles';
import Certificates from '../screens/certificates';
import Contact from '../screens/contact';
import Experience from '../screens/experience';
import Home from '../screens/index';
import Projects from '../screens/projects';
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

            <section id="certificates" className="min-h-screen">
                <Certificates />
            </section>

            <section id="experience" className="min-h-screen">
                <Experience />
            </section>

            <section id="projects" className="min-h-screen">
                <Projects />
            </section>

            <section id="articles" className="min-h-screen">
                <Articles />
            </section>

            <section id="contact" className="min-h-screen">
                <Contact />
            </section>
        </div>
    );
}
