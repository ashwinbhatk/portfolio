import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, Network, Sparkles, Languages } from 'lucide-react';

const Interests = () => {
  return (
    <section id="interests" className="py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span>
          Interests & Learning
          <span className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Areas of Interest */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              Areas of Interest
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain size={64} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Brain size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Artificial Intelligence & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">Exploring models, algorithms, and applications of AI to solve real-world problems.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Network size={64} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Network size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Data Structures & Algorithms</h4>
                  <p className="text-sm text-muted-foreground">Mastering core computer science concepts to build highly efficient and optimized systems.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Currently Learning & Personal Touch */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Code size={20} className="text-primary" />
                Currently Learning
              </h3>
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-lg border border-border bg-card/50 flex items-center gap-4 group hover:bg-card transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🇯🇵</span>
                  <div>
                    <h4 className="font-medium">Japanese</h4>
                    <div className="w-full bg-secondary h-1.5 mt-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-1/3 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50 flex items-center gap-4 group hover:bg-card transition-colors">
                  <span className="text-2xl text-blue-400 group-hover:rotate-180 transition-transform duration-700">⚛️</span>
                  <div className="w-full">
                    <h4 className="font-medium">React</h4>
                    <div className="w-full bg-secondary h-1.5 mt-2 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-2/3 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Touch */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="p-5 rounded-xl border border-border bg-gradient-to-br from-card to-secondary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-0"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-2 bg-background rounded-lg shadow-sm border border-border/50 text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Avid Novel Reader</h4>
                  <p className="text-sm text-muted-foreground">
                    I spend my free time exploring different worlds through Chinese, Korean, and Japanese novels.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Interests;
