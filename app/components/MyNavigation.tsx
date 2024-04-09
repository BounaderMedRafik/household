import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import MyLogo from "./MyLogo";

const links = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Investors", href: "/investors" },
  { name: "Press", href: "/press" },
  { name: "How we work?", href: "/how-we-work" },
];

const MyNavigation = () => {
  return (
    <div className="w-full py-4  border-b-[1px] border-b-slate-50/20 fixed z-50 bg-[#042826]/50 backdrop-blur-lg   text-slate-50 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center mr-4">
          <div className="text-3xl font-semibold">
            <Link href="/">
              <img className="w-12" src="/mylogo.svg" alt="anything" />
            </Link>
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
