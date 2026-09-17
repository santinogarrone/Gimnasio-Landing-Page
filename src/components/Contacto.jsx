import React from "react";

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="bg-[#070b10] px-4 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#ff9a3d]">
            Contacto
          </p>
          <h2 className="mb-12 text-center text-3xl font-black text-white md:text-4xl">
            Empezá tu transformación hoy
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <form className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0d151a] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <input
                type="text"
                placeholder="Nombre"
                className="rounded-xl border border-white/10 bg-[#101821] px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#ff8a1d] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-[#101821] px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#ff8a1d] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="rounded-xl border border-white/10 bg-[#101821] px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#ff8a1d] focus:outline-none"
              />
              <textarea
                placeholder="Contanos tu objetivo"
                rows="4"
                className="resize-none rounded-xl border border-white/10 bg-[#101821] px-4 py-3 text-white placeholder-slate-400 transition focus:border-[#ff8a1d] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 rounded-xl bg-[#C76E00] px-6 py-3 font-bold text-white transition hover:bg-[#d77d18]"
              >
                Enviar
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d151a] shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <div className="relative h-64 w-full bg-[radial-gradient(circle_at_center,_rgba(255,138,29,0.20),_transparent_35%),linear-gradient(135deg,#0f172a_0%,#101821_44%,#1f2937_100%)]">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="flex h-14 w-16 items-center justify-center rounded-full border-4 border-white bg-[#ff8a1d] shadow-[0_0_25px_rgba(255,138,29,0.8)]">
                      <div className="flex items-center gap-1 text-lg font-black text-white">
                        <span className="inline-block h-3 w-3 rounded-full bg-white" />
                        <span className="inline-block h-3 w-3 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="mt-3 rounded-full border border-[#ff8a1d]/30 bg-[#111821]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb067]">
                      Nova Fit
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-[#111821]/85 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ff9a3d]">
                      Ubicación
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Av. Siempre Viva 123
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#101821] px-4 py-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Siempre+Viva+123+Buenos+Aires"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb067] transition hover:text-[#ffd4a0]"
                  >
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff8a1d]" />
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff8a1d]" />
                    </span>
                    Cómo llegar
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-[#0d151a] p-6">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9a3d]">
                    Dirección
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Siempre+Viva+123+Buenos+Aires"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white underline decoration-[#ff8a1d]/60 underline-offset-4 transition hover:text-[#ffb067]"
                  >
                    Av. Siempre Viva 123, Buenos Aires
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9a3d]">
                    Teléfono
                  </p>
                  <p className="text-white">+54 9 11 1234-5678</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9a3d]">
                    Email
                  </p>
                  <p className="text-white">contacto@novafit.com</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9a3d]">
                    Horarios
                  </p>
                  <p className="text-white">Lunes a viernes, 7:00 a 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
