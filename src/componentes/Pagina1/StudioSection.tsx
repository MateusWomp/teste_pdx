// src/componentes/Pagina1/StudioSection.tsx
import React from "react";
import "./StudioSection.css";

interface StudioSectionProps {
  style?: React.CSSProperties;
}

const StudioSection: React.FC<StudioSectionProps> = ({ style }) => {
  return (
    <section
      id="studios"
      className="studio-section"
      aria-label="Seção de Estúdios"
      style={style}
    >
      <div className="studio-container">
        <div className="studio-header">
          <h2>ESTÚDIOS</h2>
          <a href="#">CONHEÇA AGORA</a>
        </div>
        <div className="studio-video">
          <img
            src="/assets/studio-video-thumbnail.jpg"
            alt="Thumbnail do vídeo de estúdios"
          />
          <div className="overlay">
            <button aria-label="Reproduzir vídeo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
