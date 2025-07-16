import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nbiu-campus-hero.jpg";
import { ChevronRight, MapPin, Award, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-light/20 backdrop-blur-sm border border-accent-light/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-medium">UGC Approved • Founded 2013</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            North Bengal <br />
            <span className="text-accent">International</span> <br />
            University
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
            Unlock Your Future in the Heart of Rajshahi
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-8">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Rajshahi, Bangladesh</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="xl" className="min-w-[200px]">
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px] bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              Explore Programs
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">11+</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-primary-foreground/80">Faculties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Programs</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}