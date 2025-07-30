'use client';

import React, { useEffect, useState } from 'react';
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
      ctaSubtext: 'Código Aberto • Licença MIT • Contribuições Bem-vindas',
    },
    en: {
      heading: 'Ready to Dive Into the Code?',
      description: 'Explore o repositório para uma análise detalhada da arquitetura e implementação.',
      viewRepository: 'Ver Repositório',
      githubTag: 'GitHub',
      ctaSubtext: 'Open Source • MIT License • Contributions Welcome',
    },
  };

  const currentTranslations = translations[language];

  const [randomDivStyles, setRandomDivStyles] = useState([]);

  useEffect(() => {
    const newStyles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random() * 1.5,
    }));
    setRandomDivStyles(newStyles);
  }, []);

  const ctaContainerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.6, 0.4, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden opacity-30">
        {randomDivStyles.map((style, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 150 * Math.sin(i * Math.PI / 10 + 0.5), 0],
              y: [0, 150 * Math.cos(i * Math.PI / 10 + 0.5), 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 25 + Math.random() * 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-yellow-400/400"
            style={{
              left: style.left,
              top: style.top,
              scale: style.scale,
            }}
          >
            <Code size={32} />
          </motion.div>
        ))}
        {randomDivStyles.length === 0 && [...Array(15)].map((_, i) => (
            <div
                key={`fallback-${i}`}
                className="absolute text-yellow-400/400"
                style={{
                    left: `${(i * 7) % 100}%`,
                    top: `${(i * 10) % 100}%`,
                    transform: 'scale(1)',
                }}
            >
                <Code size={32} />
            </div>
        ))}
      </div>

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/80 rounded-full filter blur-3xl opacity-20 mix-blend-screen animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/50 rounded-full filter blur-3xl opacity-20 mix-blend-screen animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={ctaContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl overflow-hidden"
        >
          <div className="relative bg-gray-900/90 border-2 border-gray-700 rounded-2xl overflow-hidden backdrop-blur-lg">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-amber-400/30 via-transparent to-blue-500/30 pointer-events-none animate-shine"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:60px_60px] opacity-5"></div>

            <div className="relative z-10 p-10 lg:p-12">
              <div className="text-center mx-auto">
                <motion.div
                  initial={{ scale: 0.7, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center p-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 mb-8 shadow-lg"
                >
                  <Code className="w-10 h-10 text-amber-400" />
                </motion.div>

                <motion.h3
                  variants={textVariants}
                  className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-300 via-gray-100 to-blue-300 bg-clip-text text-transparent leading-tight tracking-tight"
                >
                  {currentTranslations.heading}
                </motion.h3>

                <motion.p
                  variants={textVariants}
                  className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                  {currentTranslations.description}
                </motion.p>

                <div className="flex flex-col items-center gap-8">
                  <Link
                    href={repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-all duration-300
                      bg-gradient-to-br from-amber-500 to-amber-700
                      border-2 border-amber-400 text-white
                      hover:from-amber-600 hover:to-amber-800
                      hover:border-yellow-300 shadow-xl overflow-hidden group"
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <GitBranch className="w-6 h-6" />
                      <span>{currentTranslations.viewRepository}</span>
                      <span className="ml-3 px-3 py-1 text-sm rounded-full bg-gray-800/80 text-yellow-400 font-bold tracking-wide border border-yellow-400/20">
                        {currentTranslations.githubTag}
                      </span>
                    </motion.div>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></span>
                  </Link>

                  <motion.p
                    variants={textVariants}
                    className="text-sm text-gray-500 font-mono flex items-center gap-2"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    {currentTranslations.ctaSubtext}
                  </motion.p>
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