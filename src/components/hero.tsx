"use client";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "../lib/utils";
import { Container } from "./index";
import Image from "next/image";
import { useTheme } from "../hooks/use-theme";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { ScrollReveal, StaggerGroup, StaggerItem } from "./ui/scroll-reveal";
interface TechStackTypes {
  icon: string;
  name: string;
}
interface Socials {
  icon: string;
  link: string;
  name: string;
}
export const Hero = () => {
  const { isDark } = useTheme();
  const techStack: TechStackTypes[] = [
    { icon: "/typescript.svg", name: "TypeScript" },
    { icon: "/react_light.svg", name: "React" },
    { icon: "/nextjs_icon_dark.svg", name: "Next.js" },
    { icon: "/nodejs.svg", name: "Node.js" },
    { icon: "/bun.svg", name: "Bun" },
    { icon: "/postgresql.svg", name: "PostgreSQL" },
    { icon: "/react_light.svg", name: "ReactNative" },
  ];

  const socials: Socials[] = [
    {
      icon: isDark ? "/github-dark.svg" : "/github-light.svg",
      link: "https://github.com/arjun-bhandari",
      name: "Github",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/in/arjun-bhandari-5a2487304",
      name: "LinkedIn",
    },
    {
      icon: isDark ? "/x_dark.svg" : "/x.svg",
      link: "https://x.com/arjunBh200OK",
      name: "Twitter",
    },
    { icon: "/gmail.svg", link: "arjun12345bhandari@gmail.com", name: "Email" },
  ];
  return (
    <div className="border-b border-[#2a2a2bbe]">
      <Container>
        <div className="bg-background relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-0">
          {" "}
          <DotPattern
            glow={true}
            className={cn(
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 sm:gap-4 w-full sm:justify-between">
            <ScrollReveal className="relative flex flex-col items-center">
              <Image
                src="/myprofile.webp"
                alt="avatar"
                width={200}
                height={200}
                className="object-cover rounded-full corner-squircle shadow-[0px_0px_0.2px_#fff] w-32 h-32 sm:w-[200px] sm:h-[200px]"
              />

              <div className="flex gap-4 justify-center items-center mt-6">
                {socials.map((item) => (
                  <Tooltip key={item.name}>
                    <TooltipTrigger asChild>
                      <Link href={item.link}>
                        <Image
                          src={item.icon}
                          alt={`logo`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal
              delay={0.1}
              className="max-w-3xl text-center sm:text-left"
            >
              <h1 className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 w-full">
                <span className="text-black dark:text-white text-2xl sm:text-3xl">
                  Hi, I’m Arjun Bhandari —{" "}
                </span>
                a freelance full-stack developer
              </h1>

              <p className="text-neutral-500 mt-2 ">
                I build stuff focused on creating fast, reliable, and scalable
                applications using
              </p>
              <StaggerGroup className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-3 mt-1">
                {techStack.map((item, idx) => (
                  <StaggerItem key={item.name} className="flex items-center">
                    <div className="flex items-center gap-1 border border-dotted border-neutral-600 px-2 py-1 rounded-md">
                      <div className="relative h-5 w-5">
                        <Image
                          src={item.icon}
                          alt={`${item.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-foreground">
                        {item.name}
                      </span>
                    </div>

                    {/* Comma separator except after last item */}
                    {idx < techStack.length - 1 && (
                      <span className="mx-1 text-neutral-500"> ,</span>
                    )}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
};
