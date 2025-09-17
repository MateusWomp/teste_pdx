// src/componentes/Pagina1/ServicesSection.tsx

import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

type ServicesSectionProps = {
  sectionMarginTop?: string;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ sectionMarginTop = "0px" }) => {
  const services = [
    {
      title: "MARKETING",
      description:
        "Conjunto de estratégias e ações para promover seu negócio com eficiência.",
      imgSrc: "/assets/card-marketing.jpg",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Gerenciamento e execução de estratégias de comunicação com seu público alvo.",
      imgSrc: "/assets/card-social.jpg",
    },
    {
      title: "CONTEÚDO",
      description:
        "Criações de peças publicitárias que envolva seu público e gere resultados.",
      imgSrc: "/assets/card-content.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="services-section"
      style={{ marginTop: sectionMarginTop }}
    >
      <div className="services-grid">
        {services.map((svc) => (
          <ServiceCard
            key={svc.title}
            title={svc.title}
            description={svc.description}
            imgSrc={svc.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;