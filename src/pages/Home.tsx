import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import Services from '../components/home/Services';
import RecruitmentProcess from '../components/home/RecruitmentProcess';
import SuccessStories from '../components/home/SuccessStories';
import Industries from '../components/home/IndustriesWeServe';
import ClientLogos from '../components/home/ClientLogos';
import Stats from '../components/home/Stats';
import DirectorsDesk from '../components/home/Directors';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <WhoWeAre />
      <Services />
      <RecruitmentProcess />
      <SuccessStories />
      <Industries />
      <ClientLogos />
      <Stats />
      <DirectorsDesk />
      <Footer />
    </motion.div>
  );
}