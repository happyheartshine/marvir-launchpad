import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { ServicesGrid, ServiceCard } from "@/components/services/ServiceCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { Layout } from "@/components/layout";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { AnimatedCanvasBackground } from "@/components/background/AnimatedCanvasBackground";
import { OrganizationSchema } from "@/components/seo";

const stats = [
  { value: "50+", label: "Clientes activos" },
  { value: "200+", label: "Proyectos entregados" },
  { value: "98%", label: "Satisfacción" },
  { value: "15+", label: "Años de experiencia" },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos tus necesidades y definimos objetivos claros.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Diseñamos un plan a medida con plazos y entregables.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Implementamos con tu equipo y medimos resultados.",
    icon: Users,
  },
];


export default function HomePage() {
  return (
    <Layout
      canonical="/"
      description="Marvir Solutions: Consultoría tech, outsourcing de talento tecnológico, RRHH y servicios de broker para empresas. Transformamos tu negocio con datos y tecnología."
    >
      <OrganizationSchema
        contactPoint={{
          contactType: "customer service",
          email: "info@marvirsolutions.com",
        }}
      />
      {/* Hero Section */}
      <Section variant="hero" className="pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-24 relative overflow-hidden">
        {/* Canvas Background */}
        <AnimatedCanvasBackground />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Consultoría Tech • RRHH • Broker
            </span>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 text-glow">
              Impulsamos tu negocio con{" "}
              <span className="gradient-text">tecnología y talento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Consultoría tech, outsourcing de talento, gestión de RRHH y servicios de broker. 
              Todo lo que necesitas para crecer en la era digital.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-primary text-base px-8" asChild>
                <Link to="/contacto">
                  Contactar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 md:mt-24"
          >
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="gradient">
        <SectionHeader
          label="Servicios"
          title="Soluciones a medida para tu empresa"
          description="Desde consultoría estratégica hasta la gestión completa de talento tech. Elige lo que necesitas."
        />
        <ServicesGrid />
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          label="Proceso"
          title="¿Cómo trabajamos?"
          description="Un proceso claro y transparente para garantizar resultados."
        />
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
                
                <div className="glass-card p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold text-primary/20 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Social Proof */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-muted-foreground text-sm uppercase tracking-wider mb-6 block">
              Empresas que confían en nosotros
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
              {["TechCorp", "DataFlow", "CloudFirst", "InnovateTech", "StartupHub"].map((name) => (
                <div
                  key={name}
                  className="text-xl md:text-2xl font-display font-bold text-muted-foreground"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Blog Preview */}
      <Section>
        <SectionHeader
          label="Blog"
          title="Últimas publicaciones"
          description="Insights, tendencias y consejos del mundo tech y RRHH."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              Ver todas las publicaciones
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                ¿Listo para transformar tu empresa?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Cuéntanos tu proyecto y te ayudamos a hacerlo realidad. Primera consulta sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="glow-primary text-base px-8" asChild>
                  <Link to="/contacto">
                    Solicitar consulta gratuita
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-base" asChild>
                  <Link to="/trabaja-con-nosotros">Trabaja con nosotros</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
