import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
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
    <motion.div className="flex flex-col pt-0">
      <div className="w-full p-6">
        <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
        <div className="bg-white p-4 rounded mb-6">
          <motion.div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Address</h3>
              <p className="text-black">301, Swayam Complex, Opp. Vodafone House, B/h Vipul Dudhiya, Nr. Stadium Cross Road, Navrangpura, Ahmedabad, Gujarat-380009, India.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Phone</h3>
              <p className="text-black">+91 9879864477</p>
            </div>
          </motion.div>
          <motion.div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Email</h3>
              <p className="text-black">career.searchend@gmail.com</p>
            </div>
          </motion.div>
          <motion.div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Working Hours</h3>
              <p className="text-black">Monday - Friday, 10:00 AM - 7:00 PM</p>
            </div>
          </motion.div>
        </div>
        <hr className="my-6" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="YOUR NAME*"
            className="w-full p-3 rounded bg-white border border-black"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 rounded bg-white border border-black"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="SUBJECT*"
            className="w-full p-3 rounded bg-white border border-black"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          <textarea
            placeholder="YOUR MESSAGE*"
            rows={6}
            className="w-full p-3 rounded bg-white border border-black"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded font-semibold"
          >
            SEND MESSAGE
          </button>
        </form>
        
      </div>
    </motion.div>
  );
}
