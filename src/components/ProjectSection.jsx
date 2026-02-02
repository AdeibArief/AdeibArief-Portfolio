import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "MERN Ecommerce website SALESHORSE",
    description:
      "A full-stack ecommerce platform built using the MERN stack. Features product catalog, shopping cart, user authentication, order management, and payment integration for a complete online shopping experience.",
    image: "/projects/SALESHORSE.png",
    tags: ["MongoDB", "Express", "React", "Node.js",],
    demoUrl: "",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "MERN Chat App",
    description:
      "A real-time chat application built using the MERN stack with user authentication and private messaging. Implements Socket.IO for live communication and focuses on a clean, responsive UI.",
    image: "/projects/MERN_CHAT.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    demoUrl: "https://mern-stack-chat-app-using-socket-io.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "PERN Stack Product Store",
    description:
      "A full-stack product management application built using the PERN stack. Features CRUD operations, structured REST APIs, and a PostgreSQL-backed database for managing products efficiently.",
    image: "/projects/PRODIFY.png",
    tags: ["PostgreSQL", "Express", "React", "Node.js"],
    demoUrl: "",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Medical Nutrition Advisor",
    description:
      "An AI-powered application that provides personalized food and nutrition recommendations based on medical data. Uses Python-based machine learning and data analysis techniques to generate health-aware insights.",
    image: "/projects/AINUTRITION.png",
    tags: ["Python", "Machine Learning", "Data Science", "NLP"],
    demoUrl:
      "https://ai-medical-nutrition-advisor-g2ruvjonaitk8vozwt34ap.streamlit.app/",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-[-10] h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-md font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a target="_blank"
                    href={project.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    target="_blank"
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2"  href="https://github.com/AdeibArief" target="_blank">Check my Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
