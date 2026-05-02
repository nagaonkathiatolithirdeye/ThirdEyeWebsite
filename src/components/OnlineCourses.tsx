import { CheckCircle2, Video, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OnlineCourses = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Course",
      description: "Browse and select the course that fits your goals",
    },
    {
      number: "02",
      title: "Submit Details",
      description: "Fill in your details and send your enrollment request",
    },
    {
      number: "03",
      title: "Pay 50% & Start Learning",
      description: "Secure your seat by paying 50% and get instant access",
    },
    {
      number: "04",
      title: "Get Certified",
      description: "Complete the course and appear for the final exam",
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: "Easy Enrollment",
      description: "Simple process. Submit your request and our team will get in touch.",
    },
    {
      icon: Video,
      title: "Quality Content",
      description: "Access high-quality video lessons.",
    },
    {
      icon: Award,
      title: "Offline Exams",
      description: "Appear for offline exams and earn recognized certifications.",
    },
  ];

  return (
    <section id="online-courses" className="min-h-screen w-full flex items-center py-12 md:py-20 lg:py-24 bg-background overflow-hidden relative font-sans">
      {/* Immersive background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full border-none bg-transparent shadow-none relative">
          <div className="relative z-10">
            <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Our <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text">Online Learning</span> Platform
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                Redefining education with a simplified, premium process to get you certified and job-ready from anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
              {/* Features Column */}
              <div className="animate-fade-in-up space-y-10 lg:space-y-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Premium Features
                </div>

                <div className="space-y-8 sm:space-y-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-card border border-border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                        <feature.icon className="text-primary w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Column */}
              <div className="animate-fade-in-up md:delay-200 space-y-10 lg:space-y-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-sm font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Your Journey
                </div>

                <div className="space-y-8 sm:space-y-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 relative group">
                      {index < steps.length - 1 && (
                        <div className="absolute left-[27px] sm:left-[31px] top-14 sm:top-16 bottom-[-32px] sm:bottom-[-40px] w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />
                      )}

                      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-base sm:text-lg bg-background z-10 transition-all duration-500 group-hover:border-primary group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                        {step.number}
                      </div>

                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 md:mt-24 lg:mt-32 flex flex-col items-center gap-6 animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="rounded-full px-12 py-8 sm:px-14 sm:py-9 text-lg sm:text-xl font-bold shadow-[0_10px_30px_rgba(var(--primary),0.2)] hover:shadow-[0_15px_40px_rgba(var(--primary),0.4)] transition-all duration-500 hover:scale-105 active:scale-95 bg-primary overflow-hidden relative group"
              >
                <a href="https://onlinefrontend.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Start Learning Now</span>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm font-medium animate-pulse">
                Click to explore our curriculum
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OnlineCourses;