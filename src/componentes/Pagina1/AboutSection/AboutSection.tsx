// src/componentes/AboutSection.tsx
import React from "react";
import './AboutSection.css';

interface AboutSectionProps {
  sectionWidth?: string;   // Controle da largura da seção 
  sectionHeight?: string;  // Controle da altura da seção 
  logoWidth?: string;      // Controle da largura da logo PDX 
  logoHeight?: string;     // Controle da altura da logo PDX 
  logoLeft?: string;       // Controle da posição horizontal da logo PDX 
  logoTop?: string;        // Controle da posição vertical da logo PDX 
  bigXWidth?: string;      // Controle da largura do X grande 
  bigXHeight?: string;     // Controle da altura do X grande 
  bigXRight?: string;      // Controle da posição horizontal do X grande 
  bigXtop?: string;        // Controle da posição vertical do X grande 
  titleWidth?: string;     // Controle da largura do título 
  titleHeight?: string;    // Controle da altura do título 
  titleLeft?: string;      // Controle da posição horizontal do título 
  titleTop?: string;       // Controle da posição vertical do título 
  textWidth?: string;      // Controle da largura do texto 
  textLeft?: string;       // Controle da posição horizontal do texto 
  textTop?: string;        // Controle da posição vertical do texto 
}

const AboutSection: React.FC<AboutSectionProps> = ({
  sectionWidth = "1501px",
  sectionHeight = "956px",
  logoWidth = "339px",
  logoHeight = "128px",
  logoLeft = "100px",
  logoTop = "200px",
  bigXWidth = "888px",
  bigXHeight = "956px",
  bigXRight = "-100px",
  bigXtop = "0px",
  titleWidth = "503px",
  titleHeight = "500px",
  titleLeft = "95px",
  titleTop = "380px",
  textWidth = "643px",
  textLeft = "100px",
  textTop = "750px",
}) => {
  return (
    <section
      id="about"
      className="relative bg-black z-30 overflow-hidden"
      style={{ width: sectionWidth, height: sectionHeight, marginTop: "50px" }}
      aria-label="Seção Sobre a PDX"
    >
      {/* Logo PDX à esquerda */}
      <img
        src="/assets/logo-pdx.png"
        alt="PDX Studios Logo (ESTÚDIOS PDX)"
        className="absolute"
        style={{
          left: logoLeft,
          top: logoTop,
          width: logoWidth,
          height: logoHeight,
          objectFit: "contain",
        }}
        draggable={false}
      />
      {/* X grande à direita, com overflow */}
      <img
        src="/assets/15. X do logo PDX.png"
        alt="X Grande PDX"
        className="absolute"
        style={{
          right: bigXRight,
          top: bigXtop,
          width: bigXWidth,
          height: bigXHeight,
          objectFit: "cover",
          clipPath: "inset(0 0 0 0)",
        }}
        draggable={false}
      />
      {/* Título à esquerda */}
      <div
        className="absolute text-white"
        style={{
          left: titleLeft,
          top: titleTop,
          width: titleWidth,
          height: titleHeight,
          overflow: "hidden",
        }}
      >
        <h2 className="text-5xl font-extrabold leading-tight">
          SOMOS UMA<br />
          EMPRESA QUE<br />
          TRANSFORMA<br />
          IDEIAS EM<br />
          RESULTADOS
        </h2>
      </div>
      {/* Texto abaixo do título */}
      <div
        className="absolute text-white text-left text-content" // Adicionada classe para CSS
        style={{
          left: textLeft,
          top: textTop,
          width: textWidth,
          overflow: "auto",
        }}
      >
        <p className="leading-relaxed">
          <strong>conectamos marcas e pessoas através de estratégias inovadoras<br />
          e eficazes. Seja por meio de marketing digital, marketing de conteúdo<br />
          ou estratégias offline, entendemos que o marketing é a chave para o<br />
          sucesso do negócio que queira se destacar e crescer no mercado<br />
          competitivo de hoje.</strong>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;