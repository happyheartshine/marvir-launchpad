import { Link } from "react-router-dom";
import { ArrowRight, Check, Handshake, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { services } from "@/data/services";

export default function BrokerEmpresasPage() {
  const service = services.find(s => s.id === "broker-empresas")!;
  const Icon = service.icon;

  const brokerBenefits = [
    {
      icon: Handshake,
      title: "Red de partners verificados",
      description: "Accede a una red curada de proveedores tech, agencias y freelancers validados por nosotros."
    },
    {
      icon: Shield,
      title: "Due diligence incluida",
      description: "Evaluamos y validamos cada partner antes de presentártelo. Tu tranquilidad es nuestra prioridad."
    },
    {
      icon: Zap,
      title: "Conexión rápida",
      description: "En menos de 48h te presentamos candidatos que encajan con tus necesidades específicas."
    }
  ];

  return (
    <Layout
      title="Broker a Empresas"
      description={service.fullDescription}
      canonical="/servicios/broker-empresas"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Broker a Empresas
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Conectamos tu empresa con los mejores recursos tech
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {service.fullDescription}
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* What is Broker */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              ¿Qué significa ser tu "broker" tech?
            </h2>
            <p className="text-muted-foreground mb-4">
              Actuamos como intermediarios especializados entre tu empresa y el ecosistema tecnológico. 
              Conocemos el mercado, los proveedores, las soluciones y los profesionales.
            </p>
            <p className="text-muted-foreground mb-6">
              En lugar de invertir tiempo y recursos buscando partners, proveedores o soluciones, 
              nosotros hacemos el trabajo por ti. Te presentamos opciones validadas que encajan 
              con tus necesidades y presupuesto.
            </p>
            <ul className="space-y-3">
              {["Partners de desarrollo", "Proveedores de infraestructura", "Agencias especializadas", "Freelancers verificados", "Soluciones SaaS"].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8">
              <div className="space-y-6">
                {brokerBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Features */}
      <Section variant="dark">
        <SectionHeader
          title="¿Qué hacemos por ti?"
          description="Un servicio completo de intermediación tech que te ahorra tiempo y reduce riesgos."
        />
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary font-bold group-hover:scale-110 transition-transform duration-300">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Use Cases */}
      <Section>
        <SectionHeader
          title="Casos de uso comunes"
          description="Situaciones en las que nuestro servicio de broker puede ayudarte."
        />
        
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Búsqueda de partners de desarrollo",
              description: "Necesitas una agencia o equipo freelance para desarrollar tu producto. Nosotros identificamos, evaluamos y te presentamos las mejores opciones del mercado."
            },
            {
              title: "Selección de proveedores SaaS",
              description: "Buscas una solución tecnológica específica pero hay muchas opciones. Te ayudamos a encontrar la que mejor se adapta a tus necesidades y presupuesto."
            },
            {
              title: "Contratación de infraestructura cloud",
              description: "Necesitas servicios de hosting, CDN o infraestructura cloud. Conocemos los mejores proveedores y negociamos las mejores condiciones."
            },
            {
              title: "Asesoramiento en M&A tech",
              description: "Estás considerando adquirir o fusionar con una empresa tech. Te asesoramos en la evaluación técnica y estratégica del proceso."
            }
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                <div className="relative">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
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
              ¿Buscas un partner, proveedor o solución tech?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cuéntanos qué necesitas y te conectamos con las mejores opciones del mercado. Sin compromiso.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=broker-empresas">
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
