'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [language, setLanguage] = useState('en');

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Handle scroll visibility
  useEffect(() => {
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsTop(currentScroll < 100);

      if (currentScroll <= 100) {
        setIsVisible(true);
      } else if (currentScroll > lastScroll) {
        setIsVisible(false); // Scroll down - hide
      } else {
        setIsVisible(true); // Scroll up - show
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !document.getElementById("mobile-menu")?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main header */}
      <motion.header
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 w-full z-50 ${
          !isTop ? "shadow-lg border-b border-gray-200 dark:border-gray-800" : ""
        }`}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              
              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    item.id ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>
                
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <LanguageSelector/>
                </div>
              </div>
              
              <button 
                className="md:hidden text-gray-700 dark:text-gray-300 z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Mobile menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="md:hidden mt-4 pb-4"
                >
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      item.id ? (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                        >
                          {item.name}
                        </motion.a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </nav>
                  <div className="flex items-center justify-between mt-4">
                    <ThemeToggle />
                    <LanguageSelector/>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;