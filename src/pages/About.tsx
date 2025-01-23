import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import CompanyProfile from '../components/about/CompanyProfile';
import Industries from '../components/about/Industries';
import Footer from '../components/home/Footer'; // Import the Footer component

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutHero />
      <CompanyProfile />
      <Industries />
      <Footer /> {/* Add the Footer component */}
    </motion.div>
  );
}
