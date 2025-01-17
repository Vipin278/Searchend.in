import { motion } from 'framer-motion';
import TeamGrid from '../components/team/TeamGrid';

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <TeamGrid />
    </motion.div>
  );
}