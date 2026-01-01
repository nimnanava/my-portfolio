"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  Wallet,
  Wand2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "How do you determine the pricing?",
    answer:
      "I follow a value-based pricing model. Every project is unique, so I provide a tailored proposal that balances your budget with top-tier engineering quality.",
    icon: <Wallet className="w-5 h-5 text-amber-500" />,
  },
  {
    id: 2,
    question: "What is the delivery timeline?",
    answer:
      "Speed is my edge. Most custom sites are delivered within 1-4 weeks. I use agile workflows to ensure you go live as fast as possible without cutting corners.",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
  {
    id: 3,
    question: "Do you offer maintenance?",
    answer:
      "Yes. I don't just build and leave. I offer 30 days of complimentary support to ensure everything is perfect, followed by flexible long-term support plans.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
  },
  {
    id: 4,
    question: "Is the design fully custom?",
    answer:
      "100%. No generic templates. I build every component from scratch using custom code, ensuring your brand has a distinct and elite digital presence.",
    icon: <Wand2 className="w-5 h-5 text-violet-500" />,
  },
  {
    id: 5,
    question: "Is the design fully custom?",
    answer:
      "100%. No generic templates. I build every component from scratch using custom code, ensuring your brand has a distinct and elite digital presence.",
    icon: <Wand2 className="w-5 h-5 text-violet-500" />,
  },
];

export default function GridFAQ() {
  return (
    <div className="w-full bg-white py-24 px-6 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            <Sparkles size={14} className="text-violet-600" />
            Common Queries
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
            Curiosity{" "}
            <span className="text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 ">
              Meets Code.
            </span>
          </h2>
        </div>

        {/* FAQ GRID */}
        <Accordion type="single" collapsible className="w-full border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${item.id}`}
                  className="group border border-slate-100 bg-slate-50/50 rounded-[32px] px-6 md:px-8 transition-all duration-500 data-[state=open]:bg-white data-[state=open]:border-violet-200 data-[state=open]:shadow-2xl data-[state=open]:shadow-blue-100/40 overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-7 hover:no-underline border-none">
                    <div className="flex items-center gap-5 w-full">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center group-data-[state=open]:bg-violet-600 group-data-[state=open]:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <span className="font-bold text-lg tracking-tight text-slate-800 group-data-[state=open]:text-violet-600 transition-colors">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-8 pl-[60px]">
                    <div className="space-y-4">
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                        {item.answer}
                      </p>
                      <div className="flex items-center gap-2 text-violet-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                        Detailed Info <ArrowRight size={12} />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
