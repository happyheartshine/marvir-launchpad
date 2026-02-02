import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-section";
import { services } from "@/data/services";

export function ServiceCard({ 
  service, 
  index = 0 
}: { 
  service: typeof services[0]; 
  index?: number;
}) {
  const Icon = service.icon;
  
  return (
    <AnimatedCard delay={index * 0.1}>
      <Link
        to={service.slug === "dominios" ? "/dominios" : `/servicios/${service.slug}`}
        className="group block h-full"
      >
        <div className="h-full glass-card p-6 md:p-8 hover-lift relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          {/* Content */}
          <h3 className="font-display font-semibold text-lg md:text-xl mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            {service.shortDescription}
          </p>
          
          {/* CTA */}
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            <span>{service.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
