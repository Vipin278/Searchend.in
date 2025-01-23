import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Users, Building2, LineChart, Briefcase } from 'lucide-react';


const services = [
  {
    icon: Users,
    title: 'Placement Services',
    description: "Effective Placement Services to aspiring candidates looking for the right job across different sectors."
  },
  {
    icon: Building2,
    title: 'Staffing',
    description: "Efficient staffing services for both permanent and temporary roles."
  },
  {
    icon: LineChart,
    title: 'Payroll Outsourcing',
    description: "Simplifying payroll administration by offering expert outsourcing services."
  },
  {
    icon: Briefcase,
    title: 'HR Outsourcing',
    description: "Providing proficient HR Outsourcing solutions across different verticals."
  }
];

export default function Services() {
  return (
    
    <section className="py-20 bg-gray-100" id= "services-section">
      <div className="container mx-auto px-6">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline-block bg-clip-text bg-gradient-to-r text-transparent mb-4">Our Services</h2>
          <p className="text-xl text-blue-600">Comprehensive staffing solutions tailored to your needs</p>
        </motion.div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}