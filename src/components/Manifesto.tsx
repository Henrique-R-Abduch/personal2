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
            Mais de 5000 alunos inspirados em todo o Brasil ficando mais fortes e definidos. Consultoria séria, planos acessíveis e <span className="text-foreground">resultados comprovados</span>. Aqui você não treina sozinho.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
