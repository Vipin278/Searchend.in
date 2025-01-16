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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>

          {/* Right side - Reviews */}
          <div className="relative h-[300px] flex items-center justify-center">
              
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