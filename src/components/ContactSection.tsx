import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Twitter, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('r_LffnwxU3nhUIyNb');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_0oc9agk',
        'template_5hb93mt',
        {
          to_email: 'ishanchoudhary244@gmail.com',
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">Get In Touch</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's create something{' '}
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card glow-border p-8 lg:p-12"
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p className="text-green-500">Message sent successfully! I'll get back to you soon.</p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <p className="text-red-500">{errorMessage}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative z-10">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ pointerEvents: 'auto' }}
                  className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-md px-4 py-3 text-black placeholder:text-black/30 focus:border-[#FF1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF1A1A]/10 transition-all cursor-text shadow-sm"
                  placeholder="Your name"
                  disabled={isLoading}
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-bold text-black/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ pointerEvents: 'auto' }}
                  className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-md px-4 py-3 text-black placeholder:text-black/30 focus:border-[#FF1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF1A1A]/10 transition-all cursor-text shadow-sm"
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="relative z-10">
              <label htmlFor="message" className="block text-sm font-bold text-black/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ pointerEvents: 'auto' }}
                className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-md px-4 py-3 text-black placeholder:text-black/30 focus:border-[#FF1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF1A1A]/10 transition-all resize-none cursor-text shadow-sm"
                placeholder="Tell me about your project..."
                disabled={isLoading}
              />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02, y: -2 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="btn-gradient w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed py-5"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span className="text-sm font-bold tracking-widest uppercase">Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-black/5">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-8">Or connect with me on</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4, backgroundColor: 'rgba(255, 26, 26, 1)', borderColor: 'rgba(255, 26, 26, 1)', color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 border border-black/5 text-black/50 transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
