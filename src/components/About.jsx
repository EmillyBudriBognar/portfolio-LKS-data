'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Code, Database, Server, Cloud } from 'lucide-react';
import Link from 'next/link';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-[90px] opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[90px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Título */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formação */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg shadow-purple-500/10 hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-semibold text-foreground">Formação</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h4 className="text-lg font-medium text-foreground">Ciência de Dados</h4>
                  <p className="text-blue-300 mb-1">Universidade XYZ • 2020-2024</p>
                  <p className="text-gray-300">Especialização em machine learning e big data analytics com projetos aplicados em cenários empresariais reais.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium text-foreground">Pós-graduação em IA</h4>
                  <p className="text-purple-300 mb-1">Instituto ABC • 2024</p>
                  <p className="text-gray-300">Foco em deep learning, processamento de linguagem natural e visão computacional para soluções inovadoras.</p>
                </div>
              </div>
            </motion.div>

            {/* Experiência e Tecnologias */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg shadow-blue-500/10 hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-foreground">Experiência</h3>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <h4 className="text-lg font-medium text-foreground">Engenheiro de Dados Sênior</h4>
                  <p className="text-purple-300 mb-1">DataTech Solutions • 2022-Presente</p>
                  <p className="text-gray-300">Liderança de projetos de ETL em larga escala, arquitetura de data lakes e implementação de pipelines de dados em tempo real.</p>
                </div>
              </div>

              {/* Tecnologias */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg shadow-purple-500/10 hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Code className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-foreground">Tecnologias</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: <Database className="text-blue-400" />, name: "SQL" },
                    { icon: <Server className="text-purple-400" />, name: "Python" },
                    { icon: <Cloud className="text-blue-300" />, name: "AWS" },
                    { icon: <Database className="text-purple-300" />, name: "MongoDB" },
                    { icon: <Server className="text-blue-200" />, name: "Spark" },
                    { icon: <Cloud className="text-purple-200" />, name: "Azure" },
                    { icon: <Database className="text-blue-400" />, name: "PostgreSQL" },
                    { icon: <Server className="text-purple-400" />, name: "Pandas" },
                    { icon: <Cloud className="text-blue-300" />, name: "TensorFlow" }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={techVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {tech.icon}
                      <span className="text-foreground">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Botão de Download CV */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Link
              href="/cv-lks-data-solutions.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
            >
              <Download className="mr-2" size={20} />
              Baixar Currículo Completo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;