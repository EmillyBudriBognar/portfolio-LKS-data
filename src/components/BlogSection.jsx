'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';

const BlogSection = ({ language = 'en' }) => { // Default to 'en' if no language prop is passed
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Blog content in both languages
  const content = {
    en: {
      sectionHeader: {
        title: "Latest Articles",
        subtitle: "Insights and analysis on data science and engineering."
      },
      articles: [
        {
          id: 1,
          title: "Data Analysis in Scientific Research",
          excerpt: "Exploring how data analysis techniques can enhance research quality in scientific publications.",
          link: "/blog/1",
          source: "SciELO - Brasil",
          date: "May 2023"
        },
        {
          id: 2,
          title: "Automating Academic Data Collection",
          excerpt: "Methods for automating data collection from academic sources to improve research efficiency.",
          link: "/blog/2",
          source: "SciELO - Brasil",
          date: "March 2023"
        }
      ],
      viewAll: "View all articles",
      readMore: "Read more"
    },
    pt: {
      sectionHeader: {
        title: "Artigos Recentes",
        subtitle: "Análises e insights sobre ciência de dados e engenharia."
      },
      articles: [
        {
          id: 1,
          title: "Análise de Dados em Pesquisa Científica",
          excerpt: "Explorando como técnicas de análise de dados podem melhorar a qualidade da pesquisa em publicações científicas.",
          link: "/blog/1",
          source: "SciELO - Brasil",
          date: "Maio 2023"
        },
        {
          id: 2,
          title: "Automatizando Coleta de Dados Acadêmicos",
          excerpt: "Métodos para automatizar a coleta de dados de fontes acadêmicas para melhorar a eficiência da pesquisa.",
          link: "/blog/2",
          source: "SciELO - Brasil",
          date: "Março 2023"
        }
      ],
      viewAll: "Ver todos os artigos",
      readMore: "Ler mais"
    }
  };

  const currentContent = content[language];

  return (
    <section id="blog" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={currentContent.sectionHeader.title}
          subtitle={currentContent.sectionHeader.subtitle}
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentContent.articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}  // Passando o objeto article completo
              readMoreText={currentContent.readMore}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;