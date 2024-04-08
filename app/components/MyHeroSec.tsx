import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

const MyHeroSec = () => {
  return (
    <div className="h-[85vh] pb-52 gap-8 bg-[url('/HeroPageBG.svg')] flex-col  bg-center bg-no-repeat flex justify-center items-center text-slate-50 bg-[#042826]">
      <div className=" text-2xl md:text-7xl max-w-sm md:max-w-3xl text-center  ">
        <span className="font-bold relative">
          Global Wealth{" "}
          <Star
            size={25}
            fill="white"
            className=" hidden md:block absolute -top-[3%] -left-[3%] rotate-45 "
          />
        </span>{" "}
        Creation Made Easy: Modern Real Estate Investment
      </div>
      <div>
        <Button variant="MyDefault">Get Started</Button>
      </div>
    </div>
  );
};

export default MyHeroSec;
