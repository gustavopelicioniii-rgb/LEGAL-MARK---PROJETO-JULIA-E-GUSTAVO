import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ConsultForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brandName: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.brandName) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "5511912200912";
    const message = encodeURIComponent(
      `Olá! Acabei de preencher o formulário para consultar minha marca no site.\n\nNome: ${formData.name}\nWhatsApp: ${formData.phone}\nNome da Marca: ${formData.brandName}`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <Card className="shadow-2xl border-accent/20">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
          Consulta Gratuita de Marca
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Seu Nome Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              WhatsApp
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 91234-5678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brandName" className="text-foreground">
              Nome da Marca
            </Label>
            <Input
              id="brandName"
              type="text"
              placeholder="Digite o nome da sua marca"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full"
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full"
          >
            Quero saber se meu nome pode ser registrado
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultForm;
