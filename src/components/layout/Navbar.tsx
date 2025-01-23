import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to your desired scroll threshold
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`navbar sticky top-0 h-20 transition-colors duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-transparent'} z-20`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center">
          <img src="https://i.postimg.cc/s248PfbW/sess-logo.png" alt="Your Logo" className="w-10 h-8" />
          <img src="https://i.postimg.cc/ZK2M4NsP/sess-name-removebg-preview.png" alt="Your Image" className="w-41 h-5 ml-2" />
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-black hover:text-yellow-500 ${
                location.pathname === item.path ? 'text-black' : ''
              }`}
            >
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-grey"
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
