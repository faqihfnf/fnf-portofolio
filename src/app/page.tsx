"use client";

import AboutMe from "@/src/components/section/AboutMe";
import CallToAction from "@/src/components/section/CallToAction";
import MyServices from "@/src/components/section/Services";
import TechStack from "@/src/components/section/Stack";
import HeroSection from "@/src/components/ui/hero-section";

export default function Home() {
  return (
    <div className="relative dark:bg-black-100  justify-center items-center overflow-clip flex-col mx-auto ">
      {/* Hero Section */}
      <HeroSection />

      {/* My Services Section */}
      <MyServices />

      {/* Tech Stack Section */}
      <TechStack />

      {/* About Me Section */}
      <AboutMe />

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
