import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export default function StatCard({ icon: Icon, value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.2 }}
        className="text-4xl font-bold text-black mb-2"
      >
        {value}
      </motion.h3>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4 }}
        className="text-black-100"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}