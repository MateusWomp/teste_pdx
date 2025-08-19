// src/pages/Home/Home.tsx
import React from "react";
import Background from "../../componentes/Background";
import Hero from "../../componentes/Hero";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Background />
      <main className="relative z-20">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
