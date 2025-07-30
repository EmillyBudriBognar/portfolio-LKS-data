'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Database, LineChart, Code, Zap } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const Projects = ({ language = 'en' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectData = {
    en: {
      sectionHeader: {
        title: "Featured Projects",
        subtitle: "Selected projects showcasing my expertise in data manipulation, automated reporting and data analysis."
      },
      projects: [
        {
          id: 1,
          title: "Book Management with Spring Boot",
          description: "Complete CRUD solution for book catalog with Swagger documentation and Docker deploy.",
          icon: <Database size={32} className="text-yellow-400" />,
          tags: ["Java", "Spring Boot", "Spring Data JPA", "Docker", "REST API"],
          href: "/projects/gestao-livros",
        },
        {
          id: 2,
          title: "Power BI Dashboards",
          description: "Interactive visualizations with Power BI based on CSV and Excel data, focused on strategic areas (Sales, HR and Logistics).",
          icon: <LineChart size={32} className="text-yellow-400" />,
          tags: ["Power BI", "Excel/CSV", "Data Visualization", "Dashboards", "Business Intelligence", "DAX", "SQL Server"],
          href: "/projects/dashboards-bi",
        },
        {
          id: 3,
          title: "Sentiment Analysis API",
          description: "Text processing API that identifies sentiments in sentences, with Swagger documentation and automated tests.",
          icon: <Zap size={32} className="text-yellow-400" />,
          tags: ["Java", "Spring Boot 3", "NLP", "Swagger", "JUnit", "Docker"],
          href: "/projects/analise-sentimentos",
        },
        {
          id: 4,
          title: "Sales Analysis API",
          description: "API that receives sales data (CSV/JSON), stores it in a database and generates analyses such as total by region, monthly average and product ranking. Ideal for transforming raw data into insights.",
          icon: <Code size={32} className="text-yellow-400" />,
          tags: ["Python", "Pandas", "SeaBorn", "Matplotlib", "Data Analysis", "Git", "Jupyter Notebook"],
          href: "/projects/analise-vendas",
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
          title: "Gestão de livros com Spring Boot",
          description: "Solução completa de CRUD para catálogo de livros com documentação Swagger e deploy Docker.",
          icon: <Database size={32} className="text-yellow-400" />,
          tags: ["Java", "Spring Boot", "Spring Data JPA", "Docker", "REST API"],
          href: "/projects/gestao-livros",
        },
        {
          id: 2,
          title: "Dashboards Power BI",
          description: "Visualizações interativas com Power BI baseadas em dados CSV e Excel, focadas em áreas estratégicas (Vendas, RH e Logística).",
          icon: <LineChart size={32} className="text-yellow-400" />,
          tags: ["Power BI", "Excel/CSV", "Visualização de Dados", "Dashboards", "Business Intelligence", "DAX", "SQL Server"],
          href: "/projects/dashboards-bi",
        },
        {
          id: 3,
          title: "Análise de Sentimentos API",
          description: "API de processamento de texto que identifica sentimentos em frases, com documentação Swagger e testes automatizados.",
          icon: <Zap size={32} className="text-yellow-400" />,
          tags: ["Java", "Spring Boot 3", "NLP", "Swagger", "JUnit", "Docker"],
          href: "/projects/analise-sentimentos",
        },
        {
          id: 4,
          title: "API de Análise de Vendas",
          description: "API que recebe dados de vendas (CSV/JSON), armazena em banco e gera análises como total por região, média mensal e ranking de produtos. Ideal para transformar dados brutos em insights.",
          icon: <Code size={32} className="text-yellow-400" />,
          tags: ["Python", "Pandas", "SeaBorn", "Matplotlib", "Análise de dados", "Git", "Jupyter Notebook"],
          href: "/projects/analise-vendas",
        },
      ]
    }
  };

  const currentData = projectData[language];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
          inView={inView}
        />

        <motion.div
          variants={container}
          initial="hidden"
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