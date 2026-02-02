import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-16 md:py-24", {
  variants: {
    variant: {
      default: "",
      gradient: "bg-gradient-section",
      dark: "bg-surface-1",
      hero: "bg-gradient-hero relative overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, variant, className, id }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants({ variant }), className)}>
      <div className="section-container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {label && (
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn("text-muted-foreground text-lg max-w-2xl", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
