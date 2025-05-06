"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ToeiImage from "@/assets/images/toei-img.png";
import {
  Facebook,
  Github,
  Linkedin,
  Download,
  ChevronRight,
  Code,
  Terminal,
  Monitor,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function MainPage() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="home" className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 container mx-auto mt-12">
        {/* Left Content */}
        
        <div className="md:col-span-6 flex flex-col justify-center items-start space-y-6 text-center sm:text-center md:text-left">
          <p
            className="text-sm text-blue-600 font-medium tracking-wider"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            FRONT-END DEVELOPER
            {t("section.home")}
          </p>

          <div data-aos="fade-right" data-aos-delay="200">
            <p className="text-4xl font-bold">{t("main.greeting")}</p>
            <p className="text-4xl font-bold mt-2">
              {t("main.iam")}{" "}
              <span className="text-blue-700 text-4xl font-bold px-2 py-1 rounded">
                {t("main.name")}
              </span>
            </p>
          </div>

          <div
            className="flex items-center space-x-2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg"></div>
            <p className="text-lg font-medium text-neutral-700">
              {t("main.slogan")}
            </p>
          </div>

          <p
            className="text-sm md:text-base leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {t("main.description")}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="/file/resume/Resume_Wichayut_Laorod.pdf"
              download
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={18} />
              <span>{t("main.downloadCV")}</span>
            </a>

            <button className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-300 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#experience"> {t("main.viewProjects")} </a>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-6 flex flex-col items-center mt-10 md:mt-0">
          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            <div className="relative z-10">
              <Image
                src={ToeiImage}
                width={400}
                height={500}
                alt="Profile Image Toei"
                className="rounded-lg w-[300px] sm:w-[320px] md:w-[380px] lg:w-[400px] object-cover"
              />
            </div>
          </div>

          <div
            className="mt-8 flex justify-center items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="#"
              className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Github size={22} />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
        <div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Code size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">
            {t("main.features.frontend.title")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("main.features.frontend.desc")}
          </p>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Terminal size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">
            {t("main.features.clean.title")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("main.features.clean.desc")}
          </p>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Monitor size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">
            {t("main.features.responsive.title")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("main.features.responsive.desc")}
          </p>
        </div>
      </div>
    </section>
  );
}
