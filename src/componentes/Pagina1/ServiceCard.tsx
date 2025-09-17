// src/componentes/Pagina1/ServiceCard.tsx
import React from "react";
import "./Services.css";

type ServiceCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className="service-card">
      <img src={imgSrc} alt={title} className="bg-image" draggable={false} />
      <div className="overlay" aria-hidden />
      <div className="service-title">
        <h3>{title}</h3>
      </div>
      <div className="service-desc">
        <p>{description}</p>
      </div>
      <div className="service-arrow" aria-hidden>
        <img src="/assets/6. Ícone seta pra cima.svg" alt="" aria-hidden />
      </div>
    </div>
  );
};

export default ServiceCard;