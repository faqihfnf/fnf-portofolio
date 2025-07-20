"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/ui/blog-card";

const blogPosts = [
  {
    title: "Getting Started with Next.js 15",
    excerpt: "Learn about the latest features in Next.js 15 and how to leverage them in your projects for better performance and developer experience.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    slug: "getting-started-nextjs-15",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust and scalable REST APIs using Node.js, Express, and modern development patterns.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    slug: "scalable-apis-nodejs",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development in the coming years.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "future-web-development",
    tags: ["Web Development", "Technology", "Future"],
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Techniques and strategies to improve React application performance, including memoization, lazy loading, and code splitting.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for each layout system.",
    image: "https://images.pexels.com/photos/1181296/pexels-photo-1181296.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Nov 20, 2024",
    readTime: "4 min read",
    slug: "css-grid-vs-flexbox",
    tags: ["CSS", "Layout", "Frontend"],
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices that will help you write more maintainable and type-safe code.",
    image: "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    slug: "typescript-best-practices",
    tags: ["TypeScript", "Best Practices", "Programming"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            My Blog
          </motion.h1>
          <motion.p className="text-lg  max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
