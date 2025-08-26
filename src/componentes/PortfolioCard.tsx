// src/componentes/PortfolioCard.tsx
import React from "react";

interface PortfolioCardProps {
  title: string;
  imgSrc: string;
  width?: string; 
  height?: string; 
  titleTop?: string; 
  borderWidth?: string; 
  className?: string; 
  style?: React.CSSProperties; 
  fontSize?: string; 
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  imgSrc,
  width = "100%",
  height = "auto",
  titleTop = "70%", 
  borderWidth = "4px", 
  className = "",
  style = {},
  fontSize = "1.5rem",
}) => {
  // Quebra de linha manual para os títulos específicos
  const formattedTitle = title === "MÉTRICAS E RESULTADOS" 
    ? "MÉTRICAS\nE RESULTADOS"
    : title === "CAMPANHAS PUBLICITÁRIAS" 
    ? "CAMPANHAS\nPUBLICITÁRIAS"
    : title;

  return (
    <figure
      className={`relative rounded-md overflow-hidden bg-black ${className} hover:scale-105 transition-transform duration-300`} // Adicionado o efeito hover
      style={{ ...style, width, height, border: `${borderWidth} solid white` }}
      aria-label={title}
    >
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
        draggable={false}
      />
      <figcaption
        className="absolute left-4 right-4 text-white"
        style={{ bottom: titleTop }}
      >
        <h3 className="text-lg font-bold leading-snug" style={{ fontSize }}>{formattedTitle}</h3>
      </figcaption>
    </figure>
  );
};

export default PortfolioCard;