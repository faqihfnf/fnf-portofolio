"use client";

import React from "react";
import { FloatingNav } from "./floating-navbar";
import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 " />,
    },
    {
      name: "Experience",
      link: "/experience",
      icon: <User className="h-4 w-4 " />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 " />,
    },
    {
      name: "Certificates",
      link: "/certificates",
      icon: <User className="h-4 w-4 " />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <BookOpen className="h-4 w-4 " />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4 " />,
    },
  ];

  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
