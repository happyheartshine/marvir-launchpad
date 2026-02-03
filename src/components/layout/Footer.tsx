import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Consultoría Tech & Data", href: "/servicios/consultoria" },
    { name: "RRHH & Outsourcing", href: "/servicios/rrhh-outsourcing" },
    { name: "Broker a Empresas", href: "/servicios/broker-empresas" },
    { name: "Dominios", href: "/dominios" },
  ],
  empresa: [
    { name: "Blog", href: "/blog" },
    { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/legal/aviso-legal" },
    { name: "Política de Privacidad", href: "/legal/privacidad" },
    { name: "Política de Cookies", href: "/legal/cookies" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:info@marvirsolutions.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <img 
                src="/logo.png" 
                alt="Marvir Solutions Logo" 
                className="w-40 h-40 transition-transform group-hover:scale-105"
              />

            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Consultoría tech, outsourcing de talento y servicios de broker para empresas que quieren crecer con tecnología.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+34 900 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@marvirsolutions.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Marvir Solutions. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
}
