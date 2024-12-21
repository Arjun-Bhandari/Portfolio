"use client";

import React from "react";
import Image from "next/image";
import kidjigLogo from "@/app/assests/kidjiglogo.png";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern ",
      company: "Kidjig Pvt Ltd",
      period: "September 2024 - Present",
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
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-[#1a1a1a] p-4 sm:p-6 md:p-8">
      <div className="w-full  sm:mt-12 md:mt-20">
        <h2 className="mb-4 sm:mb-0 text-xl sm:text-2xl font-mono text-neutral-200">Experience</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:-translate-x-1/2 bg-neutral-600" />
          
          {/* Timeline Content */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 sm:mb-16 flex w-full items-start pt-8">
                {/* Company Logo */}
                <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 rounded-full bg-gray-800 p-2 z-10">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Period - Left Side on Large Screens */}
                <div className="hidden sm:block absolute right-[calc(50%+1rem)] top-8 text-right w-[45%]">
                  <p className="text-sm text-neutral-500 space-y-1">{exp.period}</p>
                </div>

                {/* Content Container */}
                <div className="ml-12 sm:ml-[calc(50%+2rem)] w-full max-w-[calc(100%-4rem)] sm:max-w-[45%]">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-200">{exp.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-400">{exp.company}</p>
                  <p className="text-sm text-neutral-500 mb-2 sm:hidden">{exp.period}</p>
                  <ul className="list-disc pl-4 text-sm sm:text-base text-neutral-300 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
