"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  pt-20 pb-10 px-6 mt-20 rounded-t-[50px]">
      <div className="ml mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* වම්පස කොටස - ඇරයුම */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Let&apos;s build something <br />
              <span className="text-slate-400">great together.</span>
            </h2>
            <Link
              href="mailto:yourname@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
            >
              Get in touch <ArrowUpRight size={20} />
            </Link>
          </motion.div>

          {/* දකුණු පස කොටස - ලින්ක්ස් */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Navigation</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link
                    href="#home"
                    className="hover:text-black transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#work"
                    className="hover:text-black transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-black transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-black transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Socials</h4>
              <div className="flex gap-4">
                <SocialIcon
                  icon={<Github size={20} />}
                  href="https://github.com"
                />
                <SocialIcon
                  icon={<Linkedin size={20} />}
                  href="https://linkedin.com"
                />
                <SocialIcon
                  icon={<Twitter size={20} />}
                  href="https://twitter.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* පල්ලෙහාම කොටස - Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} YourName. Built with Next.js & Framer Motion.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Icon සඳහා කුඩා Component එකක්
function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -5 }}
      className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-slate-100"
    >
      {icon}
    </motion.a>
  );
}
