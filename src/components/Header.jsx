// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import Image from 'next/image';

const Header = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  // Objeto de traduções para os itens de navegação
  const translations = {
    en: {
      navItems: [
        { name: 'Home', href: '#hero-section' },
        { name: 'Projects', href: '#projects-section' },
        { name: 'Blog', href: '#blog-section' },
        { name: 'About', href: '#about-section' },
        { name: 'Contact', href: '#contact-section' },
      ],
    },
    pt: {
      navItems: [
        { name: 'Início', href: '#hero-section' },
        { name: 'Projetos', href: '#projects-section' },
        { name: 'Blog', href: '#blog-section' },
        { name: 'Sobre', href: '#about-section' },
        { name: 'Contato', href: '#contact-section' },
      ],
    },
  };

  // Selecione os itens de navegação com base no idioma atual
  const navItems = translations[language].navItems;

  // Smooth scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  // Header visibility on scroll
  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsTop(currentScroll < 100);

          if (currentScroll <= 100) {
            setIsVisible(true);
          } else if (currentScroll > lastScroll && currentScroll > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
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

      {/* Header */}
      <motion.header
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 ${
          !isTop ? "shadow-lg border-b border-gray-200 dark:border-gray-800" : ""
        }`}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => scrollToSection('#hero-section')}
              >
                <div className="mr-3">
                  <Image src="/lks-logo.svg" alt="Logo" width={40} height={40} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  LKS DATA
                </h4>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors font-medium cursor-pointer"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                <LanguageSelector
                  language={language}
                  onLanguageChange={onLanguageChange}
                />
              </div>

              <button
                className="md:hidden text-gray-700 dark:text-gray-300 z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
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
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="md:hidden mt-4 pb-4"
                >
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.name}
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors text-lg text-left"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.href)}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                  <div className="flex items-center justify-between mt-4">
                    <LanguageSelector
                      language={language}
                      onLanguageChange={onLanguageChange}
                    />
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