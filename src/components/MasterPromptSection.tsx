import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Sparkles, Check, FileText, ImageIcon, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from 'sonner';

const MasterPromptSection = () => {
  const [prompts, setPrompts] = useState({
    script: "• I want to create a cute Disney-Pixar style cinematic love story about a cheerful young girl and a friendly young boy who meet in a bright colorful coffee shop and slowly realize it is actually a date. Create an engaging story divided into exactly 3 scenes. For each scene, describe the visuals including the café environment, lighting, colors, background activity, character appearance, emotions, and cinematic camera angles suitable for image or video generation. Make the atmosphere warm, cozy, and magical with vibrant Pixar-style visuals. In each scene include one short natural Hindi dialogue spoken by the characters. The story should progress from their first awkward meeting, to a cute bonding moment while talking or laughing, and finally a sweet realization that it has become a date with a heartwarming ending.",
    image: "Har scene ke liye detailed image generation prompts likho 3D Disney pixar style me, jisme character description, environment/background, lighting, camera angle, emotions aur cinematic details, character ke dialogues included ho, aur visuals colorful, expressive aur realistic storytelling ke liye suitable ho.",
    video: "Use the attached image. I need JSON prompt to convert this image into a video clip using Veo 3 where I want you to describe the main character’s actions, dialogues, and everything that is required to make this scene an ultimate video clip with perfect dialogues and lip sync"
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: keyof typeof prompts) => {
    navigator.clipboard.writeText(prompts[key]);
    setCopiedKey(key);
    toast.success(`${key.charAt(0).toUpperCase() + key.slice(1)} prompt copied!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="master-prompt" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-background/90 to-secondary/30 border border-primary/20 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-xl shadow-2xl relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 blur-[100px] rounded-full" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-3xl bg-primary/20 animate-pulse text-primary shadow-lg shadow-primary/10">
                <Sparkles size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary">
                The Master Prompts
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md md:text-right italic">
              "The blueprint for cinematic perfection. Optimized for next-gen AI models."
            </p>
          </div>

          <Tabs defaultValue="script" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 p-2 bg-background/50 border border-primary/10 rounded-2xl h-auto">
              <TabsTrigger value="script" className="rounded-xl py-4 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2">
                <FileText size={18} />
                <span className="hidden sm:inline">1. Video Script</span>
              </TabsTrigger>
              <TabsTrigger value="image" className="rounded-xl py-4 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2">
                <ImageIcon size={18} />
                <span className="hidden sm:inline">2. Image Gen</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="rounded-xl py-4 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2">
                <Video size={18} />
                <span className="hidden sm:inline">3. Video Gen</span>
              </TabsTrigger>
            </TabsList>

            {(Object.keys(prompts) as Array<keyof typeof prompts>).map((key) => (
              <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-black to-primary/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Textarea
                      value={prompts[key]}
                      onChange={(e) => setPrompts({ ...prompts, [key]: e.target.value })}
                      className="min-h-[280px] text-lg p-8 bg-background/80 border-primary/20 focus:border-primary/50 transition-all duration-500 rounded-3xl resize-none font-mono leading-relaxed shadow-inner"
                    />
                    <div className="absolute top-6 right-6 flex gap-3">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => handleCopy(key)}
                        className="bg-background/90 backdrop-blur-md border-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300 rounded-2xl w-12 h-12"
                      >
                        {copiedKey === key ? <Check className="text-green-500" size={22} /> : <Copy size={22} />}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                    onClick={() => toast.success(`${key.charAt(0).toUpperCase() + key.slice(1)} prompt saved!`)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-10 py-7 rounded-[1.5rem] transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 text-lg"
                  >
                    Save & Lock Prompt
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleCopy(key)}
                    className="font-bold px-10 py-7 rounded-[1.5rem] border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 text-lg group"
                  >
                    <Copy className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                    Copy to Workspace
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterPromptSection;
