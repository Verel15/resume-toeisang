"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/config";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "th" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const navItems = t("nav", { returnObjects: true }) as {
    label: string;
    value: string;
  }[];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            L.Wichayut
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {Array.isArray(navItems) &&
            navItems.map((item) => (
              <a
                key={item.value}
                href={`#${item.value}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-2 rounded-full border border-gray-300 hover:border-blue-500 transition-colors"
          >
            <Globe size={16} />
            <span>{language === "en" ? "TH" : "EN"}</span>
          </button>
          <button className="c-button-primary hover:shadow-lg transition-all">
            <a href={'#contact'} >{t("contactMe")}</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 transition-colors"
          >
            <Globe size={18} />
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.value}
                href={`#${item.value}`}
                className="text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}

            <button className="c-button-primary hover:shadow-md transition-all">
              <span>{t("contactMe")}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
