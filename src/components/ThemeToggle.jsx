'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors"
        aria-label="Toggle theme"
      >
        {/* Ícone de tema */}
        {theme === 'light' ? (
          <Sun size={20} className="relative z-10" />
        ) : (
          <Moon size={20} className="relative z-10" />
        )}
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-white dark:bg-gray-800 text-purple-600 dark:text-yellow-400 px-2 py-1 rounded shadow-md whitespace-nowrap"
          >
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;