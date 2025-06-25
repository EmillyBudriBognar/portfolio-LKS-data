// components/LanguageSelector.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = ({ onLanguageChange = () => {}, language = 'en' }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const dropdownRef = useRef(null);

  // Objeto de traduções para o tooltip e as opções de idioma
  const translations = {
    en: {
      tooltip: 'Language',
      languageOptions: [
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Portuguese' }, // Changed to Portuguese for consistency
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

  // Selecione as traduções e as opções de idioma com base no idioma atual
  const currentTranslations = translations[language];
  const languages = currentTranslations.languageOptions;

  const handleSelect = (code) => {
    setOpen(false);
    onLanguageChange(code);
  };

  useEffect(() => {
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
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="p-2 rounded-full text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
        aria-label={currentTranslations.tooltip} // Accessible label
      >
        <Globe size={20} className="relative z-10" />
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-gray-800 text-yellow-400 px-2 py-1 rounded shadow-md whitespace-nowrap"
          >
            {currentTranslations.tooltip} {/* Traduz o texto da bolha aqui */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
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
                {lang.label} {/* Traduz as opções de idioma aqui */}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;