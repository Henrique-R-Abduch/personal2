import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        "[data-hero-image]",
        {
          scale: 1.16,
          opacity: 0.55,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        }
      )
        .fromTo(
          "[data-hero-title-left]",
          {
            yPercent: 115,
          },
          {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=1.05"
        )
        .fromTo(
          "[data-hero-title-right]",
          {
            yPercent: 115,
          },
          {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.82"
        )
        .fromTo(
          "[data-hero-fade]",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.7"
        );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505] text-white"
      id="hero"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

      <div className="absolute inset-0">
        <img
          data-hero-image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2200&auto=format&fit=crop"
          alt="Hero background"
          className="h-full w-full object-cover brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-[#050505]" />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col justify-between px-6 py-28 md:px-12 md:py-32">
        <div className="self-start overflow-hidden">
          <h1
            data-hero-title-left
            className="font-['Space_Grotesk',sans-serif] text-[18vw] leading-[0.82] tracking-[-0.07em] text-white md:text-[15vw]"
          >
            TREINO
          </h1>
        </div>

        <div className="self-end overflow-hidden">
          <h1
            data-hero-title-right
            className="font-['Space_Grotesk',sans-serif] text-[18vw] font-light italic leading-[0.82] tracking-[-0.07em] text-white md:text-[15vw]"
          >
            CERTO
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-20 flex flex-col gap-1 md:bottom-12 md:left-12">
        <span
          data-hero-fade
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white"
        >
          Biomécanica & Saúde
          <span className="h-px w-6 bg-[#E63946]" />
        </span>

        <span
          data-hero-fade
          className="text-xs font-medium uppercase tracking-[0.18em] text-gray-300"
        >
          Ciéncia / Força / Resultado
        </span>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <a
  href="https://wa.me/5554992352599?text=Ola%20Alex%21%20Gostaria%20de%20saber%20mais%20sobre%20sua%20consultoria%20de%20treinamento%20e%20saude."
  target="_blank"
  rel="noreferrer"
  data-hero-fade
  aria-label="Comece Agora"
  className="group pointer-events-auto relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-black/30 p-2 backdrop-blur-md transition-all duration-500 hover:scale-[1.04] hover:border-white/20 active:scale-[0.98] md:h-40 md:w-40"
>
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-[10px] rounded-full border border-white/10 transition-all duration-700 group-hover:scale-[0.9] group-hover:border-[#E63946]/35" />
          <div className="absolute inset-[22px] rounded-full border border-white/10 opacity-70 transition-all duration-700 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-full opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(230,57,70,0.18)_0%,rgba(230,57,70,0.03)_45%,transparent_75%)]" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <span className="text-[8px] font-medium uppercase tracking-[0.26em] text-white/70 transition-colors duration-300 group-hover:text-[#E63946]">
              Comece Agora
            </span>

            <span className="mt-1 font-['Space_Grotesk',sans-serif] text-xs uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-white">
              Seu Treino
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-full animate-[pulse_4s_ease-in-out_infinite] border border-[#E63946]/10" />
          <div className="absolute bottom-7 left-1/2 h-px w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E63946]/80 to-transparent opacity-70 shadow-[0_0_8px_rgba(230,57,70,0.45)] transition-all duration-500 group-hover:w-20 group-hover:opacity-100 md:bottom-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;