'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';

const ProjectHeader = ({ language, onLanguageChange }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

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

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full py-5 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-90 backdrop-blur-sm top-0 z-50 ${
        !isTop ? 'shadow-lg border-b border-gray-800' : 'border-b border-gray-700'
      }`}
    >
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <motion.button
          whileHover={{ x: -3, color: '#60a5fa' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-1 cursor-pointer"
          aria-label="Voltar aos projetos"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-lg font-medium hidden sm:inline">
            {language === 'en' ? 'Back to Projects' : 'Voltar aos Projetos'}
          </span>
        </motion.button>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
          onClick={scrollToHero}
        >
          <div className="flex items-center">
            <Image
              src="images/lks-logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </motion.header>
  );
};

export default ProjectHeader;