"use client";

import Image from "next/image";
import {LayoutGridDemo} from "@/components/UseLayoutGrid";
import {Experience} from "@/components/Experience";
import {DockDemo} from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="w-full">
        <div className="min-h-screen">
          <LayoutGridDemo />
        </div>
        <div className="px-4 sm:px-8 md:px-14 mt-8">
          <Experience />
          <div className="mt-8">
            <DockDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
