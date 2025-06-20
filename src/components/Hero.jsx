'use client';

import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText, Sparkles, Rocket, BarChart2, DatabaseZap } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

// Componente reutilizável para botões
const ActionButton = ({ 
  children, 
  href, 
  variant = 'primary',
  icon,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30',
    secondary: 'border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-foreground backdrop-blur-sm',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`${className}`}
    >
      <Link
        href={href}
        className={`px-6 py-3 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]}`}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    </motion.div>
  );
};

// Componente reutilizável para ícones sociais
const SocialIcon = ({ icon, url, tooltip, color }) => {
  return (
    <motion.a
      href={url}
      className={`p-3 text-gray-400 ${color} transition-all duration-300 relative group rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 flex items-center justify-center`}
      whileHover={{ y: -5, scale: 1.1 }}
      aria-label={tooltip}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-foreground bg-background px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-foreground/10 shadow-sm whitespace-nowrap">
        {tooltip}
      </span>
    </motion.a>
  );
};

// Componente reutilizável para o badge
const HighlightBadge = ({ children }) => {
  return (
    <motion.div
      className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-white/10 shadow-lg shadow-purple-500/5"
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Sparkles className="text-purple-400 mr-2" size={16} />
      <span className="text-sm font-medium text-foreground">{children}</span>
      <Rocket className="ml-2 text-blue-400" size={16} />
    </motion.div>
  );
};

const Hero = () => {
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

  return (
    <section className="relative h-screen w-full mt-18 overflow-hidden flex items-center justify-center bg-background text-foreground px-4">
      {/* Fundo com noise texture e gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      
      {/* Efeitos de luz e partículas */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-[90px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[90px] opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-teal-400 rounded-full mix-blend-overlay filter blur-[80px] opacity-5 animate-blob animation-delay-4000"></div>
      
      {/* Ícones flutuantes */}
      <motion.div 
        className="absolute top-20 left-10 md:left-20 text-blue-400/20"
        variants={floatingVariants}
        animate="float"
      >
        <DatabaseZap className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-10 md:right-32 text-purple-400/20"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      >
        <BarChart2 className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto w-full"
        >
          <motion.div variants={itemVariants}>
            <HighlightBadge>SOLUÇÕES EM DADOS DE ALTO IMPACTO</HighlightBadge>
          </motion.div>
          
          {/* Título principal com efeito brilhante */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300 bg-clip-text text-transparent">
              LKS Data
            </span>
            <motion.span 
              className="ml-2 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"
              animate={controls}
            >
              Solutions
            </motion.span>
            <span className="absolute ml-2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]"></span>
          </motion.h1>
          
          {/* Subtítulo com animação de digitação */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={textControls}
          >
            <span className="inline-block">
              Transformamos <span className="font-semibold text-blue-300">dados brutos</span> em <span className="font-semibold text-purple-300">insights poderosos</span> que impulsionam sua empresa para o <span className="relative">
                próximo nível
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>.
            </span>
          </motion.p>
          
          {/* Botões premium */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full"
            variants={itemVariants}
          >
            <ActionButton 
              href="#projects" 
              variant="primary"
              icon={<Rocket size={18} />}
              className="w-full sm:w-auto"
            >
              Explorar Soluções
            </ActionButton>
            
            <ActionButton 
              href="#contact" 
              variant="secondary"
              icon={<BarChart2 size={18} />}
              className="w-full sm:w-auto"
            >
              Consultoria Especializada
            </ActionButton>
          </motion.div>
          
          {/* Redes sociais com hover expandido */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <SocialIcon 
              icon={<Github size={20} />} 
              url="https://github.com/lksdata" 
              tooltip="GitHub" 
              color="hover:text-purple-400" 
            />
            <SocialIcon 
              icon={<Linkedin size={20} />} 
              url="https://linkedin.com/in/lksdata" 
              tooltip="LinkedIn" 
              color="hover:text-blue-400" 
            />
            <SocialIcon 
              icon={<FileText size={20} />} 
              url="#" 
              tooltip="Currículo" 
              color="hover:text-teal-400" 
            />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator premium */}
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
            <ChevronDown size={24} className="text-foreground" />
            <div className="w-px h-8 bg-gradient-to-t from-foreground/50 to-transparent mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;