import { Button } from "@/components/ui/button";
import { Code, Zap, Scale, Palette, ChevronRight } from "lucide-react";

const faculties = [
  {
    icon: Code,
    title: "Faculty of Science & Engineering",
    programs: ["BSc in Computer Science & Engineering", "BSc in Electrical & Electronic Engineering"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Faculty of Business Studies", 
    programs: ["Bachelor of Business Administration (BBA)", "Master of Business Administration (MBA)", "MBA Executive Program"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Scale,
    title: "Faculty of Social Science & Law",
    programs: ["LLB (Honors) & LLM", "Journalism & Mass Communication", "Sociology & Political Science"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Palette,
    title: "Faculty of Arts",
    programs: ["BA in English & Bangla", "Islamic Studies & Islamic History", "Folklore & Bangladesh Studies"],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50"
  }
];

export function ProgramsSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Academic Programs
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Choose from our diverse range of undergraduate and graduate programs designed to meet the demands of today's global marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {faculties.map((faculty, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
            >
              <div className={`h-2 bg-gradient-to-r ${faculty.color}`}></div>
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${faculty.bgColor} rounded-xl mb-3 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <faculty.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300 text-center sm:text-left">
                    {faculty.title}
                  </h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {faculty.programs.map((program, programIndex) => (
                    <div key={programIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{program}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="mt-4 sm:mt-6 text-primary hover:text-accent w-full sm:w-auto">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="university" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}