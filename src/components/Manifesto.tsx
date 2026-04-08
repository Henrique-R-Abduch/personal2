import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section id="manifesto" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono-label text-muted-foreground/60">01 — Manifesto</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <p className="font-display text-2xl leading-relaxed tracking-tight text-muted-foreground md:text-3xl lg:text-4xl">
            Consultoria online baseada em <span className="text-foreground">ciência e biomecânica</span>. Pós-graduado em Biomecânica, Cinesiologia e Psicopatologia. Seu treino não é genérico — é <span className="text-foreground">personalizado, técnico e efetivo</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
