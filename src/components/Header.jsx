'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import Image from 'next/image';

const Header = ({ language, onLanguageChange }) => {
  // Estado para controlar a abertura/fechamento do menu mobile.
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar a visibilidade do cabeçalho (aparecer/desaparecer ao rolar).
  const [isVisible, setIsVisible] = useState(true);
  // Estado para verificar se a página está no topo, para ajustar o estilo do cabeçalho.
  const [isTop, setIsTop] = useState(true);

  // Objeto de traduções para os itens de navegação, permitindo fácil internacionalização.
  const translations = {
    en: {
      navItems: [
        { name: 'Home', href: '#hero-section' },
        { name: 'Projects', href: '#projects-section' },
        { name: 'About', href: '#about-section' },
        { name: 'Contact', href: '#contact-section' },
      ],
    },
    pt: {
      navItems: [
        { name: 'Início', href: '#hero-section' },
        { name: 'Projetos', href: '#projects-section' },
        { name: 'Sobre', href: '#about-section' },
        { name: 'Contato', href: '#contact-section' },
      ],
    },
  };

  // Seleciona os itens de navegação com base no idioma atual.
  const navItems = translations[language].navItems;

  // Efeito para adicionar rolagem suave a todos os links internos.
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  // Efeito para controlar a visibilidade do cabeçalho com base na direção da rolagem.
  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Atualiza se a página está no topo.
          setIsTop(currentScroll < 100);

          // Lógica para mostrar/esconder o cabeçalho.
          if (currentScroll <= 100) {
            setIsVisible(true); // Sempre visível no topo.
          } else if (currentScroll > lastScroll && currentScroll > 100) {
            setIsVisible(false); // Esconde ao rolar para baixo.
          } else {
            setIsVisible(true); // Mostra ao rolar para cima.
          }

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    };

    // Adiciona e remove o listener de scroll.
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar para a seção clicada e fechar o menu mobile.
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false); // Fecha o menu mobile após a navegação.
    }
  };

  return (
    <>
      {/* Overlay para o menu mobile, que escurece o fundo e permite fechar o menu ao clicar fora. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Fecha o menu.
          />
        )}
      </AnimatePresence>

      {/* Cabeçalho principal com animação de aparecer/desaparecer. */}
      <motion.header
        animate={{ y: isVisible ? 0 : -100 }} // Animação de slide in/out.
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 ${
          !isTop ? "shadow-lg border-b border-gray-800" : "" // Adiciona sombra/borda quando não está no topo.
        }`}
      >
        <div className="bg-gray-900/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo e Título do Site */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => scrollToSection('#hero-section')} // Rola para o topo ao clicar no logo.
              >
                <div className="mr-3">
                  <Image src="images/lks-logo.svg" alt="Logo" width={40} height={40} />
                </div>
                <h4 className="text-xl font-bold text-white">
                  LKS DATA
                </h4>
              </div>

              {/* Menu de Navegação para Desktop */}
              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      className="text-gray-300 hover:text-yellow-400 transition-colors font-medium cursor-pointer"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                {/* Seletor de Idioma para Desktop */}
                <LanguageSelector
                  language={language}
                  onLanguageChange={onLanguageChange}
                />
              </div>

              {/* Botão de Menu para Mobile */}
              <button
                className="md:hidden text-gray-300 z-50"
                onClick={() => setIsOpen(!isOpen)} // Alterna o estado de abertura do menu mobile.
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />} {/* Ícone de X ou Menu */}
              </button>
            </div>

            {/* Menu Mobile com Animações */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="md:hidden mt-4 pb-4 flex flex-col items-center justify-center text-center"
                >
                  <nav className="flex flex-col space-y-4 w-full"> 
                    {navItems.map((item) => (
                      <motion.button
                        key={item.name}
                        className="text-gray-300 hover:text-yellow-400 transition-colors text-lg mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.href)}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                  {/* Seletor de Idioma para Mobile */}
                  <div className="mt-4"> 
                    <LanguageSelector
                      language={language}
                      onLanguageChange={onLanguageChange}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;