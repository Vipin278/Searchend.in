import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['301, Swayam Complex, Opp. Vodafone House, B/h Vipul Dudhiya, Nr.  Stadium Cross Road, Navrangpura, Ahmedabad, Gujarat-380009, India.']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 9879864477']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['career.searchend@gmail.com']
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday', '10:00 AM - 7:00 PM']
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}