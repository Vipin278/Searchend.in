import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const clients = [
  'Indofil Industry Ltd',
  'Rosary Biotech Ltd',
  'National Peroxide Ltd',
  'Vikram Thermo India Ltd',
  'Shiva Pharmachem Ltd',
  'Simpolo Ceramics',
  'Asian Granito Ltd',
  'Yazaki India',
  'Noble Automotive',
  'Uniproducts India Ltd',
  'Kalmar Global',
  'Trio Elevators',
  'Travel designer',
  'Blue dart -dhl',
  'Apar Industries',
  'Kamaths Maritime Icecream',
  'GNP Group',
  'Nandan Denim Ltd',
  'RBZ Jeweller Ltd',
  'Presteel'
];

export default function ClientsGrid() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
          <p className="text-xl text-gray-600">Partnering with industry leaders across sectors</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-800 font-medium">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}