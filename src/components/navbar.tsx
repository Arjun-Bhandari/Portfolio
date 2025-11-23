import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Moon } from "lucide-react";
import { Container } from "@/src/components/index";
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
  return (
    <nav className="mt-4  border-t border-b border-[#2a2a2bbe]">
      <Container>
    <div className="flex items-center justify-between bg-dotted-spacing-4 bg-dotted-gray-200" >
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
            <div key={idx}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}

          <p>github</p>

          <button>
            <Moon size={16} />
          </button>
        </div>
        </div>
      </Container>
    </nav>
  );
};
