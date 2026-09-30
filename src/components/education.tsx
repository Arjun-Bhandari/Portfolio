import React from "react";
import { Container } from "./index";
import { StaggerGroup, StaggerItem } from "./ui/scroll-reveal";

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  timeline: string;
}

const EDUCATION: EducationItem[] = [
  {
    id: "btech-ce",
    degree: "B.Tech, Computer Engineering",
    institution: "Swarrnim Startup and Innovation University",
    location: "Gandhinagar, Gujarat",
    timeline: "2023 — 2027 (Expected)",
  },
  {
    id: "class-12",
    degree: "Class 12",
    institution: "Radiant Star Education",
    location: "Kanglatongbi, Manipur",
    timeline: "2023 Batch",
  },
];

export const Education = () => {
  return (
    <div className="border-b border-[#2a2a2bbe] py-8">
    <Container>
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl font-bold p-2">Education</h1>
        <StaggerGroup className="space-y-4 sm:space-y-6">
          {EDUCATION.map((edu) => (
            <StaggerItem key={edu.id}>
              <div className="border border-neutral-700/60 p-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-2 gap-y-1">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-neutral-700 dark:text-neutral-300">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 shrink-0 whitespace-nowrap">
                    {edu.timeline}
                  </span>
                </div>
                {edu.location && (
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    {edu.location}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </Container>
    </div>
  );
};
