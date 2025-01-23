import { motion } from 'framer-motion';
import ContactPage from '../components/contact/ContactPage';
import Footer from '../components/home/Footer';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
    >
      <ContactPage />
      <Footer />
    </motion.div>
  );
}
