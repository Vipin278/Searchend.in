import React, { useState, useEffect } from 'react';

//const workingHours = {
//  open: '10:00 AM',
//  close: '07:00 PM',
//};

const getCurrentStatus = () => {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const openMinutes = 10 * 60; // 10:00 AM
    const closeMinutes = 19 * 60; // 07:00 PM
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Check if it's Monday to Friday
      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        return 'Open';
      } else {
        return 'Closed';
      }
    } else {
      return 'Closed';
    }
  };

export default function Footer() {
  const [status, setStatus] = useState(getCurrentStatus());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatus(getCurrentStatus());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Quick Links */}
            <div className="border-r border-gray-700 md:border-r-0">
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-300">Home</a></li>
                <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
                <li><a href="/services" className="hover:text-blue-300">Services</a></li>
                <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>

            

            {/* Cities We Work In */}
            <div className="border-r border-gray-700 md:border-r-0">
            <h3 className="text-xl font-bold mb-4 text-white">Cities We Work In</h3>
            <div className="grid grid-cols-2 gap-2">
                {/* City Group */}
                <div className="flex flex-col space-y-2">
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 110 4v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 110-4v-2a2 2 0 00-2-2H5z" />
                    </svg>
                    <a href="/services" className="text-white-500 hover:underline">Ahmedabad</a>
                    
                </span>
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 110 4v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 110-4v-2a2 2 0 00-2-2H5z" />
                    </svg>
                    
                    <a href="/services" className="text-white-500 hover:underline">Mumbai</a>
                </span>
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 110 4v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 110-4v-2a2 2 0 00-2-2H5z" />
                    </svg>
                    <a href="/services" className="text-white-500 hover:underline">Delhi</a>
                    
                </span>
                </div>
                
                
                
            </div>
            </div>

            {/* Contact Information */}
            <div className="border-r border-gray-00 md:border-r-0 mt-0 ml-2 mr-13">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
                <li>
                <span className="flex items-center">
                    
                    Email: career.searchend@gmail.com
                </span>
                </li>
                <li>
                <span className="flex items-center">
                    
                    Phone: +91 9879864477
                </span>
                </li>
                <li>
                <span className="flex items-center">
                    
                   
                    Address: 301, Swayam Complex, Opp. Vodafone House, B/h Vipul Dudhiya, Nr.  Stadium Cross Road, Navrangpura, Ahmedabad, Gujarat-380009, India.
                </span>
                </li>
            </ul>
            </div>

            {/* Office Hours */}
            <div className='ml-6'>
              <h3 className="text-xl font-bold mb-4 text-white">Office Hours</h3>
              <p>Monday - Friday</p>
              <p>10am - 7pm</p>
              <p className={status === 'Open' ? 'text-green-500' : 'text-red-500'}>{status}</p>
            </div>
          </div>

            {/* Division Line */}
            <div className="border-t border-gray-700 mt-8 pt-8"></div>

            {/* Copyright Section */}
            <div className="text-center text-sm">
                <p>&copy; 2025 Search End Staffing Solutions. All rights reserved.</p>
                {/*<p className="text-sm text-gray-500"> Designed and maintained by <a href="https://www.nineztech.com/" className="text-blue-300 hover:text-blue-300">Ninez IT-Tech Solutions Pvt. Ltd.</a></p>*/}
            </div>
        </div>
      </footer>
    </div>
  );

}

