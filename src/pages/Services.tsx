import { motion } from 'framer-motion';
import ServicesList from '../components/services/ServicesList';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServicesHero from '../components/services/ServicesHero';
import Footer from '../components/home/Footer'; // Import the Footer component

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ServicesHero />
      <ServicesList />
      <ServiceFeatures />
      <Footer /> {/* Add the Footer component */}
    </motion.div>
  );
}
