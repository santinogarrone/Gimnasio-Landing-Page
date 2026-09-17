import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b10]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="group flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff8a1d]/40 bg-[#ff8a1d]/10 text-lg font-black text-[#ff9a3d] shadow-[0_0_24px_rgba(255,138,29,0.14)] transition group-hover:border-[#ff8a1d]">
            N
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.06em]">
              Nova<span className="text-[#ff9a3d]">Fit</span>
            </span>
            <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Training club
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-slate-300 md:flex">
          <li>
            <a
              href="#inicio"
              className="rounded-full bg-white/10 px-4 py-2.5 text-white transition hover:bg-[#ff8a1d]"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className="block rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-[#ff9a3d]"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="block rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-[#ff9a3d]"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#testimonios"
              className="block rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-[#ff9a3d]"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="block rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-[#ff9a3d]"
            >
              Contacto
            </a>
          </li>
        </ul>

        <Link
          to="/contacto"
          className="hidden items-center gap-3 rounded-full bg-[#ff8a1d] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_rgba(255,138,29,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff9e3d] md:flex"
        >
          Clase de prueba
          <span aria-hidden="true" className="text-base leading-none">
            ↗
          </span>
        </Link>
      </div>
    </nav>
  );
}
