// src/componentes/StudioSection.tsx
import React from "react";

interface StudioSectionProps {
  style?: React.CSSProperties;
}

const StudioSection: React.FC<StudioSectionProps> = ({ style }) => {
  return (
    <section
      id="studios"
      className="w-full h-[727px] relative z-40"
      aria-label="Seção de Estúdios"
      style={style}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col items-center"> {/* Alterei de 1156px para 900px como exemplo */}
        <div className="flex justify-between w-full mb-6">
          <h2 className="text-4xl font-extrabold text-black">ESTÚDIOS</h2>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-black rounded text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
          >
            CONHEÇA AGORA
          </a>
        </div>
        <div className="relative w-full h-[600px] bg-black rounded-lg overflow-hidden mb-6 border-2 border-white">
          <img
            src="/assets/studio-video-thumbnail.jpg"
            alt="Thumbnail do vídeo de estúdios"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              aria-label="Reproduzir vídeo"
            >
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