import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Users, Code, Wrench, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/layout";
import { services, rrhhPricingModes } from "@/data/services";
import { cn } from "@/lib/utils";

export default function RRHHOutsourcingPage() {
  const service = services.find(s => s.id === "rrhh-outsourcing")!;
  const Icon = service.icon;
  const [activeTab, setActiveTab] = useState("seleccion");

  const seleccionProfiles = [
    "Perfiles administrativos",
    "Perfiles contables",
    "Dependientes y atención al cliente",
    "Otros perfiles según necesidad"
  ];

  const outsourcingTechProfiles = [
    "Datos y Analytics",
    "Inteligencia Artificial",
    "Business Intelligence",
    "Project Managers",
    "IT y Desarrollo"
  ];

  const oficiosProfiles = [
    "Pintores",
    "Fontaneros",
    "Albañiles",
    "Cerrajeros",
    "Carpinteros",
    "Electricistas",
    "Otros oficios verificados"
  ];

  const gestionServices = [
    "Gestión de contratos laborales",
    "Alta en la Seguridad Social",
    "Nóminas y administración",
    "Finiquitos y bajas",
    "Compliance laboral"
  ];

  return (
    <Layout
      title="RRHH & Outsourcing"
      description="Selección de personal, outsourcing tech, oficios y gestión administrativa. Soluciones integrales de recursos humanos."
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
              Soluciones integrales de recursos humanos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde selección de personal hasta outsourcing tech y gestión administrativa. Cubrimos todas tus necesidades de RRHH.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services Tabs */}
      <Section>
        <SectionHeader
          title="Nuestros servicios"
          description="Elige el servicio que mejor se adapte a tus necesidades."
        />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="seleccion" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Selección</span>
            </TabsTrigger>
            <TabsTrigger value="outsourcing-tech" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Outsourcing Tech</span>
            </TabsTrigger>
            <TabsTrigger value="oficios" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Oficios</span>
            </TabsTrigger>
            <TabsTrigger value="gestion" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Gestión</span>
            </TabsTrigger>
          </TabsList>

          {/* Selección de Personal */}
          <TabsContent value="seleccion" className="mt-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl">
                      Selección de Personal
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Selección de perfiles administrativos, contables, dependientes y otros perfiles según las necesidades de tu empresa.
                  </p>
                  <ul className="space-y-3">
                    {seleccionProfiles.map((profile, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Proceso de selección</h3>
                  <ul className="space-y-3">
                    {[
                      "Análisis de necesidades y perfil",
                      "Búsqueda activa de candidatos",
                      "Preselección y entrevistas",
                      "Verificación de referencias",
                      "Presentación de candidatos finales"
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent font-bold text-xs">{index + 1}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Outsourcing Tech & Digital */}
          <TabsContent value="outsourcing-tech" className="mt-6">
            <AnimatedSection>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl">
                    Outsourcing Tech & Digital
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Perfiles especializados en datos, IA, Business Intelligence, Project Managers e IT. 
                  Modalidades flexibles: por horas, meses o proyecto completo.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4">Perfiles disponibles</h3>
                  <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {outsourcingTechProfiles.map((profile, index) => (
                      <StaggerItem key={index}>
                        <div className="glass-card p-4">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{profile}</span>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-6">Modalidades de contratación</h3>
                  <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {rrhhPricingModes.map((mode, index) => (
                      <StaggerItem key={mode.id}>
                        <div className={cn(
                          "glass-card p-6 h-full flex flex-col relative overflow-hidden",
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
                          <h4 className="font-display font-bold text-xl mb-3">
                            {mode.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4">
                            {mode.description}
                          </p>
                          <ul className="space-y-2 mb-6 flex-1">
                            {mode.features.slice(0, 3).map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Outsourcing de Oficios */}
          <TabsContent value="oficios" className="mt-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl">
                      Outsourcing de Oficios
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Red de autónomos verificados con excelente reputación en Google. 
                    Solo trabajamos con los mejores profesionales de cada oficio.
                  </p>
                  <div className="glass-card p-4 mb-6 bg-primary/5 border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      ✨ Solo trabajamos con los mejores
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {oficiosProfiles.map((profile, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Garantías de calidad</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Verificación de reputación", desc: "Todos los profesionales tienen excelentes valoraciones en Google y plataformas de referencia." },
                      { title: "Seguros y garantías", desc: "Trabajamos solo con profesionales que cuentan con seguros y garantías de trabajo." },
                      { title: "Seguimiento continuo", desc: "Supervisamos la calidad del trabajo y la satisfacción del cliente." }
                    ].map((item, index) => (
                      <li key={index}>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Gestión de Personal */}
          <TabsContent value="gestion" className="mt-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl">
                      Gestión de Personal
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Gestión completa de contratos laborales, alta en la Seguridad Social, 
                    nóminas, finiquitos y toda la administración relacionada con tu personal.
                  </p>
                  <ul className="space-y-3">
                    {gestionServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Beneficios</h3>
                  <div className="space-y-4">
                    {[
                      "Cumplimiento normativo garantizado",
                      "Ahorro de tiempo y recursos",
                      "Reducción de errores administrativos",
                      "Soporte especializado continuo"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </Section>

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿Necesitas ayuda con RRHH?
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
