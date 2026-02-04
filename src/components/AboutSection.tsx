import { motion } from 'framer-motion';
import { Brain, Rocket, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Building intelligent systems that learn, adapt, and enhance user experiences.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized code and modern architectures for lightning-fast applications.',
  },
  {
    icon: Rocket,
    title: 'Future-Ready',
    description: 'Staying ahead with cutting-edge technologies and innovative solutions.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">About Me</span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl lg:text-4xl text-black">
            Passionate about creating the{' '}
            <span className="gradient-text">future of the web</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a BCA student and an aspiring Web Developer with a strong focus on building modern, AI-powered products. I am deeply passionate about crafting clean, intuitive UI/UX and integrating AI tools to solve real-world problems.

            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With a curious mindset and a relentless drive for learning, I'm constantly exploring new technologies to build future-ready web experiences. I am currently looking for internship opportunities or junior developer roles where I can contribute and grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-6 py-4">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="glass-card px-6 py-4">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Learning Mindset</div>
              </div>
              <div className="glass-card px-6 py-4">
                <div className="text-3xl font-bold gradient-text">12+</div>
                <div className="text-sm text-muted-foreground">AI Toolsets</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card glow-border p-6 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF1A1A]/10 border border-[#FF1A1A]/10">
                  <feature.icon className="h-6 w-6 text-[#FF1A1A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
