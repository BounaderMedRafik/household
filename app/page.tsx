import { Button } from "@/components/ui/button";
import Image from "next/image";
import MyHeroSec from "./components/MyHeroSec";
import StatisticsSection from "./components/StatisticsSection";
import WatchVideo from "./components/WatchVideo";
import MeetOurTeam from "./components/MeetOurTeam";
import LimitedEdition from "./components/LimitedEdition";

export default function Home() {
  return (
    <div className="">
      <MyHeroSec />
      <StatisticsSection />
      <WatchVideo />
      <MeetOurTeam />
      <LimitedEdition />
    </div>
  );
}
