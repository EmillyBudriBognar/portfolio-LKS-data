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
    pt: 'SISTEMA DE CADASTRO',
    en: 'REGISTRATION SYSTEM',
  };

  const project = {
    title: {
      pt: 'API RESTful para Gestão de Livros com Java e Spring Boot',
      en: 'RESTful Book Management API with Java and Spring Boot',
    },
    tagline: {
      pt: 'Solução completa de CRUD para catálogo de livros com documentação Swagger e deploy Docker',
      en: 'Complete CRUD solution for book catalog with Swagger documentation and Docker deployment',
    },
    description: {
      pt: 'API robusta desenvolvida com Java 17 e Spring Boot 3.1.7 para gerenciamento de catálogo de livros, implementando operações CRUD completas com validações, tratamento de erros, documentação Swagger e preparada para deploy em containers Docker. A arquitetura segue princípios RESTful com versionamento de API, testes automatizados e boas práticas de desenvolvimento back-end.',
      en: 'Robust API developed with Java 17 and Spring Boot 3.1.7 for book catalog management, implementing complete CRUD operations with validations, error handling, Swagger documentation and ready for Docker container deployment. The architecture follows RESTful principles with API versioning, automated tests and backend development best practices.',
    },
    technologies: [
      'Java 17',
      'Spring Boot 3.1.7',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'Springdoc OpenAPI (Swagger)',
      'JUnit 5',
      'Mockito',
      'Docker',
      'Maven'
    ],
    metrics: [
      {
        label: { pt: 'Tempo de Resposta Médio', en: 'Average Response Time' },
        value: '23ms',
        colorClass: 'text-blue-500',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: { pt: 'Cobertura de Testes', en: 'Test Coverage' },
        value: '92%',
        colorClass: 'text-green-400',
        icon: <ShieldCheck className="w-5 h-5" />,
      },
      {
        label: { pt: 'Endpoints Documentados', en: 'Documented Endpoints' },
        value: '15+',
        colorClass: 'text-blue-500',
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        label: { pt: 'Operações CRUD', en: 'CRUD Operations' },
        value: '100%',
        colorClass: 'text-purple-400',
        icon: <Server className="w-5 h-5" />,
      },
    ],
    sections: [
      {
        title: {
          pt: 'Contexto e Objetivo do Projeto',
          en: 'Project Context and Objective',
        },
        content: {
          pt: 'A necessidade de modernizar o sistema legado de gestão de livros de uma biblioteca universitária, que apresentava lentidão e falta de padronização nas APIs.\n\nDesenvolver uma API RESTful moderna, escalável e bem documentada para substituir o sistema existente.\n\nImplementação com Java 17 e Spring Boot 3.1.7, seguindo princípios RESTful e boas práticas de desenvolvimento.\n\nRedução de 78% no tempo de resposta e aumento de 40% na produtividade da equipe de desenvolvimento front-end graças à documentação Swagger.',
          en: 'The need to modernize a university library legacy book management system, which was slow and lacked API standardization.\n\nDevelop a modern, scalable and well-documented RESTful API to replace the existing system.\n\nImplementation with Java 17 and Spring Boot 3.1.7, following RESTful principles and development best practices.\n\n78% reduction in response time and 40% increase in front-end team productivity thanks to Swagger documentation.',
        },
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api1.png',
      },
      {
        title: {
          pt: 'Arquitetura e Design da API',
          en: 'API Architecture and Design',
        },
        content: {
          pt: 'Necessidade de uma arquitetura limpa e organizada que facilitasse a manutenção e evolução do sistema.\n\nCriar uma estrutura modular com separação clara de responsabilidades.\n\nImplementação em camadas (Controller, Service, Repository) com DTOs para transferência de dados, validações robustas e tratamento centralizado de exceções.\n\nCódigo 60% mais legível e redução de 45% em bugs relacionados a validação de dados.',
          en: 'Need for a clean and organized architecture that would facilitate system maintenance and evolution.\n\nCreate a modular structure with clear separation of responsibilities.\n\nLayered implementation (Controller, Service, Repository) with DTOs for data transfer, robust validations and centralized exception handling.\n\n60% more readable code and 45% reduction in data validation related bugs.',
        },
        icon: <Layers className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api2.png',
      },
      {
        title: {
          pt: 'Persistência de Dados e Performance',
          en: 'Data Persistence and Performance',
        },
        content: {
          pt: 'O sistema legado apresentava lentidão em consultas complexas e problemas de integridade de dados.\n\nGarantir operações de banco de dados eficientes e confiáveis.\n\nUtilização de Spring Data JPA com Hibernate, consultas otimizadas, índices estratégicos e cache de segundo nível.\n\nMelhoria de 15x na performance de consultas complexas e 100% de integridade nas transações críticas.',
          en: 'The legacy system was slow in complex queries and had data integrity issues.\n\nEnsure efficient and reliable database operations.\n\nUsing Spring Data JPA with Hibernate, optimized queries, strategic indexes and second-level cache.\n\n15x improvement in complex query performance and 100% integrity in critical transactions.',
        },
        icon: <HardDrive className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api3.png',
      },
      {
        title: {
          pt: 'Documentação com Springdoc OpenAPI',
          en: 'Documentation with Springdoc OpenAPI'
        },
        content: {
          pt: 'Falta de documentação adequada no sistema anterior causava atrasos no desenvolvimento.\n\nCriar documentação interativa e sempre atualizada.\n\nIntegração do Springdoc OpenAPI (Swagger UI) com descrições detalhadas de todos os endpoints, modelos de request/response e exemplos.\n\nRedução de 65% no tempo de integração com outros sistemas e elogios da equipe de QA pela clareza dos contratos de API.',
          en: 'Lack of proper documentation in the previous system caused development delays.\n\nCreate interactive and always up-to-date documentation.\n\nSpringdoc OpenAPI (Swagger UI) integration with detailed descriptions of all endpoints, request/response models and examples.\n\n65% reduction in integration time with other systems and praise from the QA team for API contract clarity.',
        },
        icon: <Code className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api4.png',
      },
      {
        title: {
          pt: 'Testes Automatizados e Qualidade',
          en: 'Automated Tests and Quality'
        },
        content: {
          pt: 'Altos custos com testes manuais e regressões frequentes no sistema antigo.\n\nImplementar suite abrangente de testes automatizados.\n\nDesenvolvimento de testes unitários (JUnit 5, Mockito), de integração e testes de contrato para garantir a qualidade em todas as camadas.\n\n92% de cobertura de código e redução de 80% em bugs reportados em produção.',
          en: 'High costs with manual testing and frequent regressions in the old system.\n\nImplement comprehensive automated test suite.\n\nDevelopment of unit tests (JUnit 5, Mockito), integration tests and contract tests to ensure quality at all layers.\n\n92% code coverage and 80% reduction in production-reported bugs.',
        },
        icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api5.png',
      },
      {
        title: {
          pt: 'Deploy com Docker e Prontidão para Produção',
          en: 'Docker Deployment and Production Readiness',
        },
        content: {
          pt: 'Dificuldades na implantação do sistema legado em diferentes ambientes.\n\nGarantir portabilidade e facilidade de deploy em qualquer ambiente.\n\nContainerização da aplicação com Docker, criação de Dockerfiles otimizados e configuração de variáveis de ambiente para diferentes estágios.\n\nProcesso de deploy reduzido de horas para minutos e capacidade de escalar horizontalmente sob demanda.',
          en: 'Difficulties in deploying the legacy system across different environments.\n\nEnsure portability and ease of deployment in any environment.\n\nApplication containerization with Docker, creation of optimized Dockerfiles and environment variable configuration for different stages.\n\nDeployment process reduced from hours to minutes and ability to scale horizontally on demand.',
        },
        icon: <BarChart className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api6.png',
      },
      {
        title: {
          pt: 'Lições Aprendidas e Melhorias Futuras',
          en: 'Lessons Learned and Future Improvements',
        },
        content: {
          pt: 'O projeto serviu como estudo de caso para adoção de boas práticas em desenvolvimento de APIs.\n\nDocumentar aprendizados e planejar próximos passos.\n\nIdentificação de oportunidades como adição de autenticação JWT, implementação de cache com Redis e migração para Kubernetes.\n\nBase sólida para evolução contínua, com roadmap claro para próximas funcionalidades e melhorias de performance.',
          en: 'The project served as a case study for adopting API development best practices.\n\nDocument learnings and plan next steps.\n\nIdentification of opportunities such as adding JWT authentication, implementing Redis caching and migrating to Kubernetes.\n\nSolid foundation for continuous evolution, with clear roadmap for next features and performance improvements.',
        },
        icon: <Cloud className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/book-api7.png',
      },
    ],
    repositoryUrl: 'https://github.com/luca490/book-api',
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