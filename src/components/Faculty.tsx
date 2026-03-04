"use client";
import { useEffect, useRef, useState } from "react";

// ✅ Import images properly
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
    <section className="py-16 flex justify-center">
      <div className="card-box">
        {cards.slice(0, 3).map((f, i) => {
          const isTop = i === 0 && exiting;

          return (
            <article
              key={f.name}
              className={`faculty-card ${isTop ? "exit" : ""}`}
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
              <img className="pr-1.5" src={f.image} alt={f.name} />
              <div className="overlay">
                <div>
                  <h4 className="font-bold">{f.name}</h4>
                  <p className="text-[10px] tracking-wider font-bold">
                    {f.role}
                  </p>
                </div>
                <div className="n-box"></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}