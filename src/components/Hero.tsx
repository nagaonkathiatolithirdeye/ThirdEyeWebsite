"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";


import Books from "@/assets/HeroImages/Books.png";
import Man from "@/assets/HeroImages/Man.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700" />

        <div className="absolute top-20 left-16 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-16 right-16 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]" />

        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* ✅ Books image */}
        <img
          src={Books}
          alt="Books"
          className="absolute -bottom-8 -left-20 w-72 xl:w-[30rem] drop-shadow-2xl opacity-95"
        />

        {/* ✅ Student image */}
        <img
          src={Man}
          alt="Coding Student"
          className="absolute -bottom-8 -right-20 w-72 xl:w-[32rem] drop-shadow-2xl opacity-95"
        />
      </div>

      {/* Content remains same */}
      <div className="max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs sm:text-sm">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          Trusted Computer Education Institute
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Build Your Career with
          <span className="block mt-3 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 drop-shadow-lg">
            Third Eye Computer Education
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white border border-white/20 text-sm font-medium">
            📍 Kathiatoli Centre
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white border border-white/20 text-sm font-medium">
            📍 Nagaon Centre
          </span>
        </div>

        <div className="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg animate-pulse">
          🎉 Admission Open For 2026
        </div>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Industry-focused courses including Programming, Web Development,
          Tally, DTP & Diploma Programs with practical training and career
          guidance.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("courses")}
            className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/30 hover:scale-105 transition"
          >
            Explore Courses
            <ArrowRight className="ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-6 text-lg font-semibold text-white border-white/60 bg-white/10 backdrop-blur hover:bg-white hover:text-black"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;