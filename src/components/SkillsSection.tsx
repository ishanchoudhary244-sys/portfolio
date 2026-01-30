import { motion } from 'framer-motion';
import { Layout, Code, Zap, Smartphone, Globe, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'AI Development',
    description: 'Expertly crafting high-performance, scalable web applications with advanced AI integration and modern tech stacks.',
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: 'Futuristic Design',
    description: 'Creating premium, AI-style digital experiences with focus on motion design and user-centric interfaces.',
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: 'Hyper Performance',
    description: 'Optimizing core web vitals and AI inference speeds for maximum efficiency and seamless user experience.',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Neural Networks',
    description: 'Building custom AI models and neural patterns that enhance digital interactions and automated workflows.',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: 'Mobile Intelligence',
    description: 'Crafting responsive interfaces that leverage device-side machine learning for real-time optimizations.',
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: 'Digital Security',
    description: 'Implementing high-end encryption and AI-driven security protocols to ensure data integrity.',
    icon: <Shield className="h-6 w-6" />,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden bg-secondary/50">
      <div className="absolute top-[10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#FF1A1A]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            INTELLIGENT <br />
            <span className="gradient-text">SOLUTIONS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group p-12 hover:border-[#FF1A1A]/20"
            >
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-black/5 text-[#FF1A1A] transition-all group-hover:bg-[#FF1A1A] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-red-500/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-tight leading-none">{service.title}</h3>
              <p className="text-black/50 text-base leading-relaxed mb-10">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="h-[1px] w-12 bg-black/10 group-hover:w-full group-hover:bg-[#FF1A1A]/20 transition-all duration-500" />
                <ArrowUpRight className="h-5 w-5 text-black/20 group-hover:text-[#FF1A1A] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
