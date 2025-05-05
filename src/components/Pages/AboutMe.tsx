"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  Star,
  Globe,
  Clock,
  Coffee,
  Cpu,
} from "lucide-react";
import ImgToei from "@/assets/images/MDR_7909.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutMe() {
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
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "UI/UX Design", level: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "RESTful API", level: 80 },
    { name: "SQL", level: 65 },
    { name: "Firebase", level: 70 },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "ระบบซื้อขายสินค้าออนไลน์สำหรับร้านค้าท้องถิ่น พัฒนาโดยใช้ React, Node.js และ MongoDB",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      type: "Freelance",
    },
    {
      title: "Company Dashboard",
      description:
        "แดชบอร์ดสำหรับวิเคราะห์ข้อมูลและติดตามยอดขาย พัฒนาด้วย Next.js และ Tailwind CSS",
      tech: ["Next.js", "Tailwind", "Chart.js", "Firebase"],
      type: "Freelance",
    },
    {
      title: "Inventory Management System",
      description: "ระบบจัดการสินค้าคงคลัง พัฒนาระหว่างการฝึกงาน",
      tech: ["React", "Material UI", "Node.js", "MySQL"],
      type: "Internship",
    },
  ];

  const educationDetails = [
    {
      title: "รายวิชาหลักที่ศึกษา",
      items: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Mobile Application Development",
      ],
    },
    {
      title: "โปรเจคจบการศึกษา",
      items: [
        "พัฒนาระบบ XYZ สำหรับองค์กร ABC ใช้เทคโนโลยี React, Node.js และ MongoDB",
      ],
    },
    {
      title: "กิจกรรมในมหาวิทยาลัย",
      items: [
        "สมาชิกชมรมคอมพิวเตอร์",
        "อาสาสมัครสอนเขียนโค้ดให้น้องๆ ระดับมัธยมปลาย",
      ],
    },
  ];

  return (
    <>
      <section id="about" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-4 text-slate-800 dark:text-white relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"></span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Front-end Developer & Full-stack Developer |
              เด็กจบใหม่ที่หลงใหลในการสร้างประสบการณ์ดิจิทัล
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
                      Wichayut Laorod (Toei)
                    </h3>
                    <p className="text-blue-500 font-medium mt-1">
                      Front-end & Full-stack Developer
                    </p>

                    {/* Status Badge */}
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        พร้อมรับงานใหม่
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
                        6+ เดือน
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        ประสบการณ์
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <Award className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        เกียรตินิยม
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        อันดับ 1
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <Code className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        3+ โปรเจค
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        ผลงาน
                      </p>
                    </div>
                    <div
                      className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <Star className="mx-auto text-blue-500 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        GPA
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        3.7
                      </p>
                    </div>
                  </div>

                  {/* Contact / Social Links */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href="#"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-slate-100 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8" data-aos="fade-up">
                    <a
                      href="#contact"
                      className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      ติดต่อฉัน
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
                    โปรไฟล์
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`pb-4 px-4 font-medium mr-4 border-b-2 transition-colors ${
                      activeTab === "experience"
                        ? "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                        : "text-slate-500 border-transparent hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    }`}
                  >
                    <Briefcase size={18} className="inline mr-2" />
                    ประสบการณ์
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
                    การศึกษา
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
                    ทักษะ
                  </button>
                </div>

                {/* Profile Tab Content */}
                <div
                  className={`${activeTab === "profile" ? "block" : "hidden"}`}
                >
                  <div className="mb-6" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <User className="text-blue-500 mr-3" size={24} />
                      เกี่ยวกับฉัน
                    </h3>
                    <div className="pl-9">
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        สวัสดีครับ! ผมเป็นนักพัฒนา Front-end และ Full-stack
                        ที่เพิ่งจบการศึกษาระดับปริญญาตรี
                        และมีความกระตือรือร้นที่จะเริ่มต้นเส้นทางอาชีพในวงการเทคโนโลยี
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        ในระหว่างที่ศึกษา
                        ผมได้เรียนรู้และพัฒนาทักษะในการสร้างเว็บไซต์และแอปพลิเคชันที่ใช้งานง่ายและสวยงาม
                        ด้วยเทคโนโลยีล่าสุด เช่น React, Next.js และ Tailwind CSS
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        ผมเชื่อว่าการออกแบบที่ดีและฟังก์ชันการทำงานที่เรียบง่ายสามารถสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน
                        และนั่นคือสิ่งที่ผมมุ่งมั่นจะสร้างในทุกโปรเจคที่ผมทำ
                      </p>
                    </div>
                  </div>

                  <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <Heart className="text-blue-500 mr-3" size={24} />
                      สิ่งที่ฉันหลงใหล
                    </h3>
                    <div className="pl-9">
                      <ul className="grid grid-cols-2 gap-4">
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <Code size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              การเขียนโค้ดที่สะอาด
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              มุ่งมั่นสร้างโค้ดที่อ่านง่ายและมีประสิทธิภาพ
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 dark:bg-slate-700 p-2 rounded-md mr-3">
                            <Globe size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-white">
                              เว็บเทคโนโลยีใหม่ๆ
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              ติดตามการเปลี่ยนแปลงของเทคโนโลยีเสมอ
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
                              การแก้ปัญหา
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              ชอบความท้าทายและการหาทางออกที่สร้างสรรค์
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
                              การเรียนรู้ตลอดชีวิต
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              พัฒนาตัวเองและทักษะอย่างต่อเนื่อง
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
                            &quot;ทุกปัญหาในการเขียนโค้ดมีทางออกเสมอ บางครั้งเราแค่ต้องมองมันในมุมที่แตกต่าง&quot;
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                      <Clock className="text-blue-500 mr-3" size={20} />
                      ความพร้อมในการทำงาน
                    </h3>
                    <div className="pl-9">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-slate-700 dark:text-slate-300">
                          <span className="font-medium text-green-600 dark:text-green-400">
                            พร้อมเริ่มงานได้ทันที
                          </span>{" "}
                          -
                          กำลังมองหาโอกาสในการทำงานเต็มเวลาหรือฟรีแลนซ์ในตำแหน่ง
                          Front-end หรือ Full-stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Tab Content */}
                <div
                  className={`${
                    activeTab === "experience" ? "block" : "hidden"
                  }`}
                >
                  <div className="mb-8" data-aos="fade-up">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        <Briefcase className="text-blue-500" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        ประสบการณ์ทำงาน
                      </h3>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-200 dark:before:bg-slate-700">
                      {/* Internship Experience */}
                      <div className="mb-8 relative" data-aos="fade-up">
                        <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 dark:border-slate-800"></div>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-lg border-l-4 border-blue-500">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                              นักพัฒนาเว็บไซต์ (ฝึกงาน)
                            </h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                              4 เดือน
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 mb-3">
                            ฝึกงานที่บริษัท XYZ เป็นระยะเวลา 4 เดือน
                          </p>
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-slate-800 dark:text-white mb-2">
                              สิ่งที่รับผิดชอบ:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>พัฒนาและปรับปรุงเว็บแอปพลิเคชันที่มีอยู่</li>
                              <li>
                                ทำงานกับทีมเพื่อสร้างระบบจัดการสินค้าคงคลัง
                              </li>
                              <li>
                                แก้ไขข้อบกพร่อง (bugs) และปรับปรุงประสิทธิภาพ
                              </li>
                              <li>เรียนรู้และใช้เทคโนโลยีเว็บสมัยใหม่</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              React
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              Material UI
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              Node.js
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              MySQL
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Freelance Experience */}
                      <div
                        className="relative"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 dark:border-slate-800"></div>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-lg border-l-4 border-green-500">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                              Freelance Web Developer
                            </h4>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                              2 เดือน
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 mb-3">
                            รับงาน Freelance จำนวน 2 โปรเจค ระยะเวลารวม 2 เดือน
                          </p>
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-slate-800 dark:text-white mb-2">
                              โปรเจคที่รับผิดชอบ:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                              <li>
                                พัฒนาเว็บไซต์ E-commerce สำหรับร้านค้าท้องถิ่น
                              </li>
                              <li>
                                สร้างแดชบอร์ดสำหรับวิเคราะห์ข้อมูลและติดตามยอดขาย
                              </li>
                              <li>ออกแบบและพัฒนา UI/UX ที่เป็นมิตรกับผู้ใช้</li>
                              <li>
                                บูรณาการระบบการชำระเงินและการจัดการคำสั่งซื้อ
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              React
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              Next.js
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              Tailwind CSS
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              Firebase
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                              MongoDB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-500"
                        >
                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                          <polyline points="2 17 12 22 22 17"></polyline>
                          <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        โปรเจคที่ทำ
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {projects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-600"
                          data-aos="zoom-in"
                          data-aos-delay={300 + index * 100}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                              {project.title}
                            </h4>
                            <span
                              className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                                project.type === "Freelance"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              }`}
                            >
                              {project.type}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-slate-600 dark:text-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
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
                        การศึกษา
                      </h3>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700/50 dark:to-blue-900/30 p-6 rounded-xl shadow-md mb-8 border border-blue-100 dark:border-blue-900/50">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                            ปริญญาตรี คณะวิทยาการสารสนเทศ
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            สาขาวิศวกรรมซอฟต์แวร์
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900/50 dark:text-blue-300">
                            เกียรตินิยมอันดับ 1
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mb-6">
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
                          className="text-slate-500 mr-2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-slate-600 dark:text-slate-300">
                          มหาวิทยาลัยบูรพา
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              เกรดเฉลี่ย
                            </p>
                            <p className="font-semibold text-slate-900 dark:text-white">
                              3.7
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              ช่วงเวลา
                            </p>
                            <p className="font-semibold text-slate-900 dark:text-white">
                              2020 - 2024
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-6 mb-4">
                        <span className="h-px bg-blue-200 dark:bg-blue-800 w-full"></span>
                        <span className="px-4 text-blue-500 font-medium">
                          รายละเอียดเพิ่มเติม
                        </span>
                        <span className="h-px bg-blue-200 dark:bg-blue-800 w-full"></span>
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
                                    className="text-blue-500 mr-2 mt-1"
                                  >
                                    <polyline points="9 11 12 14 22 4"></polyline>
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                  </svg>
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
                    <div
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
                    </div>
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
                        ทักษะและความสามารถ
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Frontend Skills */}
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500 mr-2"
                          >
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                          ทักษะ Frontend
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500 mr-2"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                          ทักษะ Backend
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500 mr-2"
                        >
                          <path d="M3 3v18h18" />
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                        </svg>
                        ทักษะอื่นๆ
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {[
                          "Git & GitHub",
                          "Responsive Design",
                          "UI/UX",
                          "RESTful APIs",
                          "Jest Testing",
                          "Figma",
                          "Adobe XD",
                          "Agile/Scrum",
                          "Problem Solving",
                          "Team Collaboration",
                          "English Communication",
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
                        ภาษา
                      </h4>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-2xl font-bold text-blue-500">
                              TH
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white">
                            ไทย
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            ดีมาก
                          </p>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <span className="text-2xl font-bold text-blue-500">
                              EN
                            </span>
                          </div>
                          <h5 className="font-medium text-slate-800 dark:text-white">
                            อังกฤษ
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            พอใช้
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
