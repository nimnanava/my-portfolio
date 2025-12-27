"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="  flex justify-center w-full md:px-24 px-5 mt-10">
        <div className=" w-full justify-center relative">
          <div>
            <h2 className="text-3xl font-bold">From Gears to Gradients</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }} // පේජ් එකේ පෙනෙන මානයට ආ විට වැඩ කරයි
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-1 bg-violet-600 mt-2 rounded-full"
            />
          </div>

          <p className=" w-full mt-5">
            My journey started in the world of mechanical engineering, where I
            learned to think critically and solve problems with precision. While
            pursuing my degree, I discovered a passion for web development — a
            space where creativity meets logic. Since then, I’ve built
            responsive and modern websites using HTML, CSS, JavaScript, and
            React, always focusing on performance, accessibility, and user
            experience. My engineering background gives me a strong foundation
            in analytical thinking, and my web projects reflect that blend of
            structure and creativity. Whether I’m crafting a pixel-perfect
            design or building dynamic features from scratch, I’m committed to
            turning ideas into digital reality. This portfolio captures not just
            my work but the growth, curiosity, and drive behind it.
          </p>
        </div>
      </div>
    </>
  );
}
