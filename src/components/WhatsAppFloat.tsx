import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "7002622715"; 
    const message = "Hi! I'd like to know more about your courses.";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg z-50 p-0 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </Button>
  );
};

export default WhatsAppFloat;