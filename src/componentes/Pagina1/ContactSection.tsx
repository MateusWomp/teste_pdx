// src/componentes/ContactSection.tsx
import React from "react";

interface ContactSectionProps {
  sectionWidth?: string
  sectionHeight?: string
  marginTop?: string

  titleFontSize?: string
  textFontSize?: string
  inputHeight?: string
  inputFontSize?: string
  buttonFontSize?: string
  buttonWidth?: string
  buttonHeight?: string

  leftColumnMargin?: string   // novo: controle posição coluna esquerda
  rightColumnMargin?: string  // novo: controle posição coluna direita
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sectionWidth = "1156px",
  sectionHeight = "auto", // agora auto
  marginTop = "80px",

  titleFontSize = "48px",
  textFontSize = "18px",
  inputHeight = "56px",
  inputFontSize = "16px",
  buttonFontSize = "16px",
  buttonWidth = "150px",
  buttonHeight = "48px",

  leftColumnMargin = "-120px",
  rightColumnMargin = "-120px",
}) => {
  return (
    <section
      id="contact"
      className="relative z-30 bg-white text-black"
      style={{
        width: sectionWidth,
        minHeight: sectionHeight, // usa auto
        margin: `${marginTop} auto 0 auto`,
        padding: "40px",
      }}
    >
      <div className="flex justify-between w-full h-full">
        {/* ----- Coluna esquerda ----- */}
        <div style={{ width: "50%", paddingRight: "40px", marginLeft: leftColumnMargin }}>
          <h2
            className="font-extrabold"
            style={{ fontSize: titleFontSize, marginBottom: "24px" }}
          >
            CONTATO
          </h2>
          <p style={{ fontSize: textFontSize, marginBottom: "24px", fontWeight: "bold" }}>
            Um passo importante para sua marca é saber utilizar a vitrine do
            mundo. Nós fazemos isso para você!
          </p>
          <p style={{ fontSize: textFontSize, marginBottom: "24px", fontWeight: "bold" }}>
            Entre em contato também pelo WhatsApp e por nossas redes sociais
          </p>
          {/* ícones lado a lado */}
          <div className="flex flex-row gap-4 mt-6">
            <img src="/assets/20. Ícone instagram.svg" alt="Instagram" className="w-12 h-12"/>
            <img src="/assets/21. ícone whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
          </div>
        </div>

        {/* ----- Coluna direita (formulário) ----- */}
        <form
          className="flex flex-col gap-4"
          style={{ width: "70%", maxWidth: "700px", marginRight: rightColumnMargin }}
        >
          <input
            type="text"
            placeholder="NOME"
            style={{
              height: inputHeight,
              fontSize: inputFontSize,
              border: "3px solid black",
              borderRadius: "6px",
              padding: "0 12px",
            }}
          />
          <input
            type="text"
            placeholder="TELEFONE"
            style={{
              height: inputHeight,
              fontSize: inputFontSize,
              border: "3px solid black",
              borderRadius: "6px",
              padding: "0 12px",
            }}
          />
          <textarea
            placeholder="MENSAGEM"
            style={{
              minHeight: "120px",
              fontSize: inputFontSize,
              border: "3px solid black",
              borderRadius: "6px",
              padding: "12px",
            }}
          />
          <button
            type="submit"
            className="bg-black text-white font-bold hover:bg-gray-800 transition-colors"
            style={{
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              borderRadius: "6px",
              marginTop: "12px", 
            }}
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
