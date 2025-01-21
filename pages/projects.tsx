import { NavBar } from "../components/nav-bar"

const projects = [
  {
    title: "Blog with Users",
    description: "A blog application with user authentication and CRUD functionality.",
    skills: "Data Modeling · Web Applications · SQL · Flask · MySQL · supabase · PostgreSQL",
    imageUrl: "images/my_projects/Blog with Users.png",
    link: "https://github.com/fnilvuwu/Starting-Files---blog-with-users-start",
    website: "https://starting-files-blog-with-users-start-fnilvuwus-projects.vercel.app/",
  },
  {
    title: "Drum Kit Website",
    description:
      "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
    skills: "HTML · CSS · JavaScript · DOM Manipulation · Event Handling · Web Design and UI/UX · Audio Integration",
    imageUrl: "images/my_projects/Drum Kit Website.png",
    link: "https://github.com/fnilvuwu/drum-kit-website",
    website: "https://fnilvuwu.github.io/drum-kit-website/",
  },
  {
    title: "Bootstrap Tincat Website",
    description:
      "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
    skills: "Cascading Style Sheets (CSS) · HTML · Bootstrap",
    imageUrl: "images/my_projects/Bootstrap Tincat Website.png",
    link: "https://github.com/fnilvuwu/tincat-bootstrap",
    website: "https://fnilvuwu.github.io/tincat-bootstrap/",
  },
  {
    title: "Emotion Detection Website (TFLite on the web)",
    description:
      "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
    skills: "Cascading Style Sheets (CSS) · HTML · Bootstrap",
    imageUrl: "images/my_projects/Emotion Detection Website (TFLite on the web).png",
    link: "https://github.com/fnilvuwu/Facial-Emotion-Detection-System",
    website: "https://fnilvuwu.github.io/Facial-Emotion-Detection-System/",
  },
  {
    title: "Facial Age Estimation Website",
    description:
      "This project is a Drum Kit website built using HTML, CSS, and JavaScript. It allows users to interact with a virtual drum kit by pressing specific keys or clicking on drum elements. Each drum sound is triggered using JavaScript events, and the user interface is styled with CSS. The website is interactive and provides a fun way to play different percussion sounds.",
    skills: "Cascading Style Sheets (CSS) · HTML · Bootstrap",
    imageUrl: "images/my_projects/Facial Age Estimation Website.png",
    link: "https://github.com/fnilvuwu/facial-age-estimation-website",
    website: "https://fnilvuwu.github.io/facial-age-estimation-website/",
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow fade-in">
        <header className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">My Projects</h1>
          <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
            PROJECTS I'VE WORKED ON
          </div>
        </header>

        <section className="mb-16">
          <h2 className="uppercase text-sm font-small tracking-wider text-muted-foreground mb-8 sm:text-left">
            LIST OF PROJECTS
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8"
              >
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-64 h-32 mx-auto sm:mx-0"
                >
                  <div className="w-full h-full relative">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </a>
                <div className="flex flex-col space-y-2 flex-grow text-center sm:text-left">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-blue-600 hover:underline"
                  >
                    {project.title}
                  </a>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                  <p className="text-sm text-muted-foreground">{project.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

