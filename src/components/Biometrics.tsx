import { motion } from "framer-motion";

const stats = [
  { label: "Alunos em Todo Brasil", value: "5000+" },
  { label: "Planos Acessíveis", value: "A partir de R$50" },
  { label: "Suporte 24/7", value: "WhatsApp" },
];

const mesocycles = [
  { id: "01", name: "Avaliação", distance: "Semana 0" },
  { id: "02", name: "Adaptação", distance: "Semanas 1-4" },
  { id: "03", name: "Progressão", distance: "Semanas 5-8" },
  { id: "04", name: "Resultado", distance: "Semanas 9-12" },
];

const Biometrics = () => {
  return (
    <section id="biometrics" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono-label text-muted-foreground/60">Consultoria Online</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              MÉTODO RUAN RUBENS
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2 border-foreground/60" />
              <span className="font-mono-label text-muted-foreground/60">Protocolo Primário</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-foreground/30" />
              <span className="font-mono-label text-muted-foreground/60">Checkpoint</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Stats & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-8"
          >
            <div className="mb-2 font-mono-label text-muted-foreground/40">Dados do Protocolo</div>
            <div className="mb-8 h-px w-full bg-border" />

            <div className="mb-8 space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
                  <span className="font-display text-lg font-medium text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 font-mono-label text-muted-foreground/40">Mesociclos</div>
            <div className="space-y-3">
              {mesocycles.map((cycle) => (
                <div
                  key={cycle.id}
                  className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 transition-colors hover:bg-secondary/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-label text-muted-foreground/40">{cycle.id}.</span>
                    <span className="font-display text-sm font-medium text-foreground">{cycle.name}</span>
                  </div>
                  <span className="font-mono-label text-muted-foreground">{cycle.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=80"
              alt="Centro de treinamento de alta performance"
              className="h-full min-h-[500px] w-full object-cover grayscale-hover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono-label text-foreground/70">Telemetria Ativa</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biometrics;
