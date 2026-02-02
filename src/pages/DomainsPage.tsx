import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
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
        "glass-card p-4 md:p-6 hover-lift group",
        domain.featured && "border-primary/30"
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Domain name */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                {domain.name}
              </span>
              {domain.featured && (
                <Badge variant="secondary" className="text-xs">
                  Destacado
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {domain.category}
              </Badge>
              <Badge className={cn("text-xs", statusStyles[domain.status])}>
                {statusLabels[domain.status]}
              </Badge>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Precio</div>
              <div className="font-display font-bold text-lg text-primary">
                {domain.price}
              </div>
            </div>
            <Button size="sm" asChild>
              <Link to={`/contacto?reason=comprar-dominio&domain=${domain.name}`}>
                {domain.status === "negotiable" ? "Consultar" : "Comprar"}
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
