import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
const stats = [
  { number: "104M", desc: "Property Value Funded" },
  { number: "281", desc: "Properties Funded" },
  { number: "241M", desc: "Made to our partners" },
  { number: "135M", desc: "Company Funding" },
];

const spons = [
  "/spons/mandiri.svg",
  "/spons/bankofamerica.svg",
  "/spons/Tandy.svg",
  "/spons/EXnational.svg",
];
const StatisticsSection = () => {
  return (
    <div className="w-full bg-[#CBE9D2]  p-10 px-16">
      <div>
        <ul className=" block space-y-8 md:space-y-0 md:flex items-center border-b py-10 border-b-black/20">
          {stats.map((index) => (
            <li
              key={index.number}
              className="w-full block md:flex flex-col justify-center items-center"
            >
              <div className="text-5xl font-bold">{index.number}</div>
              <div>{index.desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-5xl py-10 block   md:flex w-full justify-between ">
          <div className="w-full">
            <div>Trusted by investors</div>
            <div className="text-lg font-light md:w-[60ch] ">
              Arrived is revolutionizing real estate investing, backed by $34
              million in equity financing and over $100 million in debt
              financing
            </div>
          </div>
          <div>
            <Button className="font-light" variant="outlineDark">
              <div className="flex items-center gap-3">
                All investors <ArrowUpRight size={15} />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-2  md:flex items-center between">
          {spons.map((index) => (
            <li
              className="flex items-center 
             justify-center"
              key={index}
            >
              <img className="w-full md:w-1/2" src={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatisticsSection;
