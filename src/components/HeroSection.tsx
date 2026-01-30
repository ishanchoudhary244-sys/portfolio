import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1A1A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1A1A]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">Available for Freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-heading mb-8 relative"
          >
            <span className="relative z-10 block">WEB</span>
            <span className="gradient-text block">DEVELOPER</span>

            {/* Subtle glow behind text */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-[#FF1A1A]/10 blur-[100px] -z-10 animate-pulse-glow" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-lg text-black/60 md:text-xl font-medium md:leading-relaxed mb-12"
          >
            Building modern,,  <span className="text-black font-bold"> AI-powered web experiences</span>  using React, JavaScript, Tailwind CSS, UI/UX
            <span className="text-[#FF1A1A] font-bold"> and AI-integrated web apps</span>
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#projects" className="btn-primary flex items-center gap-3">
                Watch Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-[-100px] left-0 hidden lg:block"
        >
          <a
            href="#about"
            className="flex items-center gap-4 text-black/20 hover:text-black transition-colors group"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] py-4">Explore</span>
            <div className="h-16 w-[1px] bg-black/5 relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#FF1A1A]"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
