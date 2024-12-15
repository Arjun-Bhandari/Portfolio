"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full bg-black">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const AboutSection = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">About Me</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-300">
        Hi! I'm a passionate developer with a love for creating beautiful and functional web applications. 
        I specialize in modern web technologies and have a keen eye for design.
      </p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Skills</p>
      <div className="font-normal text-base my-4 max-w-lg text-neutral-300">
        <ul className="list-disc pl-4 space-y-2">
          <li>React.js & Next.js</li>
          <li>TypeScript & JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js & Express</li>
          <li>MongoDB & SQL</li>
        </ul>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Projects</p>
      <div className="font-normal text-base my-4 max-w-lg text-neutral-300">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">Portfolio Website</h3>
            <p>A modern portfolio built with Next.js and Tailwind CSS</p>
          </div>
          <div>
            <h3 className="font-semibold">E-commerce Platform</h3>
            <p>Full-stack e-commerce solution with React and Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Contact</p>
      <div className="font-normal text-base my-4 max-w-lg text-neutral-300 space-y-2">
        <p>📧 email@example.com</p>
        <p>🔗 github.com/yourusername</p>
        <p>💼 linkedin.com/in/yourusername</p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <AboutSection />,
    className: "md:col-span-2",
    thumbnail: (
      <div className="flex items-center justify-center w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <span className="text-2xl font-bold text-white">About Me</span>
      </div>
    ),
  },
  {
    id: 2,
    content: <SkillsSection />,
    className: "col-span-1",
    thumbnail: (
      <div className="flex items-center justify-center w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <span className="text-2xl font-bold text-white">Skills</span>
      </div>
    ),
  },
  {
    id: 3,
    content: <ProjectsSection />,
    className: "col-span-1",
    thumbnail: (
      <div className="flex items-center justify-center w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <span className="text-2xl font-bold text-white">Projects</span>
      </div>
    ),
  },
  {
    id: 4,
    content: <ContactSection />,
    className: "md:col-span-2",
    thumbnail: (
      <div className="flex items-center justify-center w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <span className="text-2xl font-bold text-white">Contact</span>
      </div>
    ),
  },
];
