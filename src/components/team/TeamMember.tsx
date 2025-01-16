import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  index: number;
}

export default function TeamMember({ name, role, description, imageUrl, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-lime-600 mb-4">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}