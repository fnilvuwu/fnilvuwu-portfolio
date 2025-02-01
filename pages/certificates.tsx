import { NavBar } from '../components/nav-bar';

const certifications = [
    { title: 'Generative Adversarial Networks (GANs)', imageUrl: '/images/my_certificates/Generative Adversarial Networks (GANs).jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/GVKDBBB2OAUC' },
    { title: 'Red Hat Certified System Administrator (RHCSA)', imageUrl: '/images/my_certificates/Red Hat Certified System Administrator (RHCSA).png', link: 'https://www.credly.com/badges/68647f61-5159-44ac-ae53-b9de983931c4' },
    { title: 'Google Data Analytics', imageUrl: '/images/my_certificates/Google Data Analytics.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/LBYH449PQ9MF' },
    { title: 'TensorFlow Developer Certificate', imageUrl: '/images/my_certificates/TensorFlow Developer Certificate.jpg', link: 'https://www.credential.net/a1fd9a03-8638-410d-b47b-b91ca5608a0a#acc.tqsjgKON' },
    { title: 'Bangkit Machine Learning Graduate with Distinction', imageUrl: '/images/my_certificates/Bangkit Machine Learning Graduate with Distinction.jpeg', link: 'https://github.com/GymGuide' },
    {
        title: 'PKM- PI Pendanaan 2023 - Efisiensi Irigasi Otomatis Menggunakan Teknologi Sprinkler Berbasis Internet of Things IoT Sebagai Solusi Pengairan Lahan Pertanian Desa Bonto Lojong Bantaeng', imageUrl: '/images/my_certificates/PKM- PI Pendanaan 2023.jpeg', link: 'https://persuratan.kemdikbud.go.id/showpdf/tampilkandocument/363067'
    },
    { title: 'TensorFlow: Data and Deployment', imageUrl: '/images/my_certificates/TensorFlow Data and Deployment.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/HTAMCE68FUX5' },
    { title: 'DeepLearning.AI TensorFlow Developer', imageUrl: '/images/my_certificates/DeepLearning.AI TensorFlow Developer.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/RGUQWJZADZQW' },
    { title: 'Machine Learning', imageUrl: '/images/my_certificates/Machine Learning.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/XW36JLBZRNQP' },
    { title: 'Mathematics for Machine Learning and Data Science', imageUrl: '/images/my_certificates/Mathematics for Machine Learning and Data Science.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/8XPVYV8KBTNE' },
    { title: 'IBM Cybersecurity Analyst', imageUrl: '/images/my_certificates/IBM Cybersecurity Analyst.jpeg', link: 'https://www.coursera.org/account/accomplishments/specialization/65MZW7VMU678' },
    { title: '100 Days of Code: The Complete Python Pro Bootcamp', imageUrl: '/images/my_certificates/100 Days of Code The Complete Python Pro Bootcamp.jpg', link: 'https://www.udemy.com/certificate/UC-00e84d19-a804-40ef-831a-f3aeef40fc33' },
    { title: 'Certified International Specialist in Data Visualization (CISDV)', imageUrl: '/images/my_certificates/Certified International Specialist in Data Visualization (CISDV).jpg', link: 'https://drive.google.com/file/d/1wEHj9ukcqROFhuOS1h6i7wOpM3lUntra/view' },
    { title: 'Certified International Specialist in Data Visualization (CISDV) Training Certification', imageUrl: '/images/my_certificates/Certified International Specialist in Data Visualization (CISDV) Training Certification.jpg', link: 'https://drive.google.com/file/d/1vbLPYuvCUgTTTb8G_Lw_NFN35pRkV7Nc/view' },
    { title: 'Java (Basic)', imageUrl: '/images/my_certificates/Java (Basic).png', link: 'https://www.hackerrank.com/certificates/b4a6d351dc71' },
    { title: 'JavaScript (Basic)', imageUrl: '/images/my_certificates/JavaScript (Basic).png', link: 'https://www.hackerrank.com/certificates/cd72c346478c' },
    { title: 'JavaScript (Intermediate)', imageUrl: '/images/my_certificates/JavaScript (Intermediate).png', link: 'https://www.hackerrank.com/certificates/905e95f78c58' },
    { title: 'Journey to Cloud: Envisioning Your Solution', imageUrl: '/images/my_certificates/Journey to Cloud Envisioning Your Solution.png', link: 'https://www.credly.com/badges/446e647b-f030-4727-90d8-91c4a24d9e01' },
    { title: 'Journey to Cloud: Orchestrating Your Solution', imageUrl: '/images/my_certificates/Journey to Cloud Orchestrating Your Solution.png', link: 'https://www.credly.com/badges/5d29a580-f765-4683-91e9-6e083168c132' },
    { title: 'Journey to Cloud: Transforming Your Culture', imageUrl: '/images/my_certificates/Journey to Cloud Transforming Your Culture.png', link: 'https://www.credly.com/badges/ea8e8b7e-7925-466a-b2fb-63fe4140f537' },
    { title: 'English for Business Communication', imageUrl: '/images/my_certificates/English for Business Communication.jpeg', link: 'https://media.licdn.com/dms/image/v2/D562DAQHqMvSpJue_7g/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1708011487549?e=1738058400&v=beta&t=PmA5rN6nUKW91Txei_2HmjxpN2j3v9yDx0I3-AYQj5Y' },
    { title: 'Belajar Dasar Structured Query Language (SQL)', imageUrl: '/images/my_certificates/Belajar Dasar Structured Query Language (SQL).jpg', link: 'https://www.dicoding.com/certificates/1OP81234LZQK' },
    { title: 'Memulai Pemrograman dengan Haskell', imageUrl: '/images/my_certificates/Memulai Pemrograman dengan Haskell.jpg', link: 'https://www.dicoding.com/certificates/07Z683YJYXQR' },
    { title: 'Belajar Fundamental Aplikasi Android', imageUrl: '/images/my_certificates/Belajar Fundamental Aplikasi Android.jpg', link: 'https://www.dicoding.com/certificates/72ZD8654VZYW' },
    { title: 'Belajar Dasar Git dengan GitHub', imageUrl: '/images/my_certificates/Belajar Dasar Git dengan GitHub.jpg', link: 'https://www.dicoding.com/certificates/EYX468Q9WPDL' },
    { title: 'Belajar Dasar Google Cloud', imageUrl: '/images/my_certificates/Belajar Dasar Google Cloud.jpg', link: 'https://www.dicoding.com/certificates/81P236O8JXOY' },
    { title: 'Belajar Dasar Manajemen Proyek', imageUrl: '/images/my_certificates/Belajar Dasar Manajemen Proyek.jpg', link: 'https://www.dicoding.com/certificates/72ZD8MWJJZYW' },
    { title: 'Belajar Dasar Visualisasi Data', imageUrl: '/images/my_certificates/Belajar Dasar Visualisasi Data.jpg', link: 'https://www.dicoding.com/certificates/JLX1DK625Z72' },
    { title: 'Belajar Membuat Aplikasi Android untuk Pemula', imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Android untuk Pemula.jpg', link: 'https://www.dicoding.com/certificates/2VX3JM1QVPYQ' },
    { title: 'Belajar Membuat Aplikasi Flutter untuk Pemula', imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Flutter untuk Pemula.jpg', link: 'https://www.dicoding.com/certificates/53XENGW19XRN' },
    { title: 'Belajar Prinsip Pemrograman SOLID', imageUrl: '/images/my_certificates/Belajar Prinsip Pemrograman SOLID.jpg', link: 'https://www.dicoding.com/certificates/81P236YQ8XOY' },
    { title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', imageUrl: '/images/my_certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg', link: 'https://www.dicoding.com/certificates/QLZ9QO9R7Z5D' },
    { title: 'Memulai Pemrograman Dengan Dart', imageUrl: '/images/my_certificates/Memulai Pemrograman dengan Dart.jpg', link: 'https://www.dicoding.com/certificates/JMZV908ENPN9' },
    { title: 'Memulai Pemrograman Dengan Kotlin', imageUrl: '/images/my_certificates/Memulai Pemrograman dengan Kotlin.jpg', link: 'https://www.dicoding.com/certificates/JLX1DRRM2Z72' },
    { title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)', imageUrl: '/images/my_certificates/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg', link: 'https://www.dicoding.com/certificates/QLZ9QN5O7Z5D' },
    { title: 'Belajar Dasar AI', imageUrl: '/images/my_certificates/Belajar Dasar AI.jpg', link: 'https://www.dicoding.com/certificates/MRZMN4V50PYQ' },
    { title: 'Belajar Dasar Pemrograman Web', imageUrl: '/images/my_certificates/Belajar Dasar Pemrograman Web.jpg', link: 'https://www.dicoding.com/certificates/98XWE486LXM3' },
    { title: 'Belajar Membuat Front-End Web untuk Pemula', imageUrl: '/images/my_certificates/Belajar Membuat Front-End Web untuk Pemula.jpg', link: 'https://www.dicoding.com/certificates/53XEDJ6YVPRN' },
    { title: 'Belajar Membuat Aplikasi Web dengan React', imageUrl: '/images/my_certificates/Belajar Membuat Aplikasi Web dengan React.jpg', link: 'https://www.dicoding.com/certificates/GRX5397JVZ0M' },
   
    { title: 'Belajar Dasar Pemrograman JavaScript', imageUrl: '/images/my_certificates/Belajar Dasar Pemrograman JavaScript.jpg', link: 'https://www.dicoding.com/certificates/81P2L3QDQZOY' },

    // Add more certifications as needed
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Certificates
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        CERTIFICATIONS I'VE EARNED
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8">
                        LIST OF CERTIFICATES
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex flex-col items-center space-y-4 text-center">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                    <img src={cert.imageUrl} alt={cert.title} className="h-48 w-auto object-contain" />
                                    <h3 className="text-lg font-medium mt-4">{cert.title}</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
