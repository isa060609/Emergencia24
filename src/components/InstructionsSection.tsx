import { useState } from "react";
import { Flame, Droplets, Heart, Zap, Mountain, ChevronRight, AlertTriangle, CheckCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
        "Saia do local pela rota mais segura",
        "Mantenha-se abaixado para evitar inalação de fumaça",
        "Toque as portas antes de abrir (se estiver quente, não abra)",
        "Use escadas, nunca elevador",
        "Reúna-se no ponto de encontro pré-definido"
      ],
      doNots: [
        "Não volte para buscar objetos pessoais",
        "Não use elevadores durante incêndios",
        "Não jogue água em fogo elétrico",
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
        "Use roupas e calçados adequados",
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
      id: "acidentes-domesticos",
      title: "Acidentes Domésticos",
      icon: AlertTriangle,
      color: "text-[#b45309]",
      bgColor: "bg-[#fef3c7]/30",
      description: "Cuidados e ações em casos de quedas, cortes, queimaduras e choques dentro de casa",
      immediateActions: [
        "Mantenha a calma e avalie o tipo de acidente (queda, corte, queimadura, choque etc.)",
        "Afaste a vítima da fonte de perigo, se for seguro",
        "Em caso de queimadura, lave o local apenas com água corrente fria",
        "Se houver sangramento, faça pressão direta com um pano limpo",
        "Em caso de inconsciência ou dificuldade para respirar, ligue para 192 (SAMU)",
        "Se o acidente envolver eletricidade, desligue a energia antes de tocar na vítima"
      ],
      doNots: [
        "Não fure bolhas de queimaduras",
        "Não use pomadas, pasta de dente ou manteiga",
        "Não tente mover vítimas com suspeita de fratura grave",
        "Não ofereça comida ou bebida a alguém inconsciente",
        "Não ignore ferimentos profundos ou perda de consciência, procure atendimento médico"
      ],
      prevention: [
        "Mantenha produtos de limpeza e medicamentos fora do alcance de crianças",
        "Evite deixar panelas com cabos virados para fora do fogão",
        "Use tapetes antiderrapantes em banheiros e áreas molhadas",
        "Verifique fiações elétricas e tomadas regularmente",
        "Tenha um kit de primeiros socorros sempre acessível"
      ],
      emergencyNumber: "192 / 193"
    }
  ];

  return (
    <section id="instrucoes" className="py-20" style={{ background: "linear-gradient(to right bottom,  #13315c,  #13315c, #13315c)" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#003049] mb-4">
            Instruções de Emergência
          </h2>
          <p className="text-2xl font-bold text-[#003049]/70 max-w-3xl mx-auto">
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
                  <div className={`${emergency.color} p-4 bg-white rounded-full`}>
                    <emergency.icon className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-extrabold text-[#003049]">{emergency.title}</CardTitle>
                    <p className="text-lg font-bold text-[#003049]/80 mt-2">{emergency.description}</p>
                  </div>
                  <Button
                    size="md"
                    className="bg-[#c1121f] hover:bg-[#780000] text-white border-0 font-bold text-lg"
                    onClick={() => window.open(`tel:${emergency.emergencyNumber.replace(' / ', '')}`, '_self')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {emergency.emergencyNumber}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <Tabs defaultValue="immediate" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6 text-lg font-bold">
                    <TabsTrigger value="immediate">Ações Imediatas</TabsTrigger>
                    <TabsTrigger value="donts">Não Faça</TabsTrigger>
                    <TabsTrigger value="prevention">Prevenção</TabsTrigger>
                  </TabsList>

                  <TabsContent value="immediate" className="space-y-3">
                    {emergency.immediateActions.map((action, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                        <div className="bg-green-100 rounded-full p-2 mt-0.5">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-base font-bold text-[#003049]">{action}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="donts" className="space-y-3">
                    {emergency.doNots.map((dont, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                        <div className="bg-red-100 rounded-full p-2 mt-0.5">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <p className="text-base font-bold text-[#003049]">{dont}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="prevention" className="space-y-3">
                    {emergency.prevention.map((preventive, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-[#669bbc]/10 rounded-lg">
                        <div className="bg-[#669bbc]/20 rounded-full p-2 mt-0.5">
                          <Zap className="h-5 w-5 text-[#669bbc]" />
                        </div>
                        <p className="text-base font-bold text-[#003049]">{preventive}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
