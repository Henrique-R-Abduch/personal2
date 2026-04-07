import React, { useMemo, useRef, useState } from "react";

type CinematicBeforeAfterProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  eyebrow?: string;
};

export const CinematicBeforeAfter: React.FC<CinematicBeforeAfterProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DEPOIS",
  title = "TRANSFORMAÇÃO REAL",
  eyebrow = "RESULTADO / EVOLUÇÃO",
}) => {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const afterClipPath = useMemo(
    () => `inset(0 0 0 ${position}%)`,
    [position]
  );

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, raw));
    setPosition(clamped);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-20">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#E63946] shadow-[0_0_10px_#E63946]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-['Space_Grotesk',sans-serif] text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </div>

          <p className="hidden max-w-sm text-sm leading-relaxed text-gray-400 md:block">
            Uma sessão de comparação com a mesma linguagem premium do Verglas:
            contraste alto, tipografia forte, superfícies escuras, detalhes
            técnicos e foco total no impacto visual da evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              <img
                src={beforeImage}
                alt="Antes"
                className="h-[420px] w-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-95 group-hover:grayscale-0 md:h-[520px]"
              />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <span className="mb-2 block text-[10px] font-mono uppercase tracking-[0.25em] text-[#E63946]">
                  {beforeLabel}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white">
                  Ponto de partida
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  Estética editorial escura, foco total na percepção de contraste
                  e evolução.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden border border-white/10 bg-[#0A0A0A]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#E63946] shadow-[0_0_8px_#E63946]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
                    Comparison Engine
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
                  Drag / Move
                </span>
              </div>

              <div
                ref={containerRef}
                className="relative h-[420px] select-none overflow-hidden bg-black md:h-[520px]"
                onMouseDown={(e) => {
                  setDragging(true);
                  updatePosition(e.clientX);
                }}
                onMouseMove={(e) => {
                  if (!dragging) return;
                  updatePosition(e.clientX);
                }}
                onMouseUp={() => setDragging(false)}
                onMouseLeave={() => setDragging(false)}
                onTouchStart={(e) => {
                  setDragging(true);
                  updatePosition(e.touches[0].clientX);
                }}
                onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
                onTouchEnd={() => setDragging(false)}
              >
                <img
                  src={beforeImage}
                  alt="Antes"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />

                <div
                  className="absolute inset-0"
                  style={{ clipPath: afterClipPath }}
                >
                  <img
                    src={afterImage}
                    alt="Depois"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-[#050505]/20" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-noise" />

                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-20 w-px bg-white/80"
                  style={{ left: `${position}%` }}
                >
                  <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#050505]/80 backdrop-blur-md">
                    <div className="h-6 w-[2px] bg-[#E63946] shadow-[0_0_10px_#E63946]" />
                  </div>
                </div>

                <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-[#050505]/70 px-3 py-1 backdrop-blur-md">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white">
                    {beforeLabel}
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-20 rounded-full border border-[#E63946]/30 bg-[#050505]/70 px-3 py-1 backdrop-blur-md">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E63946]">
                    {afterLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500">
                      Visual comparison
                    </p>
                    <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-medium tracking-tight text-white sm:text-3xl">
                      Evolução visível
                    </h3>
                  </div>

                  <div className="rounded border border-white/10 bg-[#050505]/70 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500">
                      Transformation score
                    </p>
                    <p className="mt-1 font-['Space_Grotesk',sans-serif] text-2xl tracking-tight text-white">
                      +100%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex h-full flex-col gap-6">
              <div className="group relative flex-1 overflow-hidden border border-white/10 bg-[#0A0A0A]">
                <img
                  src={afterImage}
                  alt="Depois"
                  className="h-[300px] w-full object-cover transition-all duration-700 group-hover:scale-[1.03] md:h-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <span className="mb-2 block text-[10px] font-mono uppercase tracking-[0.25em] text-[#E63946]">
                    Outcome
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    Resultado premium
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    O “depois” pode mostrar shape, postura, definição ou
                    presença visual.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 bg-[#0A0A0A] p-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500">
                  Philosophy
                </p>
                <p className="mt-4 font-['Space_Grotesk',sans-serif] text-2xl leading-tight tracking-tight text-white">
                  Disciplina gera forma.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  Aqui entra uma frase forte, curta e premium, no mesmo clima
                  editorial do layout de referência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};