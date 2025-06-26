// ProjectDetailPage.jsx
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
  // Estado para controlar o idioma atual da página - 'pt' para Português, 'en' para Inglês.
  const [language, setLanguage] = useState('pt');

  // Objeto para armazenar as traduções do "systemTag"
  const systemTagTranslations = {
    pt: 'SISTEMA DISTRIBUÍDO',
    en: 'DISTRIBUTED SYSTEM',
  };

  // Objeto 'project' contém todos os dados do projeto exibidos na página.
  const project = {
    // Título do projeto. Forneça o título em português e inglês.
    title: {
      pt: 'Plataforma de Microsserviços de Alta Performance',
      en: 'High-Performance Microservices Platform',
    },
    // Slogan ou frase de efeito curta que resume o projeto. Exemplo: 'Inovando a forma como interagimos com [Tecnologia/Setor]'
    tagline: {
      pt: 'Orquestração de transações críticas com latência ultrabaixa e resiliência excepcional.',
      en: 'Orchestration of critical transactions with ultra-low latency and exceptional resilience.',
    },
    // Descrição detalhada do projeto. Apresente o problema que resolve e a solução.
    description: {
      pt: 'Solução arquitetural robusta projetada para modernizar sistemas legados, eliminando gargalos de performance e garantindo consistência transacional em ambientes distribuídos. Implementação focada em alta disponibilidade, escalabilidade horizontal e compliance regulatório.', // Exemplo: 'Este projeto oferece uma solução completa para [problema], utilizando [principais tecnologias] para [benefícios].'
      en: 'Robust architectural solution designed to modernize legacy systems, eliminating performance bottlenecks and ensuring transactional consistency in distributed environments. Implementation focused on high availability, horizontal scalability, and regulatory compliance.', // Example: 'This project provides a comprehensive solution for [problem], utilizing [key technologies] to [benefits].'
    },
    // Lista das tecnologias, linguagens e ferramentas utilizadas no projeto. Mantenha os nomes em inglês, pois geralmente não são traduzidos.
    technologies: [
      'Kubernetes',
      'gRPC',
      'Apache Kafka',
      'Redis Cluster',
      'PostgreSQL',
      'Golang',
      'Node.js'
      // Adicione mais tecnologias conforme necessário.
    ],
    // Métricas chave ou resultados alcançados pelo projeto.
    // Cada métrica inclui um rótulo (traduzível), valor, classe de cor para estilização e um ícone.
    metrics: [
      {
        label: { pt: 'Latência Média', en: 'Average Latency' }, // Rótulo da métrica.
        value: '2.4ms',                                           // Valor da métrica (string).
        colorClass: 'text-blue-500',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: { pt: 'Disponibilidade', en: 'Availability' },
        value: '99.999%',
        colorClass: 'text-green-400',
        icon: <ShieldCheck className="w-5 h-5" />,
      },
      {
        label: { pt: 'TPS Máximo', en: 'Max TPS' },
        value: '20,000+',
        colorClass: 'text-blue-500',
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        label: { pt: 'Nós Cluster', en: 'Cluster Nodes' },
        value: '24',
        colorClass: 'text-purple-400',
        icon: <Server className="w-5 h-5" />,
      },
    ],
    // Seções detalhadas do projeto. Cada seção deve abordar um aspecto diferente.
    // Forneça título e conteúdo para cada seção em português e inglês.
    sections: [
      {
        title: {
          pt: 'Contexto e Desafio de Negócio', // Título da seção.
          en: 'Context and Business Challenge',
        },
        content: {   // Conteúdo detalhado da seção.
          pt: 'O objetivo central era a transformação de um sistema monolítico obsoleto, que não conseguia acompanhar o volume crescente de operações, em uma infraestrutura ágil e resiliente. A migração visava não apenas resolver problemas de performance e escalabilidade, mas também estabelecer uma base sólida para inovações futuras, mantendo a integridade e segurança dos dados sob as mais rigorosas exigências regulatórias.',
          en: 'The core objective was to transform an outdated monolithic system, unable to keep pace with the increasing volume of operations, into an agile and resilient infrastructure. The migration aimed not only to resolve performance and scalability issues but also to establish a solid foundation for future innovations, maintaining data integrity and security under the most stringent regulatory requirements.',
        },
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/contexto.png', // Exemplo de caminho de imagem
      },
      {
        title: {
          pt: 'Arquitetura de Microsserviços e Orquestração',
          en: 'Microservices Architecture and Orchestration',
        },
        content: {
          pt: 'A implementação estratégica de uma **arquitetura de microsserviços desacoplada** foi fundamental. Cada serviço é independente, facilitando o desenvolvimento, implantação e escalabilidade. Utilizamos **Spring Boot** e **Golang** para construir serviços eficientes e leves, enquanto **Apache Kafka** garante uma comunicação assíncrona robusta e tolerante a falhas. A orquestração e o auto-scaling são gerenciados de forma eficiente pelo **Kubernetes**, garantindo alta disponibilidade e otimização de recursos.',
          en: 'The strategic implementation of a **decoupled microservices architecture** was fundamental. Each service is independent, facilitating development, deployment, and scalability. We used **Spring Boot** and **Golang** to build efficient and lightweight services, while **Apache Kafka** ensures robust and fault-tolerant asynchronous communication. Orchestration and auto-scaling are efficiently managed by **Kubernetes**, ensuring high availability and resource optimization.',
        },
        icon: <Layers className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/arquitetura.png', // Exemplo de caminho de imagem
      },
      {
        title: {
          pt: 'Gestão de Dados e Estratégias de Persistência',
          en: 'Data Management and Persistence Strategies',
        },
        content: {
          pt: 'A modelagem de dados foi cuidadosamente otimizada no **PostgreSQL** para garantir alta performance em consultas complexas e a integridade transacional de dados críticos. Para otimizar ainda mais o desempenho e reduzir a carga sobre o banco de dados principal, implementamos **Redis Cluster** para caching distribuído, gerenciamento de sessões e filas de eventos, assegurando respostas rápidas e uma experiência de usuário fluida.',
          en: 'Data modeling was carefully optimized in **PostgreSQL** to ensure high performance in complex queries and transactional integrity of critical data. To further optimize performance and reduce the load on the main database, we implemented **Redis Cluster** for distributed caching, session management, and event queues, ensuring rapid responses and a fluid user experience.',
        },
        icon: <HardDrive className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/dados.png', // Exemplo de caminho de imagem
      },
      {
        title: { pt: 'Design de APIs e Integração Contínua', en: 'API Design and Continuous Integration' },
        content: {
          pt: 'Desenvolvemos APIs **RESTful** e **gRPC** com contratos bem definidos, utilizando **OpenAPI/Swagger** para documentação interativa e validação. Isso garante a interoperabilidade perfeita entre os microsserviços e facilita a integração com sistemas externos. Nossas APIs são projetadas para serem intuitivas e eficientes, otimizando o consumo por parte de outras aplicações.',
          en: 'We developed **RESTful** and **gRPC** APIs with well-defined contracts, using **OpenAPI/Swagger** for interactive documentation and validation. This ensures seamless interoperability between microservices and facilitates integration with external systems. Our APIs are designed to be intuitive and efficient, optimizing consumption by other applications.',
        },
        icon: <Code className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/api.png', // Exemplo de caminho de imagem
      },
      {
        title: {
          pt: 'Segurança, Compliance e Resiliência',
          en: 'Security, Compliance, and Resilience'
        },
        content: {
          pt: 'A segurança é uma prioridade. Implementamos autenticação **OAuth2/JWT** e autorização baseada em roles. Todos os dados sensíveis são criptografados em repouso e em trânsito. Adicionalmente, o sistema é totalmente aderente a regulamentações como **GDPR/LGPD**, com auditoria completa de logs e mecanismos de resiliência a falhas para garantir a continuidade do negócio e a proteção das informações dos usuários.',
          en: 'Security is a priority. We implemented **OAuth2/JWT** authentication and role-based authorization. All sensitive data is encrypted at rest and in transit. Additionally, the system is fully compliant with regulations such as **GDPR/LGPD**, with full log auditing and fault tolerance mechanisms to ensure business continuity and user data protection.',
        },
        icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/seguranca.png', // Exemplo de caminho de imagem
      },
      {
        title: {
          pt: 'Observabilidade, Monitoramento e Resposta a Incidentes',
          en: 'Observability, Monitoring, and Incident Response',
        },
        content: {
          pt: 'Para garantir a estabilidade e o bom funcionamento, configuramos o **Prometheus** para coleta de métricas em tempo real e o **Grafana** para visualização intuitiva através de dashboards personalizados. A integração com sistemas de logging centralizado permite o rastreamento proativo de erros, depuração eficiente e uma resposta rápida a qualquer incidente, minimizando o tempo de inatividade.',
          en: 'To ensure stability and proper functioning, we configured **Prometheus** for real-time metric collection and **Grafana** for intuitive visualization through custom dashboards. Integration with centralized logging systems allows for proactive error tracing, efficient debugging, and rapid response to any incident, minimizing downtime.',
        },
        icon: <BarChart className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/monitoramento.png', // Exemplo de caminho de imagem
      },
      {
        title: {
          pt: 'Automação de Deploy e Infraestrutura como Código (IaC)',
          en: 'Deployment Automation and Infrastructure as Code (IaC)',
        },
        content: {
          pt: 'Nosso processo de desenvolvimento é suportado por um pipeline de CI/CD automatizado, utilizando **Jenkins** para builds, testes e deployments contínuos e sem interrupções em ambientes **Kubernetes**. A infraestrutura é gerenciada como código (**Terraform**), garantindo consistência, reprodutibilidade e agilidade no provisionamento de recursos, do desenvolvimento à produção.',
          en: 'Our development process is supported by an automated CI/CD pipeline, using **Jenkins** for continuous and uninterrupted builds, tests, and deployments in **Kubernetes** environments. Infrastructure is managed as code (**Terraform**), ensuring consistency, reproducibility, and agility in resource provisioning, from development to production.',
        },
        icon: <Cloud className="w-6 h-6 text-blue-500" />,
        imageUrl: '/images/deploy.png', // Exemplo de caminho de imagem
      },
      // Adicione mais seções para cobrir outros aspectos do projeto, como resultados, aprendizados, etc.
    ],
    repositoryUrl: 'https://github.com/example/microservices-platform',
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