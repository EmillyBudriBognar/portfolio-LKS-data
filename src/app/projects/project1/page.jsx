'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Server,
  BarChart,
  Cpu,
  GitBranch,
  ShieldCheck,
  Zap,
  ChevronLeft,
  Cloud,
  Layers,
  HardDrive,
  Network,
  Globe,
  Link as LinkIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProjectDetailPage = () => {
  const router = useRouter();

  // Paleta de cores minimalista premium
  const Colors = {
    // Cores de base
    textPrimary: 'text-gray-50',
    textSecondary: 'text-gray-300',
    textSubtle: 'text-gray-500',
    bgDarkest: 'bg-gray-950',
    bgDark: 'bg-gray-900',
    bgMedium: 'bg-gray-800',
    borderLight: 'border-gray-700',
    borderSubtle: 'border-gray-600',

    // Cores de destaque premium
    primaryBlue: 'text-blue-400',
    accentYellow: 'text-yellow-300', // Amarelo mais suave
    bgBlue: 'bg-blue-600/90',
    bgYellow: 'bg-yellow-500/90',

    // Gradientes refinados
    gradientBlueHero: 'from-blue-900/20 to-blue-950/70',
    gradientBlueCTA: 'from-blue-800/80 to-blue-900/90',
    gradientYellowButton: 'from-yellow-500 to-yellow-600',
    shadowDefault: 'shadow-lg',
    shadowStrong: 'shadow-xl',
  };

  const project = {
    title: 'Plataforma de Microsserviços de Alta Performance',
    category: 'Backend Distribuído',
    tagline: 'Orquestração de transações críticas com baixa latência e resiliência excepcional.',
    description:
      'Uma solução robusta e escalável projetada para modernizar sistemas legados, eliminando gargalos de performance e garantindo a consistência e segurança de dados para um crescimento exponencial de usuários e transações financeiras. Este projeto foca em arquitetura desacoplada, alta disponibilidade e conformidade regulatória.',
    technologies: [
      'Java 17',
      'Spring Boot 3',
      'Apache Kafka',
      'PostgreSQL',
      'Redis',
      'Kubernetes',
      'Grafana',
      'Prometheus',
      'Spring Cloud',
      'OpenAPI/Swagger',
      'Jenkins',
      'Terraform',
    ],
    metrics: [
      {
        value: '20.000+',
        label: 'Requisições/Segundo',
        icon: <Server className="w-5 h-5" />,
        color: Colors.accentYellow,
      },
      {
        value: '99.999%',
        label: 'Disponibilidade (SLA)',
        icon: <ShieldCheck className="w-5 h-5" />,
        color: Colors.primaryBlue,
      },
      {
        value: '<30ms',
        label: 'Latência P99',
        icon: <Zap className="w-5 h-5" />,
        color: Colors.accentYellow,
      },
      {
        value: '1 TB+',
        label: 'Dados Processados/Dia',
        icon: <Database className="w-5 h-5" />,
        color: Colors.primaryBlue,
      },
    ],
    sections: [
      {
        title: 'Contexto e Desafio de Negócio',
        content:
          'O objetivo central era a transformação de um sistema monolítico obsoleto, que não conseguia acompanhar o volume crescente de operações, em uma infraestrutura ágil e resiliente. A migração visava não apenas resolver problemas de performance e escalabilidade, mas também estabelecer uma base sólida para inovações futuras, mantendo a integridade e segurança dos dados sob as mais rigorosas exigências regulatórias.',
        icon: <Globe className="w-6 h-6" />,
      },
      {
        title: 'Arquitetura de Microsserviços e Orquestração',
        content:
          'A implementação estratégica de uma **arquitetura de microsserviços desacoplada** foi fundamental. Cada serviço é independente, facilitando o desenvolvimento, implantação e escalabilidade. Utilizamos **Spring Boot** para construir esses serviços eficientes e leves, enquanto **Apache Kafka** garante uma comunicação assíncrona robusta e tolerante a falhas. A orquestração e o auto-scaling são gerenciados de forma eficiente pelo **Kubernetes**, garantindo alta disponibilidade e otimização de recursos.',
        icon: <Layers className="w-6 h-6" />,
      },
      {
        title: 'Gestão de Dados e Estratégias de Persistência',
        content:
          'A modelagem de dados foi cuidadosamente otimizada no **PostgreSQL** para garantir alta performance em consultas complexas e a integridade transacional de dados críticos. Para otimizar ainda mais o desempenho e reduzir a carga sobre o banco de dados principal, implementamos **Redis** para caching distribuído, gerenciamento de sessões e filas de eventos, assegurando respostas rápidas e uma experiência de usuário fluida.',
        icon: <HardDrive className="w-6 h-6" />,
      },
      {
        title: 'Design de APIs e Integração Contínua',
        content:
          'Desenvolvemos APIs **RESTful** e **gRPC** com contratos bem definidos, utilizando **OpenAPI/Swagger** para documentação interativa e validação. Isso garante a interoperabilidade perfeita entre os microsserviços e facilita a integração com sistemas externos. Nossas APIs são projetadas para serem intuitivas e eficientes, otimizando o consumo por parte de outras aplicações.',
        icon: <Code className="w-6 h-6" />,
      },
      {
        title: 'Segurança, Compliance e Resiliência',
        content:
          'A segurança é uma prioridade. Implementamos autenticação **OAuth2/JWT** e autorização baseada em roles. Todos os dados sensíveis são criptografados em repouso e em trânsito. Adicionalmente, o sistema é totalmente aderente a regulamentações como **GDPR/LGPD**, com auditoria completa de logs e mecanismos de resiliência a falhas para garantir a continuidade do negócio e a proteção das informações dos usuários.',
        icon: <ShieldCheck className="w-6 h-6" />,
      },
      {
        title: 'Observabilidade, Monitoramento e Resposta a Incidentes',
        content:
          'Para garantir a estabilidade e o bom funcionamento, configuramos o **Prometheus** para coleta de métricas em tempo real e o **Grafana** para visualização intuitiva através de dashboards personalizados. A integração com sistemas de logging centralizado (como ELK Stack) permite o rastreamento proativo de erros, depuração eficiente e uma resposta rápida a qualquer incidente, minimizando o tempo de inatividade.',
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        title: 'Automação de Implantação e Infraestrutura como Código (IaC)',
        content:
          'Nosso processo de desenvolvimento é suportado por um pipeline de CI/CD automatizado, utilizando **Jenkins** e **GitLab CI** para builds, testes e deployments contínuos e sem interrupções em ambientes **Kubernetes**. A infraestrutura é gerenciada como código (**Terraform**), garantindo consistência, reprodutibilidade e agilidade na provisionamento de recursos, do desenvolvimento à produção.',
        icon: <Cloud className="w-6 h-6" />,
      },
    ],
    repositoryUrl: 'https://github.com/seu-usuario/nome-do-projeto-backend',
    liveDemoUrl: 'https://demo.seusite.com/backend-api-docs',
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'backend distribuído':
        return <Network className={`w-5 h-5 ${Colors.primaryBlue}`} />;
      case 'java':
        return <Code className={`w-5 h-5 ${Colors.primaryBlue}`} />;
      case 'bi':
        return <BarChart className={`w-5 h-5 ${Colors.primaryBlue}`} />;
      case 'data':
        return <Database className={`w-5 h-5 ${Colors.primaryBlue}`} />;
      default:
        return <Cpu className={`w-5 h-5 ${Colors.primaryBlue}`} />;
    }
  };

  return (
    <div className={`min-h-screen ${Colors.bgDarkest} ${Colors.textPrimary} font-sans antialiased overflow-hidden`}>
      {/* Cabeçalho Premium */}
      <header className={`border-b ${Colors.borderLight} py-5 px-4 sm:px-6 lg:px-8 ${Colors.bgDark} bg-opacity-90 backdrop-blur-sm sticky top-0 z-20`}>
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <motion.button
            whileHover={{ x: -3, color: '#60a5fa' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className={`flex items-center gap-2 ${Colors.textSecondary} hover:${Colors.primaryBlue} transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-1`}
            aria-label="Voltar aos projetos"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-lg font-medium hidden sm:inline">Voltar aos Projetos</span>
          </motion.button>

          <div className={`flex items-center gap-3 ${Colors.bgMedium} bg-opacity-60 px-4 py-2 rounded-full border ${Colors.borderSubtle} shadow-sm backdrop-blur-sm`}>
            {getCategoryIcon(project.category)}
            <span className={`text-sm font-semibold ${Colors.primaryBlue}`}>
              {project.category}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${Colors.gradientBlueHero}`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="px-4 sm:px-0"
          >
            <div className="mb-4">
              <span className={`text-xs font-semibold ${Colors.primaryBlue} ${Colors.bgDark} bg-opacity-30 px-3 py-1 rounded-full uppercase tracking-wider`}>
                PROJETO BACKEND
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              <span className={`bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h1>

            <p className={`text-lg sm:text-xl ${Colors.textSecondary} mb-6 sm:mb-8 max-w-3xl leading-relaxed font-light`}>
              {project.tagline}
            </p>

            <p className={`text-base sm:text-lg ${Colors.textSubtle} mb-10 sm:mb-12 max-w-4xl leading-relaxed`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.05,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${Colors.bgMedium} ${Colors.textSecondary} border ${Colors.borderSubtle} shadow-sm hover:scale-105 transition-all duration-200 ease-out cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Métricas de Desempenho Premium */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/70 border ${Colors.borderSubtle} rounded-xl p-5 sm:p-6 flex flex-col items-start ${Colors.shadowStrong} hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
              >
                <div className={`flex items-center gap-3 mb-3 ${metric.color}`}>
                  {metric.icon}
                  <span className={`text-xs sm:text-sm font-medium ${Colors.textSecondary}`}>
                    {metric.label}
                  </span>
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className={`mt-3 sm:mt-4 w-full h-1 bg-gradient-to-r ${metric.color.replace('text-', 'from-')}/40 ${metric.color.replace('text-', 'to-')}/40 rounded-full`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Detalhado do Projeto - Versão Premium */}
      <section className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${Colors.bgDark} bg-opacity-20 border-t ${Colors.borderLight}`}>
        <div className="max-w-7xl mx-auto">
          {project.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: '-50px' }}
              className={`mb-16 sm:mb-24 last:mb-0 flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-start lg:gap-12 xl:gap-16`}
            >
              <div className={`w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-6 xl:pr-8' : 'lg:pl-6 xl:pl-8'}`}>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`p-3 rounded-lg ${Colors.primaryBlue} ${Colors.bgDark} bg-opacity-30`}>
                    {section.icon}
                  </div>
                  <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${Colors.accentYellow}`}>
                    {section.title}
                  </h2>
                </div>
                <p className={`text-base sm:text-lg ${Colors.textSecondary} leading-relaxed`}>
                  {section.content}
                </p>
              </div>

              {/* Container de imagem centralizado e responsivo */}
              <div className={`w-full lg:w-1/2 ${Colors.bgMedium} bg-opacity-40 rounded-xl overflow-hidden border ${Colors.borderSubtle} min-h-[240px] sm:min-h-[280px] flex items-center justify-center p-4 sm:p-6 ${Colors.shadowStrong} backdrop-blur-sm mx-auto`}>
                <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-blue-950/40 rounded-lg border border-dashed border-blue-700/30 text-center p-4 sm:p-6 ${Colors.textSubtle}`}>
                  <div className={`text-5xl sm:text-6xl font-extrabold mb-3 sm:mb-4 opacity-20 ${Colors.primaryBlue}`}>
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm italic max-w-sm">
                    Espaço para <strong>diagrama de arquitetura</strong>, <strong>snippet de código</strong> relevante ou uma <strong>imagem ilustrativa</strong> sobre "{section.title}".
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Premium Simplificado */}
      <section className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center ${Colors.bgDarkest}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className={`bg-gray-800/90 rounded-2xl p-6 sm:p-8 md:p-10 border ${Colors.borderSubtle} shadow-md overflow-hidden relative`}
          >
            <div className="relative z-10">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 sm:mb-6 ${Colors.textPrimary} leading-tight`}>
                Explore a Fundo: Código-Fonte e Documentação
              </h3>
              <p className={`text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto`}>
                Para uma compreensão completa, convidamos você a explorar o repositório do projeto ou
                acessar a documentação detalhada da API.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                {project.repositoryUrl && (
                  <Link href={project.repositoryUrl} passHref legacyBehavior>
                    <motion.a
                      whileHover={{
                        y: -2,
                        backgroundColor: '#374151',
                      }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 ease-in-out border ${Colors.borderSubtle} ${Colors.textPrimary} text-base sm:text-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                      aria-label="Ver Código Fonte no GitHub"
                    >
                      <GitBranch className={`w-5 h-5 sm:w-6 sm:h-6 ${Colors.primaryBlue}`} />
                      Ver Código Fonte
                    </motion.a>
                  </Link>
                )}

                {project.liveDemoUrl && (
                  <Link href={project.liveDemoUrl} passHref legacyBehavior>
                    <motion.a
                      whileHover={{
                        y: -2,
                        backgroundColor: '#ca8a04',
                      }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 hover:bg-yellow-500 text-gray-900 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 ease-in-out text-base sm:text-lg font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50`}
                      aria-label="Acessar Documentação da API"
                    >
                      <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      Acessar Documentação
                    </motion.a>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rodapé Premium */}
      <footer className={`border-t ${Colors.borderLight} py-8 sm:py-10 px-4 sm:px-6 lg:px-8 ${Colors.bgDark} bg-opacity-30 backdrop-blur-sm`}>
        <div className={`max-w-7xl mx-auto text-center ${Colors.textSubtle} text-xs sm:text-sm`}>
          <p className="mb-2">Desenvolvido com foco nas melhores práticas de engenharia de software.</p>
          <p className={`text-xs ${Colors.primaryBlue}`}>
            <span className="font-semibold">Princípios Chave:</span> Performance • Segurança • Escalabilidade • Manutenibilidade • Experiência do Desenvolvedor
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;