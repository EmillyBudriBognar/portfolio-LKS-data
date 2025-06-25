"use client";

import React, { useState, useEffect } from "react";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import BlogSection from '@/components/BlogSection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Check browser language when component mounts
    const browserLanguage = navigator.language || navigator.userLanguage;
    const primaryLanguage = browserLanguage.split("-")[0];

    // Set default language based on browser (only for supported languages)
    if (primaryLanguage === "pt" || primaryLanguage === "en") {
      setLanguage(primaryLanguage);
    } else {
      // Default to English if not one of the supported languages
      setLanguage("en");
    }
  }, []);

  const handleLanguageChange = (code) => {
    setLanguage(code);
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="w-full">
        <Header language={language} onLanguageChange={handleLanguageChange} />
      </header>

      <main className="flex-grow w-full">
        <section id="hero-section" aria-label="Main section" className="w-full">
          <Hero language={language} />
        </section>

        <section id="projects-section" aria-label="Projects section" className="w-full">
          <Projects language={language} />
        </section>

        <section id="blog-section" aria-label="Blog section" className="w-full">
          <BlogSection language={language} />
        </section>

        <section id="about-section" aria-label="About section" className="w-full">
          <About language={language} />
        </section>

        <section id="contact-section" aria-label="Contact section" className="w-full">
          <Contact language={language} />
        </section>
      </main>

      <Footer language={language} className="w-full" />
    </div>
  );
}