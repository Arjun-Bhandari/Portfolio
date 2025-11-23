import React from "react";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "../lib/utils";
import { Container } from "./index";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="border-b border-[#2a2a2bbe]">
      <Container>
        <div className="bg-background  relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden  ">
          {" "}
          <DotPattern
            className={cn(
              "[radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="flex items-center gap-4 w-full">
            <div className="relative h-50 w-50  ">
              <Image
                src="/myprofile.webp"
                alt="avatar"
                fill
                className="object-cover rounded-full corner-squircle shadow-[0px_0px_0.2px_#fff]"
              />
            </div>

            <h1 className="text-3xl">
              <span className="text-gray-400 text-4xl">Arjun Bhandari--</span>Freelancer,
              FullStack Dev
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};
