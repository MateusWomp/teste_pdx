// src/componentes/Footer.tsx
import React from "react";

interface FooterProps {
  logoSrc?: string;
  phraseFontSize?: string;
  linkFontSize?: string;
  copyrightFontSize?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/assets/logo-pdx.png",
  phraseFontSize = "52px",
  linkFontSize = "14px",
  copyrightFontSize = "14px",
}) => {
  return (
    <footer
      className="bg-black text-white font-bold flex flex-col items-center justify-center"
      style={{ padding: "60px 20px" }}
    >
      {/* Logo */}
      <img
        src={logoSrc}
        alt="PDX Studios Logo"
        style={{ width: "300px", marginBottom: "24px" }}
      />

      {/* Frase */}
      <h2
        style={{
          fontSize: phraseFontSize,
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        YOU THINK, WE CREATE
      </h2>

      {/* Links */}
      <div
        className="flex gap-8"
        style={{ marginBottom: "40px", fontSize: linkFontSize }}
      >
        <a href="#about" className="hover:underline">
          Mais sobre a PDX Studios
        </a>
        <a href="#contact" className="hover:underline">
          Fale conosco
        </a>
      </div>

      {/* Direitos autorais */}
      <p style={{ fontSize: copyrightFontSize, textAlign: "center" }}>
        PDX Studios. Todos os direitos reservados. @2025
      </p>
    </footer>
  );
};

export default Footer;