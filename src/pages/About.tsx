import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import CompanyProfile from '../components/about/CompanyProfile';
import Industries from '../components/about/Industries';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <AboutHero />
      <CompanyProfile />
      <Industries />
    </motion.div>
  );
}