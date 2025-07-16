import { GraduationCap, MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-lg">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl">NBIU</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">Excellence in Education</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              North Bengal International University - Empowering students with knowledge, confidence, and opportunity since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#about" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">About NBIU</a></li>
              <li><a href="#programs" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Academic Programs</a></li>
              <li><a href="#admission" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Admission</a></li>
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Student Life</a></li>
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Faculty</a></li>
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Faculties</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Science & Engineering</a></li>
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Business Studies</a></li>
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Social Science & Law</a></li>
              <li><a href="#" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors">Arts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">
                  Chowddopai, Natore Road, Motihar, Rajshahi
                </span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">+8801711-XXXXXX</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">info@nbiu.edu.bd</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-accent text-xs sm:text-sm font-medium">www.nbiu.edu.bd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-primary-foreground/80 text-xs sm:text-sm">
            © 2024 North Bengal International University. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-xs sm:text-sm mt-3 sm:mt-0">
            UGC Approved • Established 2013
          </p>
        </div>
      </div>
    </footer>
  );
}