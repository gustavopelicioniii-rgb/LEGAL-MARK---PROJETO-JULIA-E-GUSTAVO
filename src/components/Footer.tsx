import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511999999999";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "contato@marcalegal.com.br";
  const cnpj = "00.000.000/0000-00";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Marca Legal</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Especialistas em Registro de Marca e Propriedade Intelectual. 
              Atendimento em todo o Brasil.
            </p>
            <div className="text-sm text-primary-foreground/70">
              CNPJ: {cnpj}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Registro de Marca</li>
              <li>Análise de Viabilidade</li>
              <li>Acompanhamento INPI</li>
              <li>Defesa de Marca</li>
              <li>Renovação de Registro</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Atendimento em todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Informações</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Marca Legal. Todos os direitos reservados.</p>
          <p className="mt-2">
            Especialistas em Registro de Marca e Propriedade Intelectual – Atendimento em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
