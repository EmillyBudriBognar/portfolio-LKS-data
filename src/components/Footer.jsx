'use client';

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Mail, Linkedin, Github } from 'lucide-react';
import Image from "next/image";

const Footer = ({ language = "en" }) => {
  // Objeto de traduções para suportar múltiplos idiomas no rodapé.
  const translations = {
    pt: {
      aboutTitle: "SOBRE",
      aboutDescription: "A LKS Data fornece soluções inovadoras em dados com proficiência garantida em análise e engenharia de dados.",
      linksTitle: "NAVEGAÇÃO",
      pageLinks: [
        { name: "Início", link: "hero-section" },
        { name: "Projetos", link: "projects-section" },
        { name: "Blog", link: "blog" },
        { name: "Sobre", link: "about-section" },
        { name: "Contato", link: "contact-section" },
      ],
      contactTitle: "CONTATO",
      contactInfo: [
        { name: "lucastech216@gmail.com", link: "mailto:lucastech216@gmail.com" },
        { name: "+55 11 98878-4991", link: "tel:+5511988784991" },
        { name: "Disponível em EN/PT" },
      ],
      copyright: `© ${new Date().getFullYear()} LKS Data. Todos os direitos reservados.`,
    },
    en: {
      aboutTitle: "ABOUT",
      aboutDescription: "LKS Data provides innovative data solutions with guaranteed proficiency in data analysis and engineering.",
      linksTitle: "NAVIGATION",
      pageLinks: [
        { name: "Home", link: "hero-section" },
        { name: "Projects", link: "projects-section" },
        { name: "Blog", link: "blog" },
        { name: "About", link: "about-section" },
        { name: "Contact", link: "contact-section" },
      ],
      contactTitle: "CONTACT",
      contactInfo: [
        { name: "lucastech216@gmail.com", link: "mailto:lucastech216@gmail.com" },
        { name: "+55 11 98878-4991", link: "tel:+5511988784991" },
        { name: "Available in EN/PT" },
      ],
      copyright: `© ${new Date().getFullYear()} LKS Data. All rights reserved.`,
    },
  };

  // Desestrutura os textos traduzidos com base no idioma selecionado.
  const {
    aboutTitle,
    aboutDescription,
    linksTitle,
    pageLinks,
    contactTitle,
    contactInfo,
    copyright,
  } = translations[language];

  // Função para rolagem suave para as seções da página.
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hook `useInView` para animar os elementos do rodapé quando entram na viewport.
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez.
    threshold: 0.1, // O elemento é considerado "em vista" quando 10% dele está visível.
  });

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-300 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Seção Sobre e Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="flex items-center">
              <Image
                src="/lks-logo.svg"
                alt="LKS Data Logo"
                width={100}
                height={100}
                className="h-auto"
              />
            </div>
            <p className="mt-4 text-gray-400">
              {aboutDescription}
            </p>
            {/* Ícones de redes sociais */}
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/luca490" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/lucaslima020106/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:lucastech216@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links de Navegação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">{linksTitle}</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.link);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-4">{contactTitle}</h3>
            <address className="not-italic text-gray-400 space-y-2">
              {contactInfo.map((info, index) => (
                <p key={index}>
                  {info.link ? (
                    <a href={info.link} className="hover:text-white transition-colors">
                      {info.name}
                    </a>
                  ) : (
                    <span>{info.name}</span>
                  )}
                </p>
              ))}
            </address>
          </motion.div>
        </div>

        {/* Copyright e Crédito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            {copyright}
          </p>

          {/* Crédito "Made by" discreto */}
          <div className="mt-4 md:mt-0">
            <a
              href="https://budri.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-400 text-s transition-colors"
            >
              By Budri
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;