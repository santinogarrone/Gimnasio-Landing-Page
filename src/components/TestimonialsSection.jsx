const testimonials = [
  {
    name: "Lucas",
    age: "27 años",
    quote:
      "Después de meses intentando entrenar por mi cuenta, finalmente empecé a ver resultados.",
  },
  {
    name: "Martina",
    age: "31 años",
    quote:
      "El seguimiento semanal me mantuvo motivada, bajé 8 kilos en 3 meses.",
  },
  {
    name: "Fede",
    age: "24 años",
    quote:
      "Nunca pensé que iba a disfrutar entrenar, los entrenadores hacen la diferencia.",
  },
  {
    name: "Sofía",
    age: "29 años",
    quote:
      "Encontré una rutina que puedo sostener y un equipo que siempre me acompaña.",
  },
  {
    name: "Tomás",
    age: "35 años",
    quote:
      "La energía del lugar es increíble. Cada semana llego con más ganas de entrenar.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-[#05090d] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#ff9a3d]">
          Testimonios
        </p>
        <h2 className="mt-3 text-center text-3xl font-black text-white md:text-4xl">
          Lo que dicen nuestros alumnos
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-x-6 md:gap-y-10">
          {testimonials.map(({ name, age, quote }, index) => (
            <div
              key={name}
              className={
                index === 0
                  ? "relative rounded-[26px] rounded-bl-md border border-white/10 bg-[#0d151a] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 md:col-span-3 md:translate-y-4"
                  : index === 1
                    ? "relative rounded-[26px] rounded-br-md border border-[#ff8a1d]/45 bg-[#101821] p-7 shadow-[0_18px_40px_rgba(255,138,29,0.1)] transition duration-300 hover:-translate-y-1 md:col-span-2 md:col-start-5 md:-translate-y-5"
                    : index === 2
                      ? "relative rounded-[26px] rounded-bl-md border border-white/10 bg-[#0d151a] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 md:col-span-3 md:col-start-2 md:translate-y-3"
                      : index === 3
                        ? "relative rounded-[26px] rounded-br-md border border-white/10 bg-[#0d151a] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 md:col-span-2 md:col-start-1 md:-translate-y-2"
                        : "relative rounded-[26px] rounded-bl-md border border-[#ff8a1d]/30 bg-[#101821] p-7 shadow-[0_18px_40px_rgba(255,138,29,0.08)] transition duration-300 hover:-translate-y-1 md:col-span-3 md:col-start-4 md:translate-y-5"
              }
            >
              <span
                className={
                  index === 1
                    ? "absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-r border-b border-[#ff8a1d]/45 bg-[#101821]"
                    : "absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-r border-b border-white/10 bg-[#0d151a]"
                }
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff8a1d] font-bold text-white">
                  {name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-white">{name}</p>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-400">
                    {age} · mensaje recibido
                  </p>
                </div>
              </div>
              <p className="text-base leading-7 text-slate-300">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
