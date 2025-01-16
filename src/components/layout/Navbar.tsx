import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/process', label: 'Process' },
  { path: '/clients', label: 'Clients' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
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
      className="sticky top-0 h-20 bg-white z-10"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center">
          <img src="https://i.postimg.cc/s248PfbW/sess-logo.png" alt="Your Logo" className="w-8 h-8" />
          <img src="https://i.postimg.cc/ZK2M4NsP/sess-name-removebg-preview.png" alt="Your Image" className="w-41 h-5 ml-2" />
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative ${
                location.pathname === item.path ? 'text-black' : 'hover:text-sage'
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