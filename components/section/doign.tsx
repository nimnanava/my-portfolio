"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const CARD_DATA = [
  {
    title: "Mechanical Engineering",
    description:
      "Currently pursuing a Bachelor’s degree in Mechanical Technology at UWU. Bridging the gap between physical machinery and digital logic.",
    image: "/image/uwu.png",
    accent: "from-violet-600 to-indigo-600",
    glow: "shadow-violet-500/20",
  },
  {
    title: "Freelance Web Dev",
    description:
      "Specializing in React, Next.js, and Tailwind CSS. Crafting seamless user experiences with a focus on performance and aesthetics.",
    image: "/image/webdev.png",
    accent: "from-blue-600 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
];

export default function Doing() {
  return (
    <div className="relative py-20 px-6 md:px-10 overflow-hidden bg-[#fcfcfc] py-20 px-6 md:px-12 rounded-t-[50px] mx-4 md:mx-10 mt-20 border-t border-l boder-r border-slate-100 shadow-sm ">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="mb-10 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* pb-4 සහ leading-tight මගින් අකුරු කැපීම වළක්වයි */
            className="text-4xl md:text-6xl font-black mb-1 pb-1 leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400"
          >
            Where Engineering Meets Pixels
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg max-w-sm border-l-2 border-white/10 pl-6"
          >
            A unique synergy between physical hardware and digital software.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CARD_DATA.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative group h-[400px] border-none rounded-[40px] overflow-hidden shadow-2xl ${card.glow}`}
              >
                {/* Background Image with Overlay */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Layers */}
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                <CardContent className="relative h-full p-10 flex flex-col justify-end z-10 text-white">
                  {/* Accent Line */}
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${card.accent} mb-6 rounded-full group-hover:w-full transition-all duration-500`}
                  ></div>

                  <h3 className="text-3xl font-bold mb-4 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Expanding Content on Hover */}
                  <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform text-white/90">
                      Learn More <span>→</span>
                    </button>
                  </div>

                  {/* Visual Hint when not hovered */}
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase group-hover:opacity-0 transition-opacity">
                    Explore Expertise
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
