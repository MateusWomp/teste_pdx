// src/pages/Home/Home.tsx
import React from "react";
import Background from "../../componentes/Background";
import Hero from "../../componentes/Hero";
import ServicesSection from "../../componentes/ServicesSection";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Background />
      <main className="relative z-20">
        <Hero />
        <ServicesSection sectionMarginTop="0px" />
      </main>
    </div>
  );
};

export default Home;