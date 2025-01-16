import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Users, Building2, LineChart, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Placement Services',
    description: "We provide effective Placement Services to aspiring candidates looking for the right job across different sectors. Our experienced team screens candidates based on skills, experience, and qualifications."
  },
  {
    icon: Building2,
    title: 'Staffing',
    description: "We provide efficient staffing services for both permanent and temporary roles. From sourcing and screening candidates to interview coordination, we tailor our solutions to meet your long-term or project-based hiring needs."
  },
  {
    icon: LineChart,
    title: 'Payroll Outsourcing',
    description: "We simplify payroll administration by offering expert outsourcing services. By delegating payroll processes to our skilled team, companies can reduce costs, ensure accuracy, and focus on core business activities with ease and confidence."
  },
  {
    icon: Briefcase,
    title: 'HR Outsourcing',
    description: "Providing proficient HR Outsourcing solutions across different verticals. We have been successful in providing HR Outsourcing solutions to both large and small companies across the country."
  }
];

export default function Services() {
  return (
    
    <section className="py-20 bg-gray-50" id= "services-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive staffing solutions tailored to your needs</p>
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