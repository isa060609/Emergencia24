import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { QuizSection } from "./components/QuizSection";
import { InstructionsSection } from "./components/InstructionsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <QuizSection />
        <InstructionsSection />
      </main>
      <Footer />
    </div>
  );
}