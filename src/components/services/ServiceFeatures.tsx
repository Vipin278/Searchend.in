import { motion } from 'framer-motion';
import { Shield, Clock, Users, Target } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous screening process to ensure only the best candidates are presented.'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Efficient recruitment process to meet your urgent staffing needs.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal account managers to handle all your recruitment requirements.'
  },
  {
    icon: Target,
    title: 'Industry Expertise',
    description: 'Specialized knowledge across various sectors and job roles.'
  }
];

export default function ServiceFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Experience the difference with our premium staffing services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}