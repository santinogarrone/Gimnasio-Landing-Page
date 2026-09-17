const features = [
  {
    title: "Entrenamiento Personalizado",
    label: "La base",
    description:
      "Cada persona es única, por eso diseñamos programas adaptados a tus necesidades, nivel y objetivos concretos.",
  },
  {
    title: "Entrenadores Expertos",
    label: "El impulso",
    description:
      "Un equipo motivador, capacitado y cercano que te acompaña en cada paso para mejorar tu rendimiento y bienestar.",
  },
  {
    title: "Resultados Reales",
    label: "El cambio",
    description:
      "Nos enfocamos en soluciones efectivas y sostenibles para que veas cambios visibles y una mejora constante en tu energía.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#05090d] px-4 pb-20 pt-12 md:pb-32 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff9a3d]">
            ¿Por qué Nova Fit?
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Más que un gimnasio: una rutina hecha para vos.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {features.map(({ title, label, description }, index) => (
            <div key={title} className="relative flex flex-col">
              {index < features.length - 1 && (
                <div className="absolute right-[-2.25rem] top-14 hidden w-12 items-center md:flex">
                  <div className="h-px w-full bg-gradient-to-r from-[#ff8a1d]/70 to-white/10" />
                  <span className="absolute right-0 h-2 w-2 rounded-full bg-[#ff9a3d] shadow-[0_0_12px_rgba(255,138,29,0.8)]" />
                </div>
              )}

              <div
                className={
                  index === 1
                    ? "gym-card flex min-h-[300px] flex-1 flex-col rounded-[28px] border border-[#ff8a1d]/45 bg-[#101821] p-8 shadow-[0_20px_45px_rgba(255,138,29,0.14)] transition duration-300 hover:-translate-y-2 md:translate-y-8"
                    : index === 2
                      ? "flex min-h-[300px] flex-1 flex-col rounded-[28px] border border-white/10 bg-gradient-to-br from-[#151d24] to-[#0b1116] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-2 md:translate-y-2"
                      : "flex min-h-[300px] flex-1 flex-col rounded-[28px] border border-white/10 bg-[#0d151a] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-2"
                }
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff9a3d]">
                    Paso 0{index + 1}
                  </span>
                  <span className="text-5xl font-black leading-none text-white/[0.08]">
                    0{index + 1}
                  </span>
                </div>
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </span>
                <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-auto text-base leading-7 text-slate-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
