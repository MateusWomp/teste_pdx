// src/componentes/ContactSection.tsx
import React from "react";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section--two-cols" aria-labelledby="contact-heading">
      <div className="contact-left">
        <h2 id="contact-heading">CONTATO</h2>
        <p className="contact-left-text">
          Um passo importante para sua marca é saber utilizar a vitrine do mundo. Nós fazemos isso para você!
        </p>
        <p className="contact-left-text">
          Entre em contato também pelo WhatsApp e por nossas redes sociais
        </p>
        <div className="contact-icons">
          <img src="/assets/20. Ícone instagram.svg" alt="Instagram" />
          <img src="/assets/21. ícone whatsapp.svg" alt="WhatsApp" />
        </div>
      </div>

      <form className="contact-form" aria-label="Formulário de contato">
        <input placeholder="NOME" type="text" />
        <input placeholder="TELEFONE" type="text" />
        <textarea placeholder="MENSAGEM" />
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};

export default ContactSection;