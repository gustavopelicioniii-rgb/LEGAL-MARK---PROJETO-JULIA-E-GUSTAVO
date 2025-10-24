import { Search, FileText, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Consulta gratuita",
  },
  {
    icon: FileText,
    number: "2",
    title: "Protocolo no INPI",
  },
  {
    icon: Eye,
    number: "3",
    title: "Acompanhamento total",
  },
  {
    icon: Award,
    number: "4",
    title: "Certificado emitido",
  },
];

const Process = () => {
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent("Olá! Quero começar minha consulta gratuita agora.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Como Funciona
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center gap-2 min-w-[140px]">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground text-center">
                    {step.title}
                  </h3>
                </div>
                {index < steps.length - 1 && (
                  <svg className="hidden sm:block w-8 h-8 text-accent/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="cta" 
            size="lg" 
            asChild
            className="group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <span>Comece sua consulta gratuita agora</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
