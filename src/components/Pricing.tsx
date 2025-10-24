import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos de registro de marca.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const features = [
    "Consulta de viabilidade gratuita",
    "Protocolo completo no INPI",
    "Acompanhamento jurídico especializado",
    "Defesa em caso de oposições",
    "Certificado de registro emitido",
    "Proteção por 10 anos (renovável)",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Investimento para Registrar sua Marca no INPI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Planos completos com acompanhamento jurídico do início ao fim
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-accent/20 animate-fade-in">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                  Planos Personalizados
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-lg sm:text-xl">A partir de</span>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                  R$ 797
                </div>
                <p className="text-muted-foreground">
                  Consulte condições especiais e formas de pagamento
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-4">
                  O que está incluído:
                </h3>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant="cta" 
                size="lg" 
                asChild
                className="w-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Fazer Consulta Gratuita de Marca
                </a>
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
                💬 Atendimento imediato via WhatsApp
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
