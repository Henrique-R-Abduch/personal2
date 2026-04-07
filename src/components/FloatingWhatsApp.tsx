import React from "react";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20.52 3.48A11.89 11.89 0 0 0 12.04 0C5.45 0 .09 5.34.09 11.92c0 2.1.55 4.15 1.58 5.95L0 24l6.32-1.64a11.95 11.95 0 0 0 5.72 1.46h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.18-1.24-6.17-3.47-8.41ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.97 1-3.65-.23-.37a9.86 9.86 0 0 1-1.52-5.24c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.93 9.92Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M17.5 14.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.63.72.23 1.37.2 1.89.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      fill="currentColor"
    />
  </svg>
);

type FloatingWhatsAppProps = {
  phone?: string;
  message?: string;
};

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phone = "5522997118941",
  message = "Olá, gostaria de saber mais sobre sua consultoria online.",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[120] md:bottom-8 md:right-8">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-start overflow-hidden rounded-full border border-white/10 bg-black/45 backdrop-blur-md transition-all duration-500 hover:w-[250px] hover:border-[#E63946]/30 hover:bg-black/65"
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_left,rgba(230,57,70,0.16),transparent_55%)]" />

        <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E63946]/30 bg-[#E63946]/10 text-[#E63946] transition-all duration-300 group-hover:border-[#E63946]/40 group-hover:bg-[#E63946]/15 group-hover:text-white">
            <WhatsAppIcon className="h-5 w-5" />
          </div>
        </div>

        <div className="pointer-events-none relative z-10 ml-1 flex min-w-0 flex-col justify-center pr-5 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100">
          <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.26em] text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            Contato direto
          </span>
          <span className="whitespace-nowrap font-['Space_Grotesk',sans-serif] text-lg tracking-[0.04em] text-white">
            WhatsApp
          </span>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/5" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;