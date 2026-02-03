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
import { useEffect, useRef } from "react";

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

// Animated Canvas Background Component
function AnimatedCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Grid and particle configuration
    const gridSize = 50;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!canvas || !ctx) return;
      
      time += 0.01;

      // Clear canvas with dark background
      ctx.fillStyle = "rgb(6, 6, 6)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid with better visibility
      ctx.lineWidth = 1;

      // Vertical lines with gradient
      for (let x = 0; x < canvas.width; x += gridSize) {
        const wave = Math.sin(x * 0.01 + time) * 8;
        const opacity = 0.08 + Math.sin(x * 0.02 + time) * 0.04;
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x + wave, 0);
        ctx.lineTo(x + wave, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with gradient
      for (let y = 0; y < canvas.height; y += gridSize) {
        const wave = Math.sin(y * 0.01 + time) * 8;
        const opacity = 0.08 + Math.sin(y * 0.02 + time) * 0.04;
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(canvas.width, y + wave);
        ctx.stroke();
      }

      // Update and draw particles with better visuals
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Alternate colors between primary purple and accent cyan
        const isPrimary = index % 3 !== 0;
        const color1 = isPrimary ? "139, 92, 246" : "34, 211, 238"; // primary purple or cyan
        const color2 = isPrimary ? "168, 85, 247" : "56, 189, 248"; // lighter variations
        
        // Draw outer glow
        const outerGlow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 8
        );
        outerGlow.addColorStop(0, `rgba(${color1}, 0.6)`);
        outerGlow.addColorStop(0.4, `rgba(${color1}, 0.3)`);
        outerGlow.addColorStop(1, `rgba(${color1}, 0)`);

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle with bright center
        const coreGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        coreGradient.addColorStop(0, `rgba(${color2}, 1)`);
        coreGradient.addColorStop(0.5, `rgba(${color1}, 0.8)`);
        coreGradient.addColorStop(1, `rgba(${color1}, 0.2)`);

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Add a small white center dot for sparkle effect
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles with gradient
      ctx.lineWidth = 1.5;
      // Draw connections between nearby particles with gradient
      ctx.lineWidth = 1.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-none block absolute inset-0"
      style={{ background: "rgb(6, 6, 6)", zIndex: 0 }}
    />
  );
}

export default function HomePage() {
  return (
    <Layout
      canonical="/"
      description="Marvir Solutions: Consultoría tech, outsourcing de talento tecnológico, RRHH y servicios de broker para empresas. Transformamos tu negocio con datos y tecnología."
    >
      {/* Hero Section */}
      <Section variant="hero" className="pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-24">
        {/* Background effects */}
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
