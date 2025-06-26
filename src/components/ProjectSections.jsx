// components/ProjectSections.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

const ProjectSections = ({ sections, language }) => { 
  const translations = {
    pt: {
      placeholderText: 'Espaço para diagrama de arquitetura, snippet de código relevante ou uma imagem ilustrativa sobre "{sectionTitle}".',
      architectureDiagram: 'diagrama de arquitetura',
      codeSnippet: 'snippet de código',
      illustrativeImage: 'imagem ilustrativa',
      about: 'sobre',
    },
    en: {
      placeholderText: 'Space for an architecture diagram, relevant code snippet, or an illustrative image about "{sectionTitle}".',
      architectureDiagram: 'architecture diagram',
      codeSnippet: 'code snippet',
      illustrativeImage: 'illustrative image',
      about: 'about',
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * index,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: '-50px' }}
            className={`mb-16 sm:mb-24 last:mb-0 flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-start lg:gap-12 xl:gap-16`}
          >
            <div className={`w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-6 xl:pr-8' : 'lg:pl-6 xl:pl-8'}`}>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-3 rounded-lg text-blue-500 bg-gray-900 bg-opacity-30">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
                  {section.title[language]}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {section.content[language]} 
              </p>
            </div>

            <div className="w-full lg:w-1/2 bg-gray-800 bg-opacity-40 rounded-xl overflow-hidden border border-gray-600 min-h-[240px] sm:min-h-[280px] flex items-center justify-center p-4 sm:p-6 shadow-2xl backdrop-blur-sm mx-auto">
              {section.imageUrl ? (
                <Image
                  src={section.imageUrl}
                  alt={section.title[language]} 
                  width={700} 
                  height={400} 
                  className="w-full h-full object-cover rounded-lg" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-indigo-950/40 rounded-lg border border-dashed border-blue-700/30 text-center p-4 sm:p-6 text-gray-500">
                  <div className="text-5xl sm:text-6xl font-extrabold mb-3 sm:mb-4 opacity-20 text-blue-500">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm italic max-w-sm">
                    {translations[language].placeholderText.replace('{sectionTitle}', section.title[language])}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSections;