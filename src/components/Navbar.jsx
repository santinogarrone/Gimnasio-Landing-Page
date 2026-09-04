import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-white text-xl font-bold">
          Nova<span className="text-[#C76E00]">Fit</span>
        </span>

        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <li>
            <a href="#inicio" className="hover:text-[#C76E00] transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-[#C76E00] transition">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-[#C76E00] transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="#testimonios" className="hover:text-[#C76E00] transition">
              Testimonios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-[#C76E00] transition">
              Contacto
            </a>
          </li>
        </ul>

        <Link
          to="/contacto"
          className="bg-[#C76E00] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#A65B00] transition"
        >
          Clase de prueba
        </Link>
      </div>
    </nav>
  );
}
