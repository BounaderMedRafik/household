import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import React from "react";
import Image from "next/image";
import AlgeriaMap from "@/public/images/countryOfDz.svg";
import { MyMovingCards } from "./MyMovingCards";
import StayAhead from "./StayAhead";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const statistics = [
  {
    numb: "2000+",
    label: "Total Contacts",
  },
  {
    numb: "580+",
    label: "Owners, Operators & Sponsors",
  },
  {
    numb: "1770+",
    label: "Investment Brokers",
  },
  {
    numb: "300+",
    label: "Mortgage Broker",
  },
];

const AlgeriaMaping = () => {
  return (
    <div className="w-full border-b border-b-black/20 ">
      <div
        className="border-x 
     border-x-black/20 max-w-7xl  mx-auto  "
      >
        <div className="py-10 p-8">
          <div className="flex  justify-between">
            <div className="text-xl md:text-3xl font-semibold w-1/2">
              We identify properties throughtout the nation that exhibit the
              greatest investment potential
            </div>
            <div>
              <Button variant="MyAtcButton">View all properties</Button>
            </div>
          </div>
          <div className=" block md:flex  justify-between mt-5">
            <div className=" w-full md:w-1/2">
              <Image className=" w-full " src={AlgeriaMap} alt="Algeria Map" />
            </div>
            <div className="grid grid-cols-2 h-0 gap-5 ">
              {statistics.map((index) => (
                <div
                  className="hover:bg-slate-50 transition-all p-10 rounded-md  cursor-default"
                  key={index.numb}
                >
                  <div className="text-5xl font-semibold">{index.numb}</div>
                  <div>{index.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-96 md:mt-0">
          <div className="p-8">
            <div className="text-xl flex items-center gap-2 md:text-3xl font-semibold justify-between">
              <div>Testimonials</div>
              <div>
                <Button variant="outlineDark">
                  <div className="flex items-center gap-2">
                    See all
                    <ArrowUpRight size={15} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <MyMovingCards speed="slow" items={testimonials} direction="right" />
        </div>
        <div>
          <StayAhead />
        </div>
      </div>
    </div>
  );
};

export default AlgeriaMaping;
