"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Code2,
  ShieldCheck,
  Zap,
  Rocket,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturesAndContact() {
  const features = [
    {
      id: 1,
      title: "Optimized Cost",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      type: "cost",
    },
    {
      id: 2,
      title: "Rapid Delivery",
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      type: "time",
    },
    {
      id: 3,
      title: "Custom Code",
      desc: "No templates. Just clean, hand-written custom code.",
      icon: <Code2 className="w-5 h-5 text-violet-500" />,
    },
    {
      id: 4,
      title: "Free Service",
      desc: "Zero-cost maintenance & support after deployment.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 font-sans">
      {/* 1. SECTION HEADING */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-[1px] bg-slate-900"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            The Advantage
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">
          Why Work With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
            Me ?
          </span>
        </h2>
      </div>

      {/* 2. FEATURES GRID (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full border border-slate-100 bg-white hover:border-violet-200 transition-all duration-500 rounded-[32px] p-7 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-50 transition-all duration-500">
                {f.icon}
              </div>
              <h3 className="text-[12px] font-black uppercase tracking-widest text-slate-800 mb-3">
                {f.title}
              </h3>

              <div className="min-h-[40px] flex items-center">
                {f.type === "time" ? (
                  <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-tighter">
                    <span className="relative text-slate-300">
                      Months
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute top-1/2 left-0 h-[1.5px] bg-red-400 -rotate-12"
                      />
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-300" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded"
                    >
                      Weeks
                    </motion.span>
                  </div>
                ) : f.type === "cost" ? (
                  <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-tighter">
                    <span className="relative text-slate-300">
                      High Fees
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute top-1/2 left-0 h-[1.5px] bg-red-400 -rotate-12"
                      />
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-300" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
                    >
                      Smart Price
                    </motion.span>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 leading-relaxed font-medium opacity-80">
                    {f.desc}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 3. CONTACT SECTION (Bento Style) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Card className="relative overflow-hidden border-none bg-slate-900 rounded-[40px] md:rounded-[50px] p-8 md:p-14 shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <Badge className="bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 border-none px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] ">
                Let's Build Together
              </Badge>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                If my work <br />
                <span className="text-slate-500 ">resonates with you.</span>
              </h3>
              <p className="text-slate-400 text-sm font-medium max-w-xs mx-auto lg:mx-0 opacity-70">
                I am currently available for new projects and collaborations.
              </p>
            </div>

            {/* Right Contact Cards */}
            <div className="flex flex-col gap-3 w-full lg:w-96">
              {/* Phone / Call */}
              <a
                href="tel:+94712345678"
                className="group/item flex items-center justify-between p-5 rounded-[28px] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover/item:bg-slate-100 flex items-center justify-center text-white group-hover/item:text-slate-900 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Call Me
                    </span>
                    <span className="text-sm md:text-base font-bold text-white group-hover/item:text-slate-900 transition-colors">
                      +94 71 234 5678
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover/item:text-slate-900 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:hello@name.com"
                className="group/item flex items-center justify-between p-5 rounded-[28px] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover/item:bg-slate-100 flex items-center justify-center text-white group-hover/item:text-slate-900 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Email Me
                    </span>
                    <span className="text-sm md:text-base font-bold text-white group-hover/item:text-slate-900 transition-colors">
                      hello@yourname.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover/item:text-slate-900 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                className="group/item flex items-center justify-between p-5 rounded-[28px] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover/item:bg-slate-100 flex items-center justify-center text-white group-hover/item:text-slate-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      LinkedIn
                    </span>
                    <span className="text-sm md:text-base font-bold text-white group-hover/item:text-slate-900 transition-colors">
                      Let's Connect
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover/item:text-slate-900 transition-all" />
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
