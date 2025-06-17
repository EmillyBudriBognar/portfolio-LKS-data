'use client';

import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText, Sparkles, Rocket, BarChart2, DatabaseZap } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

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
      
      // Animação de digitação para o subtítulo
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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background text-foreground">
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
        className="absolute top-20 left-20 text-blue-400/20"
        variants={floatingVariants}
        animate="float"
      >
        <DatabaseZap size={80} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-32 text-purple-400/20"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      >
        <BarChart2 size={80} />
      </motion.div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Badge de destaque premium */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-white/10 shadow-lg shadow-purple-500/5"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Sparkles className="text-purple-400 mr-2" size={16} />
            <span className="text-sm font-medium text-foreground">SOLUÇÕES EM DADOS DE ALTO IMPACTO</span>
            <Rocket className="ml-2 text-blue-400" size={16} />
          </motion.div>
          
          {/* Título principal com efeito brilhante */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
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
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
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
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 flex items-center gap-2"
              >
                <Rocket size={18} />
                <span>Explorar Soluções</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link
                href="#contact"
                className="px-8 py-3 border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-foreground rounded-lg font-medium transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
              >
                <BarChart2 size={18} />
                <span>Consultoria Especializada</span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Redes sociais com hover expandido */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: <Github size={22} />, url: "https://github.com/lksdata", tooltip: "GitHub", color: "hover:text-purple-400" },
              { icon: <Linkedin size={22} />, url: "https://linkedin.com/in/lksdata", tooltip: "LinkedIn", color: "hover:text-blue-400" },
              { icon: <FileText size={22} />, url: "#", tooltip: "Currículo", color: "hover:text-teal-400" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                className={`p-3 text-gray-400 ${item.color} transition-all duration-300 relative group rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20`}
                whileHover={{ y: -5, scale: 1.1 }}
                aria-label={item.tooltip}
              >
                {item.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-foreground bg-background px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-foreground/10 shadow-sm whitespace-nowrap">
                  {item.tooltip}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator premium */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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