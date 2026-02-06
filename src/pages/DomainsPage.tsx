import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, ArrowRight, Tag, Shield, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import { FAQ } from "@/components/ui/faq";
import { domains, domainCategories, type Domain } from "@/data/domains";
import { cn } from "@/lib/utils";

function DomainCard({ domain, index }: { domain: Domain; index: number }) {
  const statusStyles = {
    available: "bg-accent/10 text-accent",
    premium: "bg-primary/10 text-primary",
    negotiable: "bg-muted text-muted-foreground",
  };

  const statusLabels = {
    available: "Disponible",
    premium: "Premium",
    negotiable: "Negociable",
  };

  return (
    <StaggerItem>
      <div className={cn(
        "glass-card p-4 md:p-6 group relative overflow-hidden transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20",
        "hover:border-primary/50 hover:-translate-y-1",
        domain.featured && "border-primary/30"
      )}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Domain name */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                {domain.name}
              </span>
              {domain.featured && (
                <Badge variant="secondary" className="text-xs group-hover:scale-105 transition-transform duration-300">
                  Destacado
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs group-hover:border-primary/50 transition-colors duration-300">
                {domain.category}
              </Badge>
              <Badge className={cn("text-xs transition-all duration-300", statusStyles[domain.status], "group-hover:scale-105")}>
                {statusLabels[domain.status]}
              </Badge>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              size="sm" 
              asChild
              className="group-hover:glow-primary transition-all duration-300 group-hover:scale-105"
            >
              <Link to={`/contacto?reason=comprar-dominio&domain=${domain.name}`}>
                {domain.status === "negotiable" ? "Consultar" : "Consultar precio"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

export default function DomainsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredDomains = useMemo(() => {
    return domains.filter((domain) => {
      const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || domain.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredDomains = filteredDomains.filter(d => d.featured);
  const regularDomains = filteredDomains.filter(d => !d.featured);

  return (
    <Layout
      title="Dominios Premium"
      description="Portfolio de dominios premium disponibles para tu próximo proyecto digital. Dominios .com, .es, .io y más."
      canonical="/dominios"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Broker de Dominios
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Encuentra el dominio perfecto
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Portfolio curado de dominios premium para startups, marcas y proyectos digitales. 
            Transferencia segura garantizada.
          </p>
        </AnimatedSection>
      </Section>

      {/* Search & Filter */}
      <Section className="pb-0">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar dominio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {domainCategories.slice(0, 6).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredDomains.length} dominio{filteredDomains.length !== 1 && "s"} encontrado{filteredDomains.length !== 1 && "s"}
        </p>

        {/* Featured Domains */}
        {featuredDomains.length > 0 && (
          <div className="mb-8">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary" />
              Dominios destacados
            </h2>
            <StaggerContainer className="space-y-4">
              {featuredDomains.map((domain, index) => (
                <DomainCard key={domain.id} domain={domain} index={index} />
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* Regular Domains */}
        {regularDomains.length > 0 && (
          <div>
            {featuredDomains.length > 0 && (
              <h2 className="font-semibold text-lg mb-4">Todos los dominios</h2>
            )}
            <StaggerContainer className="space-y-4">
              {regularDomains.map((domain, index) => (
                <DomainCard key={domain.id} domain={domain} index={index} />
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* No results */}
        {filteredDomains.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">No se encontraron dominios</h3>
            <p className="text-muted-foreground mb-4">
              Prueba con otros términos de búsqueda o categoría.
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}>
              Limpiar filtros
            </Button>
          </div>
        )}
      </Section>

      {/* Why Premium Domains */}
      <Section variant="dark">
        <SectionHeader
          title="¿Por qué comprar un dominio premium?"
          description="Los dominios premium ofrecen ventajas estratégicas para tu negocio digital."
        />
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <div className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Shield className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Mayor autoridad y confianza</h3>
                <p className="text-muted-foreground text-sm">
                  Un dominio premium transmite profesionalidad y seriedad, aumentando la confianza de tus clientes y mejorando tu imagen de marca.
                </p>
              </div>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Mejor posicionamiento SEO</h3>
                <p className="text-muted-foreground text-sm">
                  Los dominios premium suelen tener mejor historial y autoridad, lo que favorece tu posicionamiento en buscadores desde el inicio.
                </p>
              </div>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="glass-card p-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Star className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Inversión de valor</h3>
                <p className="text-muted-foreground text-sm">
                  Un dominio premium es una inversión que puede aumentar su valor con el tiempo, especialmente si construyes una marca sólida.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          title="Preguntas frecuentes"
          description="Resolvemos tus dudas sobre la compra de dominios premium."
        />
        
        <AnimatedSection className="max-w-3xl mx-auto">
          <FAQ
            items={[
              {
                question: "¿Qué incluye la compra de un dominio premium?",
                answer: "La compra incluye la transferencia segura del dominio a tu nombre, el cambio de registrador si es necesario, y el soporte durante todo el proceso. También te ayudamos con la configuración inicial si lo necesitas."
              },
              {
                question: "¿Cómo se realiza la transferencia del dominio?",
                answer: "La transferencia se realiza de forma segura siguiendo los protocolos estándar de ICANN. Te guiamos paso a paso y nos encargamos de toda la documentación necesaria. El proceso suele tardar entre 5-7 días hábiles."
              },
              {
                question: "¿Puedo comprar un dominio que ya está en uso?",
                answer: "Sí, algunos dominios están disponibles para compra aunque estén en uso. En estos casos, negociamos con el propietario actual. Si el dominio está disponible directamente, la transferencia es más rápida."
              },
              {
                question: "¿Qué garantías tengo al comprar un dominio premium?",
                answer: "Garantizamos la transferencia segura y legal del dominio, la autenticidad del mismo, y que no tiene deudas o problemas pendientes. Todos nuestros dominios pasan por un proceso de verificación antes de ser ofrecidos."
              },
              {
                question: "¿Ofrecen servicios de protección de marca?",
                answer: "Sí, además de la venta de dominios, ofrecemos servicios de naming, búsqueda de dominios relacionados, y asesoramiento para proteger tu marca digital de forma integral."
              },
              {
                question: "¿Puedo pagar en cuotas?",
                answer: "Para dominios premium de alto valor, ofrecemos opciones de financiación. Contacta con nosotros para conocer las condiciones específicas según el dominio que te interese."
              }
            ]}
          />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Dinos qué tipo de dominio necesitas y buscaremos opciones para ti. También ofrecemos servicios de naming y protección de marca.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto?reason=comprar-dominio">
                Solicitar búsqueda personalizada
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
