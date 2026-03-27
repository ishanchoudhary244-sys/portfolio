import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
              onClick={togglePlay}
              translate="no"
            >
              <video 
                ref={videoRef}
                src={video.videoUrl} 
                poster={video.thumbnail}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
                translate="no"
                controlsList="nodownload nofullscreen noremoteplayback"
              />
              
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] "
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white fill-white ml-2" size={40} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVideoSection;
