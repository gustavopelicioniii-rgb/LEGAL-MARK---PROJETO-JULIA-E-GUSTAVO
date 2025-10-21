import { Shield, Clock, Award, ThumbsUp } from "lucide-react";
import iconHandshake from "@/assets/icon-handshake.png";
import iconAnalysis from "@/assets/icon-analysis.png";
import iconTracking from "@/assets/icon-tracking.png";
import iconSupport from "@/assets/icon-support.png";
import iconPricing from "@/assets/icon-pricing.png";
import iconExperience from "@/assets/icon-experience.png";

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
  {
    text: "Atendimento personalizado e consultoria especializada",
    icon: iconHandshake
  },
  {
    text: "Análise de viabilidade gratuita da sua marca",
    icon: iconAnalysis
  },
  {
    text: "Acompanhamento em tempo real do processo",
    icon: iconTracking
  },
  {
    text: "Suporte completo durante todo o registro",
    icon: iconSupport
  },
  {
    text: "Preços transparentes sem taxas ocultas",
    icon: iconPricing
  },
  {
    text: "Experiência com marcas de diversos segmentos",
    icon: iconExperience
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
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
                className="bg-card rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-smooth border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12">
            Nossos Diferenciais
          </h3>
          
          {/* Mobile: Simple vertical cards layout */}
          <div className="md:hidden space-y-4">
            {differentials.map((differential, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <img 
                  src={differential.icon} 
                  alt="" 
                  className="w-12 h-12 flex-shrink-0"
                />
                <p className="text-sm text-foreground font-medium">
                  {differential.text}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Fishbone layout */}
          <div className="hidden md:block relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />
            
            {/* Items */}
            <div className="space-y-12">
              {differentials.map((differential, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 animate-fade-in ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-flex items-center gap-4 p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-smooth ${
                        isLeft ? 'flex-row' : 'flex-row-reverse'
                      }`}>
                        <img 
                          src={differential.icon} 
                          alt="" 
                          className="w-16 h-16 flex-shrink-0"
                        />
                        <p className="text-base text-foreground font-medium">
                          {differential.text}
                        </p>
                      </div>
                    </div>
                    
                    {/* Center dot connector */}
                    <div className="flex flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    
                    {/* Spacer for alignment */}
                    <div className="flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
