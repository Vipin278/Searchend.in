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
  { icon: Phone, name: 'Telecom/ISP'},
  { icon: DollarSign, name: 'FMCG' },
  { icon: Users, name: 'Sales & Marketing' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: Wrench, name: 'Engineering' },
  { icon: DollarSign, name: 'Financial' },
  { icon: Car, name: 'Automobile' },
];

export default function IndustriesWeServe() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold inline-block bg-clip-text bg-gradient-to-r text-transparent mb-4">Industries We Serve</h2>
          <p className="text-blue-600">Specialized recruitment solutions across diverse sectors</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section for Industries */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <industry.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section for iframe */}
          <div className="flex items-center justify-center">
            <iframe src="https://lottie.host/embed/ba0cb2b1-d8e2-4c21-a0d4-92d0723d57db/4nwXEbdMe2.lottie" width="600px" height="400px"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
