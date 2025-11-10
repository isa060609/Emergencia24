import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-[#fdf0d5] sticky top-0 z-50 shadow-lg"style={{
    background:"linear-gradient(to right bottom, #750101ff, #000, #081588ff)"
  }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#c1121f] p-2 rounded-full">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Emergência 24h</h1>
              <p className="text-xs text-[#0000]">Sempre pronto para ajudar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-[#669bbc] transition-colors">Início</a>
            <a href="#noticias" className="hover:text-[#669bbc] transition-colors">Notícias</a>
            <a href="#quiz" className="hover:text-[#669bbc] transition-colors">Quiz</a>
            <a href="#instrucoes" className="hover:text-[#669bbc] transition-colors">Instruções</a>
            <Button 
              className="bg-[#c1121f] hover:bg-[#780000] text-white border-0"
              onClick={() => window.open('tel:192', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Emergência: 192
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#669bbc]/30">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="hover:text-[#669bbc] transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
              <a href="#noticias" className="hover:text-[#669bbc] transition-colors" onClick={() => setIsMenuOpen(false)}>Notícias</a>
              <a href="#quiz" className="hover:text-[#669bbc] transition-colors" onClick={() => setIsMenuOpen(false)}>Quiz</a>
              <a href="#instrucoes" className="hover:text-[#669bbc] transition-colors" onClick={() => setIsMenuOpen(false)}>Instruções</a>
              <Button 
                className="bg-[#c1121f] hover:bg-[#780000] text-white border-0 w-fit"
                onClick={() => window.open('tel:192', '_self')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergência: 192
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}