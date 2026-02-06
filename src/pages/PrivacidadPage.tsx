import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout";
import { Shield, FileText, Lock, Users, Globe, Mail } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <Layout
      title="Política de Privacidad"
      description="Política de privacidad de Marvir Solutions. Información sobre cómo tratamos tus datos personales y tus derechos."
      canonical="/legal/privacidad"
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
              Política de Privacidad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              En Marvir Solutions nos comprometemos a proteger la privacidad y seguridad de los datos personales 
              de nuestros usuarios, clientes, candidatos y colaboradores.
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
                  Normativa aplicable
                </h2>
                <p className="text-muted-foreground mb-4">
                  El tratamiento de datos personales realizado por Marvir Solutions se ajusta a lo dispuesto en:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                  <li>Reglamento (UE) 2016/679, General de Protección de Datos (RGPD).</li>
                  <li>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</li>
                  <li>Normativa nacional y europea aplicable en materia de protección de datos.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Responsable del tratamiento
                </h2>
                <div className="glass-card p-6 mb-4 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Responsable:</strong> Marvir Solutions</li>
                      <li><strong className="text-foreground">Teléfono:</strong> +34 603 24 33 18</li>
                      <li><strong className="text-foreground">Correo electrónico:</strong> marvirsolutions@gmail.com</li>
                      <li><strong className="text-foreground">Sitio web:</strong> https://marvirsolutions.com/</li>
                    </ul>
                  </div>
                </div>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">Delegado de Protección de Datos (DPD)</h3>
                    <p className="text-muted-foreground">
                      Marvir Solutions no dispone actualmente de Delegado de Protección de Datos formalmente designado. 
                      Para cualquier consulta relacionada con la privacidad y protección de datos puede contactar a través 
                      del correo electrónico indicado.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Finalidades del tratamiento y base jurídica
                </h2>
                <p className="text-muted-foreground mb-4">
                  Marvir Solutions trata datos personales con las siguientes finalidades:
                </p>
                <div className="space-y-4">
                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    <div className="relative">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Gestionar consultas, solicitudes o comunicaciones recibidas a través de formularios, correo electrónico u otros canales de contacto.</li>
                        <li>Prestar los servicios contratados y gestionar la relación contractual con clientes.</li>
                        <li><strong className="text-foreground">Gestionar procesos de selección de personal</strong>, valorar perfiles profesionales, comprobar la adecuación de los candidatos a puestos actuales o futuros y mantener una <strong className="text-foreground">bolsa de empleo</strong>.</li>
                        <li>Gestionar candidaturas espontáneas o presentadas en respuesta a ofertas de empleo.</li>
                        <li>Enviar comunicaciones informativas o comerciales cuando el interesado haya prestado su consentimiento.</li>
                        <li>Garantizar la seguridad y correcto funcionamiento del sitio web.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">Bases jurídicas del tratamiento</h3>
                  <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                    <div className="relative">
                      <ul className="space-y-2 text-muted-foreground">
                        <li>El consentimiento del interesado (art. 6.1.a RGPD).</li>
                        <li>La aplicación de medidas precontractuales o la ejecución de un contrato (art. 6.1.b RGPD).</li>
                        <li>El cumplimiento de obligaciones legales (art. 6.1.c RGPD).</li>
                        <li>El interés legítimo de Marvir Solutions para la gestión de relaciones profesionales y la protección de la plataforma (art. 6.1.f RGPD).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Categorías de datos tratados
                </h2>
                <p className="text-muted-foreground mb-4">
                  Dependiendo de la finalidad, pueden tratarse las siguientes categorías de datos:
                </p>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Datos identificativos:</strong> nombre y apellidos.</li>
                      <li><strong className="text-foreground">Datos de contacto:</strong> correo electrónico, teléfono, dirección postal.</li>
                      <li><strong className="text-foreground">Datos profesionales y académicos:</strong> experiencia laboral, formación, competencias, currículum vitae.</li>
                      <li><strong className="text-foreground">Datos técnicos:</strong> dirección IP, datos de navegación y uso del sitio web.</li>
                      <li><strong className="text-foreground">Datos de facturación y administrativos</strong> cuando se contratan servicios.</li>
                      <li>Cualquier otro dato facilitado voluntariamente por el interesado.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Procedencia de los datos
                </h2>
                <p className="text-muted-foreground mb-4">
                  Los datos personales se obtienen directamente del interesado mediante:
                </p>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Formularios web.</li>
                      <li>Envío de correos electrónicos.</li>
                      <li>Remisión voluntaria de currículums vitae.</li>
                      <li>Comunicaciones profesionales directas.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  En determinados supuestos, los datos pueden proceder de fuentes accesibles al público o de terceros 
                  colaboradores, siempre garantizando la licitud del tratamiento.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Cesiones de datos y encargados del tratamiento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Marvir Solutions podrá comunicar datos personales a terceros únicamente en los siguientes supuestos:
                </p>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>A <strong className="text-foreground">empresas clientes</strong>, exclusivamente con la finalidad de gestionar procesos de selección de personal en los que el candidato haya mostrado interés o haya prestado su consentimiento.</li>
                      <li>A proveedores y encargados del tratamiento que prestan servicios tecnológicos, de alojamiento web, correo electrónico, analítica, gestión administrativa o servicios equivalentes.</li>
                      <li>A organismos públicos cuando exista una obligación legal.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Todos los proveedores actúan bajo contratos que garantizan el cumplimiento del artículo 28 del RGPD 
                  y aplican medidas adecuadas de seguridad y confidencialidad.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Transferencias internacionales de datos
                </h2>
                <p className="text-muted-foreground">
                  Con carácter general, no se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.
                </p>
                <p className="text-muted-foreground mt-4">
                  En caso de que se produzcan, se garantizará el cumplimiento del RGPD mediante la adopción de garantías 
                  adecuadas, como cláusulas contractuales tipo o decisiones de adecuación.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Plazos de conservación
                </h2>
                <p className="text-muted-foreground mb-4">
                  Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir la finalidad 
                  para la que fueron recabados o mientras exista una obligación legal de conservación.
                </p>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <p className="text-muted-foreground">
                      En particular:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2 ml-6">
                      <li>
                        <strong className="text-foreground">Datos de candidatos y currículums vitae:</strong> se conservarán 
                        durante un plazo máximo de <strong className="text-foreground">12 meses</strong> desde su recepción. 
                        Transcurrido dicho plazo, los datos serán suprimidos salvo que el interesado haya autorizado expresamente 
                        su conservación por un periodo superior o solicite su eliminación antes.
                      </li>
                      <li>
                        <strong className="text-foreground">Datos contractuales y de facturación:</strong> se conservarán conforme 
                        a los plazos legales aplicables.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Medidas de seguridad
                </h2>
                <p className="text-muted-foreground">
                  Marvir Solutions aplica medidas técnicas y organizativas apropiadas para garantizar la confidencialidad, 
                  integridad y disponibilidad de los datos personales, evitando su pérdida, alteración, acceso no autorizado 
                  o divulgación indebida.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Derechos de las personas interesadas
                </h2>
                <p className="text-muted-foreground mb-4">
                  Las personas interesadas pueden ejercer los siguientes derechos:
                </p>
                <div className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Acceso a sus datos personales.</li>
                      <li>Rectificación de datos inexactos.</li>
                      <li>Supresión cuando los datos ya no sean necesarios.</li>
                      <li>Limitación del tratamiento en determinados supuestos.</li>
                      <li>Oposición al tratamiento.</li>
                      <li>Portabilidad de los datos.</li>
                      <li>Retirar el consentimiento en cualquier momento.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  El ejercicio de derechos es gratuito y puede realizarse mediante solicitud escrita a{" "}
                  <a href="mailto:marvirsolutions@gmail.com" className="text-primary hover:underline">
                    marvirsolutions@gmail.com
                  </a>
                  , acompañada de un documento acreditativo de identidad.
                </p>
                <p className="text-muted-foreground mt-4">
                  Si considera que sus derechos no han sido atendidos correctamente, puede presentar una reclamación ante 
                  la <strong className="text-foreground">Agencia Española de Protección de Datos (AEPD)</strong>:{" "}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.aepd.es
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Menores de edad
                </h2>
                <p className="text-muted-foreground">
                  Los servicios de Marvir Solutions están dirigidos a personas mayores de 18 años.
                </p>
                <p className="text-muted-foreground mt-2">
                  No se recaban intencionadamente datos de menores de 14 años.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Redes sociales
                </h2>
                <p className="text-muted-foreground">
                  Marvir Solutions mantiene perfiles en redes sociales con fines informativos y profesionales.
                </p>
                <p className="text-muted-foreground mt-2">
                  No se extraerán datos personales de perfiles sociales sin el consentimiento del interesado. El tratamiento 
                  de datos en redes sociales se realizará conforme al RGPD y a esta política.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Cookies
                </h2>
                <p className="text-muted-foreground">
                  Este sitio web utiliza cookies técnicas y, en su caso, analíticas para garantizar su correcto funcionamiento 
                  y mejorar la experiencia de navegación.
                </p>
                <p className="text-muted-foreground mt-2">
                  Puede consultar la información completa en la{" "}
                  <a href="/legal/cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  Actualización de la política
                </h2>
                <p className="text-muted-foreground mb-4">
                  Marvir Solutions se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a 
                  novedades legislativas o cambios en sus servicios.
                </p>
                <p className="text-muted-foreground">
                  La versión vigente estará siempre disponible en:{" "}
                  <a href="https://marvirsolutions.com/politica-de-privacidad/" className="text-primary hover:underline">
                    https://marvirsolutions.com/politica-de-privacidad/
                  </a>
                </p>
                <div className="glass-card p-6 mt-4 group relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  <div className="relative">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Fecha de última actualización:</strong> 20 de octubre de 2025
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong className="text-foreground">Contacto:</strong> marvirsolutions@gmail.com | +34 603 24 33 18
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </Layout>
  );
}
