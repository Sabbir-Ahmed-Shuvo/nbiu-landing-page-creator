import { Button } from "@/components/ui/button";
import { Calendar, Award, GraduationCap, ExternalLink, Phone, Globe } from "lucide-react";

export function AdmissionSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Admission Information
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto px-4 sm:px-0">
            Start your journey towards academic excellence. Applications are now open for Autumn 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Admission Details */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Now Open for Autumn 2025</h3>
                <p className="text-sm sm:text-base text-primary-foreground/80">Applications are being accepted for all undergraduate and graduate programs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Up to 100% Tuition Fee Waiver</h3>
                <p className="text-sm sm:text-base text-primary-foreground/80">Merit-based scholarships available based on academic performance (GPA).</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex-shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Entry Requirements</h3>
                <div className="text-sm sm:text-base text-primary-foreground/80 space-y-1">
                  <p>• Undergraduate: Minimum GPA 6.0 (SSC + HSC combined)</p>
                  <p>• Master's: Minimum 2.0 in undergraduate degree</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - CTA */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary-foreground/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Ready to Apply?</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <Button variant="accent" size="lg" className="w-full h-12 sm:h-auto text-base">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Apply Online
              </Button>
              
              <Button variant="outline" size="lg" className="w-full h-12 sm:h-auto text-base bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Visit Website
              </Button>
            </div>
            
            <div className="text-center border-t border-primary-foreground/20 pt-4 sm:pt-6">
              <p className="text-sm sm:text-base text-primary-foreground/80 mb-3 sm:mb-4">Need help with your application?</p>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Hotline: +8801711-XXXXXX</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision Statement */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary-foreground/20 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              To be a <span className="text-accent font-semibold">leading center of excellence</span> in higher education—developing skilled graduates, critical thinkers, and socially responsible global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}