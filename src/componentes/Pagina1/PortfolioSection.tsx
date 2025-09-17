// src/componentes/Pagina1/PortfolioSection.tsx
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
  cardsAlign?: Align;
  cardsShiftX?: string;
  defaultCardWidth?: string;
  defaultCardAspect?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  cards?: CardItem[] | null;
}

const DEFAULT_CARDS: CardItem[] = [
  { title: "MÉTRICAS E RESULTADOS", imgSrc: "/assets/16. Box métricas e resultados.png" },
  { title: "CAMPANHAS PUBLICITÁRIAS", imgSrc: "/assets/17. Box campanhas publicitárias.png" },
  { title: "CRIATIVOS", imgSrc: "/assets/18. Box criativos.png" },
  { title: "AUDIOVISUAL", imgSrc: "/assets/19. Box audiovisual.png" },
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  sectionMaxWidth = "100%",
  cardsAlign = "left",
  cardsShiftX = "0%",
  defaultCardWidth = "90%",
  defaultCardAspect = "64%",
  gridColumnGap = "4%",
  gridRowGap = "4%",
  cards = null,
}) => {
  const resolvedCards = Array.isArray(cards) && cards.length > 0 ? cards : DEFAULT_CARDS;

  const justifyMap: Record<Align, string> = {
    left: "start",
    center: "center",
    right: "end",
  };

  const vars = {
    "--portfolio-max-width": sectionMaxWidth,
    "--grid-column-gap": gridColumnGap,
    "--grid-row-gap": gridRowGap,
    "--cards-shift-x": cardsShiftX,
    "--default-card-width": defaultCardWidth,
    "--default-card-aspect": defaultCardAspect,
  } as React.CSSProperties;

  return (
    <section
      id="portfolio"
      className="portfolio-section"
      style={vars}
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio-header">
        <h2 id="portfolio-heading">PORTFÓLIO</h2>
        <a href="#" className="btn-cliente" onClick={(e) => e.preventDefault()}>
          CONHEÇA AGORA
        </a>
      </div>

      <div
        className="portfolio-grid-wrapper"
        role="list"
        aria-label="Lista de projetos do portfólio"
        style={{
          transform: `translateX(var(--cards-shift-x))`,
          justifyContent: justifyMap[cardsAlign],
        }}
      >
        {resolvedCards.map((card, i) => (
          <div role="listitem" key={`${card.title}-${i}`} className="portfolio-grid-item">
            <PortfolioCard
              title={card.title}
              imgSrc={card.imgSrc}
              width={card.width ?? "var(--default-card-width)"}
              height={card.height ?? "var(--default-card-aspect)"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;