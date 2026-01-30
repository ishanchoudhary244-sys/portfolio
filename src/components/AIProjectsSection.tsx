import { motion } from 'framer-motion';
import { Bot, Brain, FileSearch, LineChart } from 'lucide-react';

const aiProjects = [
  {
    icon: Bot,
    title: 'AI Chatbot Assistant',
    description: 'Intelligent conversational AI powered by GPT-4, capable of handling customer support, answering queries, and learning from interactions.',
    features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: FileSearch,
    title: 'Smart Resume Analyzer',
    description: 'AI-driven resume parsing and matching system that evaluates candidates against job requirements with detailed scoring.',
    features: ['Skill Extraction', 'ATS Optimization', 'Match Scoring'],
    gradient: 'from-accent to-gradient-cyan',
  },
  {
    icon: LineChart,
    title: 'AI Analytics Dashboard',
    description: 'Predictive analytics platform that transforms raw data into actionable insights with AI-powered recommendations.',
    features: ['Predictive Modeling', 'Anomaly Detection', 'Auto-Insights'],
    gradient: 'from-gradient-cyan to-primary',
  },
];

const AIProjectsSection = () => {
  return (
    <section id="ai-projects" className="relative py-32 px-6">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">AI Projects</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Pushing boundaries with{' '}
            <span className="gradient-text">artificial intelligence</span>
          </h2>
        </motion.div>

        {/* AI Projects */}
        <div className="space-y-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card glow-border p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient}`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="h-5 w-5 text-accent" />
                    <span className="text-sm text-accent font-medium">AI-Powered</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature) => (
                      <span key={feature} className="skill-badge">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-ghost shrink-0"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;
