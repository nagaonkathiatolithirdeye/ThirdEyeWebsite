"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Smartphone,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits"),
  email: z.string().trim().email("Invalid email address"),
  location: z.string().min(1, "Please select a location"),
  message: z.string().trim().min(1, "Message is required"),
});

const whatsappNumber = "917002622715"; // without + and spaces

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const locations = ["Kathiatoli", "Nagaon"];

  const fieldClass =
    "pl-10 border-2 border-border/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 rounded-xl";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse(formData);

      const message = `
Respected Sir/Madam,

I would like to enquire about your available courses.

Name: ${validatedData.name}
Contact Number: ${validatedData.phone}
Email: ${validatedData.email}
Location: ${validatedData.location}

Thank you.
`;

      const encodedMessage = encodeURIComponent(message);

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
      );

      toast({
        title: "Redirecting to WhatsApp",
        description: "Your message is ready to send!",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-10 bg-gradient-to-br from-background via-muted to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Let us help you choose the right course.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FORM */}
          <Card className="p-8 rounded-3xl backdrop-blur bg-card/90 shadow-2xl border">
            <h3 className="text-2xl font-bold mb-4">Send Query</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input name="name" value={formData.name} onChange={handleChange} className={fieldClass} placeholder="Your name" />
                </div>
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div>
                <Label>Phone Number *</Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input name="phone" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder="Your phone number" />
                </div>
              </div>

              <div>
                <Label>Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} className={fieldClass} placeholder="Your email" />
                </div>
              </div>

              <div>
                <Label>Institute Location *</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, location: value }))
                  }
                >
                  <SelectTrigger className="border-2 rounded-xl">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Message *</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={`${fieldClass} pt-2`} placeholder="Tell us about your Query" />
                </div>
              </div>

              <Button className="w-full rounded-xl text-lg bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Send via WhatsApp
              </Button>
            </form>
          </Card>

          {/* INFO */}
          <div className="space-y-6">
            <Card className="p-6 rounded-2xl shadow-lg border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-muted-foreground">
                  📍 Kathiatoli – Near Roy Market, Kathiatoli{" "}
                  <a
                    href="https://www.google.com/maps?q=Kathiatoli+Near+Roy+Market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline ml-2"
                  >
                    Open Map
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">
                  📍 Nagaon – B B Road, Opposite of Jhony Rolls, Nagaon{" "}
                  <a
                    href="https://www.google.com/maps?q=BB+Road+Nagaon+Jhony+Rolls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline ml-2"
                  >
                    Open Map
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-muted-foreground">+91 70026 22715</p>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">cbora9723@gmail.com</p>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Office Time</h4>
                <p className="text-muted-foreground">Mon – Sat: 9:00 AM – 5:00 PM</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;