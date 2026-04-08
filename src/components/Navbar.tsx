import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Método", href: "#manifesto" },
    { label: "Métricas", href: "#biometrics" },
    { label: "Fases", href: "#phases" },
    { label: "Aplicar", href: "#apply" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 mix-blend-difference transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="font-display text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
          ALEX <span className="text-muted-foreground">//</span> DURAO
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono-label text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#apply"
          className="hidden rounded-full border border-foreground/20 px-5 py-2 font-mono-label text-foreground transition-colors hover:bg-foreground hover:text-background md:block"
        >
          Transformar Agora
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
