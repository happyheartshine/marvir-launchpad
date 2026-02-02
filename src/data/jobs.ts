export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  locationType: "remote" | "hybrid" | "onsite";
  department: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  active: boolean;
  createdAt: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    slug: "senior-data-engineer",
    title: "Senior Data Engineer",
    location: "Madrid / Remoto",
    locationType: "hybrid",
    department: "Engineering",
    shortDescription: "Buscamos un Data Engineer senior para diseñar y mantener pipelines de datos escalables.",
    fullDescription: "Como Senior Data Engineer, serás responsable de diseñar, construir y mantener la infraestructura de datos que impulsa las decisiones de negocio de nuestros clientes. Trabajarás con tecnologías cloud modernas y colaborarás con equipos multidisciplinares.",
    requirements: [
      "5+ años de experiencia en ingeniería de datos",
      "Dominio de Python, SQL y Spark",
      "Experiencia con AWS, GCP o Azure",
      "Conocimiento de herramientas ETL/ELT modernas",
      "Experiencia con data warehouses (Snowflake, BigQuery, Redshift)",
      "Capacidad de comunicación técnica"
    ],
    benefits: [
      "Salario competitivo + bonus",
      "100% remoto o híbrido flexible",
      "Formación continua",
      "Seguro médico premium",
      "Equipamiento de última generación"
    ],
    salary: "55.000€ - 75.000€",
    active: true,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    slug: "product-manager-ai",
    title: "Product Manager - IA",
    location: "Barcelona / Remoto",
    locationType: "remote",
    department: "Product",
    shortDescription: "Lidera el desarrollo de productos basados en inteligencia artificial para clientes enterprise.",
    fullDescription: "Buscamos un Product Manager apasionado por la IA para liderar el desarrollo de soluciones innovadoras. Serás el puente entre los equipos técnicos y los stakeholders de negocio, definiendo la visión y roadmap de productos de IA.",
    requirements: [
      "3+ años como Product Manager",
      "Experiencia en productos B2B/SaaS",
      "Conocimiento de ML/AI (no necesitas programar)",
      "Excelentes habilidades de comunicación",
      "Experiencia con metodologías ágiles",
      "Inglés profesional"
    ],
    benefits: [
      "Proyecto innovador con impacto real",
      "Trabajo 100% remoto",
      "Stock options",
      "Presupuesto de formación anual",
      "Workation 4 semanas/año"
    ],
    salary: "50.000€ - 65.000€",
    active: true,
    createdAt: "2024-01-20"
  },
  {
    id: "3",
    slug: "fullstack-developer-react",
    title: "Fullstack Developer (React/Node)",
    location: "Remoto España",
    locationType: "remote",
    department: "Engineering",
    shortDescription: "Desarrollador fullstack para proyectos de consultoría con stack moderno React + Node.",
    fullDescription: "Únete a nuestro equipo de desarrollo para trabajar en proyectos diversos y desafiantes. Utilizamos un stack moderno con React, TypeScript, Node.js y desplegamos en cloud. Valoramos la calidad del código y las buenas prácticas.",
    requirements: [
      "3+ años con React y TypeScript",
      "Experiencia con Node.js y APIs REST/GraphQL",
      "Conocimiento de bases de datos SQL y NoSQL",
      "Familiaridad con CI/CD y testing",
      "Proactividad y autonomía",
      "Buen nivel de inglés"
    ],
    benefits: [
      "Proyectos variados y tecnología punta",
      "100% remoto en España",
      "Horario flexible",
      "Revisión salarial anual",
      "Team buildings trimestrales"
    ],
    salary: "40.000€ - 55.000€",
    active: true,
    createdAt: "2024-01-25"
  }
];

export const departments = ["Todos", "Engineering", "Product", "Design", "Sales", "Operations"];
