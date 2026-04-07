import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biometrics from "@/components/Biometrics";
import TrainingPhases from "@/components/TrainingPhases";
import FooterCTA from "@/components/FooterCTA";
import { BeforeAfterAtmosphere } from "@/components/BeforeAfterAtmosphere";
import { ScrollScrubText } from "@/components/ScrollScrubText";
import HorizontalStorySection from "@/components/HorizontalStorySection";

const Index = () => {
  return (
    <>
      <main className="relative z-10 mb-[100vh] overflow-x-hidden rounded-b-[2rem] bg-[#050505] text-foreground shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        <Navbar />
        <Hero />

        <section className="relative bg-[#050505] px-6 py-24 text-white md:px-20 md:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise" />

          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs font-mono text-[#E63946]">
                  01 — MANIFESTO
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]">
                  <div className="absolute inset-0 opacity-[0.05] bg-noise" />

                  <img
                    src="/personal.png"
                    alt="Marcelo Peres"
                    className="aspect-[4/5] w-full object-cover grayscale opacity-95 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-5">
                  <div className="absolute inset-0 opacity-[0.05] bg-noise" />

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#E63946] shadow-[0_0_8px_#E63946]" />
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
                        SOBRE O PERSONAL
                      </span>
                    </div>

                    <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-medium tracking-tight text-white">
                      Ruan Rubens
                    </h3>

                    <div className="mt-4 space-y-3">
                      <p className="text-sm leading-relaxed text-gray-400">
                        Personal Trainer especializado em consultoria online e definição. Curador de treinos personalizados para milhares de alunos.
                      </p>
                      <p className="text-sm leading-relaxed text-gray-400">
                        5000+ alunos em todo Brasil | Planos a partir de R$50 | Suporte 24/7 no WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <ScrollScrubText
                text="Mais de 5000 alunos em todo Brasil ficando mais fortes e definidos com consultoria séria e acessível."
                className="font-['Space_Grotesk',sans-serif] max-w-7xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-7xl lg:text-[5.8rem] xl:text-[6.6rem]"
              />
            </div>
          </div>
        </section>

        <div id="biometrics">
          <Biometrics />
        </div>

        <BeforeAfterAtmosphere
          beforeImage="/images/antes.jpg"
          afterImage="/images/depois.jpg"
          detailImage="/images/detalhe.jpg"
        />

        <HorizontalStorySection />
        <TrainingPhases />
      </main>

      <FooterCTA />
    </>
  );
};

export default Index;