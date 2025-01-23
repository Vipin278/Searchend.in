import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import StatCard from './StatCard';
import { Users, Building, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '1500+',
    label: 'Vacancies filled and placements completed since 2011.',
  },
  {
    icon: Briefcase,
    value: '500+',
    label: 'Clients across the network since established.',
  },
  {
    icon: Building,
    value: '15+',
    label: 'Years of Experience.',
  },
  {
    icon: Users,
    value: '5+',
    label: 'Close knit team members.',
  },
];

const reviews = [
  {
    name: 'John Doe',
    review: 'An outstanding experience! They helped us fill multiple key positions efficiently.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review: 'Professional and reliable. I highly recommend their staffing services.',
    rating: 4,
  },
  {
    name: 'Sam Wilson',
    review: 'A team of experts who understand our needs. Great partnership!',
    rating: 5,
  },
];

export default function StatsAndReviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-center">
      
      <h2 className="text-4xl text-blue-600 font-bold mb-12">Testimonials</h2>
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>

          {/* Right side - Reviews */}
          <div className="relative h-[300px] flex items-center justify-center">
            {/* Title for Testimonials */}
            

            {/* SVGs for decoration */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote text-primary-blue/20 absolute top-4 left-4 z-10">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote text-primary-blue/20 absolute bottom-4 right-4 z-10">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-lg">
                  <div className="flex flex-col items-center text-center">
                    <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                      {reviews[currentReviewIndex].name}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      "{reviews[currentReviewIndex].review}"
                    </p>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: reviews[currentReviewIndex].rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
