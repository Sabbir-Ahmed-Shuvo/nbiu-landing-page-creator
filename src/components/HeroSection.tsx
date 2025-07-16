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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-light/20 backdrop-blur-sm border border-accent-light/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-sm sm:text-base text-primary-foreground font-medium">UGC Approved • Founded 2013</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            North Bengal <br className="hidden sm:block" />
            <span className="text-accent">International</span> <br className="hidden sm:block" />
            University
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-3 sm:mb-4 leading-relaxed px-4 sm:px-0">
            Unlock Your Future in the Heart of Rajshahi
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-6 sm:mb-8">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-base sm:text-lg">Rajshahi, Bangladesh</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button variant="accent" size="xl" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-base sm:text-lg">
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-base sm:text-lg bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              Explore Programs
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">11+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">4</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Faculties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Programs</div>
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