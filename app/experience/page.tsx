"use client";

import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/ui/experience-timeline";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading the development of scalable web applications using modern technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect interfaces.",
    technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built responsive web applications and implemented modern UI/UX designs. Worked in an agile environment with rapid prototyping and iterative development.",
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
  },
  {
    title: "Junior Web Developer",
    company: "Web Development Co.",
    location: "Remote",
    period: "2018 - 2019",
    description: "Started my professional journey developing websites and web applications. Learned best practices in coding, version control, and project management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Docker", level: 65 },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            My Experience
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            My professional journey in web development, from junior developer to senior full-stack engineer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <ExperienceTimeline experiences={experiences} />
          </div>

          {/* Skills */}
          <div>
            <motion.div className="bg-white p-8 rounded-lg shadow-lg" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div className="bg-blue-600 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.1 }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
