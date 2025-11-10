import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsSection() {
  const [news, setNews] = useState([]);

  const API_URL = "https://gnews.io/api/v4/top-headlines?token=SEU_TOKEN&lang=pt&topic=nation";

  async function carregarNoticias() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setNews(data.articles.slice(0, 6)); // Mostra até 6 notícias
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    }
  }

  useEffect(() => {
    carregarNoticias();
    const intervalo = setInterval(carregarNoticias, 30 * 60 * 1000); // Atualiza a cada 30min
    return () => clearInterval(intervalo);
  }, []);

  const getCategoryColor = (category) => {
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
            Atualizações em tempo real sobre emergências no Brasil
          </p>
        </div>

        {/* Grid de Notícias */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.length > 0 ? (
            news.map((article, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={article.image || "https://via.placeholder.com/400x200?text=Sem+Imagem"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={`${getCategoryColor("Emergência")} border-0`}>
                      Emergência
                    </Badge>
                    <div className="flex items-center text-sm text-[#003049]/60 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(article.publishedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#003049] leading-tight">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-[#003049]/70 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#c1121f] text-[#c1121f] hover:bg-[#c1121f] hover:text-white group"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    Ler Mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-[#003049]/60 col-span-3">
              Carregando notícias...
            </p>
          )}
        </div>

        {/* Ver Todas as Notícias */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#003049] hover:bg-[#780000] text-[#fdf0d5] border-0"
            onClick={() => window.open("https://news.google.com/topstories?hl=pt-BR", "_blank")}
          >
            Ver Todas as Notícias
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}