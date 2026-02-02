import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ServicesGrid } from "@/components/services/ServiceCard";
import { Layout } from "@/components/layout";

export default function ServicesPage() {
  return (
    <Layout
      title="Servicios"
      description="Consultoría tech, outsourcing de talento, RRHH y broker de empresas. Descubre todos nuestros servicios."
      canonical="/servicios"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Nuestros servicios
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Soluciones integrales para tu empresa
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Desde consultoría estratégica hasta gestión completa de talento tech. 
            Elige el servicio que mejor se adapte a tus necesidades.
          </p>
        </AnimatedSection>
      </Section>

      {/* Services Grid */}
      <Section>
        <ServicesGrid />
      </Section>

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿No sabes qué servicio necesitas?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cuéntanos tu situación y te asesoramos sin compromiso. Encontraremos la mejor solución para tu empresa.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto">
                Solicitar asesoramiento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
