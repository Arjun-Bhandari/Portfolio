"use client";

import Image from "next/image";
import {LayoutGridDemo} from "@/components/UseLayoutGrid";
import {Experience} from "@/components/Experience";
import {DockDemo} from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-black">
      <div className="w-full">
        <LayoutGridDemo />
        <div className="pl-14 pr-14">
        <Experience />
        <DockDemo />
        </div>
      </div>
    </main>
  );
}
