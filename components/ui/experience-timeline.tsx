"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Content */}
            <div className="ml-16 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {experience.period}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <h4 className="text-lg font-semibold text-blue-600">{experience.company}</h4>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-1" />
                  {experience.location}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}