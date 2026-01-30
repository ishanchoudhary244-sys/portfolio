import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-32 px-6 overflow-hidden bg-[#FAFAFA] border-t border-black/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-full bg-[#FF1A1A]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black"
            >
              BUILDING <br />
              <span className="gradient-text">THE FUTURE</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-12">
            <div className="flex gap-4">
              {[
                { icon: <Github className="h-5 w-5" />, href: '#' },
                { icon: <Twitter className="h-5 w-5" />, href: '#' },
                { icon: <Linkedin className="h-5 w-5" />, href: '#' },
                { icon: <Instagram className="h-5 w-5" />, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="h-14 w-14 rounded-full border border-black/5 flex items-center justify-center text-black/40 hover:text-white hover:bg-[#FF1A1A] hover:border-[#FF1A1A] transition-all bg-white shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 hover:text-black transition-colors"
            >
              Back to Top
              <div className="h-14 w-14 rounded-full border border-black/5 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:-translate-y-2 bg-white">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20">
            © {new Date().getFullYear()} ISHAN PORTFOLIO — ARCHITECTING INTELLIGENCE
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 hover:text-[#FF1A1A] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 hover:text-[#FF1A1A] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
