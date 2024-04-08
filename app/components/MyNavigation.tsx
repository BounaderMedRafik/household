import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Investors", href: "/investors" },
  { name: "Press", href: "/press" },
  { name: "How we work?", href: "/how-we-work" },
];

const MyNavigation = () => {
  return (
    <div className="w-full py-4 border-b border-b-slate-50 fixed bg-[#042826]   text-slate-50 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center mr-4">
          <div className="text-3xl font-semibold">
            <Link href="/">HouseHold</Link>
          </div>
          <ul className="hidden md:flex ml-7 items-center justify-center">
            {links.map((index) => (
              <li key={index.name}>
                <Button variant="link">
                  <Link href={index.href}>{index.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button variant="outlineWhite">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default MyNavigation;
