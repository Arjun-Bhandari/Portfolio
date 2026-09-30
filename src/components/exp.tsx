"use client";

import React, { useState } from "react";
import { Container } from "./index";
import Image from "next/image";
// src/data/experience.ts
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { StaggerGroup, StaggerItem } from "./ui/scroll-reveal";

export type ExperienceType = "company" | "freelance";

export interface ExperienceItem {
  id: string;
  name: string;
  role: string;
  type: ExperienceType;
  logo: string;
  website: string;
  githubUrl?: string;
  description: string;
  timeline?: string;
  location?: string;
  tech: string[];
}

export const Exprience = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
  const EXPERIENCES: ExperienceItem[] = [
    {
      id: "wagr",
      name: "Wagr",
      role: "Freelance Frontend Developer",
      type: "company",
      logo: "/logos/wagr.png", // put this file in /public/logos
      website: "https://wagr.co",
      description:
        "Worked with Wagr, a US-based real-money skill gaming platform, helping build and maintain features for real-time competitive games, user flows and back-office tools.",
      timeline: "Freelance — Remote",
      location: "Remote",
      tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: "kidjig",
      name: "KidJig Technologies Pvt. Ltd.",
      role: "Full-Stack Developer Intern",
      type: "company",
      logo: "/logos/kidjig.png",
      website: "https://www.kidjig.com",
      description:
        "Contributed as a full-stack intern at KidJig, a software company focused on web and app development and AI-powered solutions. Worked on internal tools and client projects across web and backend services.",
      timeline: "Internship — Remote",
      location: "Remote, India",
      tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: "rainbow-erp",
      name: "Rainbow English School ERP App",
      role: "Mobile App Developer (Freelance)",
      type: "freelance",
      logo: "/logos/rainbow-english-school.png",
      website:
        "https://apps.apple.com/app/parsa-rainbow-english-school/id1612617226", // example store link :contentReference[oaicite:2]{index=2}
      // githubUrl: "...", // if you have a code repo, add it here
      description:
        "Contributed to a school-specific ERP mobile app for Rainbow English School, helping implement features for attendance, homework, communication, and student information on top of an existing ERP backend.",
      // no timeline – per your requirement for freelance
      tech: ["React Native", "TypeScript", "REST APIs"],
    },
    {
      id: "sociact",
      name: "Sociact AI",
      role: "Freelance Full-Stack Developer",
      type: "freelance",
      logo: "/logos/sociact.jpg",
      website: "https://sociact.ai",
      description:
        "Helped build parts of Sociact, an AI-powered social media automation platform that offers image and video generation, thumbnail creation, and content automation tools for creators and brands.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI APIs"],
    },
    {
      id:"blitz-system-corp",
      name:"Blitz System Corp",
      role:"Contract Work — Full Stack Developer",
      type:"freelance",
      logo:"/logos/blitz_logo_white_bg.png",
      website:"https://useblitz.co",
      description:"Worked on a contract basis with Blitz System Corp, contributing to the development of their web applications and backend services, focusing on performance optimization and feature implementation.",
      tech:["React","Next.js","TypeScript","Node.js","PostgreSQL","Nest Js"],
    }
  ];
  const handleOpen = (idx: number) => {
    setIsOpenIndex((prev) => (prev === idx ? null : idx));
  };
  return (
    <div className="border-b border-[#2a2a2bbe] py-8">
    <Container>
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl font-bold p-2">Experience</h1>
        <StaggerGroup className="space-y-4 sm:space-y-6">
          {EXPERIENCES.map((exp, idx) => {
            const isOpen = isOpenIndex === idx;
            return (
              <StaggerItem key={exp.id}>
                <motion.div
                  layout
                  onClick={() => handleOpen(idx)}
                  className="gap-4 border border-neutral-700/60 p-2 cursor-pointer"
                  transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="relative h-10 w-10 shrink-0 rounded-lg flex items-center justify-center corner-squircle">
                        <Image
                          src={exp.logo}
                          alt={`${exp.name} logo`}
                          fill
                          className="object-cover p-1 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base">
                          {exp.name}
                        </h3>
                        <span className="text-xs text-neutral-700 dark:text-neutral-300">
                          · {exp.role}
                        </span>
                        {exp.timeline && (
                          <span className="text-xs text-neutral-500">
                            · {exp.timeline}
                          </span>
                        )}
                      </div>
                    </div>
                    <motion.div
                      className="leading-none text-neutral-700 dark:text-neutral-300 shrink-0"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden ml-0 sm:ml-14.5"
                      >
                        <div className="space-y-1 pt-2 sm:pt-1">
                          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full border border-neutral-700/70 text-neutral-700 dark:text-neutral-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </Container>
    </div>
  );
};
