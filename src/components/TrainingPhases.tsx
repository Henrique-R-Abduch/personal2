import { motion } from "framer-motion";
import {
  ClipboardList,
  Target,
  HeartPulse,
  Dumbbell,
  TrendingUp,
  ShieldCheck,
  Activity,
  BarChart3,
  Sparkles,
  LucideIcon,
} from "lucide-react";

type Briefing = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
};

type Phase = {
  id: string;
  day: string;
  stage: string;
  title: string;
  description: string;
  image: string;
  briefings: Briefing[];
};

const phases: Phase[] = [
  {
    id: "01",
    day: "FASE 01",
    stage: "SEMANAS 01-04",
    title: "BASE",
    description:
      "O início do processo é sobre organização, técnica e consistência. Aqui estruturamos a rotina, corrigimos padrões de movimento e criamos a base para uma evolução real e sustentável.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    briefings: [
      {
        icon: ClipboardList,
        title: "Estrutura",
        subtitle: "Avaliação inicial",
        description:
          "Leitura do objetivo, rotina, limitações, histórico e nível atual para montar uma estratégia coerente.",
      },
      {
        icon: Target,
        title: "Foco",
        subtitle: "Técnica e execução",
        description:
          "Ajuste de movimento, controle de execução e construção de uma base sólida para evoluir com segurança.",
      },
      {
        icon: HeartPulse,
        title: "Suporte",
        subtitle: "Adaptação do corpo",
        description:
          "Mobilidade, recuperação e adaptação progressiva para preparar o físico para cargas maiores.",
      },
    ],
  },
  {
    id: "02",
    day: "FASE 02",
    stage: "SEMANAS 05-08",
    title: "CONSTRUÇÃO",
    description:
      "Com a base feita, entramos na fase de crescimento. O treino ganha densidade, a progressão fica mais clara e o corpo começa a responder com mais volume, força e presença estética.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    briefings: [
      {
        icon: Dumbbell,
        title: "Estrutura",
        subtitle: "Treino progressivo",
        description:
          "Mais volume, sobrecarga orientada e organização inteligente de estímulos para acelerar a evolução.",
      },
      {
        icon: TrendingUp,
        title: "Foco",
        subtitle: "Hipertrofia e força",
        description:
          "Aumento de desempenho, melhora de composição corporal e construção de um físico mais forte e denso.",
      },
      {
        icon: ShieldCheck,
        title: "Suporte",
        subtitle: "Acompanhamento ativo",
        description:
          "Ajustes constantes para manter aderência, corrigir rota e sustentar resultado no médio prazo.",
      },
    ],
  },
  {
    id: "03",
    day: "FASE 03",
    stage: "SEMANAS 09-12",
    title: "CONSOLIDAÇÃO",
    description:
      "Nesta etapa o foco é lapidar. Refinamos execução, mantemos consistência e transformamos progresso em resultado perceptível no espelho, no desempenho e na rotina.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    briefings: [
      {
        icon: Activity,
        title: "Estrutura",
        subtitle: "Ajuste fino",
        description:
          "Refino de treino, intensidade e volume para sustentar evolução sem perder qualidade de execução.",
      },
      {
        icon: BarChart3,
        title: "Foco",
        subtitle: "Resultado visível",
        description:
          "Medição de progresso, leitura de resposta do corpo e clareza sobre o que está funcionando.",
      },
      {
        icon: Sparkles,
        title: "Suporte",
        subtitle: "Próximo nível",
        description:
          "Encerramos o ciclo com direção clara para continuidade, manutenção ou novo bloco de evolução.",
      },
    ],
  },
];

const TrainingPhases = () => {
  return (
    <section id="phases" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${phaseIndex > 0 ? "mt-24 lg:mt-32" : ""}`}
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className={`${phaseIndex % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={phase.image}
                    alt={`Fase ${phase.id} - ${phase.title}`}
                    className="aspect-[4/3] w-full object-cover grayscale-hover"
                  />
                  <div className="absolute right-4 top-4 rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 backdrop-blur-sm">
                    <span className="font-mono-label text-foreground/70">
                      {phase.stage}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col justify-center ${phaseIndex % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono-label text-muted-foreground/40">
                    {phase.day}
                  </span>
                  <span className="font-mono-label text-muted-foreground/40">
                    {phase.stage}
                  </span>
                </div>

                <h3 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {phase.title}
                </h3>

                <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-foreground/30" />
                    <span className="font-mono-label text-muted-foreground/50">
                      Estrutura do bloco
                    </span>
                  </div>

                  <div className="space-y-3">
                    {phase.briefings.map((briefing, i) => {
                      const Icon = briefing.icon;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                          className="flex gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:bg-card"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-[#E63946]">
                            <Icon className="h-4 w-4" strokeWidth={1.9} />
                          </div>

                          <div className="flex-1">
                            <div className="mb-0.5 font-mono-label text-muted-foreground/50">
                              {briefing.title}
                            </div>
                            <div className="font-display text-sm font-medium text-foreground">
                              {briefing.subtitle}
                            </div>
                            <p className="mt-1 font-body text-xs leading-relaxed text-muted-foreground">
                              {briefing.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainingPhases;