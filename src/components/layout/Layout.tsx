import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const defaultMeta = {
  title: "Marvir Solutions | Consultoría Tech & Outsourcing",
  description: "Consultoría tecnológica, outsourcing de talento tech, RRHH y servicios de broker para empresas. Transformamos tu negocio con datos y tecnología.",
  ogImage: "/og-image.jpg",
  siteUrl: "https://marvirsolutions.com",
};

export function Layout({
  children,
  title,
  description = defaultMeta.description,
  canonical,
  ogImage = defaultMeta.ogImage,
  noIndex = false,
}: LayoutProps) {
  const pageTitle = title
    ? `${title} | Marvir Solutions`
    : defaultMeta.title;
  const canonicalUrl = canonical
    ? `${defaultMeta.siteUrl}${canonical}`
    : undefined;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${defaultMeta.siteUrl}${ogImage}`} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:site_name" content="Marvir Solutions" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${defaultMeta.siteUrl}${ogImage}`} />

        {/* Additional SEO */}
        <meta name="author" content="Marvir Solutions" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="language" content="es" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
