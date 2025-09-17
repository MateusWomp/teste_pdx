// src/componentes/Footer.tsx
import React from "react";
import "./Footer.css";

interface FooterProps {
  logoSrc?: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc = "/assets/logo-pdx.png" }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logoSrc} alt="PDX Studios Logo" className="footer-logo" draggable={false} />

        <h2 className="footer-phrase">YOU THINK, WE CREATE</h2>

        <div className="footer-links">
          <a href="#about">Mais sobre a PDX Studios</a>
          <a href="#contact">Fale conosco</a>
        </div>

        <p className="footer-copyright">PDX Studios. Todos os direitos reservados. @2025</p>
      </div>
    </footer>
  );
};

export default Footer;