import { MapPin, Phone, Globe, Mail, Users, Briefcase } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Visit Our Campus
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Experience our beautiful campus and meet our dedicated faculty. We're here to help you start your academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Campus Address</h3>
                <p className="text-muted-foreground">
                  Chowddopai, Natore Road, Motihar<br />
                  Rajshahi, Bangladesh
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Contact</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Hotline: +8801711-XXXXXX<br />
                  Office: +88-721-XXXXXX
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Website</h3>
                <p className="text-sm sm:text-base text-accent font-medium">www.nbiu.edu.bd</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Email</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  info@nbiu.edu.bd<br />
                  admission@nbiu.edu.bd
                </p>
              </div>
            </div>
          </div>
          
          {/* Support Services */}
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-soft border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Career Support & Student Life</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">Career counseling & internship support</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">Active student clubs: Tech, Law, Film, Language, Innovation</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">National & international seminars and competitions</span>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-subtle rounded-xl border border-border/30">
              <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">Your Journey Starts Here</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Join NBIU and become part of a <strong>diverse, forward-thinking academic community</strong>. 
                We are here to empower you with knowledge, confidence, and opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}