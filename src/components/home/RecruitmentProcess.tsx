import { motion } from 'framer-motion';
import { Search, Users, FileCheck, Phone, UserCheck, UserPlus } from 'lucide-react';



const steps = [
  { icon: Search, title: 'Understand Vacancies', description: 'Analyze requirements' },
  { icon: Users, title: 'Strategy & Planning', description: 'Develop approach' },
  { icon: FileCheck, title: 'Resume Screening', description: 'Evaluate candidates' },
  { icon: Phone, title: 'Close Coordination', description: 'Maintain communication' },
  { icon: UserCheck, title: 'Interview & Verify', description: 'Conduct assessments' },
  { icon: UserPlus, title: 'Onboard & Follow-up', description: 'Ensure transitions' }
];

export default function RecruitmentProcess() {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
          <p className="text-xl text-gray-600">A systematic approach to finding the perfect match</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 relative z-10"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>

                {/* Animated Pulse Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-[30px] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-50"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}