import { Briefcase, Code, Layers, Rocket } from "lucide-react";
import { ReactNode } from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  icon?: ReactNode;
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading the development of scalable web applications using modern technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
    icon: <Rocket className="w-4 h-4 text-white" />,
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect interfaces.",
    icon: <Layers className="w-4 h-4 text-white" />,
    technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built responsive web applications and implemented modern UI/UX designs. Worked in an agile environment with rapid prototyping and iterative development.",
    icon: <Code className="w-4 h-4 text-white" />,
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
  },
  {
    title: "Junior Web Developer",
    company: "Web Development Co.",
    location: "Remote",
    period: "2018 - 2019",
    description: "Started my professional journey developing websites and web applications. Learned best practices in coding, version control, and project management.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
