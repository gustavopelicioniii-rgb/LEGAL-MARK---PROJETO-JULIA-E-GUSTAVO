import { Shield, Zap, Users, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Acompanhamento Completo",
    description: "Cuidamos de todo o processo até a aprovação no INPI, você não precisa se preocupar com nada.",
  },
  {
    icon: Zap,
    title: "Processo Rápido",
    description: "Protocolo ágil e transparente, com atualizações constantes sobre o andamento do seu registro.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes em Propriedade Intelectual prontos para defender seus direitos.",
  },
  {
    icon: Award,
    title: "Segurança Jurídica",
    description: "Proteção legal garantida em todo território nacional contra cópias e uso indevido.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Humanizado",
    description: "Atendimento ágil e personalizado, sempre disponível para tirar suas dúvidas.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que Registrar Sua Marca com a Gente?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um serviço completo e profissional para proteger o que você construiu com tanto esforço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-xl transition-smooth group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
