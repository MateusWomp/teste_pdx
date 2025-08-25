// src/pages/Home/Home.tsx
import React from "react";
import Background from "../../componentes/Background";
import Hero from "../../componentes/Hero";
import ServicesSection from "../../componentes/ServicesSection";
import LogoSection from "../../componentes/LogoSection";
import StudioSection from "../../componentes/StudioSection";
import AboutSection from "../../componentes/AboutSection";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Background />
      <main className="relative z-20">
        <Hero />
        <ServicesSection sectionMarginTop="0px" />
        <LogoSection />
        <StudioSection style={{ marginTop: "200px" }} />
        <AboutSection /> {/* Adiciona a seção "SOBRE A PDX" logo abaixo do vídeo */}
      </main>
    </div>
  );
};

export default Home;