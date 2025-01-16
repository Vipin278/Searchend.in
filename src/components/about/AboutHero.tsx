import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Who We Are
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            End of Searching for your Staffing Solutions! We are India's leading Staffing Solution Company based in Ahmedabad, Gujarat.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}