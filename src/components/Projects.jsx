import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Rubik's Cube Solver",
    description: "Built with a friend, focused on solving a Rubik's cube efficiently using algorithmic approaches. Features an interactive 3D representation and a complete solving algorithm.",
    tech: ["Python", "Algorithms"],
    github: "https://github.com/akankshapai/rubiks",
    demo: "",
  },
  {
    title: "Upcoming Project",
    description: "Currently working on a new interesting project. More details will be revealed soon as development progresses.",
    tech: ["React", "AI/ML"],
    github: "#",
    demo: "",
  },
  {
    title: "Upcoming Project",
    description: "An exploratory side project focused on deepening my understanding of advanced data structures.",
    tech: ["C++", "Data Structures"],
    github: "#",
    demo: "",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span>
          Projects
          <span className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <FaGithub size={20} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border/50">
                {project.tech.map(tech => (
                  <li key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
