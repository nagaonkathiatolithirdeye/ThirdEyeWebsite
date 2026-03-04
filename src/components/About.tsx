import { Award, Users, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import FacultyCarousel from "./Faculty";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Industry-Recognized Certification",
      description: "Credentials trusted by employers and institutions",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from professionals with real-world experience",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Updated syllabus aligned with industry standards",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-2 bg-muted overflow-hidden"
    >
      {/* 🔮 Soft background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ---------- Heading ---------- */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Third Eye Computer Education
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Third Eye Computer Education empowers students with practical,
            job-ready IT skills. We bridge the gap between academic learning and
            real industry requirements, helping learners succeed from day one.
          </p>
        </div>

        {/* ---------- Features + Faculty ---------- */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative h-28 p-5 rounded-xl
             bg-gradient-to-br from-background to-muted
             border border-border/60
             hover:shadow-xl hover:-translate-y-1
             transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/25 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/25 rounded-full blur-2xl" />
                </div>

                <div className="relative flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent
                    flex items-center justify-center shadow-md
                    group-hover:scale-110 transition"
                  >
                    <feature.icon
                      className="text-primary-foreground"
                      size={20}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Carousel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <FacultyCarousel />
          </div>
        </div>

        {/* ---------- Mission ---------- */}
        <div className="mt-24 max-w-5xl mx-auto">
          <Card
            className="relative p-10 md:p-14 overflow-hidden
                       bg-gradient-to-br from-primary/5 via-background to-accent/5
                       border-primary/20"
          >
            {/* Glow line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary to-accent" />

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to make high-quality IT education accessible to
                everyone. Through expert instruction, hands-on training, and
                industry-focused programs, we help learners build confidence,
                adaptability, and strong technical skills-preparing them for
                long-term success in the digital world.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
