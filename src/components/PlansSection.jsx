const plans = [
  {
    title: "Plan Inicial",
    highlight: false,
    items: [
      "Evaluación inicial",
      "Rutina personalizada",
      "2 entrenamientos semanales",
    ],
  },
  {
    title: "Plan Pro",
    highlight: true,
    items: [
      "Evaluación inicial",
      "Rutina personalizada",
      "3 entrenamientos semanales",
      "Seguimiento semanal",
    ],
  },
  {
    title: "Plan Premium",
    highlight: false,
    items: [
      "Todo lo anterior",
      "5 entrenamientos semanales",
      "Seguimiento personalizado",
      "Asesoramiento nutricional",
    ],
  },
];

export default function PlansSection() {
  return (
    <section id="servicios" className="bg-[#0a1015] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff9a3d]">
            Planes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Elegí el plan que mejor te acompañe
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-end">
          {plans.map(({ title, items, highlight }, index) => {
            const sizeClass =
              index === 0
                ? "md:min-h-[350px]"
                : index === 1
                  ? "md:min-h-[380px]"
                  : "md:min-h-[410px]";

            const cardClass = highlight
              ? "relative rounded-[28px] border-2 border-[#ff8a1d] bg-[linear-gradient(180deg,#111821_0%,#0d151a_100%)] p-8 text-center shadow-[0_22px_50px_rgba(255,138,29,0.18)] transition duration-300 hover:-translate-y-1 " +
                sizeClass
              : index === 2
                ? "relative rounded-[28px] border-2 border-[#f4c95d] bg-[linear-gradient(180deg,#171d24_0%,#0a1015_100%)] p-8 text-center shadow-[0_24px_55px_rgba(244,201,93,0.14)] transition duration-300 hover:-translate-y-1 " +
                  sizeClass
                : "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0d151a_0%,#111821_100%)] p-8 text-center transition duration-300 hover:-translate-y-1 " +
                  sizeClass;

            const badgeText = highlight
              ? "Más elegido"
              : index === 2
                ? "Premium"
                : "Acceso";

            const labelText = highlight
              ? "Popular"
              : index === 2
                ? "Máxima"
                : "Acceso";

            return (
              <div key={title} className={cardClass}>
                {(highlight || index === 2) && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ff8a1d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_20px_rgba(255,138,29,0.35)]">
                    {badgeText}
                  </span>
                )}

                <div
                  className={
                    highlight
                      ? "mb-5 text-[#ffb067] text-xs font-bold uppercase tracking-[0.3em]"
                      : index === 2
                        ? "mb-5 text-[#f4c95d] text-xs font-bold uppercase tracking-[0.3em]"
                        : "mb-5 text-[#ff9a3d] text-xs font-bold uppercase tracking-[0.3em]"
                  }
                >
                  {labelText}
                </div>

                <h3
                  className={
                    highlight || index === 2
                      ? index === 2
                        ? "mb-5 text-2xl font-bold text-[#f4c95d]"
                        : "mb-5 text-2xl font-bold text-[#ff9a3d]"
                      : "mb-5 text-2xl font-bold text-white"
                  }
                >
                  {title}
                </h3>

                <ul
                  className={
                    highlight || index === 2
                      ? "space-y-3 text-base text-slate-200"
                      : "space-y-3 text-base text-slate-300"
                  }
                >
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
