import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const positions = [
  { title: 'CEO', description: 'Chief Executive Officer' },
  { title: 'VICE PRESIDENT', description: 'Strategic Leadership' },
  { title: 'GENERAL MANAGER', description: 'Operations Management' },
  { title: 'HR HEAD', description: 'Human Resources Leadership' },
  { title: 'CFO', description: 'Financial Leadership' }
];

export default function SuccessStories() {
  return (
    <section className="py-20 text-white ">
      <div className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl inline-block bg-clip-text bg-gradient-to-r text-transparent font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-blue-600">Top Positions Achieved Through Our Company</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 text-black rounded-lg p-8 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-2">
                  <Star className="w-6 h-6 text-gray-900" />
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-4"
                >
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <p className="text-black text-sm">{position.description}</p>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
