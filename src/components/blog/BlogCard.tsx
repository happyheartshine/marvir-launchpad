import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  return (
    <AnimatedCard delay={index * 0.1}>
      <Link to={`/blog/${post.slug}`} className="group block h-full">
        <article className={`h-full glass-card overflow-hidden hover-lift ${featured ? 'md:flex' : ''}`}>
          {/* Image */}
          <div className={`relative bg-gradient-to-br from-primary/20 to-accent/10 ${featured ? 'md:w-2/5 h-48 md:h-auto' : 'h-48'} overflow-hidden`}>
            {post.image ? (
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Placeholder"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className={`p-6 ${featured ? 'md:w-3/5 md:p-8' : ''}`}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="text-xs bg-accent/20 text-accent hover:bg-accent/30">
                  Destacado
                </Badge>
              )}
            </div>
            
            <h3 className={`font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
              {post.title}
            </h3>
            
            <p className={`text-muted-foreground mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.publishedAt).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min
                </span>
              </div>
              
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </article>
      </Link>
    </AnimatedCard>
  );
}
