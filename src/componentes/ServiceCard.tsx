// src/componentes/ServiceCard.tsx
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  titleTop?: string; // Controle da altura do título
  descriptionTop?: string; // Controle da altura da descrição
  arrowHeight?: string; // Controle da altura do ícone
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgSrc,
  titleTop = "12%", // Padrão inicial para o título
  descriptionTop = "20%", // Padrão inicial para a descrição
  arrowHeight = "85%", // Padrão ajustado para alinhamento
}) => {
  return (
    <div className="relative w-[358px] h-[486px] rounded-lg overflow-hidden bg-black border-2 border-white hover:scale-105 transition-transform duration-300">
      {/* Imagem cobrindo todo o card com filtro monocromático */}
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(100%)" }} // Mantém o efeito monocromático
        draggable={false}
      />

      {/* Overlay com gradiente do escuro para claro */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
          mixBlendMode: "normal",
        }}
      />

      {/* Título (controlável por prop via style) */}
      <div
        className="absolute left-4 right-4 text-white text-center"
        style={{ top: titleTop }}
      >
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Descrição (controlável por prop via style, em negrito) */}
      <div
        className="absolute left-4 right-4 text-white text-center"
        style={{ top: descriptionTop }}
      >
        <p className="text-sm font-bold mt-2">{description}</p>
      </div>

      {/* Ícone de seta */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: arrowHeight }}
        aria-hidden
      >
        <img
          src="/assets/6. Ícone seta pra cima.svg"
          className="w-13 h-13" 
          alt=""
          aria-hidden
        />
      </div>
    </div>
  );
};

export default ServiceCard;