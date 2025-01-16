import { motion } from 'framer-motion';
import { Users, Building2, Target } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 bg-gray-100" >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Are?</h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              End your search for staffing solutions with Search End Staffing Solutions (SESS) – India's leading staffing partner based in Ahmedabad, Gujarat. We specialize in Permanent Recruitment, HR Outsourcing, Temporary Staffing, and Payroll Management, offering customized solutions for businesses across industries.
            </p>
            
            <p>
              With a dedicated team and a stringent candidate screening process, we ensure that you find the perfect fit for every role. At SESS, we don't just provide staffing services; we become your trusted HR partner, aligning with your company's culture and goals.
            </p>

            <p className="font-medium text-blue-600">
              Scroll to discover how we empower businesses with top talent!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Users, text: "Dedicated Team" },
              { icon: Building2, text: "Industry Leaders" },
              { icon: Target, text: "Perfect Fit" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text--800 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}