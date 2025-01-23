import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';

const steps = [
  { number: 1, title: 'Understand Vacancies', description: 'Analyze job requirements and company culture' },
  { number: 2, title: 'Strategy & Planning', description: 'Develop targeted recruitment approach' },
  { number: 3, title: 'Resume Screening', description: 'Evaluate candidates\' qualifications' },
  { number: 4, title: 'Close Coordination', description: 'Maintain communication with stakeholders' },
  { number: 5, title: 'Interview & Verify', description: 'Conduct thorough assessments' },
  { number: 6, title: 'Onboard & Follow-up', description: 'Ensure smooth transitions' }
];

export default function ProcessSteps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <div className="container mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Our Recruitment Process
        </motion.h2>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}