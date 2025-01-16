import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '5000+',
    label: 'Candidates Placed'
  },
  {
    icon: Building,
    value: '200+',
    label: 'Client Companies'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: Briefcase,
    value: '20+',
    label: 'Industries Served'
  }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                className="text-blue-100"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}