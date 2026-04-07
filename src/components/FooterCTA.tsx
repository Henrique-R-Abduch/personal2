import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterCTA = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const els = section.querySelectorAll("[data-footer-el]");

      gsap.fromTo(
        els,
        {
          y: 34,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="fixed bottom-0 left-0 z-0 flex h-screen w-full items-center justify-center border-t border-white/10 bg-[#0A0A0A] px-6 text-white md:px-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div
          data-footer-el
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#E63946] shadow-[0_0_8px_#E63946]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-gray-300 md:text-xs">
            Vagas Abertas
          </span>
        </div>

        <a href="#" data-footer-el className="group block">
          <h2 className="font-['Space_Grotesk',sans-serif] text-[14vw] font-medium leading-[0.82] tracking-[-0.06em] text-white transition-colors duration-500 group-hover:text-[#E63946] md:text-[9vw]">
            COMEÇAR AGORA
          </h2>

          <div className="mx-auto mt-4 h-px w-0 bg-[#E63946] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
        </a>

        <div
          data-footer-el
          className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-left md:mt-20 md:grid-cols-4 md:gap-8 md:pt-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              Contato
            </span>
            <a href="https://www.instagram.com/ruanrubenspersonal/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 transition-colors hover:text-white">
              Instagram
            </a>
            <a href="https://wa.me/5522997118941" target="_blank" rel="noreferrer" className="text-xs text-gray-400 transition-colors hover:text-white">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/ruanrubenspersonal/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 transition-colors hover:text-white">
              YouTube
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              Método
            </span>
            <p className="text-xs text-gray-400">
              Avaliação
              <br />
              Treino
              <br />
              Resultado
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              Contato
            </span>
            <a href="https://wa.me/5522997118941" target="_blank" rel="noreferrer" className="text-xs text-gray-400 transition-colors hover:text-white">
              +55 22 99711-8941
            </a>
            <p className="text-xs text-gray-500">
              São Paulo, SP
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              © 2026
            </span>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-600 md:text-xs">
              Ruan Rubens
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;