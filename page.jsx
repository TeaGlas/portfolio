"use client";

import { useState, useEffect } from "react";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CvSection from "./components/CvSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import { CONTENT } from "./data/portfolio";
import styles from "./page.module.css";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("nl");
  const content = CONTENT[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.site} lang={language}>
      <Navbar
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={scrollTo}
        scrolled={scrolled}
      />

      <main className={styles.main}>
        <HeroSection content={content} onNavigate={scrollTo} />

        <div id="about" className={styles.twoCol}>
          <AboutSection content={content} />
          <SkillsSection content={content} />
        </div>

        <WorkSection content={content} />

        <div className={styles.twoCol}>
          <CvSection content={content} />
          <ContactSection content={content} />
        </div>
      </main>

      <Footer content={content} />
    </div>
  );
}
