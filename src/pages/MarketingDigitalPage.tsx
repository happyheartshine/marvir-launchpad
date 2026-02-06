import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Palette, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo";

export default function MarketingDigitalPage() {
  const services = [
    {
      id: "posicionamiento",
      icon: Search,
      title: "Posicionamiento Web",
      description: "SEO local y nacional, auditorías SEO, optimización web y posicionamiento en Google.",
      features: [
        "SEO local y nacional",
        "Auditorías SEO completas",
        "Optimización técnica y de contenido",
        "Posicionamiento en Google",
        "Análisis de competencia",
        "Link building estratégico"
      ],
      benefits: [
        "Mayor visibilidad online",
        "Más tráfico cualificado",
        "Mejor conversión",
        "ROI medible"
      ]
    },
    {
      id: "branding",
      icon: Palette,
      title: "Branding",
      description: "Identidad de marca, naming, imagen corporativa y estrategia de marca.",
      features: [
        "Identidad de marca completa",
        "Naming y naming estratégico",
        "Imagen corporativa",
        "Estrategia de marca",
        "Manual de identidad",
        "Aplicación en diferentes soportes"
      ],
      benefits: [
        "Marca diferenciada",
        "Mayor reconocimiento",
        "Consistencia visual",
        "Valor de marca"
      ]
    },
    {
      id: "geolocalizacion",
      icon: MapPin,
      title: "Geolocalización",
      description: "Google Business Profile, posicionamiento local por zonas y búsquedas geográficas.",
      features: [
        "Optimización de Google Business Profile",
        "Posicionamiento local por zonas",
        "Búsquedas geográficas",
        "Gestión de reseñas",
        "Fotografías y contenido local",
        "Análisis de competencia local"
      ],
      benefits: [
        "Visibilidad local mejorada",
        "Más clientes locales",
        "Mejor presencia en mapas",
        "Mayor confianza"
      ]
    }
  ];

  return (
    <Layout
      title="Marketing Digital"
      description="Posicionamiento web, branding y geolocalización. Servicios integrales de marketing digital para hacer crecer tu negocio."
      canonical="/servicios/marketing-digital"
    >
      <ServiceSchema
        name="Marketing Digital"
        description="Posicionamiento web, branding y geolocalización. Servicios integrales de marketing digital para hacer crecer tu negocio."
        url="https://marvirsolutions.com/servicios/marketing-digital"
        serviceType="Marketing Digital"
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Marketing Digital", url: "/servicios/marketing-digital" },
        ]}
      />
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Marketing Digital
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Haz crecer tu negocio online
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Posicionamiento web, branding y geolocalización. Servicios integrales de marketing digital 
              para aumentar tu visibilidad y atraer más clientes.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          title="Nuestros servicios de marketing"
          description="Soluciones completas para impulsar tu presencia digital."
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
          title="¿Por qué elegir nuestros servicios?"
          description="Enfoque integral y resultados medibles."
        />
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Enfoque integral",
              description: "No solo optimizamos una parte, trabajamos en todos los aspectos de tu presencia digital para resultados completos."
            },
            {
              title: "Resultados medibles",
              description: "Todas nuestras estrategias están orientadas a resultados cuantificables con métricas claras y reportes periódicos."
            },
            {
              title: "Experiencia probada",
              description: "Equipo con años de experiencia en marketing digital y casos de éxito en diferentes sectores."
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
              ¿Listo para hacer crecer tu negocio online?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a mejorar tu presencia digital y atraer más clientes.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=marketing-digital">
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
