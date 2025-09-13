import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#intro" },
    { name: "Process", href: "#Process" },
    { name: "Services", href: "#Services" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <img/>
            <div className="flex-shrink-0">
              <a
                href="#intro"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#intro");
                }}
                className="text-xl sm:text-2xl md:text-2xl font-bold text-[#814AC8] hover:text-[#17a54d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1db954] focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Agency
              </a>
            </div>
          </div>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden md:block ml-auto">
            <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white/90 hover:text-[#814AC8] px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#814AC8] focus:ring-offset-2 focus:ring-offset-black group"
                >
                  {item.name}
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#814AC8] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Improved */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-white/90 hover:text-[#814AC8] focus:outline-none focus:ring-2 focus:ring-[#814AC8] focus:ring-offset-2 focus:ring-offset-black rounded-md transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced Glass Effect */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-black/15 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
            <div className="px-4 py-4 space-y-2 sm:px-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white/90 hover:text-[#814AC8] hover:bg-white/5 px-4 py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#814AC8] focus:ring-offset-2 focus:ring-offset-black transform hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden -z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
