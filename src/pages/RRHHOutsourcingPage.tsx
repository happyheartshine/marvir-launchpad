import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { services, rrhhPricingModes } from "@/data/services";
import { cn } from "@/lib/utils";

export default function RRHHOutsourcingPage() {
  const service = services.find(s => s.id === "rrhh-outsourcing")!;
  const Icon = service.icon;

  return (
    <Layout
      title="RRHH & Outsourcing Tech"
      description={service.fullDescription}
      canonical="/servicios/rrhh-outsourcing"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              RRHH & Outsourcing
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

      {/* Pricing Modes */}
      <Section>
        <SectionHeader
          label="Modalidades"
          title="Elige el modelo que mejor se adapte"
          description="Flexibilidad total: desde pago por horas hasta proyectos cerrados."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rrhhPricingModes.map((mode, index) => (
            <StaggerItem key={mode.id}>
              <div className={cn(
                "glass-card p-6 md:p-8 h-full flex flex-col relative overflow-hidden",
                mode.popular && "border-primary/50 glow-sm"
              )}>
                {mode.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3" fill="currentColor" />
                      Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {mode.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {mode.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={cn(
                    "w-full",
                    mode.popular && "glow-primary"
                  )}
                  variant={mode.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to={`/contacto?reason=rrhh-outsourcing&plan=${mode.id}`}>
                    {mode.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Features */}
      <Section variant="dark">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              ¿Qué incluye nuestro servicio?
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
              Beneficios clave
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

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿Tienes dudas sobre qué modalidad elegir?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cuéntanos tu situación y te asesoramos para encontrar la mejor solución para tu empresa.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=rrhh-outsourcing">
                Solicitar propuesta personalizada
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
