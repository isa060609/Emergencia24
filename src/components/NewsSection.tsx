import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsSection() {
  const [news, setNews] = useState([]);

  // 🔥 API configurada para buscar emergências (incêndios, enchentes, etc)
  const API_KEY = "e24c9660e298d76ec197d3258e8effc8";
  const API_URL = `https://gnews.io/api/v4/search?q=incendio+OR+enchente+OR+resgate+OR+emergencia&lang=pt&country=br&max=3&token=${API_KEY}`;

  async function carregarNoticias() {
  try {
    const API_URL = `https://gnews.io/api/v4/search?q=incendio+OR+enchente+OR+resgate+OR+emergencia&lang=pt&country=br&max=3&token=e24c9660e298d76ec197d3258e8effc8`;

    // Passa pelo proxy para evitar bloqueio de CORS
    const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(API_URL)}`;

    const res = await fetch(proxyURL);
    const dataWrapped = await res.json();
    const data = JSON.parse(dataWrapped.contents);

    setNews(data.articles.slice(0, 3));
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
  }
}


  useEffect(() => {
    carregarNoticias();
    const intervalo = setInterval(carregarNoticias, 30 * 60 * 1000); // Atualiza a cada 30min
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="noticias"
      className="py-20"
      style={{
        background:
          "linear-gradient(to right bottom, #bbd2f0ff, #bbd2f0ff, #bbd2f0ff)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">
            Últimas Notícias de Emergência
          </h2>
          <p className="text-xl text-[#003049]/70 max-w-2xl mx-auto">
            Atualizações em tempo real sobre incêndios, enchentes e resgates no Brasil
          </p>
        </div>

        {/* Grid de 3 notícias */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.length > 0 ? (
            news.map((article, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={
                      article.image ||
                      "https://via.placeholder.com/400x200?text=Sem+Imagem"
                    }
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#c1121f] text-white border-0">
                      Emergência
                    </Badge>
                    <div className="flex items-center text-sm text-[#003049]/60 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {new Date(article.publishedAt).toLocaleTimeString(
                            "pt-BR",
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#003049] leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-[#003049]/70 leading-relaxed line-clamp-3">
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

        {/* Botão de ver mais */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#003049] hover:bg-[#780000] text-[#fdf0d5] border-0"
            onClick={() =>
              window.open(
                "https://news.google.com/search?q=incendio+OR+enchente+OR+resgate&hl=pt-BR",
                "_blank"
              )
            }
          >
            Ver Mais Notícias
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
