import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Copy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts, blogCategories, type BlogPost } from "@/data/blog";
import { toast } from "sonner";

function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "Todos") return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const featuredPosts = filteredPosts.filter(p => p.featured);

  return (
    <Layout
      title="Blog"
      description="Insights, tendencias y consejos sobre tecnología, datos, RRHH y el mundo tech. El blog de Marvir Solutions."
      canonical="/blog"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Blog
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Insights del mundo tech
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tendencias, consejos y análisis sobre tecnología, datos, RRHH y transformación digital.
          </p>
        </AnimatedSection>
      </Section>

      {/* Category Filter */}
      <Section className="pt-0 pb-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "Todos" && (
        <Section className="pt-0">
          <h2 className="font-semibold text-lg mb-6">Artículos destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} featured />
            ))}
          </div>
        </Section>
      )}

      {/* All Posts */}
      <Section className={featuredPosts.length > 0 && selectedCategory === "Todos" ? "pt-0" : ""}>
        {(selectedCategory !== "Todos" || featuredPosts.length === 0) && (
          <p className="text-sm text-muted-foreground mb-6">
            {filteredPosts.length} artículo{filteredPosts.length !== 1 && "s"}
          </p>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts
            .filter(p => selectedCategory !== "Todos" || !p.featured)
            .map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="font-semibold text-lg mb-2">No hay artículos en esta categoría</h3>
            <p className="text-muted-foreground mb-4">
              Próximamente publicaremos contenido sobre este tema.
            </p>
            <Button variant="outline" onClick={() => setSelectedCategory("Todos")}>
              Ver todos los artículos
            </Button>
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿Te gusta nuestro contenido?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Síguenos en LinkedIn para no perderte ninguna publicación.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-4 h-4" />
                Seguir en LinkedIn
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}

function BlogPostPage({ post }: { post: BlogPost }) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${post.title} - Marvir Solutions`;

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Enlace copiado al portapapeles");
      return;
    }

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400");
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`/blog/${post.slug}`}
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
            
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime} min de lectura
              </span>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Content */}
      <Section className="py-8">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^## (.*$)/gm, '<h2 class="font-display font-bold text-2xl mt-8 mb-4 text-foreground">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="font-semibold text-xl mt-6 mb-3 text-foreground">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
                  .replace(/```([\s\S]*?)```/g, '<pre class="glass-card p-4 rounded-lg overflow-x-auto text-sm my-4"><code>$1</code></pre>')
                  .replace(/\|(.*)\|/g, '<tr>$1</tr>')
              }}
            />
          </article>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Compartir:</span>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => handleShare("linkedin")}>
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleShare("twitter")}>
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleShare("copy")}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section variant="dark">
          <SectionHeader
            title="Artículos relacionados"
            description="Más contenido que podría interesarte."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="gradient">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              ¿Necesitas ayuda con tu proyecto?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cuéntanos qué necesitas y te ayudamos a hacerlo realidad.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/contacto">
                Contactar
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}

export default function BlogPage() {
  const { slug } = useParams();

  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) {
      return (
        <Layout title="Artículo no encontrado">
          <Section className="pt-32">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl mb-4">Artículo no encontrado</h1>
              <p className="text-muted-foreground mb-6">El artículo que buscas no existe o ha sido eliminado.</p>
              <Button asChild>
                <Link to="/blog">Volver al blog</Link>
              </Button>
            </div>
          </Section>
        </Layout>
      );
    }
    return <BlogPostPage post={post} />;
  }

  return <BlogIndex />;
}
