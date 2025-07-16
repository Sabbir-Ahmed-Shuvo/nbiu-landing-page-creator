import { MapPin, Phone, Globe, Mail, Users, Briefcase } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Visit Our Campus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our beautiful campus and meet our dedicated faculty. We're here to help you start your academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
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
            
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Hotline: +8801711-XXXXXX<br />
                  Office: +88-721-XXXXXX
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Website</h3>
                <p className="text-accent font-medium">www.nbiu.edu.bd</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@nbiu.edu.bd<br />
                  admission@nbiu.edu.bd
                </p>
              </div>
            </div>
          </div>
          
          {/* Support Services */}
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
            <h3 className="text-2xl font-bold text-primary mb-6">Career Support & Student Life</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">Career counseling & internship support</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">Active student clubs: Tech, Law, Film, Language, Innovation</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">National & international seminars and competitions</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-subtle rounded-xl border border-border/30">
              <h4 className="font-semibold text-primary mb-2">Your Journey Starts Here</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
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