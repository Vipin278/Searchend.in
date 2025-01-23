import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './scripts/script.js'; // Import the script for background functionality

console.log("Hero component rendered"); // Debugging line to check rendering
export default function Hero() {
  console.log("Rendering Hero component..."); // Additional log for debugging
  return (
    <div 
      className="relative min-h-screen flex overflow-hidden hero" 
    >
      

      <div className="w-1/2 flex items-center justify-center relative z-5">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Connecting Talent to 
            <h2 className="inline-block bg-clip-text bg-gradient-to-r text-transparent">Opportunity</h2>
      </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
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
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-700 transition-all"
              onClick={() => {
                const whoWeAreSection = document.getElementById('who-we-are');
                if (whoWeAreSection) {
                  whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <a href="#who-we-are" className="text-white-900"> Get Started</a>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center mb-12">
        <iframe src="https://lottie.host/embed/e4647382-59a2-418f-8c7a-6bb4dd5b2608/yca4CT68Jz.lottie" height="500px" width="500px"></iframe>
      </div>
    </div>
  );
}
