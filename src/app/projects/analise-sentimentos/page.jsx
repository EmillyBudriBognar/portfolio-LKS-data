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
} from 'lucide-react';
import ProjectHeader from '@/components/ProjectHeader';
import HeroSection from '@/components/HeroProject';
import ProjectSections from '@/components/ProjectSections';
import CallToAction from '@/components/CallToAction';
import ProjectFooter from '@/components/ProjectFooter';

const ProjectDetailPage = () => {
  const [language, setLanguage] = useState('pt');

  const systemTagTranslations = {
    pt: 'ANÁLISE DE VARIÁVEIS',
    en: 'VARIABLE ANALYSIS',
  };

  const project = {
    title: {
      pt: 'API de Análise de Sentimento com Java 17 e Spring Boot',
      en: 'Sentiment Analysis API with Java 17 and Spring Boot',
    },
    tagline: {
      pt: 'Classificação inteligente de comentários com OpenNLP e Swagger.',
      en: 'Smart comment classification using OpenNLP and Swagger.',
    },
    description: {
      pt: 'Este projeto consiste em uma API REST desenvolvida com Java 17 e Spring Boot 3, capaz de realizar análise básica de sentimentos em comentários de texto. Utilizando a biblioteca Apache OpenNLP, a aplicação interpreta o conteúdo textual e retorna classificações como positivo, negativo ou neutro. A API está documentada com Swagger/OpenAPI e inclui testes com JUnit 5, além de configuração pronta para Docker. É uma solução enxuta e eficaz para demonstrar habilidades de back-end e manipulação de dados textuais no ecossistema Java.',
      en: 'This project is a REST API built with Java 17 and Spring Boot 3, capable of performing basic sentiment analysis on text comments. Using the Apache OpenNLP library, the application interprets textual content and returns classifications such as positive, negative, or neutral. The API is documented with Swagger/OpenAPI and includes JUnit 5 tests, plus ready-to-use Docker configuration. It’s a lean and effective solution to showcase backend skills and textual data processing within the Java ecosystem.',
    },
    technologies: [
      'Java 17',
      'Spring Boot 3',
      'Apache OpenNLP',
      'Swagger/OpenAPI',
      'JUnit 5',
      'Docker'
    ],
    metrics: [
      {
        label: { pt: 'Precisão Média', en: 'Average Accuracy' },
        value: '91.3%',
        colorClass: 'text-green-500',
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        label: { pt: 'Cobertura de Testes', en: 'Test Coverage' },
        value: '95%',
        colorClass: 'text-blue-500',
        icon: <ShieldCheck className="w-5 h-5" />,
      },
      {
        label: { pt: 'Tempo de Resposta Médio', en: 'Average Response Time' },
        value: '120ms',
        colorClass: 'text-purple-500',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: { pt: 'Tempo de Geração', en: 'Generation Time' },
        value: '12h → 3min',
        colorClass: 'text-yellow-500',
        icon: <Code className="w-5 h-5" />,
      }
    ],
    sections: [
      {
        title: {
          pt: 'Situação e Tarefa',
          en: 'Situation and Task',
        },
        content: {
          pt: 'Durante uma análise de interações em uma aplicação de atendimento ao cliente, surgiu a necessidade de interpretar automaticamente os sentimentos expressos nos comentários para priorização e resposta eficiente. A tarefa era desenvolver uma API leve, documentada e de fácil integração que conseguisse classificar sentimentos em tempo real.',
          en: 'During the analysis of customer support interactions, there was a need to automatically interpret the sentiments expressed in user comments to enable better prioritization and faster response. The task was to develop a lightweight, documented, and easily integrable API capable of real-time sentiment classification.',
        },
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-sentimento1.png',
      },
      {
        title: {
          pt: 'Ação Realizada',
          en: 'Action Taken',
        },
        content: {
          pt: 'Projetei e desenvolvi uma API REST em Java 17 utilizando Spring Boot 3, com integração da biblioteca Apache OpenNLP para análise de sentimentos. Implementei testes unitários com JUnit 5, documentação automatizada com Swagger e conteinerização via Docker para facilitar o deploy em múltiplos ambientes.',
          en: 'I designed and developed a REST API using Java 17 and Spring Boot 3, integrating the Apache OpenNLP library for sentiment analysis. I implemented unit tests using JUnit 5, automated documentation with Swagger, and containerization with Docker to ensure seamless deployment across environments.',
        },
        icon: <Code className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-sentimento2.png',
      },
      {
        title: {
          pt: 'Resultados e Impacto',
          en: 'Results and Impact',
        },
        content: {
          pt: 'A API entregou resultados com mais de 91% de precisão em ambientes de testes, auxiliando na categorização de mais de 30 mil comentários em menos de 48 horas. A solução foi integrada com sucesso a um dashboard analítico, permitindo insights em tempo real e melhorando em 35% a eficiência das respostas da equipe de atendimento.',
          en: 'The API achieved over 91% accuracy in test environments, successfully classifying more than 30,000 comments within 48 hours. It was integrated into an analytical dashboard, enabling real-time insights and improving customer support response efficiency by 35%.',
        },
        icon: <BarChart className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-sentimento3.png',
      },
      {
        title: {
          pt: 'Documentação e Manutenibilidade',
          en: 'Documentation and Maintainability',
        },
        content: {
          pt: 'A documentação foi criada com Swagger, permitindo testes interativos via navegador. O projeto segue boas práticas de clean code, está dividido em camadas e permite fácil expansão, como suporte a novos idiomas e algoritmos de NLP. Isso garante longevidade e facilidade de manutenção do sistema.',
          en: 'The documentation was generated with Swagger, enabling interactive testing via browser. The project follows clean code practices, is layered, and allows easy expansion, such as support for new languages or NLP algorithms. This ensures long-term maintainability and adaptability.',
        },
        icon: <Layers className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/analise-sentimento4.png',
      }
    ],
    repositoryUrl: 'https://github.com/luca490/analise-sentimento'
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