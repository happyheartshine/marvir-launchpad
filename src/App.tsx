import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ConsultoriaPage from "./pages/ConsultoriaPage";
import RRHHOutsourcingPage from "./pages/RRHHOutsourcingPage";
import BrokerEmpresasPage from "./pages/BrokerEmpresasPage";
import DomainsPage from "./pages/DomainsPage";
import MarketingDigitalPage from "./pages/MarketingDigitalPage";
import AsesoramientoLegalPage from "./pages/AsesoramientoLegalPage";
import JobsPage from "./pages/JobsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CookiesPage from "./pages/CookiesPage";
import PrivacidadPage from "./pages/PrivacidadPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/consultoria" element={<ConsultoriaPage />} />
          <Route path="/servicios/rrhh-outsourcing" element={<RRHHOutsourcingPage />} />
          <Route path="/servicios/broker-empresas" element={<BrokerEmpresasPage />} />
          <Route path="/servicios/marketing-digital" element={<MarketingDigitalPage />} />
          <Route path="/servicios/asesoramiento-legal" element={<AsesoramientoLegalPage />} />
          <Route path="/dominios" element={<DomainsPage />} />
          <Route path="/trabaja-con-nosotros" element={<JobsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/legal/cookies" element={<CookiesPage />} />
          <Route path="/legal/privacidad" element={<PrivacidadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
