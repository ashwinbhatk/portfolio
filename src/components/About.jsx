import { motion } from 'framer-motion';

const skills = ['C', 'C++', 'Python'];

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a Computer Science student interested in Artificial Intelligence, Machine Learning, and Data Structures. 
              I enjoy solving problems and building efficient systems.
            </p>
            <p>
              My journey in tech has been driven by a curiosity to understand how things work under the hood, leading me to explore various aspects of software engineering and algorithmic problem-solving.
            </p>
            
            <div className="pt-4">
              <p className="mb-4 text-foreground font-medium">Core Technologies:</p>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.li 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-md font-mono border border-border/50 shadow-sm"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative group mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative aspect-square rounded-xl bg-secondary border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-secondary">
                 <span className="text-6xl font-bold text-muted/30">ABK</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
