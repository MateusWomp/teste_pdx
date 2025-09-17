// src/componentes/Pagina1/Header.tsx
import React, { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "SERVIÇOS", href: "#services" },
  { label: "ESTÚDIOS", href: "#studios" },
  { label: "SOBRE A PDX", href: "#about" },
  { label: "PORTFÓLIO", href: "#portfolio" },
  { label: "CONTATO", href: "#contact" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src="/assets/logo-pdx.png" alt="PDX Logo" />
          </div>
          <nav className="nav-center" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="client-area-wrap">
            <a href="#cliente" className="btn-cliente">
              ÁREA DO CLIENTE
            </a>
          </div>
          <button
            className="btn-hamburger"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="mobile-menu-container" aria-hidden={!open}>
        <div className={`mobile-menu-box ${open ? "open" : ""}`}>
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {[...navItems, { label: "ÁREA DO CLIENTE", href: "#cliente" }].map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;