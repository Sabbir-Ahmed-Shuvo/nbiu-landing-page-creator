import { GraduationCap, MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-bold text-xl">NBIU</div>
                <div className="text-sm text-primary-foreground/80">Excellence in Education</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              North Bengal International University - Empowering students with knowledge, confidence, and opportunity since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About NBIU</a></li>
              <li><a href="#programs" className="text-primary-foreground/80 hover:text-accent transition-colors">Academic Programs</a></li>
              <li><a href="#admission" className="text-primary-foreground/80 hover:text-accent transition-colors">Admission</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Student Life</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Faculty</a></li>
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Faculties</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Science & Engineering</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Business Studies</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Social Science & Law</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Arts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Chowddopai, Natore Road, Motihar, Rajshahi
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+8801711-XXXXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@nbiu.edu.bd</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-accent text-sm font-medium">www.nbiu.edu.bd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 North Bengal International University. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm mt-4 md:mt-0">
            UGC Approved • Established 2013
          </p>
        </div>
      </div>
    </footer>
  );
}