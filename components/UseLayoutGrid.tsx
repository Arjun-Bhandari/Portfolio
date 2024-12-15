"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { UseIconCloud } from "./UseIconCloud";
import { Maximize2 } from "lucide-react";
import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillsGrid } from "./SkillsGrid";
import GitHubContributions from "./GitHubContributions";
import Image from "next/image";
import Profile from "@/app/assests/MyProfile.jpg";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="">
      <p className="font-bold md:text-xl text-xl text-white font-mono">
        Introduction
      </p>
      <p className="font-mono text-base my-4 max-w-lg text-neutral-300">
        👋 Hi, I’m Arjun Bhandari, a 3rd-semester B.Tech Computer Science
        student with a passion for building innovative tech solutions. From
        AI-driven projects to empowering communities through mentorship with
        AIIMSNIT, I thrive on combining creativity and technology to solve
        real-world problems. Whether it’s leading tech events or working on
        hands-on projects, I’m all about learning, growing, and making an
        impact. Let’s shape the future together!
      </p>
    </div>
  );
};

const SkillsSection = () => {
  return <SkillsGrid />;
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



const cards = [
  {
    id: 1,
    content: <AboutSection />,
    className: "md:col-span-2",
    thumbnail: (
      <div className="flex flex-col w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={Profile}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-mono text-neutral-300">
                  Hey👋 I am Arjun Bhandari!
                </span>
              </div>
            </div>

            {/* Tagline and Buttons Container */}
            <div className="flex pl-[52px] justify-between items-start">
              <p className="text-xl font-mono text-neutral-300 leading-relaxed w-[60%]">
                Empowering innovation, inspiring minds, and solving real-world
                problems—one line of code at a time
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-blue-50 hover:bg-blue-50/45"
                >
                  <a href="/cv.pdf" download>
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="default" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: <SkillsSection />,
    className: "col-span-1",
    thumbnail: (
      <div className=" w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
        <UseIconCloud />
        <div className="flex items-center justify-end gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Maximize2 className="text-white w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Expand</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
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
    content: <GitHubContributions username="arjun-bhandari"/>,
    className: "md:col-span-2",
    thumbnail: <GitHubContributions username="arjun-bhandari"/>,
    nonExpandable: true,
  },
];
