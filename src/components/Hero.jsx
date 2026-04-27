import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center pt-20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 dark:opacity-30 pointer-events-none" />
      
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium tracking-wide text-sm md:text-base mb-4">
            Hi, my name is
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground tracking-tight mb-4">
            Ashwin Bhat K.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-muted-foreground tracking-tight mb-6">
            2nd Year BTech CSE Student.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Studying at NMAM Institute of Technology. Exploring AI/ML and mastering Data Structures. 
            I build efficient systems and love solving complex problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            View Projects
            <ArrowDown size={18} />
          </a>
          <a 
            href="https://github.com/ashwinbhatk" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 border border-border transition-colors"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
