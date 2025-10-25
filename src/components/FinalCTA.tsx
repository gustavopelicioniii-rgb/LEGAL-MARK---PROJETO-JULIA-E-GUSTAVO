import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import iconSecurity from "@/assets/icon-security.png";

const FinalCTA = () => {
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre como registrar minha marca.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6 sm:space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm">
            <img src={iconSecurity} alt="Segurança" className="w-16 h-16 sm:w-20 sm:h-20" loading="lazy" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Garanta a Exclusividade da Sua Marca Antes Que Alguém Registre
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto px-4">
            Cada dia, novas empresas registram nomes no INPI. Proteja o nome do seu negócio agora e evite problemas futuros com a sua empresa.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 py-4 sm:py-6">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-sm sm:text-base">Processo Completo</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-sm sm:text-base">Equipe Especializada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-sm sm:text-base">Acompanhamento Total</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 pt-4 sm:pt-6 px-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Urgency Banner */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-4 sm:p-5 w-full max-w-lg">
              <p className="text-base sm:text-lg text-center font-bold text-white flex items-center justify-center gap-2">
                🔥 <span>ATENÇÃO: Apenas 5 vagas disponíveis hoje!</span>
              </p>
              <p className="text-sm sm:text-base text-center text-white/90 mt-2">
                Garanta sua vaga agora e evite perder o nome da sua empresa
              </p>
            </div>

            {/* WhatsApp Button */}
            <Button 
              variant="whatsapp" 
              asChild
              className="group w-full max-w-lg text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl h-auto py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Fazer Consulta Gratuita de Marca</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>

            {/* Trust Indicator */}
            <p className="text-sm sm:text-base text-center text-white/80 flex items-center justify-center gap-1.5 flex-wrap">
              <span>✅ Pagamento 100% seguro</span>
              <span className="hidden sm:inline">•</span>
              <span>Atendimento imediato via WhatsApp</span>
            </p>
          </div>

          {/* Additional Trust Indicator */}
          <p className="text-xs sm:text-sm text-white/70 pt-2">
            ✔️ Atendimento rápido e personalizado em todo o Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
