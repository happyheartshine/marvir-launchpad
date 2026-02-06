import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout
      title="404 - Página no encontrada"
      description="La página que buscas no existe o ha sido movida."
      noIndex
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">Página no encontrada</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Ir al inicio
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver atrás
          </Button>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default NotFound;
