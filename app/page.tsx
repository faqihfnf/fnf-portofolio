"use client";

import HeroSection from "@/components/ui/hero-section";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Button } from "@/components/ui/moving-border";
import { myServices } from "@/data/myservices";
import { techStackIcons } from "@/data/TechStack";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative dark:bg-black-100  justify-center items-center overflow-clip flex-col mx-auto ">
      <div className="">
        <HeroSection />
        {/* About Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                What I Do
              </motion.h2>
              <motion.p className="text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                I specialize in creating digital experiences that are both beautiful and functional
              </motion.p>
            </div>

            <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
              {myServices.map((card) => (
                <Button key={card.id} duration={Math.floor(Math.random() * 10000 + 10000)} borderRadius="1rem" className="flex-1 text-white border-slate-200 dark:border-slate-700">
                  <div className="flex lg:flex-row flex-col lg:items-center p-3 md:p-5 lg:p-10 gap-2">
                    <card.icon className="h-14 w-14 text-indigo-200" />
                  </div>
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold ">{card.title}</h1>
                    <p className="text-start text-white mt-3 font-semibold">{card.desc}</p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                What I Use
              </motion.h2>
              <motion.p className="text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                There are a lot of things that I use to build web applications and websites recently I have been using.
              </motion.p>
            </div>
            <div className="flex flex-col items-center">
              <InfiniteMovingCards items={techStackIcons} direction="left" speed="normal" className=" md:mb-6 lg:mb-10" />
              <InfiniteMovingCards items={techStackIcons} direction="right" speed="normal" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              Ready to Work Together?
            </motion.h2>
            <motion.p className="text-xl text-blue-100 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              Let's create something amazing together. Get in touch to discuss your project.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
