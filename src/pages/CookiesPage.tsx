import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { Shield, Settings, BarChart3, User } from "lucide-react";

export default function CookiesPage() {
  return (
    <Layout
      title="Política de Cookies"
      description="Información sobre el uso de cookies en Marvir Solutions. Conoce qué cookies utilizamos y cómo gestionarlas."
      canonical="/legal/cookies"
    >
      {/* Hero */}
      <Section variant="hero" className="pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Legal
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Política de Cookies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              En Marvir Solutions utilizamos cookies y tecnologías similares con la finalidad de garantizar 
              el correcto funcionamiento del sitio web, mejorar la experiencia de navegación y analizar el uso 
              que realizan los usuarios del mismo.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  ¿Qué son las cookies?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario 
                  (ordenador, smartphone, tablet, etc.) cuando visita un sitio web.
                </p>
                <p className="text-muted-foreground">
                  Permiten, entre otras cosas, recordar información sobre la navegación, las preferencias del 
                  usuario o su comportamiento, facilitando una experiencia más eficiente y personalizada.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  ¿Quién es el responsable del uso de cookies?
                </h2>
                <div className="glass-card p-6 mb-4 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Responsable:</strong> Marvir Solutions</li>
                      <li><strong className="text-foreground">Correo electrónico:</strong> marvirsolutions@gmail.com</li>
                      <li><strong className="text-foreground">Teléfono:</strong> +34 603 24 33 18</li>
                      <li><strong className="text-foreground">Sitio web:</strong> https://marvirsolutions.com/</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
                  Tipos de cookies utilizadas en este sitio web
                </h2>
                <p className="text-muted-foreground mb-6">
                  Este sitio web puede utilizar las siguientes categorías de cookies:
                </p>

                <div className="space-y-6">
                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Settings className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">1. Cookies técnicas o necesarias</h3>
                        <p className="text-muted-foreground mb-3">
                          Son imprescindibles para el funcionamiento básico del sitio web y permiten, por ejemplo:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                          <li>La navegación por la página.</li>
                          <li>El acceso a áreas seguras.</li>
                          <li>La gestión de formularios y preferencias básicas.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Estas cookies no requieren el consentimiento del usuario.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <BarChart3 className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">2. Cookies de análisis o medición</h3>
                        <p className="text-muted-foreground mb-3">
                          Permiten analizar el comportamiento de los usuarios en el sitio web de forma agregada 
                          y anónima, con el objetivo de:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                          <li>Medir el número de visitas.</li>
                          <li>Analizar hábitos de navegación.</li>
                          <li>Mejorar contenidos y servicios.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Estas cookies solo se instalarán si el usuario presta su consentimiento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <User className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">3. Cookies de personalización</h3>
                        <p className="text-muted-foreground">
                          Permiten recordar preferencias del usuario, como el idioma o configuraciones regionales, 
                          para ofrecer una experiencia más personalizada.
                        </p>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Su instalación está supeditada al consentimiento del usuario.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Shield className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">4. Cookies de terceros</h3>
                        <p className="text-muted-foreground">
                          Este sitio web puede utilizar servicios de terceros (por ejemplo, herramientas de analítica 
                          o integración de servicios externos) que, bajo su responsabilidad, pueden instalar cookies.
                        </p>
                        <p className="text-muted-foreground mt-3">
                          Marvir Solutions no controla directamente dichas cookies, por lo que se recomienda consultar 
                          las políticas de cookies de dichos terceros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Base legal para el uso de cookies
                </h2>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Cookies técnicas:</strong> interés legítimo (art. 6.1.f RGPD).
                      </li>
                      <li>
                        <strong className="text-foreground">Cookies no necesarias:</strong> consentimiento del usuario 
                        (art. 6.1.a RGPD), otorgado mediante el banner o panel de configuración de cookies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  ¿Cómo gestionar o desactivar las cookies?
                </h2>
                <p className="text-muted-foreground mb-4">
                  El usuario puede configurar o retirar su consentimiento en cualquier momento a través del 
                  <strong className="text-foreground"> panel de configuración de cookies</strong> disponible en el sitio web.
                </p>
                <p className="text-muted-foreground mb-4">
                  Además, puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la 
                  configuración del navegador utilizado. A continuación, se indican enlaces a la información de los 
                  principales navegadores:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Edge</li>
                  <li>Safari</li>
                </ul>
                <p className="text-muted-foreground mt-4 italic">
                  La desactivación de determinadas cookies puede afectar al correcto funcionamiento del sitio web.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Transferencias internacionales
                </h2>
                <p className="text-muted-foreground">
                  En caso de que se utilicen cookies de terceros que impliquen transferencias internacionales de datos 
                  fuera del Espacio Económico Europeo, se garantizará el cumplimiento del RGPD mediante la adopción de 
                  las garantías adecuadas, como cláusulas contractuales tipo o decisiones de adecuación.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Conservación de las cookies
                </h2>
                <p className="text-muted-foreground">
                  Las cookies se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad 
                  para la que fueron instaladas, o durante el plazo definido por el proveedor de la cookie.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Actualización de la Política de Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Marvir Solutions podrá modificar la presente Política de Cookies para adaptarla a nuevas exigencias 
                  legales o a cambios en el uso de cookies en el sitio web.
                </p>
                <p className="text-muted-foreground">
                  La versión vigente estará siempre disponible en:{" "}
                  <a href="https://marvirsolutions.com/politica-de-cookies/" className="text-primary hover:underline">
                    https://marvirsolutions.com/politica-de-cookies/
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">Fecha de última actualización:</strong> 20 de enero de 2026
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </Layout>
  );
}
