import { Star, Building2, Shield, CheckCircle } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-8 sm:py-10 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 text-center">
          {/* Rating */}
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" 
                />
              ))}
            </div>
            <span className="text-sm sm:text-base font-bold text-foreground">
              4,9/5
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              (1.000+ registros)
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-border" />

          {/* Juridico */}
          <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            <span className="text-xs sm:text-sm text-foreground font-medium">
              Atendimento jurídico especializado
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-border" />

          {/* Seguro */}
          <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            <span className="text-xs sm:text-sm text-foreground font-medium">
              100% seguro e online
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-border" />

          {/* Success */}
          <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            <span className="text-xs sm:text-sm text-foreground font-medium">
              +1.000 marcas protegidas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
