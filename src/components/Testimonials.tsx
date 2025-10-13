import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Juliana Santos",
    role: "Proprietária - Loja de Roupas",
    image: testimonial1,
    content: "Consegui registrar o nome da minha loja e agora posso expandir com segurança. O atendimento foi excepcional e todo processo muito transparente.",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "CEO - Startup de Tecnologia",
    image: testimonial2,
    content: "Profissionais extremamente competentes. Me ajudaram em cada etapa e conseguiram o registro da minha marca em tempo recorde. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Empreendedor - E-commerce",
    image: testimonial3,
    content: "O melhor investimento que fiz para o meu negócio. Agora tenho a segurança jurídica que precisava para crescer sem preocupações.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Empreendedores que Confiaram em Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img 
                      src={testimonial.image} 
                      alt={`Foto de ${testimonial.name}`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-foreground px-6 py-3 rounded-full border border-gold/20">
            <Star className="w-5 h-5 fill-gold text-gold" />
            <span className="font-semibold">Mais de 1.000 marcas registradas com sucesso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
