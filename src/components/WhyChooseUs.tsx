import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Shield,
    number: "100+",
    label: "Marcas Protegidas",
    description: "Empresas que confiaram em nosso trabalho"
  },
  {
    icon: Clock,
    number: "98%",
    label: "Taxa de Aprovação",
    description: "Alto índice de sucesso nos registros"
  },
  {
    icon: Award,
    number: "5+",
    label: "Anos de Experiência",
    description: "Especialização em propriedade intelectual"
  },
  {
    icon: ThumbsUp,
    number: "100%",
    label: "Satisfação",
    description: "Clientes satisfeitos com nosso atendimento"
  }
];

const differentials = [
  "Atendimento personalizado e consultoria especializada",
  "Análise de viabilidade gratuita da sua marca",
  "Acompanhamento em tempo real do processo",
  "Suporte completo durante todo o registro",
  "Preços transparentes sem taxas ocultas",
  "Experiência com marcas de diversos segmentos"
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Por Que Escolher a Marca Legal?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise e dedicação para proteger o que é seu
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-smooth border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Nossos Diferenciais
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {differentials.map((differential, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground">
                  {differential}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
