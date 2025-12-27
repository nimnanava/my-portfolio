"use client"; // Animation සහ Interaction සඳහා අවශ්‍ය වේ

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react"; // ප්‍රශ්න සඳහා අයිකනයක්

const problem = [
  {
    id: 1,
    problem: "ඔබේ සේවාවන් සඳහා අය කරන මිල ගණන් කොහොමද?",
    answer:
      "අපි සෑම ව්‍යාපෘතියකම ස්වභාවය අනුව සාධාරණ මිල ගණන් යටතේ උසස් තත්ත්වයේ නිර්මාණ ලබා දීමට බැඳී සිටින්නෙමු. වැඩි විස්තර සඳහා අපව සම්බන්ධ කරගන්න.",
  },
  {
    id: 2,
    problem: "ව්‍යාපෘතියක් අවසන් කිරීමට සාමාන්‍යයෙන් කොපමණ කාලයක් ගතවේද?",
    answer:
      "ව්‍යාපෘතියේ විශාලත්වය අනුව සාමාන්‍යයෙන් සති 1ක් සහ 4ක් අතර කාලයක් ගත විය හැක.",
  },
  {
    id: 3,
    problem: "නිර්මාණය කළ පසු අලුත්වැඩියා කටයුතු (Maintenance) කර දෙනවාද?",
    answer:
      "ඔව්, අපි ලබා දෙන ඕනෑම සේවාවකට පසුව අවශ්‍ය තාක්ෂණික සහාය සහ නඩත්තු කටයුතු අප විසින් සිදු කරනු ලබයි.",
  },
  {
    id: 4,
    problem: "මගේම අදහසකට අනුව නිර්මාණයක් කරවා ගත හැකිද?",
    answer:
      "අනිවාර්යයෙන්ම. අප සැමවිටම උත්සාහ කරන්නේ ඔබේ අවශ්‍යතාවය සහ අදහස උපරිම අයුරින් යථාර්ථයක් බවට පත් කිරීමටයි.",
  },
  {
    id: 5,
    problem: "ගෙවීම් කටයුතු සිදු කළ යුතු ආකාරය කුමක්ද?",
    answer:
      "බැංකු තැන්පතු හෝ online payment ක්‍රමවේද හරහා ඔබට පහසුවෙන් ගෙවීම් කටයුතු සිදු කළ හැකිය.",
  },
];

function Accordioon() {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-start">
        {/* වම්පස කොටස - මාතෘකාව */}
        <div className="  flex  items-center justify-center w-full ">
          <div className="  top-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
              <HelpCircle size={16} />
              <span>Support Center</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Answers to your <br />
              <span className="text-slate-400">burning questions</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600  leading-relaxed">
              ඔබට දැන ගැනීමට අවශ්‍ය පොදු කරුණු කිහිපයක් මෙන්න. මීට අමතරව යමක්
              දැන ගැනීමට ඇත්නම් ඕනෑම වෙලාවක අපව අමතන්න.
            </p>
          </div>
        </div>

        {/* දකුණු පස කොටස - Accordion */}
        <div className="w-full space-y-4">
          <Accordion type="single" collapsible className="w-full border-none">
            {problem.map((item) => (
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className="mb-4 border-none bg-slate-50 rounded-[30px] px-8 transition-all duration-300 hover:bg-slate-100 data-[state=open]:bg-slate-100 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-lg md:text-xl py-7 hover:no-underline">
                  {item.problem}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-8 leading-relaxed italic">
                  — {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Accordioon;
