import Banner from "@/components/Banner";
import HomeRoomCard from "@/components/HomeRoomCard";

import Status from "@/components/Status";
import WheyStudy from "@/components/WheyStudy";

import React from "react";

export const metadata = {
  title: "Study Nook - Home",
  description: "Beast Study Rooms",
};

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HomeRoomCard />
      <WheyStudy />
      <Status />
    </div>
  );
};

export default HomePage;
