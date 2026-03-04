"use client";
import { useEffect, useRef, useState } from "react";

type FacultyItem = {
  name: string;
  role: string;
  image: string;
};

const facultyMembers: FacultyItem[] = [
  {
    name: "Chinmoy Sankar Bora",
    role: "Head of the Institute",
   image: "./src/assets/Faculty/Chinmoy.webp"
  },
  {
    name: "Adit Yadav",
    role: "Faculty Incharge",
    image: "./src/assets/Faculty/Adit.webp",
  },
  {
    name: "Rikumoni Bhattacharjya",
    role: "Computer Instructor",
    image: "./src/assets/Faculty/Riku.webp",
  },
];

export default function Faculty() {
  const [cards, setCards] = useState(facultyMembers);
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setExiting(true);

      // AFTER EXIT ANIMATION → rotate stack
      setTimeout(() => {
        setCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setExiting(false);
      }, 1500); // must match CSS duration
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
                <div className="z-0">
                  <h4 className="font-bold">{f.name}</h4>
                  <p className="text-[10px] tracking-wider font-bold">{f.role}</p>
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
