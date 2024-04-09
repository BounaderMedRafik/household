"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight, Facebook, Instagram, Twitch } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MyLogo from "./MyLogo";

const Resources = [
  { name: "Create an account", link: "/create-an-account" },
  { name: "Why us?", link: "/why-us" },
  { name: "Blog posts", link: "/blog-posts" },
  { name: "Case studies", link: "/case-studies" },
];

const company = [
  { name: "Sitemap", link: "/sitemap" },
  { name: "Solutions", link: "/solutions" },
  { name: "About us", link: "/about-us" },
  { name: "Team", link: "/team" },
];

const support = [
  { name: "Help center", link: "/help-center" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact us", link: "/contact-us" },
  { name: "Process", link: "/process" },
];
const additionalLinks = [
  { name: "Privacy policy", link: "/privacy-policy" },
  { name: "Terms of services", link: "/terms-of-services" },
  { name: "Cookies settings", link: "/cookies-settings" },
];

const MyFooter = () => {
  const { toast } = useToast();
  const [guest, setGuest] = useState("?");
  return (
    <div className="p-10 bg-[#042826] text-slate-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-slate-50/20 py-8">
          <div className=" text-xl ">
            <MyLogo />
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li className="p-2 hover:bg-slate-50/20 cursor-pointer rounded-full transition-all justify-center items-center flex">
                <Facebook />
              </li>
              <li className="p-2 hover:bg-slate-50/20 cursor-pointer rounded-full transition-all justify-center items-center flex">
                <Instagram />
              </li>
              <li className="p-2 hover:bg-slate-50/20 cursor-pointer rounded-full transition-all justify-center items-center flex">
                <Twitch />
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-b border-b-slate-50/20 flex w-full  ">
          <div className="flex flex-col md:flex-row  md:items-center md:justify-between w-full ">
            <div className="text-2xl col-span-3 ">
              Global Wealth Creation Made Easy: Modern Real Estate Investment
              <div className="mt-5">
                <Button variant="MyDefault">Try for free</Button>
              </div>
            </div>
            <div className="cols-span-2">
              <div className="flex  gap-8 mt-5 md:mt-0">
                <div>
                  <div className="text-sm font-bold">Resources</div>
                  <div className="mt-5">
                    {Resources.map((index) => (
                      <div key={index.name}>
                        <Button
                          className="px-0 font-normal"
                          size="sm"
                          variant="link"
                        >
                          <Link href={index.link}>{index.name}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">
                    <div>Our company</div>
                  </div>
                  <div className="mt-5 ">
                    {company.map((index) => (
                      <div key={index.name}>
                        <Button
                          className="px-0 font-normal wf-"
                          size="sm"
                          variant="link"
                        >
                          <Link href={index.link}>{index.name}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">Support</div>
                  <div className="mt-5 ">
                    {support.map((index) => (
                      <div key={index.name}>
                        <Button
                          className="px-0 font-normal"
                          size="sm"
                          variant="link"
                        >
                          <Link href={index.link}>{index.name}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 flex lg:flex-row flex-col justify-between items-center  ">
          <div>
            <div>Subscribe to our newsletter</div>
            <div className="relative w-[350px] mt-2">
              <Input
                className="bg-white/20 text-xs focus:border-0 placeholder:text-xs text-white ring-0 border-0 placeholder:text-white/80 "
                placeholder="Your email adress"
              />
              <Button
                className="rounded-full absolute top-1/2 -translate-y-1/2 right-0.5"
                variant={"MyDefault"}
                size="sm"
                onClick={() => {
                  toast({
                    title: "Thank you!",
                    description:
                      "You have joined HouseHold newsletter, be prepared to be informed about anything new in the agency",
                  });
                }}
              >
                <ArrowUpRight />
              </Button>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {additionalLinks.map((index) => (
                <li key={index.name}>
                  <Button size="sm" variant="link" className="px-0 font-normal">
                    <Link href={index.link}>{index.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
