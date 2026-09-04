import React from "react";
import image1 from "../assets/gym-chica.jpg";
import image2 from "../assets/gym-corriendo.jpg";
import image3 from "../assets/gym-espalda.jpg";
import imagefondo from "../assets/gym-fondo.jpg";
import Navbar from "./Navbar";
import Contacto from "./Contacto";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center py-12 md:py-20"
        style={{ backgroundImage: `url(${imagefondo})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="grid grid-cols-1 md:grid-cols-3 h-full px-4 gap-2">
          <img
            src={image2}
            alt="..."
            className="w-full h-40 md:h-full object-cover"
          />
          <img
            src={image3}
            alt="..."
            className="w-full h-40 md:h-full object-cover"
          />
          <img
            src={image1}
            alt="..."
            className="w-full h-40 md:h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <p className="text-orange-500 text-sm mb-1 text-[11px]">
            Entrenamiento personalizado para personas que quieren mejorar su
            físico y sentirse mejor sin pasar horas en el gimnasio.
          </p>
          <h1 className="text-white text-2xl md:text-2xl font-bold max-w-xl">
            Transformá tu cuerpo. Cambiá tu rutina.
          </h1>
          <button className="bg-[#C76E00] text-white px-6 py-3 rounded-lg mt-6 font-bold">
            Reservar clase de prueba.
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      <section className="bg-black pt-4 pb-12 md:pt-8 md:pb-20">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center p-15">
          ¿Por qué Nova Fit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-15 h-100 ">
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-[#C76E00] hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center h-full">
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              Entrenamiento Personalizado
            </h3>
            <p className="text-gray-200 text-base">
              Cada persona es única, por eso diseñamos programas de
              entrenamiento adaptados a tus necesidades y objetivos específicos.
            </p>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-[#C76E00] hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center h-full">
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              Entrenadores Expertos
            </h3>
            <p className="text-gray-200 text-base">
              Nuestro equipo de entrenadores altamente capacitados te brindará
              la orientación y el apoyo necesarios para maximizar tus
              resultados.
            </p>
          </div>
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-[#C76E00] hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center h-full">
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              Resultados Garantizados
            </h3>

            <p className="text-gray-200 text-base">
              Nos comprometemos a ayudarte a alcanzar tus metas de fitness,
              brindándote un enfoque efectivo y motivador para lograr resultados
              visibles.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-12 text-center">
            Nuestros Planes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Plan Inicial */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-[#C76E00] hover:-translate-y-1 transition duration-300">
              <h3 className="text-white text-xl font-bold mb-4">
                Plan Inicial
              </h3>
              <ul className="text-gray-300 text-base space-y-2">
                <li>Evaluación inicial</li>
                <li>Rutina personalizada</li>
                <li>2 entrenamientos semanales</li>
              </ul>
            </div>

            {/* Plan Pro - destacado */}
            <div className="bg-neutral-800 border-2 border-[#C76E00] rounded-lg p-8 text-center md:scale-110 shadow-lg shadow-[#C76E00]/20 relative hover:shadow-[#C76E00]/40 hover:-translate-y-1 transition duration-300">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C76E00] text-white text-xs font-bold px-3 py-1 rounded-full">
                MÁS ELEGIDO
              </span>
              <h3 className="text-[#C76E00] text-xl font-bold mb-4">
                Plan Pro
              </h3>
              <ul className="text-gray-200 text-base space-y-2">
                <li>Evaluación inicial</li>
                <li>Rutina personalizada</li>
                <li>3 entrenamientos semanales</li>
                <li>Seguimiento semanal</li>
              </ul>
            </div>

            {/* Plan Premium */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-[#C76E00] hover:-translate-y-1 transition duration-300">
              <h3 className="text-white text-xl font-bold mb-4">
                Plan Premium
              </h3>
              <ul className="text-gray-300 text-base space-y-2">
                <li>Todo lo anterior</li>
                <li>5 entrenamientos semanales</li>
                <li>Seguimiento personalizado</li>
                <li>Asesoramiento nutricional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-black via-neutral-950 to-black py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C76E00] text-sm font-semibold text-center mb-2 tracking-wide uppercase">
            Testimonios
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-12 text-center">
            Lo que dicen nuestros alumnos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border-l-4 border-[#C76E00] rounded-lg p-8 hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C76E00] text-white font-bold flex items-center justify-center flex-shrink-0">
                  L
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Lucas</p>
                  <p className="text-gray-400 text-xs">27 años</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Después de meses intentando entrenar por mi cuenta, finalmente
                empecé a ver resultados."
              </p>
            </div>

            <div className="bg-neutral-900 border-l-4 border-[#C76E00] rounded-lg p-8 hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C76E00] text-white font-bold flex items-center justify-center flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Martina</p>
                  <p className="text-gray-400 text-xs">31 años</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "El seguimiento semanal me mantuvo motivada, bajé 8 kilos en 3
                meses."
              </p>
            </div>

            <div className="bg-neutral-900 border-l-4 border-[#C76E00] rounded-lg p-8 hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C76E00] text-white font-bold flex items-center justify-center flex-shrink-0">
                  F
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Fede</p>
                  <p className="text-gray-400 text-xs">24 años</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Nunca pensé que iba a disfrutar entrenar, los entrenadores
                hacen la diferencia."
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contacto />
    </>
  );
}
