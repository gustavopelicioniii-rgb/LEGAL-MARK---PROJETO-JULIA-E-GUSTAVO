import { Search, FileText, Eye, Award } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise de Viabilidade",
    description: "Verificamos se sua marca pode ser registrada e orientamos sobre a melhor estratégia.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Protocolo no INPI",
    description: "Preparamos toda documentação e protocolamos seu pedido no Instituto Nacional de Propriedade Industrial.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Acompanhamento e Defesa",
    description: "Monitoramos todo o processo e fazemos a defesa quando necessário para garantir a aprovação.",
  },
  {
    icon: Award,
    number: "04",
    title: "Entrega do Certificado",
    description: "Você recebe o certificado de registro e sua marca fica protegida por 10 anos, renovável.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como Funciona o Registro de Marca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente, dividido em 4 etapas essenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/20 -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 space-y-4">
                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
