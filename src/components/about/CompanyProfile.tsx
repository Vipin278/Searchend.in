import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h2>
          <p className="text-gray-600">
            Search End Staffing Solutions (SESS) is India's leading Staffing Solution Company, based in Ahmedabad, Gujarat. Finding talent is one of the most critical challenges that any organization has to face. Thus we, at SESS have made talent search our specialty. We provide Permanent Recruitment, HR Outsourcing, Temporary Staffing & Payroll Outsourcing solutions to our esteemed clients. Rather than just being an external staffing company, we act as a partner to our clients in all their Human Resource Management functions.
          </p>
          <p className="text-gray-600 mt-4">
            Our dedicated & experienced team of professionals enables us in selecting the talented candidates for different job roles across various verticals. For this, we follow a stringent selection procedure where the candidates are screened on various aspects in order to meet the requirements of the hiring companies. We specialize in developing personalized Staffing Solutions while taking into account the work culture, requirements, etc. at the client's company.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Vision',
              description: 'Our company has the ambitious vision of finding talent in each individual and provides the top professional services across various fields.'
            },
            {
              icon: Award,
              title: 'Our Mission',
              description: 'To provide competent Human Resource solutions in India. Our endeavour is to climb up the ladder of success and emerge as the preferred recruitment firm across the country'
            },
            {
              icon: Users,
              title: 'Why Us?',
              description: "SESS has gained unmatched business and technical expertise. We apply our extensive knowledge to deliver solutions that meet customer needs, expectations, and budgets"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}