import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-primary text-lg">NBIU</div>
              <div className="text-xs text-muted-foreground -mt-1">Excellence in Education</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#admission" className="text-muted-foreground hover:text-primary transition-colors">Admission</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="university" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors py-2">About</a>
              <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors py-2">Programs</a>
              <a href="#admission" className="text-muted-foreground hover:text-primary transition-colors py-2">Admission</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors py-2">Contact</a>
              <Button variant="university" size="sm" className="mt-4">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}