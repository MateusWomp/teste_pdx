// src/pages/Home/Home.tsx
import React from "react";
import Background from "componentes/Pagina1/Background";
import Hero from "../../componentes/Pagina1/Hero";
import ServicesSection from "../../componentes/Pagina1/ServicesSection";
import LogoSection from "../../componentes/Pagina1/LogoSection";
import StudioSection from "../../componentes/Pagina1/StudioSection";
import AboutSection from "componentes/Pagina1/AboutSection/AboutSection";
import PortfolioSection from "componentes/Pagina1/PortfolioSection";
import ContactSection from "componentes/Pagina1/ContactSection";
import Footer from "componentes/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Background />
      <main className="relative z-20">
        <Hero />
        <ServicesSection sectionMarginTop="0px" />
        <LogoSection />
        <StudioSection style={{ marginTop: "200px" }} />
        <AboutSection /> 
        <PortfolioSection marginTop="170px"/>
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;