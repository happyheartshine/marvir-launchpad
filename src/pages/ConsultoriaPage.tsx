import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { services } from "@/data/services";

export default function ConsultoriaPage() {
  const service = services.find(s => s.id === "consultoria")!;
  const Icon = service.icon;

  return (
    <Layout
      title="Consultoría Tech & Data"
      description={service.fullDescription}
      canonical="/servicios/consultoria"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Consultoría
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {service.fullDescription}
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              ¿Qué incluye?
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              Beneficios
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Who is it for */}
      <Section variant="dark">
        <SectionHeader
          title="¿Para quién es?"
          description="Nuestros servicios de consultoría están diseñados para diferentes perfiles."
        />
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Startups", description: "Que necesitan definir su estrategia de datos desde el inicio." },
            { title: "PYMES", description: "Que buscan optimizar sus procesos y tomar decisiones basadas en datos." },
            { title: "Corporates", description: "Que requieren transformación digital y modernización de infraestructura." },
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full text-center">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Agenda una llamada con nuestro equipo y cuéntanos tu proyecto. Primera consulta sin compromiso.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=consultoria">
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
