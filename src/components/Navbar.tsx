import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "courses", label: "Courses" },
    { id: "reviews", label: "Reviews" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
    { id: "location", label: "Location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  
        ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-md text-white"
          : "bg-transparent"
      }`
    }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-xl md:text-3xl pb-2 mr-3  font-bold  bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              Third Eye Computer Education
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground  font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-transparent backdrop-blur-md shadow-md text-black animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-black hover:text-black transition-colors duration-300 font-medium text-left px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity mx-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
