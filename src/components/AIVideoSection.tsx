import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: "Final AI Video",
    description: "The custom cinematic AI video generated using the master prompt.",
    thumbnail: "/assets/cyberpunk/city_neon_rain.png",
    videoUrl: "/assets/ai-video.mp4"
  }
];

const AIVideoSection = () => {
  return (
    <section id="ai-videos" className="py-24 bg-secondary/30 relative overflow-hidden text-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary">
            Final AI Video
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-medium tracking-wide">
            Witness the power of AI generation. This cinematic work was created using the master prompt below.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] border border-primary/20 group cursor-pointer"
            >
              <video 
                src={video.videoUrl} 
                poster={video.thumbnail}
                controls
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2 text-primary">{video.title}</h3>
                <p className="text-gray-300 text-lg">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVideoSection;
