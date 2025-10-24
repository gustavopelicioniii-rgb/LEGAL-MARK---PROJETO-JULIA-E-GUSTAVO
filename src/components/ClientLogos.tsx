import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";
import clientLogo5 from "@/assets/client-logo-5.png";
import clientLogo6 from "@/assets/client-logo-6.png";

const ClientLogos = () => {
  const logos = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
  ];

  return (
    <section className="py-8 sm:py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            Mais de 1.000 empreendedores já registraram com a Marca Legal
          </p>
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 text-sm sm:text-base font-bold text-foreground">
              4,9/5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={logo}
                alt={`Cliente ${index + 1}`}
                className="h-12 sm:h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
