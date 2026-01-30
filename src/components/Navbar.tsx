import { motion } from 'framer-motion';
import { Code2, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`relative flex items-center justify-between px-8 py-3 rounded-full border transition-all duration-500 ${scrolled
            ? 'bg-white/80 backdrop-blur-xl border-black/5 shadow-sm'
            : 'bg-transparent border-transparent'
          }`}>
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF1A1A] shadow-lg shadow-red-500/20">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-black tracking-tighter text-black">ISHAN</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-[#FF1A1A] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#FF1A1A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-black/5 border border-black/5 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white group"
            >
              Let's Talk
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card mt-4 overflow-hidden rounded-3xl md:hidden border-black/5 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-4 text-center text-xs font-bold uppercase tracking-widest text-black/70 hover:bg-black/5 active:bg-black/10"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-4 w-full text-[11px] font-bold uppercase"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
