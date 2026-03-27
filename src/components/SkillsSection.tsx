import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  Video, 
  Wand2, 
  Zap,
  Terminal,
  Database,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Development Stack',
    icon: <Code className="h-6 w-6" />,
    skills: ['React 18', 'bootstrap', 'Vite', 'Next.js', 'Tailwind CSS', 'wordpress' , 'javascript']
  },
  {
    title: 'AI & Video Generation',
    icon: <Wand2 className="h-6 w-6" />,
    skills: ['Veo 3', 'Luma Dream Machine', 'Kling AI', 'Midjourney']
  },
  {
    title: 'Tools & Workflows',
    icon: <Terminal className="h-6 w-6" />,
    skills: ['Git / GitHub', 'Bun / NPM', 'EmailJS', 'Framer Motion', 'Vercel']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase">
              TECH <span className="gradient-text italic">STACK</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="glass-card p-10 h-full border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 bg-white/50 backdrop-blur-sm">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white group-hover:bg-primary transition-colors duration-500 shadow-xl group-hover:shadow-primary/20">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-8 text-black uppercase tracking-tight">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 border border-transparent group-hover:border-primary/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-primary to-transparent" />
                  <Zap className="h-4 w-4 text-primary animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
