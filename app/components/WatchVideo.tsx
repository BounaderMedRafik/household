import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const WatchVideo = () => {
  return (
    <div className="flex ">
      <div className="w-full md:w-1/2 p-10 h-[50vh]">
        <div className="text-5xl">
          There has to be more effective approach to real estate investment.
        </div>
        <div className=" mt-5 font-light">
          We aim to enhance the accessibility of wealth creation through rental
          homes and cavation rentals. Our strategy involves streamlining the
          process and reducing the initial costs involved
        </div>
        <div>
          <Button variant="outlineDark" className="mt-5">
            Watch video
          </Button>
        </div>
      </div>
      <div className="w-1/2 bg-[#F4F3B2]  hidden p-24 md:flex ">
        <div className="   ring-8 rounded-full aspect-square p-24 ring-slate-50 h-full w-full ">
          <div className="rounded-full bg-[url('/ppl.svg')] bg-center bg-cover relative flex justify-center items-center ring-4 h-full w-full ring-slate-50 ">
            <Button className="shadow-xl" size="circle" variant="outline">
              HouseHold
            </Button>
            <img
              src="/ppl/mohamed.jpg"
              className="aspect-square -top-[11%] object-cover rounded-full absolute h-44"
              alt=""
            />
            <img
              src="/ppl/conor.jpg"
              className="aspect-square -right-[11%] object-cover rounded-full absolute h-44"
              alt=""
            />
            <img
              src="/ppl/someone.jpg"
              className="aspect-square -bottom-[11%] object-cover rounded-full absolute h-44"
              alt=""
            />
            <img
              src="/ppl/cristina.jpg"
              className="aspect-square -left-[11%] object-cover rounded-full absolute h-44"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
