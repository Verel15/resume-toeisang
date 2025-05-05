'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import ToeiImage from "@/assets/images/toei-img.png";
import { Facebook, Github, Linkedin, Download, ChevronRight, Code, Terminal, Monitor } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto mt-12">
        {/* Left Content */}
        <div className="md:col-span-6 flex flex-col justify-center items-start space-y-6 text-center sm:text-center md:text-left">
          <p className="text-sm text-blue-600 font-medium tracking-wider" data-aos="fade-right" data-aos-delay="100">
            FRONT-END DEVELOPER
          </p>
          
          <div data-aos="fade-right" data-aos-delay="200">
            <p className="text-4xl font-bold">สวัสดีครับ!</p>
            <p className="text-4xl font-bold mt-2">
              I am{" "}
              <span className="text-blue-700 text-4xl font-bold px-2 py-1 rounded">
                Wichayut Laorod
              </span>
            </p>
          </div>
          
          <div className="flex items-center space-x-2" data-aos="fade-right" data-aos-delay="300">
            <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg"></div>
            <p className="text-lg font-medium text-neutral-700">
              Creating engaging web experiences
            </p>
          </div>
          
          <p className="text-sm md:text-base leading-relaxed" data-aos="fade-right" data-aos-delay="400">
            A highly motivated Software Engineering graduate with experience
            collaborating with companies as part of coursework since sophomore
            year and completing a cooperative education program in the final year.
            Proficient in front-end development, specializing in React.js, with a
            solid understanding of Software Development Life Cycle (SDLC) and
            Agile methodologies. Strong adaptability, teamwork skills, and the
            ability to thrive in dynamic environments.
          </p>
          
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="600">
            <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Download size={18} />
              <span>Download CV</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-300 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <span>View Projects</span>
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
          
          <div className="mt-8 flex justify-center items-center space-x-4" data-aos="fade-up" data-aos-delay="500">
            <a href="#" className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <Facebook size={22} />
            </a>
            <a href="#" className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <Github size={22} />
            </a>
            <a href="#" className="p-3 bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <Linkedin size={22} />
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
        <div 
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Code size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">Front-End Development</h3>
          <p className="text-gray-600 text-sm">Creating responsive and interactive user interfaces with modern frameworks and libraries.</p>
        </div>
        
        <div 
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Terminal size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">Clean Code</h3>
          <p className="text-gray-600 text-sm">Writing maintainable, efficient, and well-structured code following best practices.</p>
        </div>
        
        <div 
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
            <Monitor size={24} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mb-2">Responsive Design</h3>
          <p className="text-gray-600 text-sm">Building websites that work flawlessly across all devices and screen sizes.</p>
        </div>
      </div>
    </div>
  );
}