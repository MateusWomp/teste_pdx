// src/componentes/LogoSection.tsx

import React from "react";

const LogoSection: React.FC = () => {
    const logos = [
        {src: "/assets/13. Logo Womp PRO.png", alt: "Womp Pro Logo"},
        {src: "/assets/7. logo NBN.png", alt: "Nbn logo"},
        {src: "/assets/10. Logo Eu Aprovado.png", alt: "Eu aprovado logo"},
        {src: "/assets/11. Logo Wompcast.png", alt: "Logo WompCst"},
        {src: "/assets/12. Logo NBN Seg.png", alt: "Logo NBN Seg"},
        {src: "/assets/8. Logo Womp Tv e Internet.png", alt: "Logo Womp Telecom"},
        {src: "/assets/9. Logo Vem Telecom.png", alt: "Logo da Vme telecom"},
    ]
    return(
        <section 
        className="w-full h-[157px] bg-white flex items-center justify-center"
        style={{position: "absolute", top: "calc(50%+671px", transform: "translateY(-50%)"}}
        aria-label="Seção de Logos">
            <div className="flex gap-12">
                {logos.map((logo, index) =>(
                    <img
                    key={index} 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-20 w-auto" //Ajusta o tamanho conforme o necessário (h-20 = 80px)
                    draggable={false}
                    />
                ))}
            </div>
        </section>
    )
}
export default LogoSection