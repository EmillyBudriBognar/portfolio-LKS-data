'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch } from 'lucide-react';
import Link from 'next/link';

const CallToAction = ({ repositoryUrl, language }) => {
  const translations = {
    pt: {
      heading: 'Pronto para Explorar o Código?',
      description: 'Acesse o repositório para uma análise detalhada da arquitetura e implementação.',
      viewRepository: 'Ver Repositório',
      githubTag: 'GitHub',
      ctaSubtext: 'Open Source • Licença MIT • Contribuições Bem-vindas',
    },
    en: {
      heading: 'Ready to Dive Into the Code?',
      description: 'Explore the repository for comprehensive architectural insights and implementation details.',
      viewRepository: 'View Repository',
      githubTag: 'GitHub',
      ctaSubtext: 'Open Source • MIT License • Contributions Welcome',
    },
  };

  const currentTranslations = translations[language];

  const baseButtonClasses =
    'relative px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-all duration-300';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-yellow-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Code size={24 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>

      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.6, 0.4, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl overflow-hidden"
        >
          <div className="relative bg-gray-900/90 border-2 border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-lg">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-amber-400/30 via-transparent to-blue-500/30 pointer-events-none animate-pulse"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:60px_60px] opacity-10"></div>

            <div className="relative z-10 p-10 lg:p-12">
              <div className="text-center mx-auto">
                <motion.div
                  initial={{ scale: 0.7, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center p-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 mb-8 shadow-lg"
                >
                  <Code className="w-10 h-10 text-amber-400" />
                </motion.div>

                <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-300 via-gray-100 to-blue-300 bg-clip-text text-transparent leading-tight tracking-tight">
                  {currentTranslations.heading}
                </h3>

                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                  {currentTranslations.description}
                </p>

                <div className="flex flex-col items-center gap-8">
                  <Link
                    href={repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseButtonClasses} 
                                  bg-gradient-to-br from-amber-600 to-amber-800 
                                  border-2 border-amber-500 text-white
                                  hover:from-amber-700 hover:to-amber-900
                                  hover:border-yellow-400 shadow-lg`}
                  >
                    <motion.div 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3"
                    >
                      <GitBranch className="w-6 h-6" />
                      <span>{currentTranslations.viewRepository}</span>
                      <span className="ml-3 px-3 py-1 text-sm rounded-full bg-gray-800/80 text-yellow-400 font-bold tracking-wide border border-yellow-400/20">
                        {currentTranslations.githubTag}
                      </span>
                    </motion.div>
                  </Link>

                  <p className="text-sm text-gray-500 font-mono flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    {currentTranslations.ctaSubtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;