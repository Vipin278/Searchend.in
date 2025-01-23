import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2">
          <motion.h2
            className="text-4xl font-bold inline-block bg-clip-text bg-gradient-to-r text-transparent mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Company Profile
          </motion.h2>
          <p className="text-lg text-blue-600">
            Search End Staffing Solutions (SESS) is India's leading Staffing Solution Company, based in Ahmedabad, Gujarat. Finding talent is one of the most critical challenges that any organization has to face. Thus we, at SESS have made talent search our specialty. We provide Permanent Recruitment, HR Outsourcing, Temporary Staffing & Payroll Outsourcing solutions to our esteemed clients. Rather than just being an external staffing company, we act as a partner to our clients in all their Human Resource Management functions.

            Our dedicated & experienced team of professionals enables us in selecting the talented candidates for different job roles across various verticals. For this, we follow a stringent selection procedure where the candidates are screened on various aspects in order to meet the requirements of the hiring companies. We specialize in developing personalized Staffing Solutions while taking into account the work culture, requirements, etc. at the client's company.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-end">
          <iframe 
            src="https://lottie.host/embed/1b09f528-dfb6-4c3a-bc0d-23f7633ef410/EI3wjRhFgO.lottie" 
            height={500} 
            width={600}
            title="Company Animation"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center ml-10">
            <Target className="w-12 h-12 text-blue-600 p-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600">Our company has the ambitious vision of finding talent in each individual and provides the top professional services across various fields.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-blue-600 p-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600">To provide competent Human Resource solutions in India. Our endeavour is to climb up the ladder of success and emerge as the preferred recruitment firm across the country.</p>
          </div>
          <div className="flex flex-col items-center mr-10 text-center">
            <Users className="w-12 h-12 text-blue-300 p-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Us?</h3>
            <p className="text-sm text-gray-600">SESS has gained unmatched business and technical expertise. We apply our extensive knowledge to deliver solutions that meet customer needs, expectations, and budgets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
