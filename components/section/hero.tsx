"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Facebook, Linkedin, MessageCircleMore } from "lucide-react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* 1. Hero / Cover Area */}
      <div className="relative h-[450px] w-full bg-[#f8fafc] flex items-center justify-center rounded-b-[50px] md:rounded-b-[100px] shadow-sm overflow-hidden">
        {/* Unique Background Elements - පාළු ගතිය නැති කිරීමට */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70  "></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 px-6 text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 drop-shadow-sm">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("HERE, IDEAS BECOME EXPERIENCES.")
                  .pauseFor(1500)
                  .deleteAll(30)
                  .typeString("WELCOME TO MY PORTFOLIO")
                  .pauseFor(1000)
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    ) as HTMLElement;
                    if (cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 60,
                cursor: "|",
              }}
            />
          </div>
        </div>
      </div>

      {/* 2. Profile & Content Area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-24 md:-mt-32 gap-6">
          {/* Avatar with Animated Glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Avatar className="w-48 h-48 md:w-56 md:h-56 border-8 border-white shadow-2xl relative">
              <AvatarImage
                src="/your-profile-image.jpg"
                alt="Nimna Navanjana"
              />
              <AvatarFallback>
                <Image
                  src="/image/profile.jpeg"
                  alt="profile pic"
                  fill
                  className="object-cover"
                />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Nimna Navanjana<span className="text-violet-600">.</span>
            </h1>
            <p className="text-violet-600 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mt-2">
              Freelance Web Developer | Mechanical Technology Undergraduate
            </p>
          </div>
        </div>

        {/* 3. Description & Actions */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-8">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-slate-600 leading-relaxed text-lg">
              I blend code and design to create{" "}
              <span className="text-slate-900 font-bold">
                immersive digital experiences
              </span>
              . Simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Button className="w-full sm:w-auto px-10 h-12 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-all shadow-lg shadow-violet-200">
              Let s Talk
            </Button>

            <div className="flex gap-3">
              {[
                {
                  Icon: Linkedin,
                  color: "hover:bg-blue-50 hover:text-blue-600",
                },
                {
                  Icon: Facebook,
                  color: "hover:bg-blue-100 hover:text-blue-700",
                },
                {
                  Icon: MessageCircleMore,
                  color: "hover:bg-green-50 hover:text-green-600",
                },
              ].map((item, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="icon"
                  className={`rounded-full w-12 h-12 border-slate-200 transition-all ${item.color}`}
                >
                  <item.Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
