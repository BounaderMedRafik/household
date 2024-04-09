"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Divide } from "lucide-react";
import React, { useState } from "react";

const investments = [
  {
    pic: "/houses/house1.jpg",
    title: "Unveiling the Top 5 Emerging Real Estate Markets of 2024",
    desc: "The world of real estate is constantly evolving, and as we step into 2023, new emerging markets are capturing the attention of investors and homebuyers alike. These burgeoning destinations offer exciting opportunities for growth. However, it's important to note that the information provided in the user's statement is not entirely accurate. The search results indicate that the real estate market trends for 2023 and 2024 are more nuanced and varied. Let's explore some key insights from the search results to get a better understanding of the current real estate landscape.",
  },
  {
    pic: "/houses/house2.jpg",
    title: "The Impact of Artificial Intelligence on the Future of Work",
    desc: "Artificial intelligence (AI) is revolutionizing the way we work and is expected to have a significant impact on the future of various industries. While the user's statement suggests a general understanding of AI's influence, the search results reveal a more nuanced and complex landscape. Let's delve into the search results to gain a deeper understanding of the implications of AI on the future of work.",
  },

  {
    pic: "/houses/house3.jpg",
    title: "Exploring the Benefits of Meditation for Mental Health",
    desc: "Meditation has gained significant popularity in recent years as a practice that promotes mental well-being. While the user's statement acknowledges the benefits of meditation, the search results provide a more comprehensive view of its advantages for mental health. Let's explore the search results to gain a deeper understanding of the positive impact meditation can have on our mental well-being.",
  },
];

const rents = [
  {
    pic: "/houses/house4.jpg",
    title: "The Rising Trend of Renting in Urban Areas",
    desc: "Renting has become an increasingly popular choice for individuals and families in urban areas. While the user's request focuses on the topic of rent, the search results provide a more comprehensive understanding of the reasons behind this rising trend. Let's explore the search results to gain insights into the factors contributing to the popularity of renting in urban areas.",
  },

  {
    pic: "/houses/house5.jpg",
    title: "The Impact of Rent Control Policies on Housing Affordability",
    desc: "Rent control policies have been implemented in various cities and regions to address housing affordability concerns. While the user's statement acknowledges the topic of rent, the search results provide a deeper analysis of the impact of rent control policies on housing affordability. Let's delve into the search results to gain a better understanding of how these policies affect rental prices and access to affordable housing.",
  },
];

const renova = [
  {
    pic: "/houses/house6.jpg",
    title: "The Importance of Planning in Renovation Projects",
    desc: "Renovation projects require careful planning to ensure successful outcomes. While the user's request focuses on the topic of renovation, the search results provide valuable insights into the significance of planning in renovation projects. Let's explore the search results to gain a deeper understanding of the importance of planning in achieving successful renovations.",
  },

  {
    pic: "/houses/house7.jpg",
    title: "Renovation vs. Remodeling: Understanding the Difference",
    desc: "Renovation and remodeling are terms often used interchangeably, but they have distinct meanings. While the user's statement acknowledges the topic of renovation, the search results provide a clearer understanding of the difference between renovation and remodeling. Let's delve into the search results to gain insights into the nuances of these terms and their implications for home improvement projects.",
  },
  {
    pic: "/houses/house8.jpg",
    title: "Tips for a Successful Home Renovation Project",
    desc: "Home renovation projects can be complex and challenging, but with proper planning and execution, they can lead to remarkable transformations. While the user's request focuses on the topic of renovation, the search results provide valuable tips and insights for ensuring a successful home renovation project. Let's explore the search results to gain a deeper understanding of the key factors to consider when undertaking a renovation.",
  },

  {
    pic: "/houses/house9.jpg",
    title: "The Role of Contractors in Home Renovation",
    desc: "Contractors play a crucial role in home renovation projects, bringing expertise, skills, and resources to ensure successful outcomes. While the user's statement acknowledges the topic of renovation, the search results provide a deeper analysis of the role of contractors in the renovation process. Let's delve into the search results to gain insights into the benefits of hiring contractors and how they contribute to the success of home renovation projects.",
  },
];

const StayAhead = () => {
  const [category, setCategory] = useState("investment");

  return (
    <div>
      <div className="p-8">
        <div className="text-xl flex items-center gap-2 md:text-3xl font-semibold justify-between">
          <div className="w-1/2">
            Stay Ahead with Valuable Investment Insights.
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Button
              size="sm"
              onClick={() => setCategory("investment")}
              variant="outlineDark"
            >
              <div className="flex items-center gap-2">Investment</div>
            </Button>
            <Button
              size="sm"
              onClick={() => setCategory("renovation")}
              variant="outlineDark"
            >
              <div className="flex items-center gap-2">Renovation</div>
            </Button>
            <Button
              size="sm"
              onClick={() => setCategory("rental")}
              variant="outlineDark"
            >
              <div className="flex items-center gap-2">Rental</div>
            </Button>
          </div>
        </div>
        <div>
          {category == "investment" ? (
            <div>investment</div>
          ) : category == "renovation" ? (
            <div>renovation</div>
          ) : category == "rental" ? (
            <div>rental</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StayAhead;
