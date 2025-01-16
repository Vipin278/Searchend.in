import { motion } from 'framer-motion';
import { Users, Building2, LineChart, Briefcase } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Users,
    title: 'Placement Services',
    description: "We provide effective Placement Services to aspiring candidates looking for the right job across different sectors. Our experienced team screens candidates based on skills, experience, and qualifications."
  },
  {
    icon: Building2,
    title: 'Permanent Staffing',
    description: "We specialize in hiring professionals for permanent roles on your payroll, offering comprehensive services including candidate sourcing, screening, and interview coordination."
  },
  {
    icon: LineChart,
    title: 'Temporary Staffing',
    description: "Our extensive network enables efficient temporary staffing solutions for companies needing contractual employees, with support tailored to your project-based needs."
  },
  {
    icon: Briefcase,
    title: 'HR Consulting',
    description: "Expert guidance on HR strategy, policy development, and workforce management to help your organization thrive."
  }
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
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