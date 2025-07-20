"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import Link from "next/link";
import { LoaderPinwheel } from "lucide-react";

export default function CertificatesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const handleCardClick = (link: string) => setSelectedLink(link);
  const handleCloseModal = () => setSelectedLink(null);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            My Certificates
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            A collection of my achievements and completed courses.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, visibleCount).map((cert) => (
            <motion.div
              key={cert.id}
              onClick={() => handleCardClick(cert.link)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.02 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg shadow-indigo-500 hover:shadow-indigo-600 transition-all duration-300 border border-indigo-100 dark:border-indigo-900"
            >
              <div className="h-56 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cert.organization}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < certificates.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#5907e8,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-100 font-semibold"
            >
              <LoaderPinwheel className="mr-2 h-4 w-4" />
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedLink && (
          <motion.div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleCloseModal}>
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak close
            >
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                ✕
              </button>

              {/* Tampilkan konten sesuai jenis */}
              {selectedLink.toLowerCase().endsWith(".pdf") ? <iframe src={selectedLink} className="w-full h-[70vh] rounded-md"></iframe> : <img src={selectedLink} alt="Certificate" className="w-full h-auto rounded-md" />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
