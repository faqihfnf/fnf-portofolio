"use client";

import HeroSection from "@/components/ui/hero-section";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building robust web applications with modern technologies like React, Next.js, and Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces that provide excellent user experience",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and better user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to deliver high-quality software solutions",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />

      {/* About Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              What I Do
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              I specialize in creating digital experiences that are both beautiful and functional
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
  );
}
