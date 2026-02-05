import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, Phone, Mail, MapPin, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const contactReasons = [
  { value: "consultoria", label: "Consultoría Tech & Data" },
  { value: "rrhh-outsourcing", label: "RRHH & Outsourcing Tech" },
  { value: "broker-empresas", label: "Broker a Empresas" },
  { value: "comprar-dominio", label: "Comprar Dominio" },
  { value: "enviar-cv", label: "Enviar CV" },
  { value: "otro", label: "Otro" },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@marvirsolutions.com",
    href: "mailto:info@marvirsolutions.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 900 000 000",
    href: "tel:+34900000000",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Madrid, España",
    href: null,
  },
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    message: "",
    plan: "",
    domain: "",
  });

  // Pre-fill from URL params
  useEffect(() => {
    const reason = searchParams.get("reason");
    const plan = searchParams.get("plan");
    const domain = searchParams.get("domain");

    if (reason) {
      setFormData(prev => ({ ...prev, reason }));
    }
    if (plan) {
      setFormData(prev => ({ 
        ...prev, 
        plan,
        message: prev.message || `Estoy interesado en el plan "${plan}" de RRHH & Outsourcing.`
      }));
    }
    if (domain) {
      setFormData(prev => ({ 
        ...prev, 
        domain,
        reason: "comprar-dominio",
        message: prev.message || `Estoy interesado en el dominio: ${domain}`
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Log environment variables (remove sensitive data in production)
      console.log("Environment check:", {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey,
        envKeys: Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')),
      });

      if (!serviceId || !templateId || !publicKey) {
        const missing = [];
        if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
        if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
        if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
        
        throw new Error(
          `EmailJS configuration is missing. Missing variables: ${missing.join(", ")}. ` +
          `Please check your Vercel environment variables. They must be prefixed with VITE_ and set for Production environment.`
        );
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: "krishna19990327@gmail.com",
        to_name: "Krishna",
        from_name: formData.name,
        from_email: formData.email,
        reason: contactReasons.find(r => r.value === formData.reason)?.label || formData.reason,
        message: formData.message,
        plan: formData.plan || "N/A",
        domain: formData.domain || "N/A",
        reply_to: formData.email,
      };

      // Debug: Log parameters (remove in production)
      console.log("EmailJS Parameters:", {
        serviceId,
        templateId,
        templateParams,
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS Response:", response);

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      
      // Reset form
      setFormData({
        reason: "",
        name: "",
        email: "",
        message: "",
        plan: "",
        domain: "",
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      console.error("Error details:", {
        text: error?.text,
        status: error?.status,
        message: error?.message,
      });
      setIsSubmitting(false);
      
      // More specific error messages
      if (error?.text) {
        toast.error(`Error: ${error.text}`);
      } else if (error?.message) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.");
      }
    }
  };

  if (isSubmitted) {
    return (
      <Layout
        title="Contacto"
        description="Ponte en contacto con Marvir Solutions. Te ayudamos con consultoría tech, outsourcing, RRHH y más."
        canonical="/contacto"
      >
        <Section variant="hero" className="pt-32 pb-16">
          <AnimatedSection>
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-4">
                ¡Mensaje enviado!
              </h1>
              <p className="text-muted-foreground mb-8">
                Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá 
                lo antes posible, normalmente en menos de 24 horas laborables.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Contacto"
      description="Ponte en contacto con Marvir Solutions. Te ayudamos con consultoría tech, outsourcing, RRHH y más."
      canonical="/contacto"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16" animatedBackground>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Contacto
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            ¿Hablamos?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución. 
            Sin compromiso.
          </p>
        </AnimatedSection>
      </Section>

      {/* Form + Info */}
      <Section animatedBackground>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="reason">¿En qué podemos ayudarte? *</Label>
                  <Select 
                    value={formData.reason} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, reason: value }))}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un motivo" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactReasons.map(reason => (
                        <SelectItem key={reason.value} value={reason.value}>
                          {reason.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Show plan if coming from RRHH */}
                {formData.plan && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Modalidad seleccionada:</span>{" "}
                      <span className="font-medium text-primary capitalize">
                        {formData.plan.replace("-", " ")}
                      </span>
                    </p>
                  </div>
                )}

                {/* Show domain if coming from domains */}
                {formData.domain && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Dominio de interés:</span>{" "}
                      <span className="font-medium text-primary">{formData.domain}</span>
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required 
                      placeholder="Tu nombre" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required 
                      placeholder="tu@email.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full glow-primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="/legal/privacidad" className="text-primary hover:underline">
                    política de privacidad
                  </a>.
                </p>
              </form>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8 space-y-6">
                <h2 className="font-display font-semibold text-xl">Información de contacto</h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="font-medium hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-muted-foreground" />
                </div>

                <p className="text-sm text-muted-foreground">
                  Horario de atención: Lunes a Viernes, 9:00 - 18:00 (CET)
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
