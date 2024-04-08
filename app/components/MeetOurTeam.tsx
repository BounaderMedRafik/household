import { Quote } from "lucide-react";
import React from "react";

const team = [
  {
    name: "Malak smaili",
    role: "Head of investment at BQ",
    pic: "/ppl/mohamed.jpg",
    quote:
      "Thanks to HouseHold, real estate is a breeze! the user friendly platform and expert guidance have made it incredibly easy for me to build my portfolio. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Marketing Manager at XYZ Company",
    pic: "/ppl/conor.jpg",
    quote:
      "HouseHold has revolutionized the way I invest in real estate. The platform's intuitive interface and comprehensive tools have helped me achieve my financial goals. I can't recommend it enough!",
  },
  {
    name: "Emily Johnson",
    role: "Entrepreneur and Investor",
    pic: "/ppl/cristina.jpg",
    quote:
      "As an entrepreneur, HouseHold has been a game-changer for me. The platform's robust features and personalized guidance have empowered me to make informed investment decisions. It's a must-have tool for anyone looking to grow their wealth through real estate.",
  },
  {
    name: "David Thompson",
    role: "Financial Analyst at ABC Bank",
    pic: "/ppl/someone.jpg",
    quote:
      "HouseHold has simplified the real estate investment process for me. The platform's comprehensive analytics and expert recommendations have helped me optimize my investment portfolio. I highly endorse HouseHold for both new and experienced investors.",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="w-full p-10 py-24">
      <div className="container mx-auto p-5 ">
        <div className="text-5xl text-center">Meet our team</div>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-3 mt-5  max-w-6xl mx-auto">
          {team.map((index) => (
            <li className="bg-slate-50  rounded-md p-10" key={index.name}>
              <div>
                <div className="flex justify-between items-center">
                  <img
                    src={index.pic}
                    className="aspect-square object-cover rounded-full w-14"
                  />
                  <div className="text-end font-semibold">
                    {index.name}
                    <div className="font-light text-sm">{index.role}</div>
                  </div>
                </div>
                <div className="mt-5 ">
                  <Quote size={50} fill="black" />
                  <div className="mt-3">{index.quote}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeetOurTeam;
