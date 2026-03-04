"use client";

import { useEffect, useRef, useState } from "react";

import Chinmoy from "@/assets/Faculty/Chinmoy.webp";
import AditImg from "@/assets/Faculty/Adit.webp";
import Riku from "@/assets/Faculty/Riku.webp";

type FacultyItem = {
  name: string;
  role: string;
  image: string;
};

const facultyMembers: FacultyItem[] = [
  {
    name: "Chinmoy Sankar Bora",
    role: "Head of the Institute",
    image: Chinmoy,
  },
  {
    name: "Adit Yadav",
    role: "Faculty Incharge",
    image: AditImg,
  },
  {
    name: "Rikumoni Bhattacharjya",
    role: "Computer Instructor",
    image: Riku,
  },
];

export default function Faculty() {
  const [cards, setCards] = useState(facultyMembers);
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setExiting(true);

      setTimeout(() => {
        setCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setExiting(false);
      }, 1500);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-20 flex flex-col items-center bg-background">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Our <span className="text-primary">Faculty</span>
      </h2>

      <div className="relative w-[320px] h-[420px]">
        {cards.slice(0, 3).map((f, i) => {
          const isTop = i === 0 && exiting;

          return (
            <article
              key={f.name}
              className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                isTop ? "opacity-0 scale-95" : ""
              }`}
              style={{
                transform:
                  i === 0
                    ? "rotate(-8deg) translateZ(40px)"
                    : i === 1
                    ? "rotate(2deg) translateZ(20px)"
                    : "rotate(10deg) translateZ(0)",
                zIndex: 3 - i,
              }}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <div className="text-white">
                  <h4 className="text-lg font-bold">{f.name}</h4>
                  <p className="text-sm tracking-wide opacity-90">
                    {f.role}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}