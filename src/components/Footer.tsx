import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
  "PGDCA – Post Graduate Diploma in Computer Applications",
  "ADCAP – Advanced Diploma in Computer Applications",
  "DCA – Diploma in Computer Applications",
  "Full Stack Web Development",
  "Python Programming",
  "Digital Marketing"
]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Third Eye Computer Education</h3>
            <p className="text-background/80 leading-relaxed">
              Empowering students with cutting-edge technology education and practical skills 
              for a successful career in IT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "courses", "reviews", "gallery", "contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-background/80 hover:text-accent transition-colors capitalize"
                  >
                    {link === "home" ? "Home" : link === "about" ? "About Us" : link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-background/80">
            {courses.map((course,key)=>(
              <li key={key}>{course}</li>
            ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-background/80 mb-4">
              <p>Email: cbora9723@gmail.com</p>
              <p>Phone: +91 7002622715</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1DCpAsuuGG/" title="Kathiatoli" className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>  
              <a href="https://www.facebook.com/share/1BzF5J154d/" title="Nagaon" className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>  
              <a href="https://www.instagram.com/thirdeyecomputerngnkth?igsh=Zmt2YndnNGx1dmFn" title="Kathiatoli" className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
