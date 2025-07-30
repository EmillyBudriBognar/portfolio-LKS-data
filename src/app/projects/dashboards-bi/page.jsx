// ProjectDetailPage.jsx
'use client';

import React, { useState } from 'react';
import {
  Code,
  Server,
  BarChart,
  BarChart3,
  Target,
  TrendingUp,
  Zap,
  Cloud,
  Layers,
  HardDrive,
  Globe,
  Truck,
  Users,
  LayoutDashboard
} from 'lucide-react';
import ProjectHeader from '@/components/ProjectHeader';
import HeroSection from '@/components/HeroProject';
import ProjectSections from '@/components/ProjectSections';
import CallToAction from '@/components/CallToAction';
import ProjectFooter from '@/components/ProjectFooter';

const ProjectDetailPage = () => {
  // Estado para controlar o idioma atual da página - 'pt' para Português, 'en' para Inglês.
  const [language, setLanguage] = useState('pt');

  // Objeto para armazenar as traduções do "systemTag"
  const systemTagTranslations = {
    pt: 'SISTEMA DISTRIBUÍDO',
    en: 'DISTRIBUTED SYSTEM',
  };

  // Objeto 'project' contém todos os dados do projeto exibidos na página.
  const project = {
    title: {
      pt: 'Coleção de Dashboards Interativos no Power BI',
      en: 'Collection of Interactive Dashboards in Power BI',
    },
    tagline: {
      pt: 'Análises dinâmicas de Vendas, Logística e RH para decisões estratégicas baseadas em dados.',
      en: 'Dynamic analysis of Sales, Logistics, and HR for data-driven strategic decisions.',
    },
    description: {
      pt: 'Este repositório reúne projetos desenvolvidos no Power BI com foco em análise de dados corporativos. Os dashboards foram criados a partir de diferentes fontes de dados e exploram indicadores-chave como faturamento, volume de vendas, controle logístico e gestão de pessoas. Cada relatório oferece visualizações dinâmicas que facilitam a tomada de decisões baseadas em dados, com foco em performance, eficiência e estratégia empresarial.',
      en: 'This repository brings together projects developed in Power BI focused on corporate data analysis. The dashboards were created from diverse data sources and explore key metrics such as revenue, sales volume, logistics control, and people management. Each report offers dynamic visualizations that facilitate data-driven decision-making, emphasizing performance, efficiency, and business strategy.',
    },
    technologies: [
      'Power BI',
      'DAX',
      'Power Query',
      'Excel',
      'SQL Server',
      'Azure Blob Storage'
    ],
    metrics: [
      {
        label: { pt: 'Indicadores de Vendas', en: 'Sales KPIs' },
        value: '120+',
        colorClass: 'text-blue-500',
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        label: { pt: 'Eficiência Logística', en: 'Logistics Efficiency' },
        value: '↑ 18%',
        colorClass: 'text-green-400',
        icon: <Truck className="w-5 h-5" />,
      },
      {
        label: { pt: 'Redução de Retrabalho em RH', en: 'HR Rework Reduction' },
        value: '↓ 30%',
        colorClass: 'text-purple-400',
        icon: <Users className="w-5 h-5" />,
      },
      {
        label: { pt: 'Painéis Criados', en: 'Dashboards Created' },
        value: '3',
        colorClass: 'text-yellow-400',
        icon: <LayoutDashboard className="w-5 h-5" />,
      },
    ],
    sections: [
      {
        title: {
          pt: 'Situação e Desafio de Negócio',
          en: 'Situation and Business Challenge',
        },
        content: {
          pt: 'A organização enfrentava um grande desafio: as decisões estratégicas eram tomadas com base em relatórios manuais, descentralizados e suscetíveis a erros. As áreas de Vendas, Logística e Recursos Humanos não possuíam indicadores claros e atualizados, o que prejudicava a eficiência e a performance da operação.',
          en: 'The organization faced a major challenge: strategic decisions were based on manual, decentralized, and error-prone reports. Sales, Logistics, and Human Resources lacked clear and up-to-date indicators, which impaired operational efficiency and performance.',
        },
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/powerbi1.png',
      },
      {
        title: {
          pt: 'Tarefa e Objetivo',
          en: 'Task and Objective',
        },
        content: {
          pt: 'O objetivo era criar uma solução centralizada e automatizada para consolidar dados de múltiplas fontes e apresentar KPIs relevantes por meio de dashboards interativos e atualizados em tempo real. A meta era fornecer insights estratégicos e operacionais para os líderes de cada área.',
          en: 'The goal was to create a centralized and automated solution to consolidate data from multiple sources and present relevant KPIs through interactive dashboards updated in real time. The aim was to provide strategic and operational insights to the leadership of each department.',
        },
        icon: <Target className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/powerbi2.png',
      },
      {
        title: {
          pt: 'Ações e Soluções Implementadas',
          en: 'Actions and Solutions Implemented',
        },
        content: {
          pt: 'Desenvolvi dashboards no Power BI conectados a bases em Excel, SQL Server e Azure, utilizando **Power Query** para transformação de dados e **DAX** para criação de métricas avançadas. Implantamos filtros dinâmicos, gráficos personalizados e segmentações por região, período e equipe. Automatizamos a atualização dos relatórios via **Gateway Pessoal** e organizamos os projetos em workspaces com permissões hierárquicas.',
          en: 'I Have developed dashboards in Power BI connected to Excel, SQL Server, and Azure databases, using **Power Query** for data transformation and **DAX** for creating advanced metrics. We implemented dynamic filters, customized visuals, and segmentations by region, time, and team. Reports were automatically updated via **Personal Gateway** and structured in workspaces with hierarchical permissions.',
        },
        icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/powerbi3.png',
      },
      {
        title: {
          pt: 'Resultados e Impacto Estratégico',
          en: 'Results and Strategic Impact',
        },
        content: {
          pt: 'Como resultado, a empresa passou a tomar decisões baseadas em dados atualizados, reduzindo o tempo de geração de relatórios em 85%. O setor de Vendas otimizou campanhas com base em sazonalidade e performance regional. A Logística identificou gargalos operacionais, aumentando a eficiência em 18%. O RH reduziu o retrabalho na gestão de ponto e absenteísmo em 30%. Os painéis foram apresentados em reuniões de diretoria e passaram a guiar planos de ação mensais.',
          en: 'As a result, the company began making decisions based on updated data, reducing report generation time by 85%. The Sales department optimized campaigns based on seasonality and regional performance. Logistics identified operational bottlenecks, improving efficiency by 18%. HR reduced rework in attendance and absenteeism management by 30%. The dashboards were presented in board meetings and began guiding monthly action plans.',
        },
        icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/powerbi4.png',
      },
    ],
    repositoryUrl: 'https://github.com/luca490/projetos-powerbi',
  };


  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-sans antialiased overflow-hidden">
      <ProjectHeader
        language={language}
        onLanguageChange={setLanguage}
      />
      {/* Passando a prop 'systemTag' com base no idioma atual */}
      <HeroSection
        project={project}
        language={language}
        systemTag={systemTagTranslations[language]}
      />
      <ProjectSections sections={project.sections} language={language} />
      <CallToAction
        repositoryUrl={project.repositoryUrl}
        liveDemoUrl={project.liveDemoUrl}
        language={language}
      />
      <ProjectFooter language={language} />
    </div>
  );
};

export default ProjectDetailPage;