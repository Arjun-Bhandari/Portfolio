"use client";

import React from "react";
import Image from "next/image";
import kidjigLogo from "@/app/assests/kidjiglogo.png";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern ",
      company: "Kidjig Pvt Ltd",
      period: "September 2023 - Present",
      logo: kidjigLogo,
      responsibilities: [
        "Develop and maintain ReactJS / NextJS stack using TypeScript and JS",
        "Implement UI designs with Tailwind CSS etc., ensuring responsiveness",
        "Build RESTful APIs with Node.js and Express.js or any other backend tech stack",
        "Work with backend tech Firebase, AWS etc",
        "Work with databases for data storage and retrieval (SQL and NoSQL)",
        "Contribute to front-end and back-end testing",
        "Collaborate with the team using Git and participate in code reviews, and code deploy",
        "Stay updated with the latest web development technologies",
        "Assist in building new features and optimizing existing ones"
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-[#1a1a1a] p-8">
      <div className="w-full">
        <h2 className="mb-8 text-2xl font-mono text-neutral-200">Experience</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-neutral-600" />
          
          {/* Timeline Content */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 flex w-full items-center justify-center pt-8">
                {/* Company Logo */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-gray-800 p-2">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="grid w-full grid-cols-[1fr,1fr] gap-8 pt-4">
                  {/* Date on the left */}
                  <div className="text-right">
                    <span className="text-sm text-neutral-500">{exp.period}</span>
                  </div>
                  
                  {/* Experience details on the right */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-neutral-200">{exp.title}</h3>
                    <p className="text-neutral-400">{exp.company}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-300">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
