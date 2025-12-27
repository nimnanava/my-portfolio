"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Leadership 01",
    color: "bg-red-200",
    paka: " skojdosodiosjd",
  },
  {
    id: 2,
    title: "Organization 02",
    color: "bg-blue-200",
    paka: " skojdosodiosjd",
  },
  {
    id: 3,
    title: "Management 03",
    color: "bg-green-200",
    paka: " skojdosodiosjd",
  },
  {
    id: 4,
    title: "Management 03",
    color: "bg-green-200",
    paka: " skojdosodiosjd",
  },
];

export default function StackingCards() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        my leadership and organization
      </h2>

      <div className="flex flex-col gap-10">
        {cards.map((card, i) => {
          return <Card key={card.id} {...card} i={i} />;
        })}
      </div>
    </div>
  );
}

// තනි Card එකක් සඳහා Component එක

interface CardProps {
  title: string;
  color: string;
  paka: string;
  i: number;
}
function Card({ title, color, paka, i }: CardProps) {
  const container = useRef(null);

  // ස්ක්‍රෝල් එක අනුව පාලනය කිරීමට
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // කාඩ් එක උඩට එන විට මදක් කුඩා වීමට (Scale effect)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={container}
      className="h-[60vh] flex items-center justify-center sticky top-24"
    >
      <motion.div
        style={{
          scale: imageScale,
          top: `calc(-10% + ${i * 25}px)`, // එකක් මත එකක් පිළිවෙලට සිටීමට
        }}
        className={`relative w-full h-full rounded-[40px] p-10 shadow-xl ${color} flex items-center justify-center border-2 border-white`}
      >
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{paka}</p>
        </div>
      </motion.div>
    </div>
  );
}
