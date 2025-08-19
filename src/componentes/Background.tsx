// src/componentes/Background.tsx
import React from "react";
import "./background.css";

const Background: React.FC = () => {
  return (
    <div className="bg-wrap" aria-hidden>
      {/* Primeiro quadro branco */}
      <div className="white-box box-1" />

      {/* Segundo quadro branco */}
      <div className="white-box box-2" />
    </div>
  );
};

export default Background;