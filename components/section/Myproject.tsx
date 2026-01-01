"use client";
import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Globe, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ඔබේ ප්‍රොජෙක්ට් විස්තර මෙතැනට ඇතුළත් කරන්න
const projects = [
  {
    id: 1,
    title: "Kalpani Fernando",
    type: "Architecture Portfolio",
    status: "Live",
    link: "https://kalpanifernando.com/",
    tech: ["Next.js", "Tailwind"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Sri Lanka Time",
    type: "Real-time Utility",
    status: "Active",
    link: "http://srilankatime.com/",
    tech: ["React", "API"],
    color: "from-violet-600 to-pink-500",
  },
  {
    id: 3,
    title: "E-Commerce Pro",
    type: "Online Store",
    status: "Live",
    link: "#",
    tech: ["Next.js", "Stripe"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "Personal Blog",
    type: "Content Platform",
    status: "Draft",
    link: "#",
    tech: ["TypeScript", "Sanity"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    type: "Web App",
    status: "Live",
    link: "#",
    tech: ["React", "Vite"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "Task Manager",
    type: "SaaS Product",
    status: "Beta",
    link: "#",
    tech: ["Next.js", "Prisma"],
    color: "from-rose-500 to-purple-600",
  },
];

export default function CurrentProjects() {
  const [showAll, setShowAll] = useState(false);

  // මුලින් ප්‍රොජෙක්ට් 4ක් පමණක් පෙන්වයි
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-slate-100 pb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-violet-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase leading-none">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
              Archive
            </span>
          </h2>
        </div>

        {/* ක්ලික් කළ හැකි විස්තරය (Link) */}
        <Link href="/projects-archive" className="group block max-w-[280px]">
          <p className="text-slate-400 text-sm font-medium leading-relaxed italic transition-all duration-300 group-hover:text-slate-900 border-l-2 border-transparent group-hover:border-violet-500 group-hover:pl-4">
            A collection of digital products built with
            <span className="text-violet-500/60 font-semibold group-hover:text-violet-600 transition-colors">
              {" "}
              engineering precision
            </span>
            .
            <ArrowUpRight className="inline-block w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
          </p>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group relative overflow-hidden border border-slate-100 bg-white hover:border-violet-200 transition-all duration-500 rounded-[28px] shadow-sm hover:shadow-xl">
                <CardContent className="p-5 flex items-center gap-5">
                  {/* Compact Visual Icon */}
                  <div
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <Globe className="w-6 h-6 md:w-7 md:h-7 opacity-90" />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-800 truncate tracking-tight group-hover:text-violet-600 transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-emerald-50 text-emerald-600 border-none px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <span>{project.type}</span>
                      <span className="text-slate-200">•</span>
                      <span className="text-blue-500/70 italic">
                        {project.tech[0]}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </CardContent>

                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${project.color} transition-all duration-700`}
                />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Less Toggle Button */}
      {projects.length > 4 && (
        <motion.div className="flex justify-center mt-14" layout>
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-10 py-4 rounded-full bg-slate-700 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-violet-600 transition-all shadow-xl hover:shadow-violet-200 shadow-slate-200 active:scale-95"
          >
            {showAll ? (
              <>
                Hide Archive <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Works{" "}
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
