import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, LineChart, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Placement Services',
    description:"We, at Search End Staffing Solutions, provide effective Placement Services to the aspiring candidates who are looking for a right job in different sector. Being a reputed name in the business, we are approached by some of the leading companies across the verticals. Thus, we offer job opportunities from junior level to senior level positions. Our experienced team of professionals screens the candidates on their skills, experience, qualifications, etc. and schedules them for the interview with different companies."
  },
  {
    icon: Building2,
    title: 'Permanent Staffing',
    description: "We specialize in hiring professionals for permanent roles on your payroll. Our comprehensive services include candidate sourcing, initial screening, and interview coordination. By understanding the job requirements, ideal candidate profile, and company culture, we ensure a perfect match for your team."
  },
  {
    icon: Building2,
    title: 'Temporary Staffing',
    description: "Our extensive network across India enables us to provide efficient temporary staffing solutions for companies needing contractual employees. With a vast database of competent job seekers, we assist businesses in managing off-roll and project-based staff. Whether for short-term projects or temporary roles, we deliver reliable staffing support tailored to your needs."
  },
  {
    icon: LineChart,
    title: 'Payroll Outsourcing',
    description: 'The act of delegating payroll administration to third party having expertise in payroll processes. Generally companies outsource their payroll functions to cut costs, and to get better services. We, at Search End Staffing Solutions, provide the companies with competent Payroll Outsourcing solutions. Our team of experts provides effective service and keeps the client at utmost ease. Moreover, this allows companies to concentrate on their core business activities with more time and work on the sensitive job with complete ease'
  },
  {
    icon: Briefcase,
    title: 'HR Outsourcing',
    description: 'The strategic use of outside resources to perform activities traditionally handled by internal staff and resources. HR Outsourcing is a strategy by which an organization contracts out major manpower functions to specialized and efficient service providers, who become valued business partners. We, at Search End Staffing Solutions, provide proficient HR Outsourcing solutions across different verticals. We have been successful in providing HR Outsourcing solutions to both large and small companies across the country.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive staffing solutions tailored to your needs</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}