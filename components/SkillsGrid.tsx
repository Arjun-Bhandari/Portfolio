import React from "react";
import Image from "next/image";
import { Bot, X } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <div className="text-blue-400">💻</div>,
    items: [
      {
        name: "React",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Redux",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="Redux"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "CSS",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              alt="CSS"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "TailwindCSS",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="TailwindCSS"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Shadcn",
        icon: (
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center text-xs">
            S
          </div>
        ),
      },
      {
        name: "MUI",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
              alt="MUI"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
    ],
  },
  {
    title: "Backend Development",
    icon: <div className="text-green-400">🖥️</div>,
    items: [
      {
        name: "Node.JS",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              alt="NodeJS"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "ExpressJS",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
              alt="ExpressJS"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Firebase",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="Firebase"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Appwrite",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg"
              alt="Appwrite"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "FastAPI",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/fastapi.svg"
              alt="FastAPI"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
    ],
  },
  {
    title: "Programming",
    icon: <div className="text-purple-400">⌨️</div>,
    items: [
      {
        name: "Python",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="Python"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "C/C++",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="C++"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <div className="text-yellow-400">🛠️</div>,
    items: [
      {
        name: "Windows",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg"
              alt="Windows"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Docker",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
              alt="Docker"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Linux",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="Linux"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "Git",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="Git"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "GitHub",
        icon: (
          <div className="relative w-6 h-6">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
              alt="GitHub"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ),
      },
      {
        name: "AI",
        icon: (
          <Bot className="w-6 h-6 text-blue-400" />
        ),
      },
    ],
  },
];

export const SkillsGrid = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 overflow-y-auto max-h-[calc(100vh-2rem)] pb-4">
      <div className="sticky top-0 pt-8 pb-2 bg-[#1a1a1a] z-10 flex items-center justify-between">
        <p className="text-xl font-bold text-white font-mono">Essential Tools I used</p>
        <X className="w-5 h-5 text-neutral-500 cursor-pointer hover:text-neutral-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[900px] mx-auto mt-4">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="relative group w-full min-h-[164px] overflow-hidden shadow-lg shadow-black/20"
          >
            {/* Base background */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-[80%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine group-hover:opacity-100 group-hover:[animation-fill-mode:forwards] group-[:not(:hover)]:animate-shineReset" />
            </div>

            <div className="relative rounded-lg p-4 h-full border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/40 to-neutral-800/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-white font-mono">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-2 gap-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 p-1.5 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors backdrop-blur-sm"
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] text-neutral-300 truncate font-mono">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
