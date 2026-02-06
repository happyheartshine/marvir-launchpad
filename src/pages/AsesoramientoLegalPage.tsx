import { Link } from "react-router-dom";
import { ArrowRight, Check, Shield, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";

export default function AsesoramientoLegalPage() {
  const services = [
    {
      id: "rgpd",
      icon: Shield,
      title: "RGPD y Protección de Datos (Externo)",
      description: "Adaptación RGPD, auditorías y Delegado de Protección de Datos Externo.",
      features: [
        "Adaptación completa al RGPD",
        "Auditorías de protección de datos",
        "Delegado de Protección de Datos (DPO) Externo",
        "Políticas de privacidad y cookies",
        "Registro de actividades de tratamiento",
        "Gestión de derechos ARCO"
      ],
      benefits: [
        "Cumplimiento normativo",
        "Reducción de riesgos",
        "Confianza de clientes",
        "Evita sanciones"
      ]
    },
    {
      id: "extranjeria",
      icon: Globe,
      title: "Extranjería (Trámites)",
      description: "Nacionalidad española, permisos de residencia y pareja de hecho.",
      features: [
        "Nacionalidad española",
        "Permisos de residencia",
        "Pareja de hecho",
        "Renovaciones y prórrogas",
        "Asesoramiento personalizado",
        "Seguimiento de expedientes"
      ],
      benefits: [
        "Tramitación profesional",
        "Ahorro de tiempo",
        "Mayor probabilidad de éxito",
        "Soporte continuo"
      ]
    },
    {
      id: "gestoria",
      icon: FileText,
      title: "Gestoría para Autónomos",
      description: "Gestión administrativa, facturación y gestión de nóminas.",
      features: [
        "Gestión administrativa completa",
        "Facturación y contabilidad",
        "Gestión de nóminas",
        "Presentación de impuestos",
        "Asesoramiento fiscal",
        "Alta y baja en Hacienda y Seguridad Social"
      ],
      benefits: [
        "Ahorro de tiempo",
        "Cumplimiento normativo",
        "Optimización fiscal",
        "Tranquilidad"
      ]
    }
  ];

  return (
    <Layout
      title="Asesoramiento Legal"
      description="RGPD y protección de datos, extranjería y gestoría para autónomos. Servicios legales y administrativos especializados."
      canonical="/servicios/asesoramiento-legal"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Asesoramiento Legal
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Servicios legales y administrativos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              RGPD y protección de datos, extranjería y gestoría para autónomos. 
              Te ayudamos con todos los trámites legales y administrativos.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          title="Nuestros servicios legales"
          description="Soluciones especializadas para cumplir con la normativa y gestionar tus trámites."
        />
        
        <StaggerContainer className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="glass-card p-8 md:p-10 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Beneficios clave</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="glass-card p-4 bg-accent/5 group-hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-accent font-bold text-sm">{bIndex + 1}</span>
                              </div>
                              <span className="font-medium">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* Why Choose Us */}
      <Section variant="dark">
        <SectionHeader
          title="¿Por qué confiar en nosotros?"
          description="Experiencia y compromiso con el cumplimiento normativo."
        />
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Experiencia probada",
              description: "Años de experiencia en asesoramiento legal y administrativo con cientos de casos resueltos exitosamente."
            },
            {
              title: "Cumplimiento garantizado",
              description: "Nos aseguramos de que todos los trámites se realicen correctamente y cumpliendo con la normativa vigente."
            },
            {
              title: "Atención personalizada",
              description: "Cada caso es único. Te ofrecemos un servicio personalizado adaptado a tus necesidades específicas."
            }
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full text-center group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
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
              ¿Necesitas asesoramiento legal?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contacta con nosotros y te ayudamos con tus trámites legales y administrativos. 
              Primera consulta sin compromiso.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=asesoramiento-legal">
                Solicitar consulta
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
