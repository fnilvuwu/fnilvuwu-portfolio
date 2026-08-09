import { lazy, Suspense } from 'react';
import Home from '../screens/index';

const About = lazy(() => import('../screens/about'));
const Contact = lazy(() => import('../screens/contact'));
const Experience = lazy(() => import('../screens/experience'));
const HomeArticles = lazy(() => import('../screens/HomeArticles'));
const HomeAwards = lazy(() => import('../screens/HomeAwards'));
const HomeCertifications = lazy(() => import('../screens/HomeCertifications'));
const HomeProjects = lazy(() => import('../screens/HomeProjects'));
const Services = lazy(() => import('../screens/services'));

export function OnePagePortfolio() {
    return (
        <div className="flex flex-col">
            <section id="home" className="min-h-screen">
                <Home />
            </section>

            <section id="about" className="min-h-screen">
                <Suspense fallback={null}>
                    <About />
                </Suspense>
            </section>

            <section id="services" className="min-h-screen">
                <Suspense fallback={null}>
                    <Services />
                </Suspense>
            </section>

            <section id="experience" className="min-h-screen">
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </section>

            <section id="awards" className="min-h-screen">
                <Suspense fallback={null}>
                    <HomeAwards />
                </Suspense>
            </section>

            <section id="certificates" className="min-h-screen">
                <Suspense fallback={null}>
                    <HomeCertifications />
                </Suspense>
            </section>

            <section id="projects" className="min-h-screen">
                <Suspense fallback={null}>
                    <HomeProjects />
                </Suspense>
            </section>

            <section id="articles" className="min-h-screen">
                <Suspense fallback={null}>
                    <HomeArticles />
                </Suspense>
            </section>

            <section id="contact" className="min-h-screen">
                <Suspense fallback={null}>
                    <Contact />
                </Suspense>
            </section>
        </div>
    );
}
