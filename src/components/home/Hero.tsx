// src/components/home/Hero.tsx

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Connecting Talent to Opportunity
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Partner in Building the Perfect Team
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
            onClick={() => {
              const whoWeAreSection = document.getElementById('who-we-are');
              if (whoWeAreSection) {
                whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <a href="#who-we-are" className="text-blue-900"> Get Started</a>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}