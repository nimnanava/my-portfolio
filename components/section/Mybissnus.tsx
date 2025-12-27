"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function MyBusinessSection() {
  const services = [
    {
      title: "Landing Pages",
      tagline: "High-Converting Design",
      features: ["Modern UI/UX", "Mobile First Design", "SEO Strategy"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Portfolio Sites",
      tagline: "Personal Branding",
      features: ["Custom Animations", "Interactive CV", "Project Showcase"],
      gradient: "from-pink-600 to-rose-500",
    },
    {
      title: "Custom Web Apps",
      tagline: "Scalable Tech Solutions",
      features: ["Next.js & React", "Database Hosting", "User Authentication"],
      gradient: "from-violet-600 to-purple-500",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] py-20 px-6 md:px-12 rounded-b-[50px] mx-4 md:mx-10  border-b border-l border-r  border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 leading-[1.1] pb-2">
              Engineering the Web
            </h2>
            <p className="text-slate-500 font-medium tracking-widest uppercase text-xs pl-1">
              Creative Development & Architecture
            </p>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed border-l-2 border-slate-200 pl-4">
            Transforming business requirements into high-performance web
            architecture with precision and care.
          </p>
        </div>

        {/* Bento Grid (Stats & Tech) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2">
            <Card className="h-full bg-white border border-slate-100 rounded-[40px] p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-violet-50 rounded-full blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] text-slate-800 tracking-tight">
                  Modern{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                    Architecture
                  </span>{" "}
                  for Business.
                </h3>
              </div>
              <div className="relative z-10 flex items-center gap-12 pt-8">
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">
                    02+
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">
                    15+
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Projects
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          <Card className="bg-slate-900 rounded-[40px] p-8 text-white flex flex-col justify-center border-none shadow-2xl">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-slate-500 text-center italic">
              Core Tech Stack
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {["Next.js", "React", "Tailwind", "Framer"].map((tech) => (
                <div
                  key={tech}
                  className="p-3 bg-white/5 rounded-2xl border border-white/10 text-[11px] font-bold text-center uppercase tracking-wider"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* --- Updated Service Cards (Portfolio Added & Button Removed) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="bg-white border border-slate-50 rounded-[35px] p-8 h-full shadow-sm hover:shadow-xl hover:border-slate-200 transition-all">
                <div
                  className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${service.gradient} mb-6`}
                ></div>
                <h4 className="text-2xl font-bold text-slate-800 mb-1">
                  {service.title}
                </h4>
                <p className="text-violet-600 font-bold text-[10px] uppercase tracking-widest mb-6 opacity-80">
                  {service.tagline}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="text-slate-500 text-sm flex items-center gap-3 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
