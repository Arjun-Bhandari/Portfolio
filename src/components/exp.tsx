import React from 'react'
import {Container} from "./index"
import Image from 'next/image';
// src/data/experience.ts

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
     const EXPERIENCES: ExperienceItem[] = [
  {
    id: "wagr",
    name: "Wagr",
    role: "Freelance Full-Stack Developer",
    type: "company",
    logo: "/logos/wagr.svg", // put this file in /public/logos
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
    logo: "/logos/kidjig.svg",
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
    logo: "/logos/rainbow-school.svg",
    website: "https://apps.apple.com/app/parsa-rainbow-english-school/id1612617226", // example store link :contentReference[oaicite:2]{index=2}
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
    logo: "/logos/sociact.svg",
    website: "https://sociact.ai",
    description:"Helped build parts of Sociact, an AI-powered social media automation platform that offers image and video generation, thumbnail creation, and content automation tools for creators and brands.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI APIs"],
  },
];

  return (
    <Container>
    <section className="space-y-6">
      {EXPERIENCES.map((exp) => (
        <article
          key={exp.id}
          className="flex gap-4 border border-neutral-700/60 rounded-xl p-4"
        >
          <div className="relative h-10 w-10 shrink-0 rounded-lg bg-neutral-900/60 flex items-center justify-center">
            <Image
              src={exp.logo}
              alt={`${exp.name} logo`}
              fill
              className="object-contain p-1"
            />
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-sm sm:text-base">
                {exp.name}
              </h3>
              <span className="text-xs text-neutral-400">· {exp.role}</span>
              {exp.timeline && (
                <span className="text-xs text-neutral-500">
                  · {exp.timeline}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-neutral-300">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full border border-neutral-700/70 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
    </Container>
  )
}
