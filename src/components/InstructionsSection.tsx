import { useState } from "react";
import { Flame, Droplets, Heart, Zap, Mountain, ChevronRight, AlertTriangle, CheckCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface Emergency {
  id: string;
  title: string;
  icon: any;
  color: string;
  bgColor: string;
  description: string;
  immediateActions: string[];
  doNots: string[];
  prevention: string[];
  emergencyNumber: string;
}

export function InstructionsSection() {
  const emergencies: Emergency[] = [
    {
      id: "incendio",
      title: "Incêndios",
      icon: Flame,
      color: "text-[#c1121f]",
      bgColor: "bg-[#c1121f]/10",
      description: "Orientações para situações de incêndio em casa, trabalho ou áreas públicas",
      immediateActions: [
        "Ligue imediatamente para 193 (Bombeiros)",
        "Se possível, saia do local pela rota mais segura",
        "Mantenha-se abaixado para evitar inalação de fumaça",
        "Toque as portas antes de abrir (se estiver quente, não abra)",
        "Use as escadas, nunca o elevador",
        "Reúna-se no ponto de encontro pré-definido"
      ],
      doNots: [
        "Não volte para buscar objetos pessoais",
        "Não use elevadores durante incêndios",
        "Não jogue água em fogo de origem elétrica",
        "Não abra janelas desnecessariamente",
        "Não use materiais sintéticos para se proteger"
      ],
      prevention: [
        "Instale detectores de fumaça",
        "Mantenha extintores em locais acessíveis",
        "Verifique instalações elétricas regularmente",
        "Tenha sempre uma rota de fuga planejada",
        "Não sobrecarregue tomadas elétricas"
      ],
      emergencyNumber: "193"
    },
    {
      id: "enchente",
      title: "Enchentes",
      icon: Droplets,
      color: "text-[#669bbc]",
      bgColor: "bg-[#669bbc]/10",
      description: "Procedimentos para alagamentos e enchentes urbanas",
      immediateActions: [
        "Procure imediatamente um local alto",
        "Desligue a energia elétrica da casa",
        "Ligue para 193 (Bombeiros) ou 199 (Defesa Civil)",
        "Mantenha-se longe de fios elétricos caídos",
        "Use roupas e calçados que protejam dos detritos",
        "Sinalize sua localização se estiver ilhado"
      ],
      doNots: [
        "Não entre em água corrente",
        "Não dirija em ruas alagadas",
        "Não toque em equipamentos elétricos molhados",
        "Não beba água contaminada",
        "Não ignore alertas meteorológicos"
      ],
      prevention: [
        "Monitore previsões meteorológicas",
        "Tenha um kit de emergência preparado",
        "Conheça as rotas de evacuação da sua região",
        "Mantenha documentos importantes em local seguro",
        "Cadastre-se nos alertas da Defesa Civil"
      ],
      emergencyNumber: "193 / 199"
    },
    {
      id: "medica",
      title: "Emergências Médicas",
      icon: Heart,
      color: "text-[#780000]",
      bgColor: "bg-[#780000]/10",
      description: "Primeiros socorros e atendimento a emergências médicas",
      immediateActions: [
        "Ligue para 192 (SAMU) imediatamente",
        "Verifique se a pessoa está consciente e respirando",
        "Mantenha a calma e tranquilize a vítima",
        "Não mova a pessoa se suspeitar de lesão na coluna",
        "Pare sangramentos com pressão direta",
        "Mantenha a vítima aquecida"
      ],
      doNots: [
        "Não dê líquidos para pessoas inconscientes",
        "Não mova vítimas com suspeita de fratura",
        "Não retire objetos empalados",
        "Não dê medicamentos sem orientação médica",
        "Não deixe a vítima sozinha"
      ],
      prevention: [
        "Tenha um kit de primeiros socorros em casa",
        "Aprenda técnicas básicas de RCP",
        "Mantenha contatos de emergência atualizados",
        "Conheça o histórico médico da família",
        "Faça cursos de primeiros socorros"
      ],
      emergencyNumber: "192"
    },
    {
      id: "terremoto",
      title: "Terremotos",
      icon: Mountain,
      color: "text-[#003049]",
      bgColor: "bg-[#003049]/10",
      description: "Procedimentos durante e após abalos sísmicos",
      immediateActions: [
        "Abaixe-se, cubra-se e segure-se",
        "Procure abrigo embaixo de mesa resistente",
        "Afaste-se de janelas e objetos que podem cair",
        "Se estiver ao ar livre, afaste-se de prédios",
        "Após o tremor, saia calmamente do edifício",
        "Ligue para 193 se houver feridos ou danos"
      ],
      doNots: [
        "Não corra durante o tremor",
        "Não use elevadores",
        "Não fique próximo a janelas",
        "Não acenda fósforos ou isqueiros",
        "Não entre em edifícios danificados"
      ],
      prevention: [
        "Fixe móveis pesados nas paredes",
        "Tenha um plano de evacuação familiar",
        "Mantenha um kit de emergência",
        "Identifique pontos seguros em cada cômodo",
        "Pratique regularmente os procedimentos"
      ],
      emergencyNumber: "193"
    }
  ];

  const [openInstructions, setOpenInstructions] = useState<string[]>([]);

  const toggleInstruction = (id: string) => {
    setOpenInstructions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="instrucoes" className="py-20" style={{
    background: "linear-gradient(to right bottom,  #bbd2f0ff,  #bbd2f0ff,  #bbd2f0ff)"
  }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">
            Instruções de Emergência
          </h2>
          <p className="text-xl text-[#003049]/70 max-w-3xl mx-auto">
            Guias detalhados para diferentes tipos de emergências. 
            Conhecimento que pode salvar vidas em momentos críticos.
          </p>
        </div>

        {/* Grid de Emergências */}
        <div className="grid lg:grid-cols-2 gap-8">
          {emergencies.map((emergency) => (
            <Card key={emergency.id} className="bg-white border-0 shadow-lg overflow-hidden">
              <CardHeader className={`${emergency.bgColor} border-b`}>
                <div className="flex items-center space-x-4">
                  <div className={`${emergency.color} p-3 bg-white rounded-full`}>
                    <emergency.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-[#003049]">
                      {emergency.title}
                    </CardTitle>
                    <p className="text-[#003049]/70 mt-1">
                      {emergency.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#c1121f] hover:bg-[#780000] text-white border-0"
                    onClick={() => window.open(`tel:${emergency.emergencyNumber.replace(' / ', '')}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {emergency.emergencyNumber}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <Tabs defaultValue="immediate" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="immediate">Ações Imediatas</TabsTrigger>
                    <TabsTrigger value="donts">Não Faça</TabsTrigger>
                    <TabsTrigger value="prevention">Prevenção</TabsTrigger>
                  </TabsList>

                  <TabsContent value="immediate" className="space-y-3">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-[#003049]">O que fazer imediatamente:</h4>
                    </div>
                    {emergency.immediateActions.map((action, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-[#003049] text-sm leading-relaxed">{action}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="donts" className="space-y-3">
                    <div className="flex items-center space-x-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h4 className="font-semibold text-[#003049]">Nunca faça:</h4>
                    </div>
                    {emergency.doNots.map((dont, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <div className="bg-red-100 rounded-full p-1 mt-0.5">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        </div>
                        <p className="text-[#003049] text-sm leading-relaxed">{dont}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="prevention" className="space-y-3">
                    <div className="flex items-center space-x-2 mb-4">
                      <Zap className="h-5 w-5 text-[#669bbc]" />
                      <h4 className="font-semibold text-[#003049]">Medidas preventivas:</h4>
                    </div>
                    {emergency.prevention.map((preventive, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-[#669bbc]/10 rounded-lg">
                        <div className="bg-[#669bbc]/20 rounded-full p-1 mt-0.5">
                          <Zap className="h-4 w-4 text-[#669bbc]" />
                        </div>
                        <p className="text-[#003049] text-sm leading-relaxed">{preventive}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kit de Emergência */}
        <Card className="mt-12 bg-gradient-to-r from-[#003049] to-[#669bbc] text-white border-0">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-[#fdf0d5]">
                Kit de Emergência Essencial
              </h3>
              <p className="text-xl text-[#fdf0d5]/80 max-w-2xl mx-auto">
                Mantenha sempre preparado um kit com itens básicos para situações de emergência
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                  { title: "Documentos", items: ["RG, CPF, CNH", "Cartão do SUS", "Comprovantes", "Fotos 3x4"] },
                  { title: "Medicamentos", items: ["Remédios de uso contínuo", "Analgésicos", "Antialérgicos", "Kit primeiros socorros"] },
                  { title: "Alimentação", items: ["Água potável (3L por pessoa)", "Alimentos não perecíveis", "Abrelatas", "Utensílios básicos"] },
                  { title: "Outros Itens", items: ["Lanterna com pilhas", "Rádio portátil", "Roupas extras", "Cobertor"] }
                ].map((category, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold text-[#fdf0d5] mb-4">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-[#fdf0d5]/80 flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}