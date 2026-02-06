import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: {
    name?: string;
    url?: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = {
    name: "Marvir Solutions",
    url: "https://marvirsolutions.com",
  },
  areaServed = "ES",
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    ...(serviceType && { serviceType }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
