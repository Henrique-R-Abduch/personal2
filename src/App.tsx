import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={120}>
        <Toaster />
        <Sonner theme="dark" position="top-right" richColors closeButton />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <FloatingWhatsApp
            phone="5554992352599"
            message="Olá Alex! Gostaria de saber mais sobre sua consultoria de treinamento e saúde."
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}