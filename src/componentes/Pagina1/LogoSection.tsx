// src/componentes/LogoSection.tsx
import React from "react";

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
    <section
      className="w-full h-[157px] bg-white relative overflow-hidden"
      style={{ position: "absolute", top: "1230px", transform: "translateY(-50%)", zIndex: 50 }} // Altere este valor para ajustar a posição do carrossel
      aria-label="Seção de Logos"
    >
      <div
        className="flex animate-scroll"
        style={{
          width: `${duplicatedLogos.length * 100}px`,
          animation: "scroll 20s linear infinite",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-auto flex-shrink-0"
            draggable={false}
            style={{ marginRight: "48px" }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default LogoSection;