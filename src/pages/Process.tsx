import { motion } from 'framer-motion';
import ProcessSteps from '../components/process/ProcessSteps';

export default function Process() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ProcessSteps />
    </motion.div>
  );
}