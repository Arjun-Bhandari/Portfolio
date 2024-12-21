"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { UseIconCloud } from "./UseIconCloud";
import { Maximize2, X } from "lucide-react";
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
import Link from "next/link";

export function LayoutGridDemo() {
  return (
    <div className="h-full w-full py-8">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-[#1a1a1a] p-4 sm:p-6 md:p-8">
      {/* X icon */}
      <div className="absolute top-4 right-4">
        <X className="w-5 h-5 text-neutral-500 cursor-pointer hover:text-neutral-400" />
      </div>

      <div className="max-w-2xl text-start">
        <p className="font-bold text-lg sm:text-xl md:text-2xl text-white font-mono">
          Introduction
        </p>
        <p className="font-mono text-sm sm:text-base my-2 sm:my-4 text-neutral-300">
          👋 Hi, I'm Arjun Bhandari, a 3rd-semester B.Tech Computer Science
          student with a passion for building innovative tech solutions. From
          AI-driven projects to empowering communities through mentorship, I thrive on combining creativity and technology to solve
          real-world problems. Whether it's leading tech events or working on
          hands-on projects, I'm all about learning, growing, and making an
          impact. Let's shape the future together!
        </p>
        
        <div className="mt-4 sm:mt-8 font-mono text-neutral-300">
          <p className="mb-1">Best Regards,</p>
          <p className="mb-2 sm:mb-4">Arjun Bhandari</p>
          <p className="text-xs sm:text-sm mb-2 sm:mb-4">Let's Connect</p>
          <p className="text-xs sm:text-sm text-neutral-400 flex items-center gap-2">
            Scroll down for socials
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </p>
        </div>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        asChild
        className="mt-6 bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-700"
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1IaiOyqgPTU1fXcHCCqU3FrkE82vtkayi"
          download="Arjun_Bhandari_Resume.pdf"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://drive.google.com/uc?export=download&id=1IaiOyqgPTU1fXcHCCqU3FrkE82vtkayi", '_blank');
          }}
          className="flex items-center"
        >
          <DownloadIcon className="mr-2 h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  );
};

const SkillsSection = () => {
  return <SkillsGrid />;
};

const ProjectsSection = () => {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-[#1a1a1a] p-4 sm:p-6 md:p-8">
      {/* X icon */}
      <div className="absolute top-4 right-4">
        <X className="w-5 h-5 text-neutral-500 cursor-pointer hover:text-neutral-400" />
      </div>

      <div className="max-w-2xl text-center">
        <p className="font-bold text-xl sm:text-2xl md:text-4xl text-white">Projects</p>
        <p className="text-sm text-neutral-400 mt-2">🚧 Section Under Development 🚧</p>
        <div className="font-normal text-sm sm:text-base my-2 sm:my-4 text-neutral-300">
          <div className="space-y-2 sm:space-y-3">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Coming Soon</h3>
              <p className="text-sm sm:text-base text-neutral-400">Exciting projects are being crafted</p>
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Stay Tuned</h3>
              <p className="text-sm sm:text-base text-neutral-400">More projects will be showcased here</p>
            </div>
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
      <div className="flex flex-col w-full h-full bg-[#1a1a1a] border border-neutral-800 rounded-xl p-4 sm:p-6 hover:border-neutral-700 transition-colors">
        <div className="relative flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-start gap-3">
              <div className="relative shrink-0">
                <Image
                  src={Profile}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-xl lg:text-xl font-mono text-neutral-300 block truncate">
                  Hey 👋 I am Arjun Bhandari!
                </span>
              </div>
            </div>

            {/* Tagline Container */}
            <div className="min-w-0 overflow-hidden">
              <div className="relative pl-[52px] sm:pl-[60px]">
                <div className="max-w-[calc(100%-1rem)]">
                  <p className="text-lg sm:text-xl lg:text-xl font-mono text-neutral-300 leading-relaxed break-words">
                    Empowering innovation,
                    inspiring minds, and
                    solving real-world problems
                    —one line of code at a time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="self-end mt-8">
            <Button 
              variant="default" 
              size="sm"
              className="text-sm sm:text-base px-4 py-2 h-auto"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#1a1a1a] p-8">
      
          <SkillsSection />
      
      </div>
    ),
    className: "col-span-1",
    thumbnail: (
      <div className="relative h-full w-full bg-[#1a1a1a] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
        <div className="absolute right-6 top-6 z-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Maximize2 className="text-white w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to view my skills</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex h-full w-full items-center justify-center p-6">
          <UseIconCloud />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: <ProjectsSection />,
    className: "col-span-1",
    thumbnail: (
      <div className="relative h-full w-full bg-[#1a1a1a] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
        <div className="absolute right-6 top-6 z-10">
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
        <div className="flex h-full w-full items-center justify-center p-6">
          <div className="text-center">
            <p className="text-xl font-bold text-white">Projects</p>
            <p className="mt-2 text-sm text-neutral-400">🚧 Under Development 🚧</p>
            <p className="mt-1 text-xs text-neutral-500">Click to view progress</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: <GitHubContributions username="arjun-bhandari" />,
    className: "md:col-span-2",
    thumbnail: <GitHubContributions username="arjun-bhandari" />,
    nonExpandable: true,
  },
];
