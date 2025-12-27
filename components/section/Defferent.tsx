"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FeaturesAndContact() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* 1. Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why are different from others?
      </h2>

      {/* 2. Features Grid (Responsive 1 to 4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <Card
            key={i}
            className="h-64 bg-slate-100 border-none rounded-2xl hover:shadow-lg transition-shadow"
          />
        ))}
      </div>

      {/* 3. Interactive Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="group relative w-full h-32 md:h-40 bg-slate-100 border-none rounded-[40px] overflow-hidden cursor-pointer">
          {/* Background Fill Animation on Hover */}
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center gap-4 px-8">
            <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
              මාව ෆිල් උනානම් කන්ටැක්ට් කරන්න
            </h3>

            {/* Animated Icon */}
            <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              <Mail className="text-white w-8 h-8" />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
