import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border/50 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">04. What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h3>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:example@example.com" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 mb-16"
        >
          <FaEnvelope size={20} />
          Say Hello
        </a>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/ashwinbhatk" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ashwinbhatk/" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
