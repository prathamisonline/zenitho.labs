import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-purple-100/60 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-pink-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach/50 border border-peach mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Freshly Baked Code</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[1] mb-8"
          >
            We craft <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 italic pr-4 pb-2">digital joy.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Zenitho Labs is the creative agency for brands that refuse to be boring. We mix strategy with sparkles to build websites that pop.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 focus:outline-none shadow-sm"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-gray-400" />
              Showreel
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;