import { motion } from 'framer-motion';
import ServicesList from '../components/services/ServicesList';
import ServiceFeatures from '../components/services/ServiceFeatures';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ServicesList />
      <ServiceFeatures />
    </motion.div>
  );
}