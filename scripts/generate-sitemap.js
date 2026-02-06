const fs = require('fs');
const path = require('path');

const blogPosts = [
  { slug: "outsourcing-tech-ventajas-2024", publishedAt: "2024-01-15" },
  { slug: "mejores-practicas-rrhh-tech", publishedAt: "2024-02-10" },
  { slug: "transformacion-digital-pymes", publishedAt: "2024-03-05" },
];

const baseUrl = "https://marvirsolutions.com";
const currentDate = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/servicios", priority: "0.9", changefreq: "monthly" },
  { url: "/servicios/consultoria", priority: "0.8", changefreq: "monthly" },
  { url: "/servicios/rrhh-outsourcing", priority: "0.8", changefreq: "monthly" },
  { url: "/servicios/broker-empresas", priority: "0.8", changefreq: "monthly" },
  { url: "/servicios/marketing-digital", priority: "0.8", changefreq: "monthly" },
  { url: "/servicios/asesoramiento-legal", priority: "0.8", changefreq: "monthly" },
  { url: "/dominios", priority: "0.7", changefreq: "monthly" },
  { url: "/blog", priority: "0.8", changefreq: "weekly" },
  { url: "/trabaja-con-nosotros", priority: "0.7", changefreq: "monthly" },
  { url: "/contacto", priority: "0.8", changefreq: "monthly" },
  { url: "/legal/cookies", priority: "0.3", changefreq: "yearly" },
  { url: "/legal/privacidad", priority: "0.3", changefreq: "yearly" },
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

blogPosts.forEach(post => {
  const lastmod = post.publishedAt || currentDate;
  sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap generated successfully at:', sitemapPath);
