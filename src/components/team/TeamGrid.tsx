import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Altaf Malek',
    role: 'H.R. Consultant',
    description: 'Mr. Altaf I. Malek, 38 years, is the Recruitment Head of the Company. He is a Commerce Graduate with a Master\'s degree in Human Resource Management and has been associated with the Company for 10+ years.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
  // Add more team members here
];

export default function TeamGrid() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          OUR TEAM
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}