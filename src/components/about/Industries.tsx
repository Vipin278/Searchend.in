import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Briefcase, GraduationCap, Globe, Factory, Phone, DollarSign, Users, Stethoscope, Wrench, Car } from 'lucide-react';

const industries = [
  { icon: Users, name: 'Human Resource' },
  { icon: Globe, name: 'Tour & Travel' },
  { icon: Building2, name: 'Construction' },
  { icon: ShoppingBag, name: 'Retail' },
  { icon: GraduationCap, name: 'Education/Training' },
  { icon: Briefcase, name: 'Export/Import' },
  { icon: Factory, name: 'Manufacturing/Operations' },
  { icon: Phone, name: 'Telecom/ISP' },
  { icon: DollarSign, name: 'FMCG' },
  { icon: Users, name: 'Sales & Marketing' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: Wrench, name: 'Engineering' },
  { icon: DollarSign, name: 'Financial' },
  { icon: Car, name: 'Automobile' },
  { icon: Globe, name: 'Event Management' },
  { icon: Stethoscope, name: 'Pharmaceutical' },
];

export default function Industries() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-gray-600">Specialized recruitment solutions across diverse sectors</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <industry.icon className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-700">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}