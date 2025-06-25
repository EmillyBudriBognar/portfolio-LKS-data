'use client';

import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, BarChart2, DatabaseZap, Rocket } from 'lucide-react';
import ActionButton from './ActionButton';
import SocialIcons from './SocialIcons';
import HighlightBadge from './HighlightBadge';
import { useEffect } from 'react';

const Hero = ({ language = "pt" }) => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start({
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.6 }
      });

      await textControls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    };
    sequence();
  }, [controls, textControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const translations = {
    pt: {
      badge: "SOLUÇÕES EM DADOS DE ALTO IMPACTO",
      companyName: "LKS Data Soluções",
      description: [
        "Transformamos ",
        { text: "dados brutos", style: "font-semibold text-blue-300/90" },
        " em ",
        { text: "insights poderosos", style: "font-semibold text-yellow-300/90" },
        " que impulsionam sua empresa para o ",
        { text: "próximo nível", style: "relative", underline: true }
      ],
      buttons: {
        primary: {
          text: "Explorar Soluções",
          icon: <Rocket size={18} className="text-gray-900" />
        },
        secondary: {
          text: "Consultoria Especializada",
          icon: <BarChart2 size={18} className="text-foreground/90" />
        }
      }
    },
    en: {
      badge: "HIGH-IMPACT DATA SOLUTIONS",
      companyName: "LKS Data Solutions",
      description: [
        "We transform ",
        { text: "raw data", style: "font-semibold text-blue-300/90" },
        " into ",
        { text: "powerful insights", style: "font-semibold text-yellow-300/90" },
        " that drive your business to the ",
        { text: "next level", style: "relative", underline: true }
      ],
      buttons: {
        primary: {
          text: "Explore Solutions",
          icon: <Rocket size={18} className="text-gray-900" />
        },
        secondary: {
          text: "Specialized Consulting",
          icon: <BarChart2 size={18} className="text-foreground/90" />
        }
      }
    }
  };

  const { badge, companyName, description, buttons } = translations[language];

  return (
    <section className="relative h-screen w-full mt-16 overflow-hidden flex items-center justify-center bg-gray-900 text-gray-50 px-4">
      {/* Camadas de fundo com gradientes e ruído */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Bolhas de cor flutuantes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600 rounded-full mix-blend-overlay filter blur-[90px] opacity-7 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[90px] opacity-7 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-teal-400 rounded-full mix-blend-overlay filter blur-[80px] opacity-4 animate-blob animation-delay-4000"></div>

      {/* Ícones flutuantes decorativos */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 text-blue-400/15"
        variants={floatingVariants}
        animate="float"
      >
        <DatabaseZap className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 md:right-32 text-yellow-400/15"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      >
        <BarChart2 className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>

      {/* Conteúdo principal da seção Hero */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto w-full"
        >
          <motion.div variants={itemVariants}>
            <HighlightBadge>{badge}</HighlightBadge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-gradient bg-gradient-to-r from-yellow-400/90 via-blue-400/90 to-teal-300/90 bg-clip-text text-transparent">
              {companyName.split(' ')[0]} {companyName.split(' ')[1]}
            </span>
            <motion.span
              className="ml-2 bg-gradient-to-r from-blue-400/90 to-blue-300/90 bg-clip-text text-transparent"
              animate={controls}
            >
              {companyName.split(' ')[2]}
            </motion.span>
            <span className="absolute ml-2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]"></span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={textControls}
          >
            <span className="inline-block">
              {description.map((part, index) => {
                if (typeof part === 'string') {
                  return part;
                } else {
                  return (
                    <span key={index} className={part.style}>
                      {part.text}
                      {part.underline && (
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/80 to-yellow-500/80 rounded-full"></span>
                      )}
                    </span>
                  );
                }
              })}
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full"
            variants={itemVariants}
          >
            <ActionButton
              href="#projects"
              variant="primary"
              icon={buttons.primary.icon}
              className="w-full sm:w-auto"
            >
              {buttons.primary.text}
            </ActionButton>

            <ActionButton
              href="#contact"
              variant="secondary"
              icon={buttons.secondary.icon}
              className="w-full sm:w-auto"
            >
              {buttons.secondary.text}
            </ActionButton>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <SocialIcons language={language} />
          </motion.div>
        </motion.div>

        {/* Indicador de rolagem */}
        <motion.div
          className="mt-8 sm:mt-12 mb-4 sm:mb-0"
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center">
            <ChevronDown size={24} className="text-foreground/80" />
            <div className="w-px h-8 bg-gradient-to-t from-foreground/40 to-transparent mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;