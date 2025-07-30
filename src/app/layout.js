import "./globals.css";

// Dados Profissionais
const professionalData = {
  name: "Lucas de Lima Oliveira",
  mainSite: "https://www.lksdata.com.br",
  aliasSite: "https://lks-data.vercel.app", 
  role: "Analista de Dados Power BI",
  skills: [
    "Python", "Java", "Spring Boot", "SQL", "MongoDB", "AWS", "Azure",
    "Power BI", "Google Analytics", "Análise de Dados", "Visualização de Dados",
    "Machine Learning", "Big Data Analytics", "ETL", "Data Lakes",
    "Pipelines de Dados", "Processamento de Linguagem Natural", "Visão Computacional",
    "Automação de Dados", "Otimização de Dados", "Airflow", "Relatórios Automatizados",
    "DAX", "Power Query", "Dashboarding", "Business Intelligence", "Estratégia de Dados",
    "Consultoria Power BI", "Engenharia de Dados", "Cientista de Dados", "Gestão de Dados"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lucaslima020106/",
    github: "https://github.com/luca490",
    email: "mailto:lucastech216@gmail.com",
  },
  location: "São Paulo, Brasil"
};

export const metadata = {
  title: "LKS Data: Soluções em Análise de Dados e Power BI | Consultoria Especializada",
  description:
    "Transformamos dados brutos em insights estratégicos. A LKS Data oferece consultoria em Análise de Dados, Power BI, ETL e Big Data para impulsionar o sucesso da sua empresa. Descubra nossas soluções em dados de alto impacto.",

  authors: [
    { name: "Lucas de Lima Oliveira", url: professionalData.mainSite },
    { name: "Portfólio desenvolvido por Emilly Budri Bognar", url: "https://budri.com.br" }
  ],
  
  // Robôs e GoogleBot para garantir indexação e rastreamento completo
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1, 
      "max-image-preview": "large", 
      "max-video-preview": -1, 
    },
  },
  
  // Open Graph para compartilhamento otimizado em redes sociais
  openGraph: {
    title: "LKS Data: Soluções em Análise de Dados e Power BI | Consultoria Especializada",
    description: "Transformamos dados brutos em insights estratégicos. A LKS Data oferece consultoria em Análise de Dados, Power BI, ETL e Big Data para impulsionar o sucesso da sua empresa. Descubra nossas soluções em dados de alto impacto.",
    url: professionalData.mainSite,
    siteName: "LKS Data",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${professionalData.mainSite}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'LKS Data - Soluções em Análise de Dados e Power BI',
      },
    ],
  },
  
  // Ícones do site
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", 
    apple: "/apple-touch-icon.png", 
  },
  
  metadataBase: new URL(professionalData.mainSite),
  alternates: {
    canonical: professionalData.mainSite,
  },
  
  // Palavras-chave 
  keywords: [
    ...professionalData.skills,
    "LKS Data", "Soluções em Dados", "Análise de Dados", "Power BI",
    "Data Science", "Big Data", "Machine Learning", "Consultoria em Dados",
    "Relatórios Automatizados", "ETL", "Data Lake", "Pipelines de Dados",
    "Python para Dados", "SQL para Dados", "Power BI Consultoria", "AWS Dados",
    "Azure Dados", "Otimização de Dados", "Automação de Dados", "Insights de Negócio",
    "Transformação Digital com Dados", "Lucas de Lima Oliveira", "Analista de Dados Brasil",
    "Portfólio Análise de Dados", "Consultoria Power BI", "Especialista Power BI",
    "Desenvolvimento de Dashboards", "Data Mining", "Modelagem de Dados", "Governança de Dados",
    "Tendências em Dados 2025", "Business Intelligence", "Visualização de Dados",
    "Estruturação de Dados", "Treinamento Power BI", "Suporte Power BI", "Serviços de BI",
    "Otimização de Performance Power BI", "Integração de Dados", "Ferramentas de BI",
    "KPIs", "Métricas de Negócio", "Automatização de Relatórios", "Data Storytelling",
    "Inteligência Artificial em Dados", "Analytics", "Especialista em Dados",
    "Engenheiro de Dados", "Cientista de Dados Freelancer", "Consultor de BI"
  ],
  category: "technology",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Meta Tags Essenciais */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />

        {/* Pré-carregamento de recursos críticos e otimização de fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: professionalData.name,
                  url: professionalData.mainSite,
                  sameAs: [
                    ...Object.values(professionalData.socialLinks),
                    professionalData.aliasSite 
                  ],
                  jobTitle: professionalData.role,
                  knowsAbout: professionalData.skills,
                  description: professionalData.description,
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": professionalData.mainSite
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: professionalData.location.split(", ")[0],
                    addressRegion: professionalData.location.split(", ")[1],
                    addressCountry: "BR",
                  },
                },
                {
                  "@type": "WebSite",
                  url: professionalData.mainSite,
                  name: "LKS Data",
                  alternateName: "Soluções em Dados de Alto Impacto",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${professionalData.mainSite}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Service",
                  name: "Consultoria em Análise de Dados",
                  serviceType: "Consultoria em Business Intelligence",
                  description: "Serviços especializados em análise de dados, Power BI, ETL e Big Data para otimizar suas decisões de negócio.",
                  provider: {
                    "@type": "Person",
                    name: professionalData.name,
                  },
                  areaServed: {
                    "@type": "Place",
                    name: professionalData.location 
                  },
                  url: professionalData.mainSite + "#services", // Link para a seção de serviços
                }
              ]
            }),
          }}
        />

        {/* Otimizações de Performance */}
        {/* Pré-conexão para domínios externos usados, como analytics */}
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prefetching de links em hover para melhorar a navegação
              document.addEventListener('mouseover', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && link.hostname === location.hostname) {
                  const prefetchLink = document.createElement('link');
                  prefetchLink.rel = 'prefetch';
                  prefetchLink.href = link.href;
                  document.head.appendChild(prefetchLink);
                }
              });

              // Prevenção de double-tap em dispositivos móveis
              let lastTap = 0;
              document.addEventListener('touchend', function(event) {
                const now = Date.now();
                if (now - lastTap < 300) event.preventDefault();
                lastTap = now;
              }, { passive: false });
            `,
          }}
        />

      </head>
      <body className="antialiased min-h-screen w-full overflow-x-hidden">
        {children}

        {/* Microdados para SEO */}
        <div itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
          <span itemProp="name">{professionalData.name}</span>
          <span itemProp="jobTitle">{professionalData.role}</span>
          <span itemProp="knowsAbout">{professionalData.skills.join(", ")}</span>
          <a itemProp="url" href={professionalData.mainSite}>
            {professionalData.mainSite}
          </a>
          <div itemProp="contributor" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">Emilly Budri Bognar</span>
            <a itemProp="url" href="https://budri.com.br">budri.com.br</a>
          </div>
        </div>
      </body>
    </html>
  );
}