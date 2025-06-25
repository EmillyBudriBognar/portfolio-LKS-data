'use client';

import { motion, useAnimation } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Code, Database, Server, Cloud, LineChart, BarChart, Cpu, Cog } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import ActionButton from './ActionButton';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = ({ language = "pt" }) => {
  const controls = useAnimation();
  // Usa useInView para disparar animações quando a seção entra na tela, apenas uma vez.
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Inicia a animação controlada quando a seção se torna visível.
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variantes para a animação do container principal, com escalonamento de filhos.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Variantes genéricas para itens, com um efeito de mola suave.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  // Variantes para os cards (Educação, Experiência, Tecnologias), incluindo um efeito de elevação no hover.
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      y: -3,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Variantes para os ícones de tecnologia, com feedback visual no hover.
  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 170,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -2px rgba(96, 165, 250, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  // Lista de tecnologias com ícones e cores para renderização dinâmica.
  const technologies = [
    { icon: <Server className="text-amber-400" size={20} />, name: "Python", color: "bg-amber-500/10" },
    { icon: <Cpu className="text-blue-400" size={20} />, name: "Java", color: "bg-blue-500/10" },
    { icon: <Cog className="text-amber-400" size={20} />, name: "Spring Boot", color: "bg-amber-500/10" },
    { icon: <Database className="text-blue-400" size={20} />, name: "SQL", color: "bg-blue-500/10" },
    { icon: <Database className="text-amber-300" size={20} />, name: "MongoDB", color: "bg-amber-400/10" },
    { icon: <Cloud className="text-blue-300" size={20} />, name: "AWS", color: "bg-blue-400/10" },
    { icon: <Cloud className="text-amber-300" size={20} />, name: "Azure", color: "bg-amber-400/10" },
    { icon: <BarChart className="text-blue-400" size={20} />, name: "Power BI", color: "bg-blue-500/10" },
    { icon: <LineChart className="text-amber-400" size={20} />, name: "Google Analytics", color: "bg-amber-500/10" }
  ];

  // Conteúdo textual da seção, separado por idioma para fácil internacionalização.
  const translations = {
    pt: {
      sectionHeader: {
        title: "Sobre Mim",
        subtitle: "Minha jornada profissional e habilidades técnicas"
      },
      education: {
        title: "Formação",
        items: [
          {
            title: "Ciência de Dados",
            institution: "Universidade XYZ • 2020-2024",
            description: "Especialização em machine learning e big data analytics com projetos aplicados em cenários empresariais reais."
          },
          {
            title: "Pós-graduação em IA",
            institution: "Instituto ABC • 2024",
            description: "Foco em deep learning, processamento de linguagem natural e visão computacional para soluções inovadoras."
          }
        ]
      },
      experience: {
        title: "Experiência",
        items: [
          {
            title: "Engenheiro de Dados Sênior",
            company: "DataTech Solutions • 2022-Presente",
            description: "Liderança de projetos de ETL em larga escala, arquitetura de data lakes e implementação de pipelines de dados em tempo real."
          }
        ]
      },
      technologies: {
        title: "Tecnologias"
      },
      downloadButton: "Ver Currículo",
      cvLink: "https://docs.google.com/document/d/1zE1D6_t4CZW1GT0rpOoqhhIH71V_F7VT/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true"
    },
    en: {
      sectionHeader: {
        title: "About Me",
        subtitle: "My professional journey and technical skills"
      },
      education: {
        title: "Education",
        items: [
          {
            title: "Data Science",
            institution: "XYZ University • 2020-2024",
            description: "Specialization in machine learning and big data analytics with applied projects in real business scenarios."
          },
          {
            title: "Postgraduate in AI",
            institution: "ABC Institute • 2024",
            description: "Focus on deep learning, natural language processing and computer vision for innovative solutions."
          }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            title: "Senior Data Engineer",
            company: "DataTech Solutions • 2022-Present",
            description: "Leadership of large-scale ETL projects, data lake architecture and implementation of real-time data pipelines."
          }
        ]
      },
      technologies: {
        title: "Technologies"
      },
      downloadButton: "View Resume",
      cvLink: "https://docs.google.com/document/d/1IYjTLMq5qCkwQ-NIw1_nZNCizCBUAsBR/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true"
    },
  };

  const validLanguage = translations[language] ? language : 'pt';
  const {
    sectionHeader,
    education,
    experience,
    technologies: techTexts,
    downloadButton,
    cvLink
  } = translations[validLanguage];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gray-900">
      {/* Elementos de fundo para um efeito visual sutil de ruído e gradiente. */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-overlay filter blur-[90px]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[90px]"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            title={sectionHeader.title}
            subtitle={sectionHeader.subtitle}
            inView={inView}
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="lg:w-1/2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:border-amber-500/30"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <GraduationCap className="text-amber-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">{education.title}</h3>
              </div>

              <div className="space-y-5">
                {education.items.map((item, index) => (
                  <div key={index} className="relative pl-7 border-l-2 border-amber-500/30 group">
                    <div className="absolute -left-[8px] top-0 w-3.5 h-3.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    <h4 className="text-base font-medium text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-blue-400 text-sm mb-1">{item.institution}</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 space-y-6"
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Briefcase className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{experience.title}</h3>
                </div>

                {experience.items.map((item, index) => (
                  <div key={index} className="relative pl-7 border-l-2 border-blue-500/30 group">
                    <div className="absolute -left-[8px] top-0 w-3.5 h-3.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    <h4 className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-amber-400 text-sm mb-1">{item.company}</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:border-teal-500/30"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-teal-500/10">
                    <Code className="text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{techTexts.title}</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={techVariants}
                      whileHover="hover"
                      className={`flex flex-col items-center justify-center p-3 ${tech.color} rounded-lg border border-gray-600 hover:border-current transition-colors min-w-[110px]`}
                    >
                      <div className="mb-2 flex justify-center">
                        {tech.icon}
                      </div>
                      <span className="text-white text-sm text-center font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <ActionButton
              href={cvLink}
              icon={<Download size={18} className="group-hover:animate-bounce" />}
              variant="primary"
              className="text-sm group"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {downloadButton}
            </ActionButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;