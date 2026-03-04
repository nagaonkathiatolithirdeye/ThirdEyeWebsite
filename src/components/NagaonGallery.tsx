"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

const NagaonGallery = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setActiveIndex(api.selectedScrollSnap());
      autoplay.current?.reset();
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const items: GalleryItem[] = [
    {
      title: "Modern Computer Lab",
      description: "State-of-the-art facilities",
      image: "./public/Pictures/Entrance.webp",
    },
    {
      title: "Practical Class",
      description: "Hands-on learning",
      image: "./public/Pictures/practical class 1.webp",
    },
    {
      title: "Practical Class",
      description: "Hands-on learning",
      image: "./public/Pictures/practical class 2.webp",
    },
    {
      title: "Practical Class",
      description: "Hands-on learning",
      image: "./public/Pictures/practical class 3.webp",
    },
    {
      title: "Practical Class",
      description: "Hands-on learning",
      image: "./public/Pictures/practical class 4.webp",
    },
  ];

  const totalSlides = items.length;
  const scrollTo = (index: number) => {
  api?.scrollTo(index);
};


  return (
    <section id="gallery" className="py-14 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
          Nagaon <span className="text-primary">Campus Gallery</span>
        </h2>

        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          opts={{ loop: true, align: "center" }}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* remove negative margin on mobile */}
          <CarouselContent className="ml-0 sm:-ml-4">
            {items.map((item, index) => {
              const rawDistance = Math.abs(activeIndex - index);
              const distance = Math.min(rawDistance, totalSlides - rawDistance);

              /* softer scaling on mobile */
              const scale =
                distance === 0
                  ? "scale-100"
                  : distance === 1
                  ? "scale-[0.92] sm:scale-90"
                  : "scale-[0.85] sm:scale-75";

              const opacity =
                distance === 0
                  ? "opacity-100"
                  : distance === 1
                  ? "opacity-80 sm:opacity-60"
                  : "opacity-50 sm:opacity-30";

              const zIndex =
                distance === 0 ? "z-20" : distance === 1 ? "z-10" : "z-0";

              return (
                <CarouselItem
                  key={index}
                  className="
                    basis-[90%]
                    sm:basis-[60%]
                    md:basis-[40%]
                    lg:basis-[25%]
                    px-2 sm:pl-4
                  "
                >
                  <div
                    className={`transform transition-all duration-700 ease-out ${scale} ${opacity} ${zIndex}`}
                  >
                    <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                      <CardContent className="p-0">
                        {/* shorter aspect on mobile */}
                        <div className="relative aspect-[4/5] sm:aspect-[3/5]">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-end">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-900 p-3 sm:p-4 w-full">
                              <h4 className="text-base sm:text-lg font-semibold text-white">
                                {item.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-white/90">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* hide arrows on mobile */}
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        {/* Mobile Dots Indicator */}
<div className="mt-6 flex justify-center gap-2 sm:hidden">
  {items.map((_, index) => (
    <button
      key={index}
      onClick={() => scrollTo(index)}
      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
        activeIndex === index
          ? "bg-primary scale-110"
          : "bg-muted-foreground/40"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default NagaonGallery;
