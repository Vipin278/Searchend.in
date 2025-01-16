import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 relative"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          HIRE US <span className="text-lime-400">OR</span> JOIN US
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 gap-6"
          >
            <input
              type="text"
              placeholder="YOUR NAME*"
              className="w-full p-3 rounded bg-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 rounded bg-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="SUBJECT*"
              className="w-full p-3 rounded bg-white"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <textarea
              placeholder="YOUR MESSAGE*"
              rows={6}
              className="w-full p-3 rounded bg-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-lime-400 text-blue-900 py-3 rounded font-semibold"
            >
              SEND MESSAGE
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}