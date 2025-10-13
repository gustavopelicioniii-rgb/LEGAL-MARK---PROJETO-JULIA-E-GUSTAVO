import { FileText, Lightbulb, MonitorSmartphone, Copyright, FileSignature, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Registro de Marca",
    description: "Proteja sua propriedade intelectual e garanta tranquilidade, exclusividade e segurança para fortalecer seu negócio.",
  },
  {
    icon: Lightbulb,
    title: "Registro de Patente",
    description: "Proteja sua inovação e tenha exclusividade no mercado, com o reconhecimento e os benefícios que ela merece.",
  },
  {
    icon: MonitorSmartphone,
    title: "Registro de Software",
    description: "Proteja sua criação digital e fortaleça sua posição no mercado tecnológico.",
  },
  {
    icon: Copyright,
    title: "Registro de Direito Autoral",
    description: "Valorize sua obra artística e intelectual com o registro de direito autoral. Proteja seus textos, músicas, imagens e mais.",
  },
  {
    icon: FileSignature,
    title: "Contratos Empresariais",
    description: "Estabeleça relações comerciais sólidas e seguras, garantindo clareza e proteção jurídica para suas transações e parcerias de negócios.",
  },
  {
    icon: Store,
    title: "Contratos de Franquias",
    description: "Expanda seus negócios com confiança tendo termos claros e abrangentes para garantir o sucesso de sua rede de franquias.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Outros Serviços que Realizamos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-sm hover:shadow-lg transition-smooth bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-4 rounded-xl bg-accent/10 text-accent">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
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

export default Services;
