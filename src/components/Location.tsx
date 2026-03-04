import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

const Location = () => {
  const locations = [
    {
      name: "Kathiatoli",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.295328483341!2d92.73651439999999!3d26.187069599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37453d3db7d528cd%3A0x5aa52fefb7cb507!2sThird%20Eye%20computer%20education%20kathiatoli!5e0!3m2!1sen!2sin!4v1763631832698!5m2!1sen!2sin&maptype=satellite",
      mapLink:
        "https://maps.google.com/?q=Third+Eye+computer+education+kathiatoli&t=k",
    },
    {
      name: "Nagaon",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.0553379386224!2d92.68791467441986!3d26.357072083749976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3745277242e5eec5%3A0x987994d0fe6af095!2sThird%20Eye%20Computer%20Education%20nagaon%20centre!5e0!3m2!1sen!2sin!4v1765996054103!5m2!1sen!2sin&maptype=satellite",
      mapLink:
        "https://maps.google.com/?q=Third+Eye+Computer+Education+nagaon&t=k",
    },
  ];

  return (
    <section id="location" className="py-16 pb-28 bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 pt-5 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-primary">Locations</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Visit any of our branches and experience a modern learning environment
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group bg-card border-2 border-border/70 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{loc.name}</h3>
                </div>

                {/* Open Maps */}
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Open Map <ExternalLink size={14} />
                </a>
              </div>

              {/* Map */}
              <div className="bg-muted p-2">

                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border shadow-inner">
                  <iframe
                    src={loc.mapSrc}
                    loading="lazy"
                    className="w-full h-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
