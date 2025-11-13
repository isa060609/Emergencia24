import { Phone, AlertTriangle, Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const emergencyNumbers = [
    { name: "SAMU", number: "192", icon: Heart, description: "Emergências médicas" },
    { name: "Bombeiros", number: "193", icon: AlertTriangle, description: "Incêndios e resgates" },
    { name: "Polícia", number: "190", icon: MapPin, description: "Emergências policiais" },
  ];

  return (
    <section id="inicio" className="py-20" style={{
    background: "linear-gradient(to right bottom, #750101ff, #000, #081588ff)"
  }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-[#c1121f] px-4 py-2 rounded-full"  style={{color: "#fff"}}>
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span>Emergências 24/7</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#fdf0d5] leading-tight">
          Seu guia de emergência
              </h1>
              <p className="text-xl text-[#fdf0d5]/90 max-w-lg">
                Informações essenciais, notícias atualizadas e orientações para situações de emergência. 
                Sua segurança é nossa prioridade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4"  style={{color: "#fff"}}>
              <Button 
                size="lg"
                className="bg-[#c1121f] hover:bg-[#780000] text-black border-0 text-lg px-8 py-4"
                onClick={() => window.open('tel:192', '_self')}
              >
                <Phone className="h-6 w-6 mr-3" />
                Ligar Agora: 192
              </Button>
              <Button 
                size="lg"
                variant="outline"
               className="bg-white text-black border border-[#fdf0d5] hover:text-[#c1121f] hover:bg-white text-lg px-8 py-4 transition-colors duration-300"
  onMouseEnter={(e) => e.currentTarget.style.color = '#c1121f'}
  onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fazer Quiz de Emergência
              </Button>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607217125161-0fc706758f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBhbWJ1bGFuY2UlMjBzaXJlbnN8ZW58MXx8fHwxNzU5MjYwODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ambulância de emergência"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Números de Emergência */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#fdf0d5]">
            Números de Emergência Essenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyNumbers.map((emergency) => (
              <Card key={emergency.number} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/15 transition-all cursor-pointer group">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-[#c1121f] p-4 rounded-full group-hover:scale-110 transition-transform">
                    <emergency.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#fdf0d5]">{emergency.name}</h3>
                    <p className="text-3xl font-bold text-white">{emergency.number}</p>
                    <p className="text-[#fdf0d5]/80 mt-2">{emergency.description}</p>
                  </div>
                  <Button 
                    className="bg-[#c1121f] hover:bg-[#780000] text-white border-0 w-full"
                    onClick={() => window.open(`tel:${emergency.number}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar {emergency.number}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}