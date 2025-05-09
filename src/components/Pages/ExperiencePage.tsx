"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import LogoClickNext from "@/assets/images/clicknext.webp";
import LogoExvention from "@/assets/images/exvention.png";
import LogoSE from "@/assets/images/Se.jpg";
import LogoTTT from "@/assets/images/tttlogo.png";
import Freelancer from "@/assets/images/freelancer.png";
import { Building2, UserCog, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

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
  const { t } = useTranslation();
  const experienceData = [
    {
      image: LogoClickNext,
      name: "Welfare Management System",
      company: "Clicknext",
      position: "Developer",
      date: `${t("experience.projects.wrs.date")}`,
      description:`${t("experience.projects.wrs.detail")}`,
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
      date: `${t("experience.projects.helpDesk.date")}`,
      description:`${t("experience.projects.helpDesk.detail")}`,
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
      date: `${t("experience.projects.voteSE.date")}`,
      description:`${t("experience.projects.voteSE.detail")}`,
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
      date: `${t("experience.projects.etax.date")}`,
      description:`${t("experience.projects.etax.detail")}`,
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
      date: `${t("experience.projects.CMS.date")}`,
      description:`${t("experience.projects.HIE.detail")}`,
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
      date: `${t("experience.projects.CMS.date")}`,
      description:`${t("experience.projects.CMS.detail")}`,
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
      date: `${t("experience.projects.DSG.date")}`,
      description:`${t("experience.projects.DSG.detail")}`,
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

  const allTechnologies = [
    ...new Set(experienceData.flatMap((item) => item.tech.map((t) => t.name))),
  ].sort();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Filter the experience data based on search and tech filter
  const filteredData = experienceData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.company.toLowerCase().includes(filter.toLowerCase()) ||
      item.description.toLowerCase().includes(filter.toLowerCase());

    const matchesTech =
      selectedTech === null ||
      item.tech.some((tech) => tech.name === selectedTech);

    return matchesSearch && matchesTech;
  });

  const getBadgeClass = (color: BadgeColor) => {
    const baseClass = "px-3 py-1 rounded-full text-sm font-medium";

    const colorMap: Record<BadgeColor, string> = {
      "badge-red": "badge-red",
      "badge-orange": "badge-orange",
      "badge-yellow": "badge-yellow",
      "badge-green": "badge-green",
      "badge-blue": "badge-blue",
      "badge-indigo": "badge-indigo",
      "badge-purple": "badge-purple",
      "badge-pink": "badge-pink",
      "badge-cyan": "badge-cyan",
      "badge-sky": "badge-sky",
      "badge-dark": "badge-dark",
      "badge-gray": "",
    };

    return `${baseClass} ${colorMap[color]}`;
  };

  return (
    <section id="experience" className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div
          className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 rounded-xl shadow-lg text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {t("experience.sectionTitle")}
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {t("experience.sectionSubtitle")}
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2 justify-center"
          data-aos="fade-up"
        >
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              selectedTech === null
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedTech(null)}
          >
            {t("experience.allLabel")}
          </button>
          {allTechnologies.map((tech, index) => {
            // Find a card that uses this tech to get its color
            const exampleCard = experienceData.find((item) =>
              item.tech.some((t) => t.name === tech)
            );
            const techObject = exampleCard?.tech.find((t) => t.name === tech);
            const isSelected = selectedTech === tech;

            return (
              <button
                key={index}
                className={`px-3 py-1 rounded-[2px] text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : getBadgeClass(
                        (techObject?.color as BadgeColor) || "badge-gray"
                      )
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
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                    {/* Logo + Name + Company */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto">
                      {/* Image */}
                      <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                        <div className="relative w-16 h-16">
                          <Image
                            src={item.image}
                            alt={`${item.name} logo`}
                            layout="fill"
                            objectFit="contain"
                            className="rounded"
                          />
                        </div>
                      </div>

                      {/* Text Info */}
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="flex justify-center sm:justify-start items-center mt-1 text-gray-600">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <span className="inline-flex items-center justify-center rounded-full text-sm bg-blue-50 px-2.5 py-0.5 text-blue-700 whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  {/* Position */}
                  <div className="mb-4 flex items-center space-x-2">
                    <UserCog className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">
                      {item.position}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-4 flex-grow">
                    {item.description}
                  </p>

                  {/* Tech Badges */}
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

                  {/* More Details Button */}
                  {/* <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center font-medium">
                      {t("experience.moreDetails")}
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-lg">{t("experience.noData.message")}</p>
              <button
                className="text-blue-600 mt-2 hover:underline"
                onClick={() => {
                  setFilter("");
                  setSelectedTech(null);
                }}
              >
                {t("experience.noData.clearFilter")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
