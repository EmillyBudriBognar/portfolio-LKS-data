// components/SocialIcons.js
"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

const SocialIcons = ({ language = 'en' }) => { // Aceita a prop language com default 'en'

  // Objeto de traduções para os links sociais, incluindo o currículo e seus links específicos
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
        name: "Resume", // Nome do currículo em inglês
        icon: FileText, 
        link: "https://docs.google.com/document/d/1IYjTLMq5qCkwQ-NIw1_nZNCizCBUAsBR/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true", // Link para o currículo em inglês
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
        name: "Currículo", // Nome do currículo em português
        icon: FileText, 
        link: "https://docs.google.com/document/d/1zE1D6_t4CZW1GT0rpOoqhhIH71V_F7VT/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true", // Link para o currículo em português
        color: "text-teal-400/90"
      },
    ],
  };

  // Selecione os links sociais com base no idioma atual
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
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label={social.name}
            >
              <IconComponent className="w-5 h-5" />
            </motion.a>
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