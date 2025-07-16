import { Check, Wifi, Monitor, BookOpen, FlaskConical, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Government & UGC Approved",
    description: "Officially recognized and accredited institution"
  },
  {
    icon: Monitor,
    title: "Modern AC Classrooms",
    description: "State-of-the-art learning environments with digital facilities"
  },
  {
    icon: BookOpen,
    title: "Central Library & E-Library",
    description: "Vast collection of books and digital resources"
  },
  {
    icon: FlaskConical,
    title: "Engineering & Science Labs",
    description: "Fully equipped laboratories for hands-on learning"
  },
  {
    icon: Wifi,
    title: "Campus Wi-Fi & Security",
    description: "High-speed internet, CCTV monitoring & backup power"
  },
  {
    icon: Users,
    title: "Student Clubs & Activities",
    description: "Active student life with cultural and academic clubs"
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Why Choose NBIU?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Experience world-class education with modern facilities, expert faculty, and a commitment to excellence that prepares you for global success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center mt-4 text-accent">
                <Check className="w-5 h-5 mr-2" />
                <span className="font-medium">Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}