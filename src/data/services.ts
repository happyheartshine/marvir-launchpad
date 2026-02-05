import { Briefcase, Users, Building2, Globe, TrendingUp, Scale } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Briefcase;
  features: string[];
  benefits: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "consultoria",
    slug: "consultoria",
    title: "Consultoría Tech & Data",
    shortDescription: "Estrategia, arquitectura y transformación digital basada en datos para impulsar tu negocio.",
    fullDescription: "Ayudamos a empresas a tomar decisiones estratégicas basadas en datos. Desde la definición de arquitectura de datos hasta la implementación de soluciones de analytics y BI, nuestro equipo de expertos te acompaña en cada paso de tu transformación digital.",
    icon: Briefcase,
    features: [
      "Auditoría y diagnóstico de madurez digital",
      "Diseño de arquitectura de datos",
      "Implementación de dashboards y KPIs",
      "Estrategia de migración a la nube",
      "Optimización de procesos con IA",
      "Formación y capacitación de equipos"
    ],
    benefits: [
      "Decisiones basadas en datos reales",
      "Reducción de costes operativos",
      "Mayor agilidad empresarial",
      "Ventaja competitiva sostenible"
    ],
    cta: "Solicitar consultoría"
  },
  {
    id: "rrhh-outsourcing",
    slug: "rrhh-outsourcing",
    title: "Selección de Personal y Outsourcing",
    shortDescription: "Externaliza la gestión de talento tecnológico con modelos flexibles adaptados a tu empresa.",
    fullDescription: "Nos encargamos de la selección, contratación y gestión de perfiles tecnológicos. Ofrecemos modelos flexibles que se adaptan a las necesidades de tu proyecto: desde contratación por horas hasta equipos dedicados.",
    icon: Users,
    features: [
      "Búsqueda y selección de talento tech",
      "Gestión completa del ciclo de vida del empleado",
      "Nóminas y administración de personal",
      "Evaluaciones de desempeño",
      "Planes de carrera y desarrollo",
      "Compliance laboral"
    ],
    benefits: [
      "Acceso a talento cualificado",
      "Reducción de time-to-hire",
      "Flexibilidad contractual",
      "Cumplimiento normativo garantizado"
    ],
    cta: "Ver modalidades"
  },
  {
    id: "broker-empresas",
    slug: "broker-empresas",
    title: "Broker a Empresas",
    shortDescription: "Conectamos tu empresa con recursos tech, partners estratégicos y soluciones a medida.",
    fullDescription: "Actuamos como intermediarios especializados conectando empresas con proveedores de tecnología, partners de desarrollo, plataformas SaaS y talento freelance. Nuestro conocimiento del ecosistema tech garantiza las mejores conexiones para tu negocio.",
    icon: Building2,
    features: [
      "Identificación de partners tecnológicos",
      "Negociación de contratos y SLAs",
      "Due diligence de proveedores",
      "Gestión de ecosistemas de partners",
      "Marketplace de soluciones curadas",
      "Asesoramiento en M&A tech"
    ],
    benefits: [
      "Acceso a red verificada de partners",
      "Ahorro en búsqueda y validación",
      "Mejores condiciones comerciales",
      "Reducción de riesgos"
    ],
    cta: "Contactar"
  },
  {
    id: "dominios",
    slug: "dominios",
    title: "Broker de Dominios",
    shortDescription: "Portfolio premium de dominios disponibles para tu próximo proyecto digital.",
    fullDescription: "Gestionamos un portfolio de dominios premium listos para impulsar tu presencia online. Ya sea para startups, marcas establecidas o proyectos especiales, encontrarás el dominio perfecto para tu negocio.",
    icon: Globe,
    features: [
      "Dominios .com, .es, .io y más",
      "Valoración profesional de dominios",
      "Transferencia segura garantizada",
      "Asesoramiento en naming",
      "Protección de marca digital",
      "Gestión de portfolio corporativo"
    ],
    benefits: [
      "Dominios verificados y seguros",
      "Proceso de compra simplificado",
      "Soporte en la transferencia",
      "Precios competitivos"
    ],
    cta: "Ver dominios"
  },
  {
    id: "marketing-digital",
    slug: "marketing-digital",
    title: "Marketing Digital",
    shortDescription: "Posicionamiento web, branding y geolocalización. Servicios integrales de marketing digital.",
    fullDescription: "Haz crecer tu negocio online con nuestros servicios de marketing digital. Posicionamiento web (SEO), branding completo y geolocalización para aumentar tu visibilidad y atraer más clientes.",
    icon: TrendingUp,
    features: [
      "SEO local y nacional",
      "Auditorías SEO completas",
      "Identidad de marca y naming",
      "Google Business Profile",
      "Posicionamiento local",
      "Estrategia de marca integral"
    ],
    benefits: [
      "Mayor visibilidad online",
      "Más tráfico cualificado",
      "Marca diferenciada",
      "ROI medible"
    ],
    cta: "Solicitar consulta"
  },
  {
    id: "asesoramiento-legal",
    slug: "asesoramiento-legal",
    title: "Asesoramiento Legal",
    shortDescription: "RGPD, extranjería y gestoría para autónomos. Servicios legales y administrativos especializados.",
    fullDescription: "Servicios legales y administrativos especializados: adaptación RGPD y protección de datos, trámites de extranjería (nacionalidad, residencia, pareja de hecho) y gestoría completa para autónomos.",
    icon: Scale,
    features: [
      "Adaptación RGPD y DPO externo",
      "Auditorías de protección de datos",
      "Trámites de extranjería",
      "Gestoría para autónomos",
      "Asesoramiento fiscal",
      "Cumplimiento normativo"
    ],
    benefits: [
      "Cumplimiento normativo garantizado",
      "Ahorro de tiempo y recursos",
      "Reducción de riesgos",
      "Tranquilidad"
    ],
    cta: "Solicitar consulta"
  }
];

export interface PricingMode {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const rrhhPricingModes: PricingMode[] = [
  {
    id: "por-horas",
    title: "Plan por Horas",
    description: "Paga solo por las horas que necesites para cada perfil tech contratado. Ideal para proyectos puntuales.",
    features: [
      "Facturación mensual por horas consumidas",
      "Sin compromiso mínimo",
      "Perfiles validados técnicamente",
      "Gestión administrativa incluida",
      "Soporte dedicado",
      "Reportes mensuales de actividad"
    ],
    cta: "Solicitar propuesta"
  },
  {
    id: "mensual",
    title: "Servicio Mensual",
    description: "Tarifa fija mensual para gestión continua de talento tech. Perfecto para necesidades recurrentes.",
    features: [
      "Fee mensual fijo predecible",
      "Gestión ilimitada de perfiles",
      "Reclutamiento activo incluido",
      "Administración y nóminas",
      "Evaluaciones trimestrales",
      "Account manager dedicado",
      "SLA de respuesta garantizado"
    ],
    cta: "Solicitar propuesta",
    popular: true
  },
  {
    id: "proyecto",
    title: "Por Proyecto",
    description: "Presupuesto cerrado para proyectos con alcance definido. Control total de costes.",
    features: [
      "Precio cerrado sin sorpresas",
      "Equipo dedicado al proyecto",
      "Hitos y entregables definidos",
      "Gestión de proyecto incluida",
      "Garantía de reemplazo",
      "Documentación completa"
    ],
    cta: "Solicitar propuesta"
  }
];
