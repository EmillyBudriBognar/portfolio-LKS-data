'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const HeroSection = ({ project, language, systemTag }) => {
  return (
    <section className="h-[110vh] mt-14 min-h-[600px] px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-indigo-950"></div>

      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * Math.sin(i)],
              y: [0, 100 * Math.cos(i)],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center sm:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gray-900 bg-opacity-40 px-3 py-1.5 rounded-full border border-gray-600 backdrop-blur-sm mb-4 sm:mb-6"
          >
            <Cpu className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium text-blue-500">
              {systemTag}
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              {project.title[language]}
            </span>
          </h1>

          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-3xl leading-relaxed font-light mx-auto sm:mx-0"
          >
            {project.tagline[language]}
          </motion.h6>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-4xl leading-relaxed mx-auto sm:mx-0"
          >
            {project.description[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-2 mb-8 sm:mb-10 justify-center sm:justify-start"
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-gray-300 border border-gray-600 shadow-xl backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {project.metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-xl bg-gray-900 bg-opacity-40 border border-gray-600 p-5 shadow-2xl backdrop-blur-sm"
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
                  transition={{ duration: 1.5, delay: 1.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`mt-3 h-1 ${metric.colorClass.replace('text-', 'bg-')}/40 rounded-full`}
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