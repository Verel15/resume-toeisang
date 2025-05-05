'use client'
import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const content = {
    en: {
      nav: ["Home", "About", "Experience"],
      contact: "Contact Me"
    },
    th: {
      nav: ["หน้าหลัก", "เกี่ยวกับ", "ประสบการณ์"],
      contact: "ติดต่อฉัน"
    }
  };

  const currentContent = content[language];

  return (
    <header className="px-6 md:px-[90px] py-4 shadow">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <p className="text-2xl font-bold">L.</p>
          <p className="text-blue-700 text-2xl font-bold">Wichayut</p>
        </div>

        <nav className="hidden md:flex space-x-4 text-black">
          {currentContent.nav.map((item) => (
            <p
              key={item}
              className="hover:underline hover:text-blue-700 hover:font-semibold cursor-pointer px-4 py-1"
            >
              {item}
            </p>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="c-button-primary">
            {currentContent.contact}
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center space-x-2 px-3 py-2 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-sm transition-all duration-300 text-blue-700"
          >
            <Globe size={18} className="text-blue-600" />
            <span className="font-semibold">{language === "en" ? "TH" : "EN"}</span>
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 text-black">
          {currentContent.nav.map((item) => (
            <p
              key={item}
              className="hover:underline hover:text-blue-700 hover:font-semibold cursor-pointer px-2 py-1"
            >
              {item}
            </p>
          ))}
          <div className="flex justify-between items-center pt-2">
            <button className="c-button-primary">
              {currentContent.contact}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-sm transition-all duration-300 text-blue-700"
            >
              <Globe size={18} className="text-blue-600" />
              <span className="font-semibold">{language === "en" ? "TH" : "EN"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}