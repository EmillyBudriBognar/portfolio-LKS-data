import "./globals.css";

// Dados
const professionalData = {
  name: "Lucas de Lima Oliveira",
  site: "https://www.lksdata.com.br",
  role: "Analista de Dados Power BI",
  skills: [
    "Python", "Java", "Spring Boot", "SQL", "MongoDB", "AWS", "Azure",
    "Power BI", "Google Analytics", "Análise de Dados", "Visualização de Dados",
    "Machine Learning", "Big Data Analytics", "ETL", "Data Lakes",
    "Pipelines de Dados", "Processamento de Linguagem Natural", "Visão Computacional",
    "Automação de Dados", "Otimização de Dados", "Airflow", "Relatórios Automatizados",
    "DAX", "Power Query", "Dashboarding", "Business Intelligence"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lucaslima020106/",
    github: "https://github.com/luca490",
    email: "mailto:lucastech216@gmail.com",
  },
  location: "São Paulo, Brasil"
};

export const metadata = {
  title: "LKS Data - Soluções em Dados de Alto Impacto | Análise de Dados",
  description:
    "LKS Data transforma dados brutos em insights poderosos que impulsionam sua empresa para o próximo nível. Soluções inovadoras em análise de dados.",
  authors: [
    { name: "Lucas de Lima Oliveira", url: "https://www.lksdata.com.br" },
    { name: "Portfólio desenvolvido por Emilly Budri Bognar", url: "https://budri.com.br" }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "LKS Data - Soluções em Dados de Alto Impacto | Análise de Dados",
    description: "LKS Data transforma dados brutos em insights poderosos que impulsionam sua empresa para o próximo nível. Soluções inovadoras em análise de dados.",
    url: "https://www.lksdata.com.br",
    siteName: "LKS Data",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", 
  },
  metadataBase: new URL("https://www.lksdata.com.br"),
  alternates: {
    canonical: "/",
  },
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
    "Tendências em Dados 2025", "Business Intelligence", "Visualização de Dados"
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

        {/* Pré-carregamento de recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data com informações verificáveis */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: professionalData.name,
              url: professionalData.site,
              jobTitle: professionalData.role,
              knowsAbout: professionalData.skills,
              sameAs: Object.values(professionalData.socialLinks),
              address: {
                "@type": "PostalAddress",
                addressLocality: professionalData.location.split(", ")[0],
                addressRegion: professionalData.location.split(", ")[1],
                addressCountry: "BR",
              },
              contributor: {
                "@type": "Person",
                name: "Emilly Budri Bognar",
                url: "https://budri.com.br"
              }
            }),
          }}
        />

        {/* Otimizações de Performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mouseover', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && link.hostname === location.hostname) {
                  const prefetchLink = document.createElement('link');
                  prefetchLink.rel = 'prefetch';
                  prefetchLink.href = link.href;
                  document.head.appendChild(prefetchLink);
                }
              });

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
          <a itemProp="url" href={professionalData.site}>
            {professionalData.site}
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