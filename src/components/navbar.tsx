"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/index";
import { AnimatedThemeToggler } from "./ui/animated-theme-togger";
import { useTheme } from "../hooks/use-theme";

export const Navbar = () => {
  const navItem = [
    {
      title: "Portfolio",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  const { isDark } = useTheme();
  return (
    <nav className="mt-4  border-t border-b border-[#2a2a2bbe]">
      <Container>
        <div className="flex items-center justify-between  ">
          <div className="relative h-12 w-12">
            <Image
              src="/myprofile.webp"
              alt=""
              fill
              className="object-cover corner-squircle rounded-full"
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            {navItem.map((item, idx) => (
              <div key={idx} className="hover:text-neutral-400">
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
<div className=" rounded-full corner-squircle p-2 flex justify-center items-center hover:bg-neutral-200 dark:hover:bg-[#2a2a2bbe] ">
            <Link target="_blank" href={"https://github.com/Arjun-Bhandari/Portfolio "}>
             
                <Image
                  src={isDark?"/github-dark.svg":"/github-light.svg"}
                  alt="github-logo"
                  width={18}
                  height={18}
                />
          
               
          
            </Link>
        </div>
<div className=" rounded-full corner-squircle p-2 flex justify-center items-center hover:bg-neutral-200 dark:hover:bg-[#2a2a2bbe] "> 
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
