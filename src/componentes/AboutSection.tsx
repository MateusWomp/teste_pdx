// src/componentes/AboutSection.tsx
import React from "react"
;
interface AboutSectionProps {
    sectionWidth?: string   // Controle da largura da seção (padrão: "1501px")
    sectionHeight?: string  // Controle da altura da seção (padrão: "956px")
    logoWidth?: string      // Controle da largura da logo PDX (padrão: "339px")
    logoHeight?: string     // Controle da altura da logo PDX (padrão: "128px")
    logoLeft?: string       // Controle da posição horizontal da logo PDX (padrão: "100px")
    logoTop?: string        // Controle da posição vertical da logo PDX (padrão: "200px")
    bigXWidth?: string      // Controle da largura do X grande (padrão: "888px")
    bigXHeight?: string     // Controle da altura do X grande (padrão: "956px")
    bigXRight?: string      // Controle da posição horizontal do X grande (padrão: "-100px" para overflow)
    bigXtop?: string        // Controle da posição vertical do X grande (padrão: "0px")
    titleWidth?: string     // Controle da largura do título (padrão: "503px")
    titleHeight?: string    // Controle da altura do título (padrão: "425px")
    titleLeft?: string      // Controle da posição horizontal do título (padrão: "150px")
    titleTop?: string       // Controle da posição vertical do título (padrão: "100px")
    textWidth?: string      // Controle da largura do texto (padrão: "543px")
    textHeight?: string     // Controle da altura do texto (padrão: "95px")
    textLeft?: string       // Controle da posição horizontal do texto (padrão: "150px")
    textTop?: string        // Controle da posição vertical do texto (padrão: "550px")
}
const AboutSection: React.FC<AboutSectionProps> = ({
    sectionWidth = "1501px",
    sectionHeight = "956px",
    logoWidth = "739px",     // Está tendo um efeito de mover para a direita
    logoHeight = "128PX",
    logoLeft = "100px",     // Não está funcionando
    logoTop = "200px", // Não está funcionando não aumenta e nem diminui
    bigXWidth = "888px",
    bigXHeight = "956px",
    bigXRight = "-100px", // Para leve overflow à direita
    bigXtop = "0px",
    titleWidth = "503px",   // Ambos tem o mesmo efeito de mover para direita
    titleHeight = "250px", // Não está funcionando
    titleLeft = "30px",    // Ambos tem o mesmo efeito de mover para direita
    titleTop = "170px",
    textWidth = "543px",   // Não estão funcionando 
    textHeight = "95px",   // Não estão funcionando
    textLeft = "150px",
    textTop = "650px",
}) => {
    return (
        <section
            id="about"
            className="relative bg-black z-30 overflow-hidden" // Fundo preto e overflow para corte do X
            style={{width: sectionWidth, height: sectionHeight, marginTop: "50px"}} // Margem inicial após vídeo
            arial-label = "Seção Sobre a PDX"
        >
            {/* Logo PDX à esquerda */}
            <img 
                src="/assets/logo-pdx.png" 
                alt="PDX Studios Logo (ESTÚDIOS PDX)" 
                style={{
                    left: logoLeft,
                    top: logoTop,
                    width: logoWidth,
                    height: logoHeight,
                    objectFit: "contain",
                }}
                draggable={false}
            />
            {/* X grande à direita, com overflow */}
            <img 
                src="/assets/15. X do logo PDX.png" 
                alt="X Grande PDX"
                className="absolute" 
                style={{
                    right: bigXRight, //Negative para overflow á direita
                    top: bigXtop,
                    width: bigXWidth,
                    height: bigXHeight,
                    objectFit: "cover",
                    clipPath: "inset(0 0 0 0)", // Garante corte se necessário
                }}
                draggable={false}
            />
            {/* Título à esquerda */}
            <div
                className="absolute text-white text-center"
                style={{
                    left: titleLeft,
                    top: titleTop,
                    width: titleWidth,
                    height: titleHeight,
                }}
            >
                <h2 className="text-5x1 font-extrabold leading-tight">
                    SOMOS UMA<br />
                    EMPRESA QUE<br />
                    TRANSFORMA<br />
                    IDEIAS EM<br />
                    RESULTADOS
                </h2>
            </div>
            {/* Texto abaixo do título */}
            <div
                className="absolute text-white text-left"
                style = {{
                    left: textLeft,
                    top: textTop,
                    width: textWidth,
                    height: textHeight,
                }}
            >
                <p className="text-base leading-relaxed">
                    conectamos marcas e pessoas através de estratégias inovadoras<br />
                    e eficazes. Seja por meio de marketing digital, marketing de conteúdo<br />
                    ou estratégias offline, entendemos que o marketing é a chave para o<br />
                    sucesso do negócio que queira se destacar e crescer no mercado<br />
                    competitivo de hoje.
                </p>
            </div>
        </section>
    )
}
export default AboutSection