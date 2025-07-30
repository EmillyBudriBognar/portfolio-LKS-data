'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const HeroSection = ({ project, language, systemTag }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6 } },
  };

  const technologyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const metricItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Memoize the random values to ensure they are consistent between server and client
  const memoizedRandomPositions = React.useMemo(() => {
    if (typeof window === 'undefined') return []; // Don't generate on server
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  return (
    <section className="min-h-screen mt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-indigo-950"></div>

      {isMounted && (
        <div className="absolute inset-0 opacity-10">
          {memoizedRandomPositions.map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.5 }}
              animate={{
                x: [0, 100 * Math.sin(i * Math.PI / 10), 0],
                y: [0, 100 * Math.cos(i * Math.PI / 10), 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/50 rounded-full filter blur-3xl opacity-20 mix-blend-screen animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/50 rounded-full filter blur-3xl opacity-20 mix-blend-screen animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col justify-center h-full text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center sm:text-left"
        >
          <motion.div
            variants={tagVariants}
            className="inline-flex items-center gap-2 bg-gray-900 bg-opacity-40 px-3 py-1.5 rounded-full border border-gray-700 backdrop-blur-sm mb-4 sm:mb-6"
          >
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-400">
              {systemTag}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              {project.title[language]}
            </span>
          </motion.h1>

          <motion.h6
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6 max-w-3xl leading-relaxed font-light mx-auto sm:mx-0"
          >
            {project.tagline[language]}
          </motion.h6>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-4xl leading-relaxed mx-auto sm:mx-0"
          >
            {project.description[language]}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mb-8 sm:mb-10 justify-center sm:justify-start"
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={technologyVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-gray-300 border border-gray-700 shadow-xl backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {project.metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={metricItemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              className="relative overflow-hidden rounded-xl bg-gray-900 bg-opacity-40 border border-gray-700 p-5 shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className={`flex items-center gap-2 mb-3 ${metric.colorClass}`}>
                  {metric.icon}
                  <span className="text-xs font-medium text-gray-300">
                    {metric.label[language]}
                  </span>
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold ${metric.colorClass}`}>
                  {metric.value}
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className={`mt-3 h-1 ${metric.colorClass.replace('text-', 'bg-')}/60 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;