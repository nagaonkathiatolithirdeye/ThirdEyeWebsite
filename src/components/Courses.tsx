"use client";

import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Terminal,
  Monitor,
  Aperture,
  PenTool,
  Pen,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      icon: Monitor,
      title: "PGDCA – Post Graduate Diploma in Computer Applications",
      duration: "12 Months",
      level: "Post Graduate",
      description:
        "A professional post-graduate diploma focused on industry-relevant computer applications.",
      highlights: [
        "Typing",
        "MS Office (Word, Excel, PowerPoint, Access)",
        "Tally Prime",
        "DTP (PageMaker, Photoshop, CorelDRAW)",
        "GST",
        "HTML & CSS",
        "C++ / Python",
      ],
    },
    {
      icon: Smartphone,
      title: "ADCAP – Advanced Diploma in Computer Applications and Programming",
      duration: "12 Months",
      level: "10th Pass",
      description:
        "Industry-focused diploma emphasizing practical and job-ready computer skills.",
      highlights: [
        "Typing",
        "MS Office",
        "Tally Prime",
        "DTP (PageMaker, Photoshop, CorelDRAW)",
        "GST / HTML & CSS",
        "C++ / Python",
      ],
    },
    {
      icon: Cloud,
      title: "DCA – Diploma in Computer Applications",
      duration: "6 Months",
      level: "8th Pass",
      description:
        "Comprehensive course covering office tools, accounting, and desktop publishing.",
      highlights: ["Typing", "MS Office", "Tally Prime / GST", "DTP Tools"],
    },
    {
      icon: PenTool,
      title: "SU-DTP – Start-Up Diploma in Desktop Publishing",
      duration: "3 Months",
      description:
        "Comprehensive course covering office tools, accounting, and desktop publishing.",
      highlights: ["Typing", "Word","Excel","PowerPoint","Adobe PageMaker","Adobe Photoshop","CorelDRAW"],
    },
    {
      icon: Aperture,
      title: "SU-Tally – Start-Up in Tally Prime",
      duration: "3 Months",
      description:
        "Comprehensive course covering office tools, accounting, and desktop publishing.",
      highlights: ["Typing", "Word","Excel","PowerPoint","Adobe PageMaker","Adobe Photoshop","CorelDRAW"],
    },
    {
      icon: Code,
      title: "Full Stack Web Development",
      duration: "6 Months",
      description: "Master modern web technologies with hands-on projects.",
      highlights: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      duration: "3 Months",
      description:
        "SEO, social media marketing, Google Ads, and performance analytics.",
      highlights: ["SEO", "Social Media", "Google Ads", "Analytics"],
    },
    {
      icon: Terminal,
      title: "Python Programming",
      duration: "3 Months",
      description: "Learn Python from fundamentals to real-world applications.",
      highlights: ["Core Python", "Problem Solving", "Mini Projects"],
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Industry-focused programs designed to build skills and boost careers
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="
                group relative overflow-hidden
                p-6 max-w-[380px] mx-auto
                bg-card border
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute -top-16 -left-16 w-44 h-44 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-accent/20 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex gap-4 items-start">
                  <div
                    className="
                      w-14 h-14 rounded-xl bg-gradient-primary
                      flex items-center justify-center shrink-0
                      transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-3
                    "
                  >
                    <course.icon
                      className="text-primary-foreground"
                      size={26}
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    {course.title}
                  </h3>
                </div>

                {/* Meta */}
                <div className="flex gap-4 mt-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {course.level}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-muted-foreground">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {course.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex gap-2 text-sm
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className="
                    mt-6 w-full
                    transition-all duration-300
                    group-hover:shadow-lg
                  "
                >
                  Enquire Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <h3 className="text-center text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mt-8">
        Very soon, we’re launching a special course for the 2026
        <span className="mx-3 inline-block rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-sm md:text-base font-semibold text-white">
          HSLC
        </span>
        &
        <span className="mx-3 inline-block rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-sm md:text-base font-semibold text-white">
          HS
        </span>
        candidates.
      </h3>
    </section>
  );
};

export default Courses;
