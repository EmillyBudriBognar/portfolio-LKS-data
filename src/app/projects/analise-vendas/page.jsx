'use client';

import React, { useState } from 'react';
import {
  Code,
  Server,
  BarChart,
  ShieldCheck,
  Zap,
  Cloud,
  Layers,
  HardDrive,
  Globe,
  Clock
} from 'lucide-react';
import ProjectHeader from '@/components/ProjectHeader';
import HeroSection from '@/components/HeroProject';
import ProjectSections from '@/components/ProjectSections';
import CallToAction from '@/components/CallToAction';
import ProjectFooter from '@/components/ProjectFooter';

const ProjectDetailPage = () => {
  const [language, setLanguage] = useState('pt');

  const systemTagTranslations = {
    pt: 'GERAÇÃO DE GRÁFICOS',
    en: 'GRAPHIC GENERATION',
  };

  const project = {
    title: {
      pt: 'Análise Exploratória de Dados de Vendas com Python',
      en: 'Exploratory Sales Data Analysis with Python',
    },
    tagline: {
      pt: 'Extraindo padrões de receita e otimizando decisões comerciais com ciência de dados.',
      en: 'Extracting revenue patterns and optimizing business decisions with data science.',
    },
    description: {
      pt: 'Este projeto utiliza Python e bibliotecas como Pandas, Matplotlib e Seaborn para explorar dados de vendas. Com foco em geração de insights, são identificados padrões de receita, produtos mais lucrativos e sazonalidade para embasar decisões estratégicas.',
      en: 'This project leverages Python and libraries such as Pandas, Matplotlib, and Seaborn to explore sales data. Focused on generating insights, it identifies revenue patterns, top-performing products, and seasonality to support strategic decision-making.',
    },
    technologies: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook',
      'Git',
      'Google Colab',
    ],
    metrics: [
      {
        label: { pt: 'Produtos Analisados', en: 'Products Analyzed' },
        value: '1.500+',
        colorClass: 'text-blue-500',
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        label: { pt: 'Insights Estratégicos Gerados', en: 'Strategic Insights Generated' },
        value: '12+',
        colorClass: 'text-green-500',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: { pt: 'Visualizações Criadas', en: 'Visualizations Created' },
        value: '20+',
        colorClass: 'text-purple-400',
        icon: <Globe className="w-5 h-5" />,
      },
      {
        label: { pt: 'Tempo de Processamento', en: 'Processing Time' },
        value: '4s',
        colorClass: 'text-red-400',
        icon: <Clock className="w-5 h-5" />,
      },
    ],
    sections: [
      {
        title: {
          pt: 'Contexto e Desafio de Negócio',
          en: 'Context and Business Challenge',
        },
        content: {
          pt: 'Uma empresa varejista buscava entender melhor os padrões de receita e desempenho dos seus produtos ao longo do tempo.\n\nRealizar uma análise exploratória que revelasse comportamentos de compra, sazonalidade e produtos mais rentáveis.\n\nUtilizamos Python com Pandas para limpeza e agregação de dados, Seaborn para visualizações e Matplotlib para análises temporais.\n\nIdentificamos que 20% dos produtos geravam 80% da receita, além de fortes picos sazonais em meses específicos, o que orientou o time comercial a ajustar o estoque e campanhas promocionais.',
          en: 'A retail company needed to better understand revenue patterns and product performance over time.\n\nConduct an exploratory analysis to uncover buying behaviors, seasonality, and the most profitable products.\n\nWe used Python with Pandas for data cleaning and aggregation, Seaborn for visualizations, and Matplotlib for time series analysis.\n\nWe discovered that 20% of the products generated 80% of the revenue, and identified seasonal peaks, allowing the commercial team to optimize inventory and promotional campaigns.',
        },
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-vendas1.png',
      },
      {
        title: {
          pt: 'Processo de Limpeza e Preparação dos Dados',
          en: 'Data Cleaning and Preparation Process',
        },
        content: {
          pt: 'Realizei um tratamento cuidadoso para remover valores nulos, corrigir formatações e padronizar categorias. Agrupamos dados por produto, mês e região para permitir análises multidimensionais. A padronização foi essencial para garantir consistência e confiabilidade nas análises.',
          en: 'I performed careful cleaning to remove null values, fix formatting, and standardize categories. Data was grouped by product, month, and region to allow multidimensional analysis. Standardization was essential to ensure consistency and reliability in the results.',
        },
        icon: <HardDrive className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-vendas2.png',
      },
      {
        title: {
          pt: 'Visualizações e Extração de Insights',
          en: 'Visualizations and Insight Extraction',
        },
        content: {
          pt: 'Criei gráficos de linha, barras e heatmaps para visualizar tendências mensais, produtos com maior receita e sazonalidade. Cada visualização foi pensada para responder a uma pergunta de negócio específica, como: "Quais produtos mais vendem em dezembro?" ou "Existe queda de receita em meses específicos?".',
          en: 'I built line charts, bar plots, and heatmaps to visualize monthly trends, top revenue-generating products, and seasonality. Each visualization was designed to answer a specific business question, such as "Which products sell the most in December?" or "Is there a drop in revenue in certain months?"',
        },
        icon: <BarChart className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-vendas3.png',
      },
      {
        title: {
          pt: 'Impacto no Negócio e Resultados',
          en: 'Business Impact and Results',
        },
        content: {
          pt: 'A análise permitiu à empresa antecipar picos de demanda, melhorar o planejamento de estoque e redirecionar campanhas de marketing para produtos mais lucrativos. Como resultado, foi observado um aumento de 17% na margem de lucro em meses críticos e uma redução de 23% em produtos encalhados.',
          en: 'The analysis enabled the company to anticipate demand peaks, improve inventory planning, and redirect marketing efforts to more profitable products. As a result, a 17% increase in profit margin was observed in critical months, along with a 23% reduction in unsold inventory.',
        },
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-vendas4.png',
      },
      {
        title: {
          pt: 'Lições Aprendidas e Melhoria Contínua',
          en: 'Lessons Learned and Continuous Improvement',
        },
        content: {
          pt: 'Aprendi que dados bem estruturados são a chave para decisões assertivas. Também foi essencial iterar com o time de negócios para validar hipóteses e adaptar os dashboards conforme novas demandas surgiam. Esse ciclo contínuo de análise reforça a cultura data-driven.',
          en: 'I have learned that well-structured data is key to accurate decision-making. It was also essential to iterate with the business team to validate hypotheses and adapt dashboards as new demands emerged. This continuous analysis cycle reinforces a data-driven culture.',
        },
        icon: <Code className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-vendas5.png',
      },
    ],
    repositoryUrl: 'https://github.com/luca490/analise_vendas',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-sans antialiased overflow-hidden">
      <ProjectHeader
        language={language}
        onLanguageChange={setLanguage}
      />
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