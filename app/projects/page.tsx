"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and user authentication.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive charts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Chart.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Social Media App",
    description: "A social media platform with real-time messaging, post sharing, and user profiles.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Learning Management System",
    description: "An LMS platform for online courses with video streaming, quizzes, and progress tracking.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const categories = ["All", "React", "Next.js", "Node.js", "Mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.technologies.some((tech) => tech.toLowerCase().includes(selectedCategory.toLowerCase())));

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 className="text-4xl font-boldmb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            My Projects
          </motion.h1>
          <motion.p className="text-lg  max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-indigo-100 text-gray-700 hover:bg-gray-50"}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
