// src/componentes/ServicesSection.tsx
import React from "react";
import ServiceCard from "./ServiceCard";

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
      titleTop: "9%", // Ajuste para o título de MARKETING
      descriptionTop: "24%", // Ajuste para a descrição de MARKETING
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Gerenciamento e execução de estratégias de comunicação com seu público alvo.",
      imgSrc: "/assets/card-social.jpg",
      titleTop: "9%", // Ajuste para o título de SOCIAL MEDIA
      descriptionTop: "24%", // Ajuste para a descrição de SOCIAL MEDIA
    },
    {
      title: "CONTEÚDO",
      description:
        "Criações de peças publicitárias que envolva seu público e gere resultados.",
      imgSrc: "/assets/card-content.jpg",
      titleTop: "9%", // Ajuste para o título de CONTEÚDO
      descriptionTop: "24%", // Ajuste para a descrição de CONTEÚDO
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-transparent z-30 relative"
      style={{ marginTop: sectionMarginTop }}
    >
      <div className="max-w-[1156px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((svc) => (
          <ServiceCard
            key={svc.title}
            {...svc}
            arrowHeight="69%" // Valor único para alinhamento uniforme
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;