import { motion } from 'framer-motion';

export default function DirectorsDesk() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-6 ml-7">
            <img
              src="https://i.postimg.cc/MKKKb4yT/file-1.png"
              alt="Director's Image"
              className="w-48 h-60 object-cover rounded-lg"
            />
          </div>
          {/* Vertical Division Line */}
          <div className="hidden md:block h-48 w-px bg-gray-500 mx-6"></div>


          {/* Content on the right */}
          <div className="w-full md:w-1/2 lg:w-2/3 p-6">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold mb-8"
            >
              From the Director's Desk
            </motion.h2>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg mb-6"
              >
                Welcome to our journey! As we continue to grow, our commitment to delivering exceptional staffing
                solutions remains unwavering. We take pride in the impact we’ve made and look forward to shaping the future.
                We value trust, integrity, and innovation, ensuring every client and team member is a part of our success story.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="font-bold text-xl text-blue-300"
              >
                - Vipin Verma
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}