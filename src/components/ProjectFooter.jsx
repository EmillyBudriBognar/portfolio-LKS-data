import React from 'react';

const ProjectFooter = ({ language }) => {
  const translations = {
    pt: {
      developedWith: 'Desenvolvido com foco nas melhores práticas de engenharia de software.',
      principles: 'Performance • Segurança • Escalabilidade • Manutenibilidade • Experiência do Desenvolvedor',
      byBudri: 'Portfolio feito por Budri', 
    },
    en: {
      developedWith: 'Developed with a focus on software engineering best practices.',
      principles: 'Performance • Security • Scalability • Maintainability • Developer Experience',
      byBudri: 'Portfolio by Budri', 
    },
  };

  return (
    <footer className="border-t border-gray-700 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-xs sm:text-sm">
        <p className="mb-2">{translations[language].developedWith}</p>
        <p className="text-xs text-yellow-500 mb-2">
          {translations[language].principles}
        </p>
        <p className="text-xxs text-gray-600 mt-8">
          <a href="https://budri.com.br" target="_blank" rel="noopener noreferrer" className="hover:underline">
            {translations[language].byBudri}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default ProjectFooter;