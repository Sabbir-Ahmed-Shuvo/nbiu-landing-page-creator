import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/nbiu-campus-hero.jpg";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Users, 
  BookOpen, 
  Globe,
  Calendar,
  Star,
  ChevronRight
} from "lucide-react";

export function PresentationSlide() {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full bg-card rounded-2xl shadow-strong overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">North Bengal International University</h1>
                <p className="text-primary-foreground/80 text-sm sm:text-base">Excellence in Education Since 2013</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">UGC Approved</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            {/* University Overview */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-primary">University Overview</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Rajshahi, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>Founded in 2013</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>4 Faculties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>15+ Programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center border-accent/20">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent mb-1">11+</div>
                  <div className="text-xs text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center border-accent/20">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent mb-1">4</div>
                  <div className="text-xs text-muted-foreground">Faculties</div>
                </CardContent>
              </Card>
              <Card className="text-center border-accent/20">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Programs</div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Faculties */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-primary">Academic Faculties</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-accent" />
                    <span>Business Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-accent" />
                    <span>Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-accent" />
                    <span>Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-accent" />
                    <span>Arts & Social Sciences</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-6">
            {/* Campus Image */}
            <Card className="overflow-hidden border-primary/20">
              <div className="relative h-48 sm:h-64">
                <img 
                  src={heroImage} 
                  alt="NBIU Campus" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">NBIU Campus</p>
                  <p className="text-xs opacity-90">Modern Educational Infrastructure</p>
                </div>
              </div>
            </Card>

            {/* Mission Statement */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "To provide quality higher education that nurtures critical thinking, 
                  innovation, and ethical leadership while fostering global citizenship 
                  and contributing to sustainable development."
                </p>
              </CardContent>
            </Card>

            {/* Why Choose NBIU */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Why Choose NBIU?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <span>UGC approved university with international standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <span>Modern campus with state-of-the-art facilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <span>Experienced faculty and innovative curriculum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <span>Strong industry partnerships and placement support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-3">Ready to Join NBIU?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take the first step towards your future
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-gradient-primary hover:bg-primary/90">
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-muted/30 px-6 sm:px-8 py-4 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>North Bengal International University</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📧 contact@nbiu.edu.bd</span>
              <span>📞 +880 721 123456</span>
              <span>🌐 www.nbiu.edu.bd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}