import { motion } from 'framer-motion';
import ClientsGrid from '../components/clients/ClientsGrid';

export default function Clients() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ClientsGrid />
    </motion.div>
  );
}