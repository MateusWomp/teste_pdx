import React, { useState } from "react";
import "./Header.css"; // CSS para header fixo

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
      {/* Header fixo, centralizado */}
      <header className="header">
        <div className="header-container">
          {/* Logo (já preparado para imagem real) */}
          <div className="logo">
            <img
              src="/assets/logo-pdx.png"
              alt="PDX Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Menu centralizado */}
          <nav className="hidden lg:flex nav-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão "ÁREA DO CLIENTE" (igual ao CONHEÇA AGORA) */}
          <div className="hidden lg:flex">
            <a href="#cliente" className="btn-cliente">
              ÁREA DO CLIENTE
            </a>
          </div>

          {/* Botão hambúrguer (mobile) */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-white/30 rounded"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menu mobile drop-down */}
      <div
        className={`
          lg:hidden fixed inset-x-0 z-40
          flex justify-center
          ${open ? "pointer-events-auto" : "pointer-events-none"}
        `}
        aria-hidden={!open}
      >
        <div
          className={`
            w-[calc(100%-2rem)] max-w-[1156px]
            mt-[calc(38px+56px+8px)]
            rounded-md border border-white/10
            bg-black/90 backdrop-blur
            px-4 py-3
            transition-opacity
            ${open ? "opacity-100" : "opacity-0"}
          `}
        >
          <nav className="flex flex-col gap-3 text-sm text-white">
            {[...navItems, { label: "ÁREA DO CLIENTE", href: "#cliente" }].map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-1 border-b border-white/10 last:border-b-0"
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