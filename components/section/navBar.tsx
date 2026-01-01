"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-99999 transition-all duration-300 ${
        scrolled
          ? "bg-white/1  backdrop-blur-sm  shadow-md " // ස්ක්‍රෝල් කළ පසු පෙනුම
          : "bg-transparent " // මුලින් පවතින පෙනුම (Transparent)
      }`}
    >
      <div className="container mx-auto flex h-16 items-center md:justify-center justify-between  p-6">
        <Link href="#" className="text-xl font-bold md:hidden">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // relative සහ group යන classes දෙක අනිවාර්යයි
              className="relative group py-2 text-sm font-medium  transition-colors hover:text-black"
            >
              {item.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Button size="sm">Hire Me</Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[260px] sm:w-[300px] px-6 bg-white"
          >
            {/* Accessibility requirement */}
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            {/* Menu */}
            <nav className="mt-16 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium relative group py-2  transition-colors hover:text-black"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <Button className="mt-6" onClick={() => setOpen(false)}>
                Hire Me
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
