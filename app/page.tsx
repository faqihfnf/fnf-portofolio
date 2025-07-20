"use client";

import TouchButton from "@/components/ui/button-touch";
import HeroSection from "@/components/ui/hero-section";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Button } from "@/components/ui/moving-border";
import { myServices } from "@/data/myservices";
import { techStackIcons } from "@/data/TechStack";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Send, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative dark:bg-black-100  justify-center items-center overflow-clip flex-col mx-auto ">
      <div className="">
        <HeroSection />

        {/* My Services Section */}
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

        {/* About Me Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              What About Me
            </motion.h2>
            {/* Profile & Text */}
            <motion.div className="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Image */}
                <div className="mx-auto flex justify-end mb-4 md:mx-0 order-1 md:order-2">
                  <div className="relative group">
                    <div
                      className="w-[475px] h-[475px] bg-gradient-to-tl from-blue-600 via-teal-500 to-pink-500 p-0.5"
                      style={{
                        WebkitMaskImage: "url('/mask-outline.svg')",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: "url('/mask-outline.svg')",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "cover",
                      }}
                    >
                      <div
                        className="w-[425px] h-[385px] m-6 bg-gradient-to-br from-yellow-500 via-teal-500 to-green-600 p-4 overflow-hidden"
                        style={{
                          WebkitMaskImage: "url('/mask-inline.svg')",
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          WebkitMaskSize: "contain",
                          maskImage: "url('/mask-inline.svg')",
                          maskRepeat: "no-repeat",
                          maskPosition: "right",
                          maskSize: "cover",
                        }}
                      >
                        <Image src="/profile.jpg" alt="Profile" width={300} height={300} className="mt-14 w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* About Text */}
                <motion.p
                  className="text-lg text-justify items-center justify-center flex text-gray-600 dark:text-gray-300 mb-6 leading-8 order-2 md:order-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Saya seorang developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. Dengan pengalaman dalam frontend dan backend development, saya senang mengubah ide menjadi kenyataan.
                  <br />
                  Saya seorang developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. Dengan pengalaman dalam frontend dan backend development, saya senang mengubah ide menjadi kenyataan.
                </motion.p>
              </div>
            </motion.div>
            <motion.div className=" gap-12 items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              {/* Motto/Tagline */}
              <div className="text-left order-2 md:order-1">
                <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
                  <div className="text-center md:text-left">
                    <blockquote className="text-2xl font-medium text-gray-800 dark:text-gray-200 italic border-l-4 border-indigo-600 pl-4">"Create with passion, innovate with impact and deliver excellence solutions."</blockquote>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- My Work Philosophy</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-indigo-500">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-indigo-500">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Project Selesai</div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Info Cards */}
                <motion.div className="grid md:grid-cols-3 gap-6 mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-indigo-500">
                    <div className="text-3xl mb-3 ">🎯</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fokus pada Detail</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Setiap pixel dan line code memiliki makna untuk menciptakan pengalaman terbaik</p>
                  </div>

                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-indigo-500">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Always Learning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Teknologi terus berkembang, begitu juga dengan kemampuan dan wawasan saya</p>
                  </div>

                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-indigo-500">
                    <div className="text-3xl mb-3">🤝</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Player</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kolaborasi yang baik menghasilkan solusi yang lebih inovatif dan sustainable</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 ">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              Ready to Work Together?
            </motion.h2>
            <motion.p className="text-xl  mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              Let's create something amazing together. Get in touch to discuss your project.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              <Link href="/contact">
                <TouchButton
                  otherClasses="hover:text-pink-500 dark:hover:text-pink-500 hover:bg-indigo-200 text-indigo-700 dark:text-indigo-100 font-semibold text-lg"
                  title="Let's get in touch"
                  icon={<SendIcon className="w-4 h-4" />}
                  position="right"
                ></TouchButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
