import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Car Landing Page',
    category: 'Automotive Web Design',
    description: 'A sleek and modern landing page designed to showcase high-performance vehicles with stunning imagery.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/Car%20landing%20page/img/bg.jpg',
    liveLink: '/projects/Car%20landing%20page/index.htm',
  },
  {
    title: 'Food Ordering Website',
    category: 'Restaurant Web App',
    description: 'A comprehensive food ordering platform with category browsing, search functionality, and a beautiful UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/foodwebsite/img/search-bg.jpg',
    liveLink: '/projects/foodwebsite/index.html',
  },
  {
    title: 'ShopMe eCommerce',
    category: 'Online Store',
    description: 'A fully functional modern eCommerce application with product listings, cart functionality, and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    image: '/projects/shopMe_Ecommerce/assets/4547829-b6as_e6x.jpg',
    liveLink: '/projects/shopMe_Ecommerce/index.html',
  },
  {
    title: 'Nike Shoes Website',
    category: 'Nike E-commerce',
    description: 'A premium, responsive e-commerce experience for Nike footwear with modern design and smooth interactions.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    image: '/Screenshot 2026-01-30 113648.png',
    liveLink: 'https://shoes-web-nike-04.netlify.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
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
                <div className="absolute inset-0 bg-white/10 opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center gap-8">
                  <a
                    href={project.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 w-16 rounded-full bg-[#FF1A1A] text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-2xl hover:shadow-red-500/40 active:scale-95"
                  >
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

                <a
                  href={project.liveLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-full border border-black/5 flex items-center justify-center text-black/20 transition-all group-hover:bg-[#FF1A1A] group-hover:text-white group-hover:border-[#FF1A1A] group-hover:rotate-45 group-hover:shadow-lg group-hover:shadow-red-500/20"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
