import React from "react";
import "./background.css";

const Background: React.FC = () => {
  return (
    <div className="bg-wrap">
      {/* Conteúdo que deve ficar sobre o fundo preto */}
      <div className="relative z-20 text-white p-8">
        <h1 className="text-4xl font-bold">Página PDX</h1>
        <p>Conteúdo inicial do site...</p>
      </div>

      {/* Primeiro quadro branco */}
      <div className="white-box box-1" />

      {/* Segundo quadro branco */}
      <div className="white-box box-2" />
    </div>
  );
};

export default Background;