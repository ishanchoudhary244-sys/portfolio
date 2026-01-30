import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Code2 className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-lg font-bold gradient-text">PORTFOLIO</span>
          </motion.a>

          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary" /> using React
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
