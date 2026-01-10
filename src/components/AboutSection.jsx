import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "Full_stack_developer_resume-1.pdf"; // Replace with your CV file path
    link.download = "Adeib_Arief_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer 
              <br className="mb-2" />
              (MERN Stack)
            </h3>
            <p className="text-muted-foreground">
              I build modern, responsive web applications using the MERN stack,
              focusing on clean UI, scalable backend logic, and real-world
              functionality.
            </p>
            <p className="text-muted-foreground">
              I enjoy turning ideas into working products, continuously
              improving my skills, and learning new technologies to stay
              relevant in the fast-evolving web ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <button
                onClick={downloadCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    MERN Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building full-stack web applications using MongoDB, Express,
                    React, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive, user-friendly interfaces with React and
                    modern UI practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing REST APIs, authentication systems, and
                    database-driven applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;