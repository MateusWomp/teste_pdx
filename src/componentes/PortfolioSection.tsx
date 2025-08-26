// src/componentes/PortfolioSection.tsx
import React from "react";
import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";

type Align = "left" | "center" | "right";

interface CardItem {
  title: string;
  imgSrc: string;
  width?: string;  
  height?: string; 
}

interface PortfolioSectionProps {
  sectionMaxWidth?: string;   
  marginTop?: string;

  /* HEADER (título + botão) */
  titleLeft?: string; 
  titleTop?: string;
  buttonRight?: string; 
  buttonTop?: string;

  /* CONTROLE DOS CARDS */
  cardsAlign?: Align;      
  cardsShiftX?: string;    
  defaultCardWidth?: string;  
  defaultCardHeight?: string; 
  cards?: CardItem[]; 
  fontSize?: string; // Novo prop para controlar o tamanho da fonte dos títulos
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  sectionMaxWidth = "1156px",
  marginTop = "170px",

  titleLeft = "-100px",
  titleTop = "0px",
  buttonRight = "-100px",
  buttonTop = "0px",

  cardsAlign = "left",
  cardsShiftX = "-100px",
  defaultCardWidth = "649px",
  defaultCardHeight = "515px",
  fontSize = "1.5rem", // Padrão inicial para o tamanho da fonte

  cards = [
    { title: "MÉTRICAS E RESULTADOS", imgSrc: "/assets/16. Box métricas e resultados.png" },
    { title: "CAMPANHAS PUBLICITÁRIAS", imgSrc: "/assets/17. Box campanhas publicitárias.png" },
    { title: "CRIATIVOS", imgSrc: "/assets/18. Box criativos.png" },
    { title: "AUDIOVISUAL", imgSrc: "/assets/19. Box audiovisual.png" },
  ],
}) => {
  // Translate align para justifyContent do wrapper interno
  const justifyMap: Record<Align, string> = {
    left: "start",
    center: "center",
    right: "end",
  };

  return (
    <section
      id="portfolio"
      className="relative z-30 text-white"
      style={{
        width: "100%",
        maxWidth: sectionMaxWidth,
        marginTop,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
      aria-labelledby="portfolio-heading"
    >
      <div style={{ position: "relative", height: "78px" }}>
        <h2
          id="portfolio-heading"
          className="text-5xl font-extrabold"
          style={{
            position: "absolute",
            left: titleLeft,
            top: titleTop,
            margin: 0,
          }}
        >
          PORTFÓLIO
        </h2>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center px-6 py-3 border border-white rounded text-base font-medium hover:bg-white hover:text-black transition-colors"
          style={{
            position: "absolute",
            right: buttonRight,
            top: buttonTop,
          }}
        >
          CONHEÇA AGORA
        </a>
      </div>

      {/* wrapper grid responsivo */}
      <div
        className="portfolio-grid-wrapper"
        role="list"
        aria-label="Lista de projetos do portfólio"
        style={{
          marginTop: "18px",
          justifyItems: "center", 
          transform: `translateX(${cardsShiftX})`,
          justifyContent: justifyMap[cardsAlign],
        } as React.CSSProperties}
      >
        {cards.map((card, i) => (
          <div role="listitem" key={`${card.title}-${i}`} className="portfolio-grid-item">
            <PortfolioCard
              title={card.title}
              imgSrc={card.imgSrc}
              width={card.width ?? defaultCardWidth}
              height={card.height ?? defaultCardHeight}
              fontSize={fontSize} // Passa o tamanho da fonte
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;