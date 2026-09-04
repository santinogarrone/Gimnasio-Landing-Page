import React from "react";

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C76E00] text-sm font-semibold text-center mb-2 tracking-wide uppercase">
            Contacto
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-12 text-center">
            Empezá tu transformación hoy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C76E00] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C76E00] focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C76E00] focus:outline-none transition"
              />
              <textarea
                placeholder="Contanos tu objetivo"
                rows="4"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C76E00] focus:outline-none transition resize-none"
              />
              <button
                type="submit"
                className="bg-[#C76E00] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#A65B00] transition duration-300"
              >
                Enviar
              </button>
            </form>

            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-[#C76E00] font-semibold text-sm mb-1">
                  DIRECCIÓN
                </p>
                <p className="text-white">Av. Siempre Viva 123, Buenos Aires</p>
              </div>
              <div>
                <p className="text-[#C76E00] font-semibold text-sm mb-1">
                  TELÉFONO
                </p>
                <p className="text-white">+54 9 11 1234-5678</p>
              </div>
              <div>
                <p className="text-[#C76E00] font-semibold text-sm mb-1">
                  EMAIL
                </p>
                <p className="text-white">contacto@novafit.com</p>
              </div>
              <div>
                <p className="text-[#C76E00] font-semibold text-sm mb-1">
                  HORARIOS
                </p>
                <p className="text-white">Lunes a viernes, 7:00 a 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
