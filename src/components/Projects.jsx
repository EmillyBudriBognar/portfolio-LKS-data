// app/projects/page.js
'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Database, LineChart, Code, Zap } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const Projects = ({ language = 'en' }) => {
  // Hook para detectar se o componente está visível na tela, acionando a animação uma vez.
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Começa a animar quando 10% do componente está visível
  });

  // Dados dos projetos em diferentes idiomas para internacionalização.
  const projectData = {
    en: {
      sectionHeader: {
        title: "Featured Projects",
        subtitle: "Selected projects showcasing my expertise in data manipulation, automated reporting and data analysis."
      },
      projects: [
        {
          id: 1,
          title: "PROJECT 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          icon: <Database size={32} className="text-yellow-400" />,
          tags: ["Python", "Pandas", "ETL"],
          href: "/projects/project1",
        },
        {
          id: 2,
          title: "PROJECT 2",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: <LineChart size={32} className="text-yellow-400" />,
          tags: ["Power BI", "SQL", "Automation"],
          href: "/projects/project1",
        },
        {
          id: 3,
          title: "PROJECT 3",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          icon: <Zap size={32} className="text-yellow-400" />,
          tags: ["Python", "Automation", "Optimization"],
          href: "/projects/project1",
        },
        {
          id: 4,
          title: "PROJECT 4",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: <Code size={32} className="text-yellow-400" />,
          tags: ["Airflow", "AWS", "Data Engineering"],
          href: "/projects/project1",
        },
      ]
    },
    pt: {
      sectionHeader: {
        title: "Projetos Destacados",
        subtitle: "Projetos selecionados que mostram minha experiência em manipulação de dados, relatórios automatizados e análise de dados."
      },
      projects: [
        {
          id: 1,
          title: "PROJETO 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          icon: <Database size={32} className="text-yellow-400" />,
          tags: ["Python", "Pandas", "ETL"],
          href: "/projects/project1",
        },
        {
          id: 2,
          title: "PROJETO 2",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: <LineChart size={32} className="text-yellow-400" />,
          tags: ["Power BI", "SQL", "Automação"],
          href: "/projects/project1",
        },
        {
          id: 3,
          title: "PROJETO 3",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          icon: <Zap size={32} className="text-yellow-400" />,
          tags: ["Python", "Automação", "Otimização"],
          href: "/projects/project1",
        },
        {
          id: 4,
          title: "PROJETO 4",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: <Code size={32} className="text-yellow-400" />,
          tags: ["Airflow", "AWS", "Engenharia de Dados"],
          href: "/projects/project1",
        },
      ]
    }
  };

  const currentData = projectData[language];

  // Variantes de animação para o contêiner dos projetos.
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso na animação dos itens filhos
      },
    },
  };

  // Variantes de animação para cada item individual de projeto.
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={currentData.sectionHeader.title}
          subtitle={currentData.sectionHeader.subtitle}
          inView={inView} // Passa o estado de visibilidade para o SectionHeader
        />

        <motion.div
          variants={container}
          initial="hidden"
          // Anima os cards apenas quando a seção está visível
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {currentData.projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;