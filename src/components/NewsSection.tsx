import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Nova Campanha de Prevenção a Enchentes",
      excerpt: "Corpo de Bombeiros lança campanha educativa para temporada de chuvas com dicas essenciais de segurança.",
      image: "https://images.unsplash.com/photo-1600336153113-d66c79de3e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZGlzYXN0ZXIlMjBmbG9vZHxlbnwxfHx8fDE3NTkyNjA4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Prevenção",
      date: "30 Set 2025",
      time: "14:30"
    },
    {
      id: 2,
      title: "Novos Equipamentos para Resgate em Incêndios",
      excerpt: "Bombeiros recebem equipamentos de última geração para aumentar eficiência em resgates urbanos.",
      image: "https://images.unsplash.com/photo-1696626158334-53d33c895d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZW1lcmdlbmN5JTIwcmVzY3VlfGVufDF8fHx8MTc1OTI2MDg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Equipamentos",
      date: "29 Set 2025",
      time: "09:15"
    },
    {
      id: 3,
      title: "SAMU Amplia Cobertura em Áreas Rurais",
      excerpt: "Novo programa garante atendimento médico de emergência em localidades antes descobertas.",
      image: "https://images.unsplash.com/photo-1697952431905-9c8d169d9d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZW1lcmdlbmN5JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzU5MTY1ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Saúde",
      date: "28 Set 2025",
      time: "16:45"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Prevenção": return "bg-[#669bbc] text-[#003049]";
      case "Equipamentos": return "bg-[#c1121f] text-white";
      case "Saúde": return "bg-[#780000] text-white";
      default: return "bg-[#003049] text-[#fdf0d5]";
    }
  };

  return (  
    <section id="noticias" className="py-20" style={{
    background: "linear-gradient(to right bottom, #bbd2f0ff,  #bbd2f0ff,  #bbd2f0ff)"
  }}>
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">
            Últimas Notícias
          </h2>
          <p className="text-xl text-[#003049]/70 max-w-2xl mx-auto">
            Mantenha-se informado sobre as principais atualizações dos serviços de emergência
          </p>
        </div>

        {/* Grid de Notícias */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={`${getCategoryColor(article.category)} border-0`}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-[#003049]/60 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#003049] leading-tight">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-[#003049]/70 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#c1121f] text-[#c1121f] hover:bg-[#c1121f] hover:text-white group"
                >
                  Ler Mais
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver Todas as Notícias */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#003049] hover:bg-[#780000] text-[#fdf0d5] border-0"
          >
            Ver Todas as Notícias
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}