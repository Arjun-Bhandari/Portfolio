"use client";

import Image from "next/image";
import { Container } from "./index";
import { ScrollReveal } from "./ui/scroll-reveal";
import { useTheme } from "../hooks/use-theme";

const GITHUB_USERNAME = "Arjun-Bhandari";

export const GithubContributions = () => {
  const { isDark } = useTheme();
  const color = isDark ? "39d353" : "216e39";

  return (
    <div className="border-b border-[#2a2a2bbe] py-8">
      <Container>
        <section className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl font-bold p-2">Contributions</h1>
          <ScrollReveal className="border border-neutral-700/60 p-3 sm:p-4 overflow-x-auto">
            <Image
              src={`https://ghchart.rshah.org/${color}/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              width={720}
              height={112}
              unoptimized
              className="w-full min-w-[600px] h-auto"
            />
          </ScrollReveal>
        </section>
      </Container>
    </div>
  );
};
