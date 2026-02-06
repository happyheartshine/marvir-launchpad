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
        <div className="h-full glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-6 h-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </div>
            
            {/* Content */}
            <h3 className="font-display font-semibold text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-4">
              {service.shortDescription}
            </p>
            
            {/* CTA */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
              <span>{service.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
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
