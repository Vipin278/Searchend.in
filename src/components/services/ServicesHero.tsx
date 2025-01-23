import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 opacity-70">
      <div
        className="absolute inset-0 bg-gray-100 bg-cover bg-center"
        style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20220718/pngtree-gradient-grey-background-abstract-image_1418857.jpg')" }}
      />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold inline-block bg-clip-text bg-gradient-to-r text-transparent mb-6 z-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our specialized recruitment solutions tailored to meet your business needs.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
