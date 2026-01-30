import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nike Shoes E-commerce Platform',
    category: 'Shoes E-commerce Platform',
    description: 'A high-performance neural engine for real-time edge computing and automated decision making.',
    tags: ['Next.js', 'TensorFlow', 'PostgreSQL'],
    image: 'public/SHOES.png',
  },
  {
    title: 'Neural Analytics',
    category: 'Data Intelligence',
    description: 'Advanced data visualization dashboard powered by predictive machine learning algorithms.',
    tags: ['React', 'D3.js', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    title: 'Sentience Mobile',
    category: 'Intelligent App',
    description: 'Next-gen mobile experience with voice-first interface and adaptive user learning.',
    tags: ['React Native', 'Firebase', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-subheading"
            >
            
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              <br />
              <span className="gradient-text">PROJECTS</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-black/50 text-base leading-relaxed border-l border-black/5 pl-8"
          >
            A curated selection of intelligent systems bridging the gap between human intuition and machine precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] bg-[#F5F5F5] border border-black/5 transition-all duration-700 group-hover:border-[#FF1A1A]/20 group-hover:shadow-[0_40px_80px_-20px_rgba(255,26,26,0.15)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* AI Overlay on hover */}
                <div className="absolute inset-0 bg-white/20 opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center gap-8">
                  <a href="#" className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl active:scale-95">
                    <Github className="h-7 w-7" />
                  </a>
                  <a href="#" className="h-16 w-16 rounded-full bg-[#FF1A1A] text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-2xl hover:shadow-red-500/40 active:scale-95">
                    <ExternalLink className="h-7 w-7" />
                  </a>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-start px-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF1A1A] bg-red-500/5 px-3 py-1 rounded-full">{project.category}</span>
                    <div className="h-[1px] flex-1 bg-black/5" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-6 transition-colors group-hover:text-[#FF1A1A] leading-none">{project.title}</h3>
                  <p className="text-black/50 text-base max-w-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full border border-black/5 bg-white text-black/40 group-hover:border-[#FF1A1A]/10 group-hover:text-black/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-14 w-14 rounded-full border border-black/5 flex items-center justify-center text-black/20 transition-all group-hover:bg-[#FF1A1A] group-hover:text-white group-hover:border-[#FF1A1A] group-hover:rotate-45 group-hover:shadow-lg group-hover:shadow-red-500/20">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
