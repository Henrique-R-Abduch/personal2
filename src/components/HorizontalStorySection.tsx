import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    eyebrow: "PASSO 01",
    title: "AVALIAÇÃO",
    description:
      "Começamos entendendo seu objetivo, rotina e histórico. Sem avaliação certa, não há plano efetivo. Mapeamos tudo para montar sua consultoria.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    bg: "#050505",
    cardLabel: "COM RUAN",
    cardText:
      "Avaliação completa e criação de plano personalizado baseado no seu objetivo real.",
  },
  {
    eyebrow: "PASSO 02",
    title: "TREINO",
    description:
      "Plano de treino personalizado, vídeos explicativos e suporte 24/7 no WhatsApp. Você tem toda orientação que precisa para treinar certo.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    bg: "#0A0A0A",
    cardLabel: "PLANO RR",
    cardText:
      "Treino estruturado, orientação e suporte direto. Você nunca treina sozinho.",
  },
  {
    eyebrow: "PASSO 03",
    title: "RESULTADO",
    description:
      "Com consistência e orientação correta, o corpo responde. Definição, ganho e força reais. Isso é transformação que você vê no espelho.",
    image:
      "https://images.unsplash.com/photo-1516433031322-5b8a30b5d2d0?q=80&w=1600&auto=format&fit=crop",
    bg: "#050505",
    cardLabel: "SEU GANHO",
    cardText:
      "Corpo transformado, força aumentada, imagem que você sempre quis. De verdade.",
  },
];

const HorizontalStorySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !isDesktop) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      window.addEventListener("resize", refresh);

      const timer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
        window.clearTimeout(timer);
      };
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section
        ref={sectionRef}
        id="horizontal-story"
        className="relative border-t border-white/10 bg-[#050505] py-20 text-white"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

        <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 md:px-10">
          {slides.map((slide) => (
            <article
              key={slide.title}
              className="grid gap-6 border border-white/10 bg-[#0A0A0A] p-4 md:p-6"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                  {slide.eyebrow}
                </span>

                <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-medium leading-[0.95] tracking-[-0.05em]">
                  {slide.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {slide.description}
                </p>
              </div>

              <div className="relative overflow-hidden border border-white/10 bg-black">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-[36vh] w-full object-cover grayscale opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                    {slide.cardLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {slide.cardText}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="horizontal-story"
      className="relative h-screen overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

      <div ref={trackRef} className="flex h-full w-[300vw]">
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className="relative flex h-full w-screen shrink-0 items-center border-r border-white/10 px-6 md:px-20"
            style={{ background: slide.bg }}
          >
            <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 md:grid-cols-2">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                  {slide.eyebrow}
                </span>

                <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  {slide.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
                  {slide.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#E63946] shadow-[0_0_10px_#E63946]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-gray-500">
                    Continue rolando
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-[50vh] w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0 md:h-[65vh]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
                    <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                      {slide.cardLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {slide.cardText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HorizontalStorySection;