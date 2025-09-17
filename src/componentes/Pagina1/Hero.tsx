// src/componentes/Pagina1/Hero.tsx
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper" aria-label="Hero principal">
      <div className="hero-inner">
        <div className="hero-banner">
          <div className="hero-banner-inner">
            <img
              src="/assets/banner.png"
              alt="Banner"
              draggable={false}
            />
          </div>
        </div>
        <div className="hero-title">
          <h2>
            TENHA A MELHOR <br />
            ESTRATÉGIA DE <br />
            CONTEÚDO
          </h2>
        </div>
        <div className="hero-text">
          <p>
            Com a orientação dos nossos profissionais os perfis do seu negócio
            terão consistência na interação com seu público alvo.
          </p>
        </div>
        <div className="hero-button">
          <a href="#" onClick={(e) => e.preventDefault()}>
            CONHEÇA AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;