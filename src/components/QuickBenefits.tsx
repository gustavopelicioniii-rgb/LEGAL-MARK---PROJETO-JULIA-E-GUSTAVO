import { CheckCircle, Scale, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    text: "Acompanhamento completo até o certificado",
  },
  {
    icon: Scale,
    text: "Atendimento com especialista jurídico",
  },
  {
    icon: Clock,
    text: "Registro rápido e 100% digital",
  },
  {
    icon: Shield,
    text: "Mais de 1.000 marcas protegidas com sucesso",
  },
];

const QuickBenefits = () => {
  return (
    <section className="py-8 sm:py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium leading-snug pt-2">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickBenefits;
