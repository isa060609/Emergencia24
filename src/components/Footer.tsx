import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  const emergencyServices = [
    { name: "SAMU", number: "192", description: "Emergências Médicas" },
    { name: "Bombeiros", number: "193", description: "Incêndios e Resgates" },
    { name: "Polícia", number: "190", description: "Emergências Policiais" },
    { name: "Defesa Civil", number: "199", description: "Desastres Naturais" },
  ];

  const quickLinks = [
    {  name: "Como Fazer uma Chamada de Emergência", 
    href: "https://www.youtube.com/watch?v=BhltA_z05CQ" 
   },
    { name: "Primeiros Socorros Básicos", href: "https://www.saude.sp.gov.br/hospital-geral-sao-mateus/homepage/acesso-rapido/primeiros-socorros"
},
    { name: "Plano de Evacuação Familiar", href: "https://www.spsemprealerta.sp.gov.br/orientacoes/plano-familiar-de-emergencia/" },

    { name: "Kit de Emergência", href: "https://www.ready.gov/kit" },
    { name: "Alertas", href: "https://www.spsemprealerta.sp.gov.br/" },

  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/emergencia24hoficial" },
  ];

  return (
    <footer className="py-20" style={{
    background: "linear-gradient(to right bottom, #750101ff, #000, #081588ff)"
  }}>
      {/* Seção Principal */}
      <div className=" mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Sobre */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-[ #ffffffff] p-2 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold"  style={{color: "#fff"}}>Emergência 24h</h3>
                <p className="text-xs text-[#669bbc]">Sempre pronto para ajudar</p>
              </div>
            </div>
            <p className="text-[#fdf0d5]/80 text-sm leading-relaxed">
              Portal dedicado à segurança e prevenção de emergências. 
              Informações confiáveis, orientações especializadas e acesso rápido aos serviços de emergência.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm"  style={{color: "#fff"}}>
                <Clock className="h-4 w-4"/>
                <span>Atendimento 24 horas, 7 dias por semana</span>
              </div>
              <div className="flex items-center space-x-2 text-sm"  style={{color: "#fff"}}>
                <MapPin className="h-4 w-4 text-[#ffffffff]" />
                <span>Cobertura nacional</span>
              </div>
              <div className="flex items-center space-x-2 text-sm"  style={{color: "#fff"}}>
                <Mail className="h-4 w-4 text-[ #ffffffff]" />
                <span>contato@emergencia24h.gov.br</span>
              </div>
            </div>
          </div>

          {/* Números de Emergência */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold"  style={{color: "#fff"}}>Números de Emergência</h3>
            <div className="space-y-3">
              {emergencyServices.map((service) => (
                <div key={service.number} className="flex items-center justify-between p-3 bg-[#669bbc]/10 rounded-lg hover:bg-[#669bbc]/20 transition-colors">
                  <div>
                    <p className="font-semibold text-[#fdf0d5]">{service.name}</p>
                    <p className="text-xs text-[#fdf0d5]/70">{service.description}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#c1121f] hover:bg-[#780000] text-white border-0 min-w-[60px]"
                    onClick={() => window.open(`tel:${service.number}`, '_self')}
                  >
                    {service.number}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold"  style={{color: "#fff"}}>Links Úteis</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-sm text-[#fdf0d5]/80 hover:text-[#669bbc] transition-colors p-2 rounded hover:bg-[#669bbc]/10"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </nav>
          </div>

          {/* Redes Sociais e Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold"  style={{color: "#fff"}}>Siga-nos</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    size="icon"
                    variant="outline"
                    className="border-[#669bbc] text-[#669bbc] hover:bg-[#669bbc] hover:text-[#003049]"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-[#fdf0d5]">Alertas de Emergência</h4>
              <p className="text-sm text-[#fdf0d5]/70">
                Receba notificações importantes sobre emergências na sua região
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-[#669bbc]/30" />

      {/* Rodapé Inferior */}

      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-[#fdf0d5]/70">
            <p>&copy; 2025 Emergência 24h. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#c1121f] px-4 py-2 rounded-full">
              <p className="text-white text-sm font-semibold">
                Em caso de emergência: ligue 192, 193 ou 190
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
