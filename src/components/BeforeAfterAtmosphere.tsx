import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageIcon, ScanSearch, UserRound } from "lucide-react";
import { ScrollScrubText } from "./ScrollScrubText";

gsap.registerPlugin(ScrollTrigger);

type BeforeAfterAtmosphereProps = {
  beforeImage?: string;
  afterImage?: string;
  detailImage?: string;
};

type MediaCardProps = {
  imageSrc?: string;
  alt: string;
  aspectClass: string;
  grayscale?: boolean;
  placeholderEyebrow: string;
  placeholderTitle: string;
  placeholderText: string;
  placeholderIcon?: "before" | "after" | "detail";
};

const PlaceholderIcon = ({
  type,
  className = "h-6 w-6",
}: {
  type: "before" | "after" | "detail";
  className?: string;
}) => {
  if (type === "before") return <UserRound className={className} strokeWidth={1.8} />;
  if (type === "after") return <ImageIcon className={className} strokeWidth={1.8} />;
  return <ScanSearch className={className} strokeWidth={1.8} />;
};

const MediaCard = ({
  imageSrc,
  alt,
  aspectClass,
  grayscale = false,
  placeholderEyebrow,
  placeholderTitle,
  placeholderText,
  placeholderIcon = "detail",
}: MediaCardProps) => {
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = !imageSrc || hasError;

  if (showPlaceholder) {
    return (
      <div
        data-image-wrap
        className={`relative ${aspectClass} w-full overflow-hidden bg-[#0A0A0A]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,57,70,0.10),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.04),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/20" />

        <div className="absolute inset-6 rounded-[1.4rem] border border-dashed border-white/10" />
        <div className="absolute inset-10 rounded-[1.2rem] border border-white/5" />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E63946]/20 bg-[#E63946]/10 text-[#E63946] shadow-[0_0_24px_rgba(230,57,70,0.08)]">
            <PlaceholderIcon type={placeholderIcon} className="h-7 w-7" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.28em] text-[#E63946]">
            {placeholderEyebrow}
          </span>

          <h4 className="mt-3 font-['Space_Grotesk',sans-serif] text-xl font-medium tracking-tight text-white md:text-2xl">
            {placeholderTitle}
          </h4>

          <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-gray-500">
            {placeholderText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div data-image-wrap className="will-change-transform">
      <img
        src={imageSrc}
        alt={alt}
        onError={() => setHasError(true)}
        className={`${aspectClass} w-full object-cover transition-all duration-700 group-hover:scale-[1.03] ${
          grayscale
            ? "grayscale opacity-80 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100"
        }`}
      />
    </div>
  );
};

export const BeforeAfterAtmosphere: React.FC<BeforeAfterAtmosphereProps> = ({
  beforeImage,
  afterImage,
  detailImage,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const headerEls = section.querySelectorAll("[data-ba-header]");
      const cards = section.querySelectorAll("[data-ba-card]");

      gsap.fromTo(
        headerEls,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 74%",
            once: true,
          },
        }
      );

      mm.add("(min-width: 1024px)", () => {
        const cols = gsap.utils.toArray<HTMLElement>("[data-parallax-col]");
        const imageWraps = gsap.utils.toArray<HTMLElement>("[data-image-wrap]");

        cols.forEach((col, i) => {
          gsap.to(col, {
            yPercent: i % 2 === 0 ? -12 : 12,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        });

        imageWraps.forEach((wrap, i) => {
          gsap.fromTo(
            wrap,
            {
              scale: 1.06,
              yPercent: i % 2 === 0 ? 4 : -4,
            },
            {
              scale: 1,
              yPercent: i % 2 === 0 ? -4 : 4,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      });

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("load", refresh);
      window.addEventListener("resize", refresh);

      const timer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);

      return () => {
        mm.revert();
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
        window.clearTimeout(timer);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-20">
        <div className="mb-12 flex items-start justify-between gap-8 md:mb-20">
          <div className="max-w-3xl" data-ba-header>
            <ScrollScrubText
              text="ANTES E DEPOIS"
              className="font-['Space_Grotesk',sans-serif] text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl"
            />
          </div>

          <div className="hidden pt-3 md:block" data-ba-header>
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-gray-500">
              DISCIPLINA / PROCESSO / RESULTADO
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div
            data-parallax-col
            className="flex flex-col gap-4 md:gap-8 md:pt-20 will-change-transform"
          >
            <article
              data-ba-card
              className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]"
            >
              <div className="overflow-hidden">
                <MediaCard
                  imageSrc={beforeImage}
                  alt="Antes"
                  aspectClass="aspect-[3/4]"
                  grayscale
                  placeholderEyebrow="ANTES"
                  placeholderTitle="Foto do ponto de partida"
                  placeholderText="Aqui entra a imagem inicial do aluno, com leitura clara do começo do processo."
                  placeholderIcon="before"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                  BEFORE
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                  Ponto de partida
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                  Estrutura inicial, começo da mudança e primeira fase do processo.
                </p>
              </div>
            </article>

            <article
              data-ba-card
              className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]"
            >
              <div className="overflow-hidden">
                <MediaCard
                  imageSrc={detailImage || beforeImage}
                  alt="Detalhe"
                  aspectClass="aspect-[4/5]"
                  grayscale
                  placeholderEyebrow="DETALHE"
                  placeholderTitle="Imagem de apoio"
                  placeholderText="Use aqui uma foto complementar de treino, rotina, detalhe corporal ou contexto da transformação."
                  placeholderIcon="detail"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-gray-500">
                  DETAIL
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Evolução construída com direção, constância e ajuste fino.
                </p>
              </div>
            </article>
          </div>

          <div
            data-parallax-col
            className="flex flex-col gap-4 md:gap-8 will-change-transform"
          >
            <article
              data-ba-card
              className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]"
            >
              <div className="overflow-hidden">
                <MediaCard
                  imageSrc={afterImage}
                  alt="Depois"
                  aspectClass="aspect-[4/5]"
                  placeholderEyebrow="DEPOIS"
                  placeholderTitle="Foto do resultado"
                  placeholderText="Aqui entra a imagem final, destacando a mudança visual e a evolução percebida ao longo do processo."
                  placeholderIcon="after"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                  AFTER
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                  Resultado visível
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                  Mudança percebida no físico, na postura e na presença.
                </p>
              </div>
            </article>

            <article
              data-ba-card
              className="flex aspect-square items-center justify-center border border-white/10 bg-[#0A0A0A] p-8 text-center"
            >
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.28em] text-gray-400 md:text-xs">
                “CONSISTÊNCIA
                <br />
                MUDA A
                <br />
                FORMA.”
                <br />
                <br />
                <span className="text-[#E63946]">— YOUR BRAND</span>
              </p>
            </article>
          </div>

          <div
            data-parallax-col
            className="hidden flex-col gap-4 md:flex md:gap-8 md:pt-40 will-change-transform"
          >
            <article
              data-ba-card
              className="flex aspect-[3/4] items-center justify-center border border-white/10 bg-[#0A0A0A]"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 h-2 w-2 rounded-full bg-[#E63946] shadow-[0_0_10px_#E63946]" />
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-gray-500">
                  BODY / MIND / PERFORMANCE
                </p>
              </div>
            </article>

            <article
              data-ba-card
              className="group relative overflow-hidden border border-white/10 bg-[#0A0A0A]"
            >
              <div className="overflow-hidden">
                <MediaCard
                  imageSrc={afterImage}
                  alt="Resultado final"
                  aspectClass="aspect-[4/5]"
                  grayscale
                  placeholderEyebrow="FINAL FORM"
                  placeholderTitle="Imagem final complementar"
                  placeholderText="Espaço para uma segunda foto de resultado, reforçando consistência e transformação."
                  placeholderIcon="after"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#E63946]">
                  FINAL FORM
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Resultado que comunica evolução sem precisar de explicação.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};