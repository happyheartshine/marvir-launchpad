export interface Domain {
  id: string;
  name: string;
  category: string;
  price: string;
  status: "available" | "premium" | "negotiable";
  featured?: boolean;
}

export const domains: Domain[] = [
  {
    id: "1",
    name: "dataflow.es",
    category: "Tech",
    price: "2.500€",
    status: "available",
    featured: true
  },
  {
    id: "2",
    name: "cloudservices.io",
    category: "Cloud",
    price: "4.800€",
    status: "premium",
    featured: true
  },
  {
    id: "3",
    name: "aiplatform.es",
    category: "IA",
    price: "Consultar",
    status: "negotiable"
  },
  {
    id: "4",
    name: "devteam.es",
    category: "Tech",
    price: "1.200€",
    status: "available"
  },
  {
    id: "5",
    name: "talentohub.com",
    category: "RRHH",
    price: "3.500€",
    status: "premium"
  },
  {
    id: "6",
    name: "consultorestech.es",
    category: "Consultoría",
    price: "890€",
    status: "available"
  },
  {
    id: "7",
    name: "digitalops.io",
    category: "Tech",
    price: "2.100€",
    status: "available"
  },
  {
    id: "8",
    name: "startupforge.es",
    category: "Startups",
    price: "Consultar",
    status: "negotiable"
  },
  {
    id: "9",
    name: "fintechsolutions.es",
    category: "Fintech",
    price: "5.500€",
    status: "premium",
    featured: true
  },
  {
    id: "10",
    name: "remotework.es",
    category: "RRHH",
    price: "1.800€",
    status: "available"
  },
  {
    id: "11",
    name: "cyberdefense.es",
    category: "Seguridad",
    price: "3.200€",
    status: "premium"
  },
  {
    id: "12",
    name: "bigdatapro.io",
    category: "Data",
    price: "Consultar",
    status: "negotiable"
  }
];

export const domainCategories = [
  "Todos",
  "Tech",
  "Cloud",
  "IA",
  "RRHH",
  "Data",
  "Fintech",
  "Startups",
  "Seguridad",
  "Consultoría"
];
