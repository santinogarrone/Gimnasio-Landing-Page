import image3 from "../assets/gym-espalda.jpg";
import imagefondo from "../assets/gym-fondo.jpg";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#070b10] px-4 py-20 md:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imagefondo})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,138,29,0.2),_transparent_36%)]" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-[#ff8a1d]/30 bg-[#ff8a1d]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ffb067]">
            GYM • TRAINING CLUB
          </span>
          <h1 className="mt-5 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Entrena con propósito.
            <span className="mt-2 block text-[#ff9a3d]">
              Transformá tu cuerpo.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-200 md:text-lg">
            Entrenamiento personalizado para quienes quieren sentirse más
            fuertes, más sanos y más seguros, sin perder tiempo ni energía.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="bg-[#C76E00] px-6 py-3 text-sm font-bold text-white rounded-xl shadow-[0_12px_30px_rgba(199,110,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#d77d18]">
              Reservar clase de prueba
            </button>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff8a1d]/60 hover:text-[#ffbb7b]"
            >
              Ver planes
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
              <span className="font-bold text-white">+1.200</span> miembros
              activos
            </div>
            <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
              <span className="font-bold text-white">4.9/5</span> rating
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-center lg:justify-end">
          <div className="glow-ring w-full max-w-xl overflow-hidden rounded-[30px] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
            <img
              src={image3}
              alt="Persona entrenando"
              className="hero-image w-full rounded-[22px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
