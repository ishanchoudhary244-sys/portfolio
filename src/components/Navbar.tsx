import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MoreHorizontal, Linkedin, Github, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com' },
  { name: 'GitHub', icon: <Github className="h-4 w-4" />, href: 'https://github.com' },
  { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(event.target as Node)) {
        setShowSocials(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
            {/* <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF1A1A] shadow-lg shadow-red-500/20">
              <Code2 className="h-4 w-4 text-white" />
            </div> */}
            <span className="text-lg font-black tracking-tighter text-black">ISHAN</span>
          </motion.a>

          {/* Desktop Navigation & Socials */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-10">
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

            <div className="flex items-center gap-4 relative" ref={socialRef}>
              <button
                onClick={() => setShowSocials(!showSocials)}
                className={`flex items-center justify-center h-10 w-10 rounded-full border transition-all duration-300 ${showSocials ? 'bg-black border-black text-white' : 'bg-black/5 border-black/5 text-black hover:bg-black hover:text-white'
                  }`}
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>

              <AnimatePresence>
                {showSocials && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 p-2 bg-white rounded-2xl border border-black/5 shadow-xl min-w-[160px]"
                  >
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-black/60 hover:text-black hover:bg-black/5 transition-all text-xs font-bold uppercase tracking-widest"
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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

                <div className="h-[1px] w-full bg-black/5 my-2" />

                <div className="grid grid-cols-3 gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-12 rounded-xl bg-black/5 text-black hover:bg-black hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
