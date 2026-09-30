"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./index";
import { useTheme } from "../hooks/use-theme";

export const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const socials = [
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
    {
      icon: "/gmail.svg",
      link: "mailto:arjun12345bhandari@gmail.com",
      name: "Email",
    },
  ];

  return (
    <footer className="border-t border-[#2a2a2bbe]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pt-8 pb-4 sm:pr-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
           
            <div className='p-2'>
             
              <p className="italic font-serif text-lg text-neutral-500 mt-0.5">
               Let's Make it happen
              </p>
              <p className='italic font-serif text-lg text-neutral-500 mt-0.5'>Contact me</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Contact
            </span>
            <div className="flex items-center gap-4">
              {socials.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  aria-label={item.name}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-1 sm:gap-0 pb-6 text-center sm:text-left">
          <p className="text-xs text-neutral-500 p-2">
            © {year} Arjun Bhandari. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 tabular-nums pr-2">
            Local Time {time ? `${time} IST ` : " "}
          </p>
        </div>
      </Container>
    </footer>
  );
};
