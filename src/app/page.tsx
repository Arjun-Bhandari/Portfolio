import {
  Hero,
  Navbar,
  Exprience,
  Education,
  GithubContributions,
  Footer,
} from "@/src/components/index";
// Projects section is intentionally disabled — no standout project to feature yet.
// import { Projects } from "@/src/components/index";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Exprience />
      <Education />
      <GithubContributions />
      {/* <Projects/> */}
      <Footer />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6">
        <div className="h-full w-full border-x border-[#2a2a2bbe]" />
      </div>
    </div>
  );
}
