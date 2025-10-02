import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export function QuizSection() {
  const questions: Question[] = [
    {
      id: 1,
      question: "Em caso de incêndio em casa, qual é a primeira atitude a tomar?",
      options: [
        "Tentar apagar o fogo com água",
        "Ligar para os bombeiros (193)",
        "Abrir todas as janelas",
        "Correr para pegar objetos importantes"
      ],
      correct: 1,
      explanation: "A primeira atitude é sempre ligar para os bombeiros (193). Sua segurança é mais importante que qualquer objeto material.",
      category: "Incêndio"
    },
    {
      id: 2,
      question: "Durante uma enchente, o que NÃO se deve fazer?",
      options: [
        "Procurar locais altos",
        "Entrar em água corrente",
        "Desligar a energia elétrica",
        "Ligar para emergências"
      ],
      correct: 1,
      explanation: "Nunca entre em água corrente durante enchentes. A correnteza pode ser muito forte e causar afogamento.",
      category: "Enchente"
    },
    {
      id: 3,
      question: "Qual é o número correto para emergências médicas?",
      options: [
        "190 (Polícia)",
        "193 (Bombeiros)",
        "192 (SAMU)",
        "199 (Defesa Civil)"
      ],
      correct: 2,
      explanation: "O SAMU (192) é o serviço especializado em emergências médicas e possui equipes treinadas para atendimento pré-hospitalar.",
      category: "Médica"
    },
    {
      id: 4,
      question: "Em caso de terremoto, onde é mais seguro se abrigar?",
      options: [
        "Embaixo de uma mesa resistente",
        "Próximo a janelas",
        "Na escada do prédio",
        "No elevador"
      ],
      correct: 0,
      explanation: "Durante terremotos, procure abrigo embaixo de mesas resistentes ou ao lado de paredes mestras. Evite elevadores e janelas.",
      category: "Terremoto"
    },
    {
      id: 5,
      question: "Ao encontrar uma pessoa desmaiada, qual é o primeiro passo?",
      options: [
        "Dar água para a pessoa",
        "Verificar se ela respira e tem pulso",
        "Tentar acordá-la balançando",
        "Colocar algo na boca dela"
      ],
      correct: 1,
      explanation: "Sempre verifique primeiro os sinais vitais (respiração e pulso) antes de qualquer outra ação. Não dê líquidos para pessoas inconscientes.",
      category: "Primeiros Socorros"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return { message: "Excelente! Você está bem preparado para emergências.", color: "text-green-600" };
    if (percentage >= 60) return { message: "Bom conhecimento! Continue estudando sobre segurança.", color: "text-yellow-600" };
    return { message: "Importante revisar os conceitos de segurança em emergências.", color: "text-red-600" };
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Incêndio": return "bg-[#c1121f] text-white";
      case "Enchente": return "bg-[#669bbc] text-[#003049]";
      case "Médica": return "bg-[#780000] text-white";
      case "Terremoto": return "bg-[#003049] text-[#fdf0d5]";
      case "Primeiros Socorros": return "bg-[#669bbc] text-[#003049]";
      default: return "bg-[#003049] text-[#fdf0d5]";
    }
  };

  if (quizCompleted) {
    const scoreInfo = getScoreMessage(score, questions.length);
    
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-[#003049] to-[#669bbc]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <Trophy className="h-16 w-16 text-[#c1121f] mx-auto" />
                <h2 className="text-3xl font-bold text-[#003049]">Quiz Concluído!</h2>
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl font-bold text-[#c1121f]">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-[#003049]/70">
                  Você acertou {score} de {questions.length} perguntas
                </p>
                <p className={`text-lg font-medium ${scoreInfo.color}`}>
                  {scoreInfo.message}
                </p>
              </div>

              <div className="space-y-4">
                <Progress 
                  value={(score / questions.length) * 100} 
                  className="h-3"
                />
                <p className="text-sm text-[#003049]/60">
                  {Math.round((score / questions.length) * 100)}% de acertos
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={restartQuiz}
                  className="bg-[#003049] hover:bg-[#780000] text-white border-0"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Refazer Quiz
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#c1121f] text-[#c1121f] hover:bg-[#c1121f] hover:text-white"
                  onClick={() => document.getElementById('instrucoes')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Instruções Detalhadas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-[#003049] to-[#669bbc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#fdf0d5] mb-4">
            Quiz de Emergências
          </h2>
          <p className="text-xl text-[#fdf0d5]/80 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre segurança e procedimentos de emergência
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-white border-0 shadow-2xl">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className={`${getCategoryColor(question.category)} border-0`}>
                {question.category}
              </Badge>
              <div className="text-sm text-[#003049]/60">
                Pergunta {currentQuestion + 1} de {questions.length}
              </div>
            </div>
            
            <Progress 
              value={(currentQuestion / questions.length) * 100} 
              className="h-2"
            />
            
            <CardTitle className="text-2xl text-[#003049] leading-tight">
              {question.question}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`
                    p-6 h-auto text-left justify-start border-2 transition-all
                    ${selectedAnswer === null 
                      ? 'border-[#003049]/20 hover:border-[#669bbc] hover:bg-[#fdf0d5]/50' 
                      : selectedAnswer === index
                        ? index === question.correct 
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : index === question.correct
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 bg-gray-50 text-gray-500'
                    }
                  `}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center
                      ${selectedAnswer === index 
                        ? index === question.correct 
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : selectedAnswer !== null && index === question.correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }
                    `}>
                      {selectedAnswer !== null && (
                        selectedAnswer === index 
                          ? index === question.correct 
                            ? <CheckCircle className="h-4 w-4 text-white" />
                            : <XCircle className="h-4 w-4 text-white" />
                          : index === question.correct && <CheckCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </Button>
              ))}
            </div>

            {showExplanation && (
              <div className="bg-[#fdf0d5] border-l-4 border-[#669bbc] p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-[#669bbc] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#003049] mb-2">Explicação:</p>
                    <p className="text-[#003049]/80">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {showExplanation && (
              <div className="flex justify-end">
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-[#c1121f] hover:bg-[#780000] text-white border-0"
                >
                  {currentQuestion < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}