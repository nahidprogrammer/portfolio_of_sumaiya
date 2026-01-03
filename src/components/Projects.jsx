import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio showcasing creative work with smooth animations.",
    tags: ["React", "Framer Motion", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather app with location-based forecasts and beautiful UI.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
];

function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-left mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Here are some of my recent projects that showcase my skills and passion for creating beautiful, functional web experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all"
                    aria-label="View live site"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all"
                    aria-label="View code"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
