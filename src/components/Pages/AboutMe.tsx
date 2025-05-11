"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Code,
  User,
  GraduationCap,
  Heart,
  Award,
  Star,
  Globe,
  Clock,
  Coffee,
  Cpu,
  Facebook,
  Github,
  Linkedin,
  ChartSpline,
  BookOpen,
  MapPin,
  SquareCheckBig,
  Monitor,
} from "lucide-react";
import ImgToei from "@/assets/images/MDR_7909.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function AboutMe() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("profile");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  const frontendSkills = [
    { name: "Next.js", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 80 },
  ];

  const backendSkills = [
    { name: "RESTful API", level: 80 },
    { name: "Node.js", level: 65 },
    { name: "Express", level: 50 },
    { name: "SQL", level: 50 },
    { name: "MongoDB", level:45 },
  ];

  const educationDetails = [
    {
      title: `${t("aboutMe.educationDetails.coreSubjectsTitle")}`,
      items: [
        "System Administration",
        "IT Security",
        "Object-Oriented Programming and Modeling",
        "Software Design Patterns and Architecture",
        "Enterprise Architecture Methodology",
        "Database Systems and Design",
      ],
    },
    {
      title: `${t("aboutMe.educationDetails.projectTitle")}`,
      items: [`${t("aboutMe.educationDetails.projectDescription")}`],
    },
    {
      title: `${t("aboutMe.educationDetails.activityTitle")}`,
      items: [`${t("aboutMe.educationDetails.activityDescription")}`],
    },
  ];

  return (
    <>
      <section id="about" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-4 text-slate-800 dark:text-white relative inline-block">
              {t("aboutMe.aboutMe")}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"></span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("aboutMe.desc")}
            </p>
          </div>

          {/* Main Content Area */}
          <div className="grid md:grid-cols-12 gap-10">
            {/* Left Side - Profile Image & Quick Info */}
            <div className="md:col-span-4" data-aos="fade-right">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden h-full">
                {/* Profile Image Container */}
                <div className="relative">
                  <div className="aspect-video w-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden z-10 bg-white">
                      <Image
                        src={ImgToei}
                        alt="Your Name"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                      <div className="absolute w-16 h-16 rounded-full bg-white top-10 left-10"></div>
                      <div className="absolute w-8 h-8 rounded-full bg-white bottom-20 right-10"></div>
                      <div className="absolute w-12 h-12 rounded-full bg-white bottom-10 left-1/4"></div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center py-6 px-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      {t("aboutMe.name")} ({t("aboutMe.nickName")})
                    </h3>
                    <p className="text-blue-500 font-medium mt-1">
                      Front-end & Full-stack Developer
                    </p>

                    {/* Status Badge */}
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        {t("aboutMe.status")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <Coffee className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("aboutMe.quickStats.experience.value")}
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {t("aboutMe.quickStats.experience.label")}
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <Award className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("aboutMe.quickStats.honor.value")}
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {t("aboutMe.quickStats.honor.label")}
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <Code className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("aboutMe.quickStats.projects.value")}
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {t("aboutMe.quickStats.projects.label")}
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <Star className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {t("aboutMe.quickStats.gpa.value")}
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {t("aboutMe.quickStats.gpa.label")}
                      </p>
                    </div>
                  </div>

                  {/* Contact / Social Links */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href="https://www.linkedin.com/in/wichayut-laorod-86aa8131a/"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <Linkedin className="text-blue-500" />
                    </a>
                    <a
                      href="https://github.com/Verel15"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <Github className="text-blue-500" />
                    </a>
                    <a
                      href="https://www.facebook.com/Wichayut1503"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <Facebook className="text-blue-500" />
                    </a>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8" data-aos="fade-up">
                    <a
                      href="#contact"
                      className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      {t("contactMe")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Details Tabs */}
            <div className="md:col-span-8" data-aos="fade-left">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 h-full">
                {/* Tab Navigation */}
                <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`pb-4 px-4 font-medium mr-4 border-b-2 transition-colors ${
                      activeTab === "profile"
                        ? "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                        : "text-slate-500 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    }`}
                  >
                    <User size={18} className="inline mr-2" />
                    {t("aboutMe.profile")}
                  </button>
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`pb-4 px-4 font-medium mr-4 border-b-2 transition-colors ${
                      activeTab === "education"
                        ? "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                        : "text-slate-500 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    }`}
                  >
                    <GraduationCap size={18} className="inline mr-2" />
                    {t("aboutMe.education")}
                  </button>
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`pb-4 px-4 font-medium border-b-2 transition-colors ${
                      activeTab === "skills"
                        ? "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                        : "text-slate-500 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    }`}
                  >
                    <Cpu size={18} className="inline mr-2" />
                    {t("aboutMe.skills")}
                  </button>
                </div>

                {/* Profile Tab Content */}
                <div
                  className={`${activeTab === "profile" ? "block" : "hidden"}`}
                >
                  <div className="mb-6" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <User className="text-blue-500 mr-3" size={24} />
                      {t("aboutMe.aboutMe")}
                    </h3>
                    <div className="pl-9">
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {t("aboutMe.intro.line1")}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {t("aboutMe.intro.line2")}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {t("aboutMe.intro.line3")}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <Heart className="text-blue-500 mr-3" size={24} />
                      {t("aboutMe.passionsTitle")}
                    </h3>
                    <div className="pl-9">
                      <ul className="grid grid-cols-2 gap-4">
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <Code size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              {t("aboutMe.passions.clean.title")}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.passions.clean.desc")}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <Globe size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              {t("aboutMe.passions.modernWeb.title")}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.passions.modernWeb.desc")}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                              <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              {t("aboutMe.passions.problemSolving.title")}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.passions.problemSolving.desc")}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                              <path d="M2 17l10 5 10-5"></path>
                              <path d="M2 12l10 5 10-5"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              {t("aboutMe.passions.lifelongLearning.title")}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.passions.lifelongLearning.desc")}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    className="border-l-4 border-blue-500 pl-4 py-2 my-8 bg-blue-50 dark:bg-slate-700 rounded-r-lg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p className="text-slate-600 dark:text-slate-300 italic">
                      &quot;{t("aboutMe.quote")}&quot;
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <Clock className="text-blue-500 mr-3" size={20} />
                      {t("aboutMe.availabilityTitle")}
                    </h3>
                    <div className="pl-9">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-slate-700 dark:text-slate-300">
                          <span className="font-medium text-green-600 dark:text-green-400">
                            {t("aboutMe.availability.title")}
                          </span>{" "}
                          - {t("aboutMe.availability.desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Education Tab Content */}
                <div
                  className={`${
                    activeTab === "education" ? "block" : "hidden"
                  }`}
                >
                  <div className="mb-8" data-aos="fade-up">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        <GraduationCap className="text-blue-500" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {t("aboutMe.education")}
                      </h3>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700/50 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-8 border border-blue-100 dark:border-blue-900/50">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                            {t("aboutMe.degree")}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {t("aboutMe.major")}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900/50 dark:text-blue-300">
                            {t("aboutMe.honor")}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mb-6">
                        <MapPin className="text-slate-500 me-2" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {t("aboutMe.university")}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                            <BookOpen className="text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.quickStats.gpa.label")}
                            </p>
                            <p className="font-semibold text-slate-900 dark:text-white">
                              3.7
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                            <Clock className="text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {t("aboutMe.period")}
                            </p>
                            <p className="font-semibold text-slate-900 dark:text-white">
                            {t("aboutMe.periodLevel")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-6 mb-4">
                        {/* <span className="h-px bg-blue-200 dark:bg-blue-800 w-full"></span> */}
                        <span className="px-4 text-blue-500 font-medium">
                          รายละเอียดเพิ่มเติม
                        </span>
                        {/* <span className="h-px bg-blue-200 dark:bg-blue-800 w-full"></span> */}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {educationDetails.map((detail, index) => (
                          <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={100 * index}
                          >
                            <h5 className="font-semibold text-slate-800 dark:text-white mb-2">
                              {detail.title}
                            </h5>
                            <ul className="space-y-1">
                              {detail.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start"
                                >
                                  <SquareCheckBig
                                    size={16}
                                    className="me-2 text-blue-500 flex-shrink-0"
                                  />
                                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    {/* <div
                      className="mt-8"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                        <Award className="text-blue-500 mr-2" size={20} />
                        ประกาศนียบัตรและการอบรม
                      </h4>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-600">
                          <div className="flex justify-between">
                            <h5 className="font-medium text-slate-800 dark:text-white">
                              React Developer Certificate
                            </h5>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              2023
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                            Meta Front-End Developer Professional Certificate
                          </p>
                        </div>
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-600">
                          <div className="flex justify-between">
                            <h5 className="font-medium text-slate-800 dark:text-white">
                              UI/UX Design Fundamentals
                            </h5>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              2022
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                            Google UX Design Certificate
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Skills Tab Content */}
                <div
                  className={`${activeTab === "skills" ? "block" : "hidden"}`}
                >
                  <div className="mb-8" data-aos="fade-up">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        <Cpu className="text-blue-500" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {t("aboutMe.skillDetails.title")}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Frontend Skills */}
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                        <Code className="text-blue-500 me-3" />
                          {t("aboutMe.skillDetails.frontendTitle")}
                        </h4>

                        <div className="space-y-4">
                          {frontendSkills.map((skill, index) => (
                            <div
                              key={index}
                              data-aos="fade-right"
                              data-aos-delay={100 * index}
                            >
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {skill.name}
                                </span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Backend Skills */}
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                          <Monitor className="text-blue-500 me-3" />
                          {t("aboutMe.skillDetails.backendTitle")}
                        </h4>

                        <div className="space-y-4">
                          {backendSkills.map((skill, index) => (
                            <div
                              key={index}
                              data-aos="fade-left"
                              data-aos-delay={100 * index}
                            >
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {skill.name}
                                </span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                                <div
                                  className="bg-purple-600 h-2 rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Other Skills */}
                    <div
                      className="mt-10"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                        <ChartSpline className="text-blue-500 me-4" />
                        {t("aboutMe.skillDetails.otherTitle")}
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {[
                          "Git & GitHub",
                          "Responsive Design",
                          "UI/UX",
                          "RESTful APIs",
                          "Figma",
                          "Agile/Scrum",
                          "Problem Solving",
                          "Team Collaboration",
                        ].map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg dark:bg-slate-700 dark:text-slate-200 text-sm font-medium"
                            data-aos="zoom-in"
                            data-aos-delay={50 * index}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div
                      className="mt-10"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                        <Globe className="text-blue-500 mr-2" size={20} />
                        {t("aboutMe.skillDetails.languagesTitle")}
                      </h4>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-2xl font-bold text-blue-500">
                              TH
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white">
                            {t("aboutMe.skillDetails.languages.thai.name")}
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {t("aboutMe.skillDetails.languages.thai.level")}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-2xl font-bold text-blue-500">
                              EN
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white">
                            {t("aboutMe.skillDetails.languages.english.name")}
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {t("aboutMe.skillDetails.languages.english.level")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
