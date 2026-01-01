"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export default function CompactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white  py-10  mt-10 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* LEFT: LOGO & STATUS */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-slate-900 fill-slate-900" />
              <span className="text-base font-black tracking-tighter uppercase italic text-slate-900">
                YourName<span className="text-blue-600">.</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Available for projects
              </span>
            </div>
          </div>

          {/* CENTER: QUICK LINKS */}
          <nav className="flex items-center gap-6 md:gap-10">
            {["Home", "Projects", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT: SOCIALS & CONTACT */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@yourname.com"
              className="group flex items-center gap-2 bg-slate-50 hover:bg-slate-900 px-4 py-2 rounded-full border border-slate-100 transition-all duration-300"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                Hire Me
              </span>
              <ArrowUpRight
                size={14}
                className="text-slate-400 group-hover:text-white"
              />
            </a>

            <div className="flex items-center gap-3 border-l border-slate-100 pl-4">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE: COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-slate-50 flex justify-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
            © {currentYear} Handcrafted by{" "}
            <span className="text-slate-400">YourName</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
