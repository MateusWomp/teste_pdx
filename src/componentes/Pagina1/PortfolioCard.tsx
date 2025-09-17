// src/componentes/PortfolioCard.tsx
import React from "react";
import "./portfolio.css";

interface PortfolioCardProps {
  title: string;
  imgSrc: string;
  width?: string; 
  height?: string; 
  borderWidth?: string;
  style?: React.CSSProperties;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  imgSrc,
  width = "90%",
  height = "64%",
  borderWidth = "4px",
  style = {},
}) => {
  const formattedTitle =
    title === "MÉTRICAS E RESULTADOS"
      ? "MÉTRICAS\nE RESULTADOS"
      : title === "CAMPANHAS PUBLICITÁRIAS"
      ? "CAMPANHAS\nPUBLICITÁRIAS"
      : title;

  const vars = {
    "--card-width": width,
    "--card-aspect": height,
    "--card-border-width": borderWidth,
  } as React.CSSProperties;

  return (
    <figure
      className="portfolio-card"
      style={{
        ...vars,
        ...style,
      }}
      aria-label={title}
    >
      <img src={imgSrc} alt={title} draggable={false} />
      <figcaption>
        <h3>{formattedTitle}</h3>
      </figcaption>
    </figure>
  );
};

export default PortfolioCard;