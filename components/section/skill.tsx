"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const skillData = [
  {
    id: 1,
    title: "Frontend Engineering",
    description:
      "Building ultra-fast, responsive web interfaces with a focus on smooth user journeys and pixel-perfect implementation.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    tech: ["Next.js 15", "TypeScript", "Tailwind"],
    isDark: true, // පළමු කාඩ් එක Dark කිරීමෙන් ආරම්භය ප්‍රබලව පෙනේ
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Architecting secure and scalable server-side systems with optimized database management for high-traffic applications.",
    icon: <Cpu className="w-6 h-6 text-emerald-600" />,
    tech: ["Node.js", "PostgreSQL", "Prisma"],
    isDark: false,
  },
  {
    id: 3,
    title: "System Design & UX",
    description:
      "Creating comprehensive design systems that bridge the gap between complex engineering and intuitive user experiences.",
    icon: <Layers className="w-6 h-6 text-violet-600" />,
    tech: ["Figma", "Design Ops", "Prototyping"],
    isDark: false,
  },
  {
    id: 4,
    title: "Full-Stack Deployment",
    description:
      "End-to-end product delivery, from initial cloud infrastructure setup to automated CI/CD pipelines and monitoring.",
    icon: <Code2 className="w-6 h-6 text-rose-600" />,
    tech: ["AWS", "Docker", "Vercel"],
    isDark: false,
  },
];

export default function CleanSkillStack() {
  return (
    <div className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Core Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 uppercase leading-[0.85]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 ">
              Toolkit.
            </span>
          </h2>
        </div>

        {/* STACKING CARDS CONTAINER */}
        <div className="flex flex-col gap-0">
          {skillData.map((skill, i) => (
            <SkillCard key={skill.id} {...skill} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, description, icon, tech, isDark, i }: any) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // කාඩ් එක ස්ක්‍රෝල් වෙද්දී මඳක් කුඩා වීමට (Solid පෙනුම සඳහා Opacity වෙනස් නොකරයි)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  return (
    <div
      ref={container}
      className="h-[60vh] md:h-[70vh] flex items-center justify-center sticky top-24"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5% + ${i * 35}px)`,
        }}
        className={`relative w-full h-[380px] md:h-[420px] rounded-[40px] md:rounded-[56px] p-8 md:p-14 flex flex-col justify-between 
          ${isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"} 
          shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100/10`}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              isDark ? "bg-white/10" : "bg-slate-50 border border-slate-100"
            }`}
          >
            {icon}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
              Section
            </span>
            <span className="text-3xl font-black italic">/0{i + 1}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="max-w-2xl space-y-4">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            {title}
          </h3>
          <p
            className={`text-sm md:text-lg font-medium leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Tech Stack Footer */}
        <div className="flex flex-wrap gap-3">
          {tech.map((t: string) => (
            <div key={t} className="flex items-center gap-1.5">
              <CheckCircle2
                size={14}
                className={isDark ? "text-blue-400" : "text-blue-600"}
              />
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t}
              </span>
            </div>
          ))}
        </div>

        {/* Floating Arrow Icon */}
        <div
          className={`absolute bottom-12 right-12 p-3 rounded-full border ${
            isDark ? "border-white/10" : "border-slate-100"
          }`}
        >
          <ArrowUpRight
            size={20}
            className={isDark ? "text-white" : "text-slate-400"}
          />
        </div>
      </motion.div>
    </div>
  );
}
