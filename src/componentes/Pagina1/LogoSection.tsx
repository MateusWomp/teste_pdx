// src/componentes/Pagina1/LogoSection.tsx

import React from "react";
import "./LogoSection.css";

const LogoSection: React.FC = () => {
  const logos = [
    { src: "/assets/13. Logo Womp PRO.png", alt: "Womp Pro Logo" },
    { src: "/assets/7. logo NBN.png", alt: "Nbn logo" },
    { src: "/assets/10. Logo Eu Aprovado.png", alt: "Eu aprovado logo" },
    { src: "/assets/11. Logo Wompcast.png", alt: "Logo WompCst" },
    { src: "/assets/12. Logo NBN Seg.png", alt: "Logo NBN Seg" },
    { src: "/assets/8. Logo Womp Tv e Internet.png", alt: "Logo Womp Telecom" },
    { src: "/assets/9. Logo Vem Telecom.png", alt: "Logo da Vme telecom" },
  ];

  const duplicatedLogos = [...logos, ...logos]; 
  return (
    <section className="logo-section" aria-label="Seção de Logos">
      
      <div className="logo-track">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-item"
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
};

export default LogoSection;