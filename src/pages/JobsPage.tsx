import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Briefcase, MapPin, ArrowLeft, ArrowRight, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Layout } from "@/components/layout";
import { jobs, type Job } from "@/data/jobs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

function JobCard({ job, onClick }: { job: Job; onClick: () => void }) {
  const locationTypeStyles = {
    remote: "bg-accent/10 text-accent",
    hybrid: "bg-primary/10 text-primary",
    onsite: "bg-muted text-muted-foreground",
  };

  const locationTypeLabels = {
    remote: "100% Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
  };

  return (
    <div 
      className="glass-card p-6 hover-lift cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {job.department}
            </span>
          </div>
          <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {job.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </Badge>
            <Badge className={cn("text-xs", locationTypeStyles[job.locationType])}>
              {locationTypeLabels[job.locationType]}
            </Badge>
            {job.salary && (
              <Badge variant="secondary" className="text-xs">
                {job.salary}
              </Badge>
            )}
          </div>
        </div>
        <div>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Ver detalle
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function JobDetailModal({ job, open, onClose }: { job: Job | null; open: boolean; onClose: () => void }) {
  if (!job) return null;

  const locationTypeLabels = {
    remote: "100% Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Briefcase className="w-4 h-4" />
            {job.department}
          </div>
          <DialogTitle className="font-display text-2xl">{job.title}</DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">{job.location}</Badge>
            <Badge variant="secondary">{locationTypeLabels[job.locationType]}</Badge>
            {job.salary && <Badge className="bg-accent/10 text-accent">{job.salary}</Badge>}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div>
            <h4 className="font-semibold mb-2">Sobre el puesto</h4>
            <p className="text-muted-foreground text-sm">{job.fullDescription}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Requisitos</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Beneficios</h4>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full glow-primary" asChild>
            <a href="#cv-form" onClick={onClose}>
              Aplicar a este puesto
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CVForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("¡CV enviado correctamente! Te contactaremos pronto.");
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-display font-bold text-2xl mb-2">¡Gracias por tu interés!</h3>
        <p className="text-muted-foreground mb-6">
          Hemos recibido tu CV correctamente. Nuestro equipo lo revisará y te contactará si tu perfil encaja con alguna de nuestras vacantes.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Enviar otro CV
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nombre completo *</Label>
          <Input id="fullName" name="fullName" required placeholder="Tu nombre" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+34 600 000 000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
          <Input id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Puesto de interés *</Label>
        <Input id="role" name="role" required placeholder="Ej: Data Engineer, Product Manager..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje (opcional)</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Cuéntanos sobre ti, tu experiencia o por qué te gustaría unirte..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cv">CV (PDF o DOC) *</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <input 
            type="file" 
            id="cv" 
            name="cv" 
            accept=".pdf,.doc,.docx" 
            required
            className="hidden"
          />
          <label htmlFor="cv" className="cursor-pointer">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Arrastra tu CV aquí o <span className="text-primary">haz clic para seleccionar</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">PDF o DOC, máximo 5MB</p>
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full glow-primary" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar CV"}
        {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar este formulario, aceptas nuestra{" "}
        <Link to="/legal/privacidad" className="text-primary hover:underline">
          política de privacidad
        </Link>.
      </p>
    </form>
  );
}

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const activeJobs = jobs.filter(job => job.active);

  return (
    <Layout
      title="Trabaja con Nosotros"
      description="Únete a nuestro equipo. Encuentra ofertas de empleo tech y envíanos tu CV para futuras oportunidades."
      canonical="/trabaja-con-nosotros"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Únete al equipo
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Trabaja con nosotros
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Buscamos talento apasionado por la tecnología y los datos. 
            Proyectos desafiantes, flexibilidad y crecimiento profesional.
          </p>
        </AnimatedSection>
      </Section>

      {/* Job Listings */}
      <Section>
        <SectionHeader
          label="Vacantes"
          title="Ofertas abiertas"
          description={`${activeJobs.length} puesto${activeJobs.length !== 1 ? "s" : ""} disponible${activeJobs.length !== 1 ? "s" : ""}`}
        />

        {activeJobs.length > 0 ? (
          <StaggerContainer className="space-y-4">
            {activeJobs.map((job, index) => (
              <StaggerItem key={job.id}>
                <JobCard job={job} onClick={() => setSelectedJob(job)} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-12">
            <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">No hay vacantes abiertas</h3>
            <p className="text-muted-foreground mb-4">
              Pero siempre buscamos talento. Envíanos tu CV y te contactaremos cuando surja una oportunidad.
            </p>
          </div>
        )}

        <JobDetailModal 
          job={selectedJob} 
          open={!!selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      </Section>

      {/* CV Form */}
      <Section variant="gradient" id="cv-form">
        <SectionHeader
          label="Envía tu CV"
          title="¿No encuentras tu puesto ideal?"
          description="Déjanos tus datos y te contactaremos cuando haya una oportunidad que encaje contigo."
        />
        <div className="max-w-2xl mx-auto">
          <CVForm />
        </div>
      </Section>
    </Layout>
  );
}
