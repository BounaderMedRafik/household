import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const stuffs = [
  {
    title: "High-Yield Rental Properties",
    desc: "Invest in high-yield rental properties for steady income and growth.",
  },
  {
    title: "Commercial Real Estate Development",
    desc: "Explore exclusive commercial real estate projects for lucrative opportunities.",
  },
  {
    title: "Luxury Vacation Rentals",
    desc: "Invest in upscale vacation properties for high returns in prime destinations.",
  },
  {
    title: "Real Estate Investment Trust",
    desc: "Explore exclusive commercial real estate projects for lucrative opportunities.",
  },
];

const LimitedEdition = () => {
  return (
    <div className="w-full text-slate-50 bg-[#042826] py-10 p-8">
      <div className="text-5xl  mx-auto py-10 block border-b border-b-slate-50/20  md:flex w-full justify-between ">
        <div className="w-full">
          <div>
            Limited-edition <br /> investment prospects
          </div>
          <div className="text-lg mt-2 font-light md:w-[60ch] ">
            Curated investment opportunities for significant cash flow and
            long-term apperciation, backed by our 35+ years of exprience
          </div>
        </div>
        <div>
          <Button className="font-light" variant="outlineWhite">
            <div className="flex items-center gap-3">
              All investors <ArrowUpRight size={15} />
            </div>
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
        {stuffs.map((index) => (
          <li
            className="p-10 transition-all cursor-default rounded-md hover:-translate-y-1 hover:bg-slate-50/20"
            key={index.title}
          >
            <div className="text-4xl">{index.title}</div>
            <div>{index.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LimitedEdition;
