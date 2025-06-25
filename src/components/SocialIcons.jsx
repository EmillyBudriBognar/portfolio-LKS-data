"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

const SocialIcons = ({ language = 'en' }) => {
  // Define os links sociais e seus dados (nome, ícone, link, cor) para diferentes idiomas.
  const socialLinksData = {
    en: [
      {
        name: "GitHub",
        icon: Github,
        link: "https://github.com/luca490",
        color: "text-yellow-400/90"
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/lucaslima020106/",
        color: "text-blue-400/90"
      },
      {
        name: "Resume",
        icon: FileText,
        link: "https://docs.google.com/document/d/1IYjTLMq5qCkwQ-NIw1_nZNCizCBUAsBR/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true",
        color: "text-teal-400/90"
      },
    ],
    pt: [
      {
        name: "GitHub",
        icon: Github,
        link: "https://github.com/luca490",
        color: "text-yellow-400/90"
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/lucaslima020106/",
        color: "text-blue-400/90"
      },
      {
        name: "Currículo",
        icon: FileText,
        link: "https://docs.google.com/document/d/1zE1D6_t4CZW1GT0rpOoqhhIH71V_F7VT/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true",
        color: "text-teal-400/90"
      },
    ],
  };

  // Seleciona os links sociais baseados no idioma atual.
  const socialLinks = socialLinksData[language];

  return (
    <div className="flex gap-4 sm:gap-6">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <motion.div
            key={social.name}
            className="relative flex items-center justify-center group"
          >
            <motion.a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 inline-flex items-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 ${social.color} transition-all duration-300`}
              // Animação ao passar o mouse: desloca para cima e aumenta um pouco.
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label={social.name} // Acessibilidade: label para leitores de tela.
            >
              <IconComponent className="w-5 h-5" />
            </motion.a>
            {/* Tooltip que aparece ao passar o mouse. */}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-foreground/90 bg-background/90 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-foreground/10 shadow-sm whitespace-nowrap">
              {social.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SocialIcons;