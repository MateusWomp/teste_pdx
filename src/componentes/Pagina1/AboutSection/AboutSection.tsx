// src/componentes/AboutSection.tsx
import React from "react";
import "./AboutSection.css";

interface AboutSectionProps {
  sectionWidth?: string;
  sectionHeight?: string;
  logoWidth?: string;
  logoHeight?: string;
  logoLeft?: string;
  logoTop?: string;
  bigXWidth?: string;
  bigXHeight?: string;
  bigXRight?: string;
  bigXtop?: string;
  titleWidth?: string;
  titleHeight?: string;
  titleLeft?: string;
  titleTop?: string;
  textWidth?: string;
  textLeft?: string;
  textTop?: string;
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
      className="about-section"
      style={{ width: sectionWidth, height: sectionHeight }}
      aria-label="Seção Sobre a PDX"
    >
      <img
        src="/assets/logo-pdx.png"
        alt="PDX Studios Logo (ESTÚDIOS PDX)"
        className="about-logo"
        style={{
          left: logoLeft,
          top: logoTop,
          width: logoWidth,
          height: logoHeight,
        }}
        draggable={false}
      />
      <img
        src="/assets/15. X do logo PDX.png"
        alt="X Grande PDX"
        className="about-big-x"
        style={{
          right: bigXRight,
          top: bigXtop,
          width: bigXWidth,
          height: bigXHeight,
        }}
        draggable={false}
      />
      <div
        className="about-title"
        style={{
          left: titleLeft,
          top: titleTop,
          width: titleWidth,
          height: titleHeight,
        }}
      >
        <h2>
          SOMOS UMA<br />
          EMPRESA QUE<br />
          TRANSFORMA<br />
          IDEIAS EM<br />
          RESULTADOS
        </h2>
      </div>
      <div
        className="about-text"
        style={{
          left: textLeft,
          top: textTop,
          width: textWidth,
        }}
      >
        <p>
          <strong>
            conectamos marcas e pessoas através de estratégias inovadoras
            <br />
            e eficazes. Seja por meio de marketing digital, marketing de
            conteúdo
            <br />
            ou estratégias offline, entendemos que o marketing é a chave para o
            <br />
            sucesso do negócio que queira se destacar e crescer no mercado
            <br />
            competitivo de hoje.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
