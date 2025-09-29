import { faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faCloud, faCode, faDatabase, faEye, faImage, faMicrochip, faNetworkWired, faRobot, faSpider, faUserTie, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                {/* Services Section */}
                <section className="mb-16">
                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Services
                        </h1>
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            SERVICES THAT I OFFER
                        </div>
                    </header>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {[
                            { title: 'Software Development', icon: faCode },
                            { title: 'Artificial Intelligence', icon: faMicrochip },
                            { title: 'Video Editing', icon: faVideo },
                            { title: 'Photo Editing', icon: faImage },
                            { title: 'Presentation Design', icon: faChartLine },
                            { title: 'Private Mentorship', icon: faUserTie },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center transform transition-transform hover:scale-110"
                            >
                                <div className="h-16 w-16 flex items-center justify-center">
                                    <FontAwesomeIcon icon={service.icon} size="3x" />
                                </div>
                                <h3 className="text-lg font-medium">{service.title}</h3>
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
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            WHAT I BRING TO THE TABLE
                        </div>
                    </header>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                        {[
                            { title: 'Python Programming', icon: faPython },
                            { title: 'Machine Learning', icon: faRobot },
                            { title: 'Data Analysis', icon: faDatabase },
                            { title: 'Cloud Deployment', icon: faCloud },
                            { title: 'Computer Vision', icon: faEye },
                            { title: 'Linux Administration', icon: faLinux },
                            { title: 'API Development', icon: faNetworkWired },
                            { title: 'Data Scraping', icon: faSpider },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center transform transition-transform hover:scale-110"
                            >
                                <div className="h-16 w-16 flex items-center justify-center">
                                    <FontAwesomeIcon icon={skill.icon} size="3x" />
                                </div>
                                <h3 className="text-lg font-medium">{skill.title}</h3>
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
                        <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                            TECHNOLOGY THAT I USE
                        </div>
                    </header>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {[
                            '/images/my_tech_stacks/python-logo.svg',
                            '/images/my_tech_stacks/tensorflow-logo.png',
                            '/images/my_tech_stacks/keras-logo.svg',
                            '/images/my_tech_stacks/pytorch-logo.svg',
                            '/images/my_tech_stacks/opencv-logo.svg',
                            '/images/my_tech_stacks/flask-logo.png',
                            '/images/my_tech_stacks/jupyter-logo.svg',
                            '/images/my_tech_stacks/nodejs-logo.svg',
                            '/images/my_tech_stacks/react-logo.png',
                            '/images/my_tech_stacks/firebase-logo.png',
                            '/images/my_tech_stacks/mysql-logo.svg',
                            '/images/my_tech_stacks/streamlit-logo.png',
                            '/images/my_tech_stacks/postgresql-logo.svg',
                            '/images/my_tech_stacks/arduino-logo.svg',
                            '/images/my_tech_stacks/docker-logo.png',
                            '/images/my_tech_stacks/scikit_learn-logo.svg',
                            '/images/my_tech_stacks/flutter-logo.svg',
                            '/images/my_tech_stacks/dart-logo.png',
                            '/images/my_tech_stacks/android_studio-logo.svg',
                            '/images/my_tech_stacks/kotlin-logo.png',
                            '/images/my_tech_stacks/java-logo.svg',
                            '/images/my_tech_stacks/javascript-logo.png',
                            '/images/my_tech_stacks/typescript-logo.svg',
                            '/images/my_tech_stacks/bootstrap-logo.svg',
                            '/images/my_tech_stacks/huggingface-logo.svg',
                            '/images/my_tech_stacks/kaggle-logo.svg',
                            '/images/my_tech_stacks/roboflow-logo.svg',
                            '/images/my_tech_stacks/google_cloud-logo.svg',
                            '/images/my_tech_stacks/vba-logo.png',
                            '/images/my_tech_stacks/linux-logo.png',
                            '/images/my_tech_stacks/yolo-logo.png',
                            '/images/my_tech_stacks/apache-logo.svg',
                            '/images/my_tech_stacks/excel-logo.svg',
                            '/images/my_tech_stacks/tableau-logo.png',
                            '/images/my_tech_stacks/powerbi-logo.svg',
                            '/images/my_tech_stacks/matplotlib-logo.svg',
                            '/images/my_tech_stacks/seaborn-logo.svg',
                            '/images/my_tech_stacks/pandas-logo.svg',
                            '/images/my_tech_stacks/numpy-logo.svg',
                            '/images/my_tech_stacks/plotly-logo.png',
                            '/images/my_tech_stacks/wordpress-logo.png',
                            '/images/my_tech_stacks/bash-logo.svg',
                        ].map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt="Tech Stack Icon"
                                width={64}
                                height={64}
                                className="h-16 w-16 object-contain transform transition-transform hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 64px"
                            />
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}