import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon className="w-8 h-8 text-gray-800" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-blue-600">{description}</p>
    </motion.div>
  );
}