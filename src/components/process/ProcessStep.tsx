import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

export default function ProcessStep({ number, title, description, delay }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center relative"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 relative z-10"
      >
        {number}
      </motion.div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      {/* Animated Pulse Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30px] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-50"
      />
    </motion.div>
  );
}