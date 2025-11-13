import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "../assets/logo.png"; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="text-[#fdf0d5] sticky top-0 z-50 shadow-lg"
      style={{
        background: "linear-gradient(to right bottom, #750101ff, #000, #081588ff)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}



        
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo Emergência 24h"
              className="h-10 w-auto select-none"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-white">Emergência 24h</h1>
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
      </div>
    </header>
  );
}
