import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Location from "@/components/Location";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Reviews />
      <Gallery />
      <Contact />
      <Location/>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
