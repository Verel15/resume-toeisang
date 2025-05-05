'use client'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import LogoClickNext from "@/assets/images/clicknext.webp";
import LogoExvention from "@/assets/images/exvention.png";
import LogoSE from "@/assets/images/Se.jpg";
import LogoTTT from "@/assets/images/tttlogo.png";
import Freelancer from "@/assets/images/freelancer.png";
import { Building2, UserCog, Tag, ArrowUpRight } from "lucide-react";

type BadgeColor =
  | "badge-red"
  | "badge-orange"
  | "badge-yellow"
  | "badge-green"
  | "badge-blue"
  | "badge-indigo"
  | "badge-purple"
  | "badge-pink"
  | "badge-cyan"
  | "badge-sky"
  | "badge-dark"
  | "badge-gray";

export default function ExperiencePage() {
  const [filter, setFilter] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  
  const experienceData = [
    {
      image: LogoClickNext,
      name: "Welfare Management System",
      company: "Clicknext",
      position: "Developer",
      date: "FEB/2023 - APR/2023",
      description:
        "ระบบที่ใช้สำหรับจัดการข้อมูลและกระบวนการเกี่ยวกับสวัสดิการขององค์กรหรือหน่วยงานต่างๆ โดยมีเป้าหมายเพื่ออำนวยความสะดวกในการบริหารจัดการสิทธิและสวัสดิการของพนักงานหรือบุคคลที่เกี่ยวข้องอย่างเป็นระบบและมีประสิทธิภาพ",
      tech: [
        { name: "Laravel", color: "badge-red" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "JavaScript", color: "badge-yellow" },
        { name: "PHP", color: "badge-indigo" },
        { name: "Bootstrap", color: "badge-purple" },
      ],
    },
    {
      image: LogoExvention,
      name: "IT Supporting And Helpdesk Management System",
      company: "Exvention",
      position: "Planning Manager",
      date: "JUL/2023 - APR/2024",
      description:
        "ช่วยจัดการคำร้องเรียนหรือปัญหาของผู้ใช้งาน เช่น การแจ้งปัญหาด้านไอทีหรือบริการอื่นๆ โดยมีฟังก์ชันรับคำร้อง ติดตามสถานะ และแจ้งผลการแก้ไข เพื่อเพิ่มความสะดวกในการให้บริการและปรับปรุงประสิทธิภาพการแก้ปัญหาในองค์กร",
      tech: [
        { name: "Angular", color: "badge-red" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "TypeScript", color: "badge-cyan" },
        { name: "Chart.js", color: "badge-pink" },
        { name: "Bootstrap", color: "badge-purple" },
      ],
    },
    {
      image: LogoSE,
      name: "VoteSE",
      company: "Information BUU",
      position: "Front-End Developer",
      date: "APR/2023 - MAY/2024",
      description:
        "ช่วยจัดการคำร้องเรียนหรือปัญหาของผู้ใช้งาน เช่น การแจ้งปัญหาด้านไอทีหรือบริการอื่นๆ โดยมีฟังก์ชันรับคำร้อง ติดตามสถานะ และแจ้งผลการแก้ไข เพื่อเพิ่มความสะดวกในการให้บริการและปรับปรุงประสิทธิภาพการแก้ปัญหาในองค์กร",
      tech: [
        { name: "Vue.js", color: "badge-green" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "TypeScript", color: "badge-cyan" },
        { name: "Chart.js", color: "badge-pink" },
        { name: "Bootstrap", color: "badge-purple" },
      ],
    },
    {
      image: Freelancer,
      name: "E-Tax",
      company: "Freelance",
      position: "Front-End Developer",
      date: "APR/2024 - MAY/2024",
      description:
        "ช่วยจัดการภาษีอิเล็กทรอนิกส์ เช่น การออกใบกำกับภาษี, การยื่นภาษีออนไลน์ และการเก็บข้อมูลภาษีในรูปแบบดิจิทัล ช่วยลดการใช้เอกสาร เพิ่มความสะดวก โปร่งใส และรวดเร็วในการบริหารภาษีสำหรับองค์กรและบุคคลทั่วไป",
      tech: [
        { name: "Next.js", color: "badge-dark" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "TypeScript", color: "badge-cyan" },
        { name: "Bootstrap", color: "badge-purple" },
      ],
    },
    {
      image: LogoExvention,
      name: "Health Information Exchange",
      company: "Exvention",
      position: "Front-End Developer",
      date: "JUN/2024 - SEP/2024",
      description:
        "ระบบ HIE เป็นแพลตฟอร์มสำหรับแลกเปลี่ยนข้อมูลสุขภาพระหว่างหน่วยงานทางการแพทย์อย่างปลอดภัย ช่วยให้การเข้าถึงประวัติผู้ป่วย การวินิจฉัย และการรักษามีความรวดเร็วและแม่นยำยิ่งขึ้น สนับสนุนการประสานงานในระบบสาธารณสุขได้อย่างมีประสิทธิภาพ",
      tech: [
        { name: "Next.js", color: "badge-dark" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "TypeScript", color: "badge-cyan" },
        { name: "Tailwind", color: "badge-sky" },
      ],
    },
    {
      image: LogoTTT,
      name: "Complaint Management System",
      company: "TTT Brother Co.,Ltd.",
      position: "Front-End Developer",
      date: "NOV/2024 - APR/2025",
      description:
        "ช่วยให้ผู้ใช้งานสามารถแจ้งปัญหาหรือข้อร้องเรียนได้ง่ายๆ และติดตามสถานะการแก้ไข ช่วยให้การบริหารจัดการข้อร้องเรียนมีประสิทธิภาพ ลดเวลาในการตอบสนอง และเพิ่มความพึงพอใจให้กับผู้ใช้งาน",
      tech: [
        { name: "React.js", color: "badge-blue" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "JavaScript", color: "badge-yellow" },
        { name: "Bootstrap", color: "badge-purple" },
        { name: "Chart.js", color: "badge-pink" },
      ],
    },
    {
      image: Freelancer,
      name: "Digital Skill Gap",
      company: "Freelance",
      position: "Front-End Developer",
      date: "MAR/2025 - APR/2025",
      description:
        "ช่วยให้ผู้ใช้งานสามารถแจ้งปัญหาหรือข้อร้องเรียนได้ง่ายๆ และติดตามสถานะการแก้ไข ช่วยให้การบริหารจัดการข้อร้องเรียนมีประสิทธิภาพ ลดเวลาในการตอบสนอง และเพิ่มความพึงพอใจให้กับผู้ใช้งาน",
      tech: [
        { name: "Next.js", color: "badge-dark" },
        { name: "HTML", color: "badge-orange" },
        { name: "CSS", color: "badge-blue" },
        { name: "TypeScript", color: "badge-cyan" },
        { name: "Tailwind", color: "badge-sky" },
        { name: "Chart.js", color: "badge-pink" },
      ],
    },
  ];

  const allTechnologies = [...new Set(experienceData.flatMap(item => item.tech.map(t => t.name)))].sort();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  // Filter the experience data based on search and tech filter
  const filteredData = experienceData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(filter.toLowerCase()) ||
                          item.company.toLowerCase().includes(filter.toLowerCase()) ||
                          item.description.toLowerCase().includes(filter.toLowerCase());
    
    const matchesTech = selectedTech === null || 
                        item.tech.some(tech => tech.name === selectedTech);
    
    return matchesSearch && matchesTech;
  });

  const getBadgeClass = (color: BadgeColor) => {
    const baseClass = "px-3 py-1 rounded-full text-sm font-medium";
  
    const colorMap: Record<BadgeColor, string> = {
      "badge-red": "bg-red-100 text-red-800",
      "badge-orange": "bg-orange-100 text-orange-800",
      "badge-yellow": "bg-yellow-100 text-yellow-800",
      "badge-green": "bg-green-100 text-green-800",
      "badge-blue": "bg-blue-100 text-blue-800",
      "badge-indigo": "bg-indigo-100 text-indigo-800",
      "badge-purple": "bg-purple-100 text-purple-800",
      "badge-pink": "bg-pink-100 text-pink-800",
      "badge-cyan": "bg-cyan-100 text-cyan-800",
      "badge-sky": "bg-sky-100 text-sky-800",
      "badge-dark": "bg-gray-800 text-white",
      "badge-gray": ""
    };
  
    return `${baseClass} ${colorMap[color]}`;
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div 
          className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 rounded-xl shadow-lg text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Experience</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            ประสบการณ์ทำงานและโปรเจคต่างๆ ที่ได้มีส่วนร่วมในการพัฒนา
          </p>
        </div>
        
        <div 
          className="mt-10 flex flex-wrap gap-2 justify-center"
          data-aos="fade-up"
        >
          <button 
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${selectedTech === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setSelectedTech(null)}
          >
            All
          </button>
          {allTechnologies.map((tech, index) => {
            // Find a card that uses this tech to get its color
            const exampleCard = experienceData.find(item => 
              item.tech.some(t => t.name === tech)
            );
            const techObject = exampleCard?.tech.find(t => t.name === tech);
            const isSelected = selectedTech === tech;
            
            return (
              <button 
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  isSelected ? 'bg-blue-600 text-white' : getBadgeClass((techObject?.color as BadgeColor) || 'badge-gray')
                }`}
                onClick={() => setSelectedTech(isSelected ? null : tech)}
              >
                {tech}
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 4)}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Image
                          src={item.image}
                          width={64}
                          height={64}
                          className="object-contain"
                          alt={`${item.name} logo`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{item.name}</h3>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center rounded-full text-sm bg-blue-50 px-2.5 py-0.5 text-blue-700 whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  
                  <div className="mb-4 flex items-center space-x-2">
                    <UserCog className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">{item.position}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={getBadgeClass(tech.color as BadgeColor)}
                      >
                        <Tag className="w-3 h-3 inline-block mr-1" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center font-medium">
                      ดูรายละเอียดเพิ่มเติม
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-lg">ไม่พบโปรเจคที่ตรงกับเงื่อนไขการค้นหา</p>
              <button 
                className="text-blue-600 mt-2 hover:underline"
                onClick={() => {
                  setFilter("");
                  setSelectedTech(null);
                }}
              >
                ล้างการค้นหา
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}