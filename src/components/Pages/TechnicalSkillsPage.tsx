'use client';
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "@/assets/images/HTML.png";
import CSS from "@/assets/images/CSS.png";
import JS from "@/assets/images/JS.png";
import TS from "@/assets/images/TS.png";
import CPlusPlus from "@/assets/images/CPlusPlus.png";
import ReactIcon from "@/assets/images/react.png";
import NextIcon from "@/assets/images/next.png";
import AngularIcon from "@/assets/images/angular.png";
import VueIcon from "@/assets/images/vue.png";
import LaravelIcon from "@/assets/images/laravel.png";
import BootstrapIcon from "@/assets/images/bootstrap.png";
import TailwindIcon from "@/assets/images/tailwind.png";
import GitHub from "@/assets/images/github.png";
import VSCode from "@/assets/images/visual-studio-code.png";
import Figma from "@/assets/images/figma.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Layers, ArrowRight, Wrench, Search, Filter } from "lucide-react";

export default function TechnicalSkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { 
      name: "HTML", 
      icon: HTML, 
      category: "frontend", 
      level: 90,
      description: "มีความชำนาญในการใช้ HTML5 สำหรับสร้างโครงสร้างเว็บไซต์ที่เป็นมาตรฐานและเข้าถึงได้",
      years: 3 
    },
    { 
      name: "CSS", 
      icon: CSS, 
      category: "frontend", 
      level: 85,
      description: "สามารถใช้ CSS3 ในการออกแบบและจัดรูปแบบเว็บไซต์ให้มีความสวยงามและตอบสนองได้",
      years: 3 
    },
    { 
      name: "JavaScript", 
      icon: JS, 
      category: "frontend", 
      level: 80,
      description: "มีประสบการณ์ในการใช้ JavaScript เพื่อสร้างเว็บแอปพลิเคชันแบบโต้ตอบและไดนามิก",
      years: 3 
    },
    { 
      name: "TypeScript", 
      icon: TS, 
      category: "frontend", 
      level: 75,
      description: "ใช้ TypeScript เพื่อเพิ่มความแข็งแกร่งของโค้ดและลดข้อผิดพลาดในการพัฒนา",
      years: 2 
    },
    { 
      name: "C++", 
      icon: CPlusPlus, 
      category: "backend", 
      level: 60,
      description: "มีความรู้พื้นฐานในการใช้ C++ สำหรับการเขียนโปรแกรมเชิงวัตถุและการจัดการหน่วยความจำ",
      years: 1 
    },
    { 
      name: "React", 
      icon: ReactIcon, 
      category: "framework", 
      level: 85,
      description: "เชี่ยวชาญในการพัฒนาแอปพลิเคชันด้วย React และการใช้ hooks, context API และ Redux",
      years: 2 
    },
    { 
      name: "Next.js", 
      icon: NextIcon, 
      category: "framework", 
      level: 80,
      description: "มีประสบการณ์ในการใช้ Next.js สำหรับการสร้างเว็บแอปพลิเคชันแบบ server-side rendering",
      years: 2 
    },
    { 
      name: "Angular", 
      icon: AngularIcon, 
      category: "framework", 
      level: 70,
      description: "สามารถพัฒนาแอปพลิเคชันด้วย Angular framework และการใช้ TypeScript",
      years: 1 
    },
    { 
      name: "Vue.js", 
      icon: VueIcon, 
      category: "framework", 
      level: 75,
      description: "มีความรู้ในการใช้ Vue.js สำหรับการสร้างอินเตอร์เฟซผู้ใช้แบบโต้ตอบและเป็นคอมโพเนนต์",
      years: 1 
    },
    { 
      name: "Laravel", 
      icon: LaravelIcon, 
      category: "backend", 
      level: 65,
      description: "มีประสบการณ์ในการใช้ Laravel สำหรับการพัฒนา backend และระบบจัดการฐานข้อมูล",
      years: 1 
    },
    { 
      name: "Bootstrap", 
      icon: BootstrapIcon, 
      category: "css", 
      level: 90,
      description: "เชี่ยวชาญในการใช้ Bootstrap เพื่อสร้างเว็บไซต์ที่ตอบสนองได้อย่างรวดเร็ว",
      years: 3 
    },
    { 
      name: "Tailwind CSS", 
      icon: TailwindIcon, 
      category: "css", 
      level: 85,
      description: "มีความชำนาญในการใช้ Tailwind CSS สำหรับการออกแบบ UI แบบ utility-first",
      years: 2 
    },
  ];

  const tools = [
    {
      name: "GitHub", 
      icon: GitHub, 
      level: 85,
      description: "ใช้ GitHub สำหรับการจัดการโค้ด, การทำงานร่วมกัน และ version control",
      years: 3
    },
    {
      name: "VS Code", 
      icon: VSCode, 
      level: 90,
      description: "ใช้ Visual Studio Code เป็นเครื่องมือหลักในการพัฒนาโค้ด พร้อมกับ extensions ที่เพิ่มประสิทธิภาพ",
      years: 3
    },
    {
      name: "Figma", 
      icon: Figma, 
      level: 75,
      description: "ใช้ Figma สำหรับการออกแบบ UI/UX และทำงานร่วมกับทีมดีไซเนอร์",
      years: 3
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = [
    { id: "all", name: "ทั้งหมด", icon: <Layers className="w-5 h-5" /> },
    { id: "frontend", name: "Frontend", icon: <Code2 className="w-5 h-5" /> },
    { id: "backend", name: "Backend", icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: "framework", name: "Frameworks", icon: <ArrowRight className="w-5 h-5" /> },
    { id: "css", name: "CSS Frameworks", icon: <Wrench className="w-5 h-5" /> },
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getColorByLevel = (level: number): string => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-indigo-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-500";
  };
  

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl mb-12 p-8 text-white"
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute right-4 top-4 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Technical Skills</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            ทักษะและเครื่องมือที่ใช้ในการพัฒนาซอฟต์แวร์ ซึ่งได้สั่งสมประสบการณ์และความเชี่ยวชาญตลอดระยะเวลาที่ผ่านมา
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="text"
                placeholder="ค้นหาทักษะและเครื่องมือ..."
                className="bg-white/20 w-full pl-10 pr-4 py-3 rounded-lg placeholder-white/70 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 md:flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? "bg-white text-blue-700 font-medium shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Programming Languages & Libraries</span>
          </h2>
          <div className="text-gray-500 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            <span>แสดง {filteredSkills.length} จาก {skills.length} ทักษะ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 ${hoveredSkill === skill.name ? 'ring-2 ring-blue-400' : ''}`}
            >
              <div className="h-2 w-full" style={{ backgroundColor: `${getColorByLevel(skill.level)}` }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">ความชำนาญ</div>
                    <div className="text-xl font-bold text-gray-800">{skill.level}%</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.name}</h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{skill.description || "No description available"}</p>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-500">
                    <span className="text-blue-600 font-bold">{skill.years}</span> ปีประสบการณ์
                  </span>
                  
                  <div className="flex -space-x-1">
                    {[...Array(Math.min(5, skill.years))].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                        <span className="text-xs font-bold text-blue-600">{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ไม่พบทักษะที่ค้นหา</h3>
            <p className="text-gray-600 mb-4">ลองค้นหาด้วยคำที่แตกต่างหรือดูทักษะทั้งหมด</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ดูทักษะทั้งหมด
            </button>
          </div>
        )}
      </div>

      {/* Tools Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Development Tools</span>
          </h2>
          {searchTerm && (
            <div className="text-gray-500 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              <span>แสดง {filteredTools.length} จาก {tools.length} เครื่องมือ</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 flex"
            >
              <div className="w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" 
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>เริ่มต้น</span>
                  <span>เชี่ยวชาญ</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {searchTerm && filteredTools.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ไม่พบเครื่องมือที่ค้นหา</h3>
            <p className="text-gray-600 mb-4">ลองค้นหาด้วยคำที่แตกต่างหรือดูเครื่องมือทั้งหมด</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ดูเครื่องมือทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}