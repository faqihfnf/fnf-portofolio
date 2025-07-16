import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, BookOpen, Mail, Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;

      setIsScrolled(currentScrollY > scrollThreshold);

      if (currentScrollY > scrollThreshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible && isScrolled ? 0 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
        className={`fixed top-4 inset-x-0 mx-auto z-50 ${isScrolled ? "max-w-fit" : "max-w-7xl px-4 sm:px-6 lg:px-8"} ${className}`}
      >
        <div className={`relative rounded-full border border-transparent ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg px-10 py-2" : "bg-transparent px-0 py-0"} transition-all duration-300`}>
          <div className={`flex items-center ${isScrolled ? "justify-center space-x-2" : "justify-between"}`}>
            {!isScrolled && (
              <Link href="/" className="text-4xl font-bold text-indigo-600">
                F n F.
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className={`hidden sm:flex items-center ${isScrolled ? "space-x-6" : "space-x-6"}`}>
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={`relative flex items-center space-x-1 transition-colors ${
                    pathname === navItem.link
                      ? isScrolled
                        ? "text-indigo-600"
                        : pathname === "/"
                        ? "text-indigo-400"
                        : "text-indigo-600"
                      : isScrolled
                      ? "text-slate-900 hover:text-indigo-600"
                      : pathname === "/"
                      ? "text-slate-200 hover:text-indigo-400"
                      : "text-slate-900 hover:text-indigo-600"
                  }`}
                >
                  {isScrolled && navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
                  <span className={isScrolled ? "hidden sm:block" : "block"}>{navItem.name}</span>
                  {pathname === navItem.link && (
                    <motion.span layoutId="navbar-indicator" className={`absolute -bottom-0 -left-1 right-0 h-0.5 ${isScrolled ? "bg-indigo-600" : "bg-indigo-400"}`} transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden">
              {isScrolled ? (
                // When scrolled, show icons
                <div className="flex items-center space-x-6">
                  {navItems.map((navItem, idx) => (
                    <Link key={`mobile-icon-${idx}`} href={navItem.link} className={`relative flex items-center p-2 transition-colors ${pathname === navItem.link ? "text-indigo-600" : "text-slate-900 hover:text-indigo-600"}`}>
                      {navItem.icon}
                      {pathname === navItem.link && <motion.span layoutId="mobile-navbar-indicator" className="absolute -bottom-0 left-0 right-0 h-0.5 bg-indigo-600" transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />}
                    </Link>
                  ))}
                </div>
              ) : (
                // When not scrolled, show hamburger menu
                <div className="relative">
                  <button onClick={toggleMobileMenu} className={`p-2 rounded-full transition-colors ${pathname === "/" ? "text-slate-200 hover:text-indigo-400" : "text-slate-900 hover:text-indigo-600"}`}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {/* Mobile Menu Horizontal Icons */}
                  <AnimatePresence>
                    {isMobileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-10 -top-1 transform -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 px-2 py-2"
                      >
                        <div className="flex items-center space-x-2">
                          {navItems.map((navItem, idx) => (
                            <Link
                              key={`mobile-menu-${idx}`}
                              href={navItem.link}
                              onClick={closeMobileMenu}
                              className={`relative flex items-center p-2 rounded-full transition-colors ${pathname === navItem.link ? "text-indigo-600 bg-indigo-50" : "text-slate-900 hover:text-indigo-600 hover:bg-slate-50"}`}
                            >
                              {navItem.icon}
                              {pathname === navItem.link && (
                                <motion.span
                                  layoutId="mobile-dropdown-indicator"
                                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"
                                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                />
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
