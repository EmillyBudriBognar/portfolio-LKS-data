// components/LanguageSelector.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = ({ onLanguageChange = () => {}, language = 'en' }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const dropdownRef = useRef(null);

  const translations = {
    en: {
      tooltip: 'Language',
      languageOptions: [
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Portuguese' },
      ],
    },
    pt: {
      tooltip: 'Idioma',
      languageOptions: [
        { code: 'en', label: 'Inglês' },
        { code: 'pt', label: 'Português' },
      ],
    },
  };

  const currentTranslations = translations[language];
  const languages = currentTranslations.languageOptions;

  const handleSelect = (code) => {
    setOpen(false);
    onLanguageChange(code);
  };

  useEffect(() => {
    // Fecha o dropdown se o clique for fora do componente
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="p-2 rounded-full text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
        aria-label={currentTranslations.tooltip}
      >
        <Globe size={20} className="relative z-10" />
      </button>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-gray-800 text-yellow-400 px-2 py-1 rounded shadow-md whitespace-nowrap"
          >
            {currentTranslations.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 bg-gray-900/90 backdrop-blur-md shadow-lg rounded-md overflow-hidden z-50 border border-gray-700"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-800 transition-colors ${
                  language === lang.code
                    ? 'font-medium text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                {lang.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;