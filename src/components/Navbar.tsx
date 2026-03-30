import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "courses", label: "Courses" },
  { id: "reviews", label: "Reviews" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "location", label: "Location" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 100;
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveLink(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveLink(sectionId);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-110%); }
          to   { transform: translateY(0); }
        }
        @keyframes glideIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glideInLeft {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes logoGlow {
          0%, 100% { filter: brightness(1); }
          50%       { filter: brightness(1.25); }
        }

        .nav-wrap {
          animation: slideDown 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .nav-glass {
          background: rgba(10, 8, 20, 0.55);
          backdrop-filter: blur(22px) saturate(1.5);
          -webkit-backdrop-filter: blur(22px) saturate(1.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 2px 40px rgba(0, 0, 0, 0.45);
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }

        .nav-glass.scrolled {
          background: rgba(6, 4, 16, 0.82);
          box-shadow: 0 4px 60px rgba(0, 0, 0, 0.65),
                      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .nav-logo {
          background: linear-gradient(110deg, #facc15 10%, #f97316 55%, #facc15 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoGlow 3.5s ease-in-out infinite;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .nav-link {
          position: relative;
          color: rgba(220, 215, 240, 0.75);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 4px 0;
          transition: color 0.2s ease;
          opacity: 0;
        }
        .nav-link.visible {
          animation: glideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 100%; bottom: -2px;
          height: 1.5px;
          background: linear-gradient(90deg, #a78bfa, #7c3aed);
          border-radius: 2px;
          transition: right 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover,
        .nav-link.active {
          color: #fff;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          right: 0;
        }
        .nav-link.active {
          color: #c4b5fd;
        }

        .cta-btn {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          color: #fff;
          border: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 8px 20px;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.4),
                      0 2px 8px rgba(0,0,0,0.3);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .cta-btn:hover {
          box-shadow: 0 0 32px rgba(168, 85, 247, 0.65),
                      0 4px 16px rgba(0,0,0,0.35);
          transform: translateY(-1px);
        }

        .hamburger {
          color: rgba(200, 190, 240, 0.85);
          transition: color 0.2s ease, transform 0.25s ease;
        }
        .hamburger:hover { color: #fff; transform: scale(1.1); }

        .mobile-menu {
          background: rgba(8, 5, 18, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .mobile-link {
          color: rgba(210, 200, 240, 0.75);
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          padding: 10px 16px;
          border-radius: 8px;
          text-align: left;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
          opacity: 0;
        }
        .mobile-link.visible {
          animation: glideInLeft 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .mobile-link:hover {
          color: #fff;
          background: rgba(124, 58, 237, 0.18);
          transform: translateX(4px);
        }
        .mobile-link.active {
          color: #c4b5fd;
          background: rgba(124, 58, 237, 0.12);
        }

        .mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 8px 16px;
        }
      `}</style>

      <nav className="nav-wrap fixed top-0 left-0 right-0 z-50">
        <div className={`nav-glass ${isScrolled ? "scrolled" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <h1 className="nav-logo text-lg sm:text-xl md:text-2xl pb-1">
                Third Eye Computer Education
              </h1>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-7">
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`nav-link ${mounted ? "visible" : ""} ${activeLink === link.id ? "active" : ""}`}
                    style={{ animationDelay: mounted ? `${0.06 * i}s` : "0s" }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:block">
                <button
                  className="cta-btn"
                  onClick={() => window.open("https://management-q7kq.onrender.com", "_blank")}
                >
                  Admin
                </button>
              </div>

              {/* Hamburger */}
              <button
                className="hamburger md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu md:hidden">
              <div className="flex flex-col py-3 px-2">
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`mobile-link ${isMobileMenuOpen ? "visible" : ""} ${activeLink === link.id ? "active" : ""}`}
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mobile-divider" />
                <div className="px-2 pt-1 pb-2">
                  <button
                    className="cta-btn w-full"
                    onClick={() => window.open("https://management-q7kq.onrender.com", "_blank")}
                  >
                    Admin
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;