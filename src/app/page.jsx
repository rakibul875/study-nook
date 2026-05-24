import Banner from '@/components/Banner';
import HomeRoomCard from '@/components/HomeRoomCard';
import RoomCard from '@/components/RoomCard';
import Status from '@/components/Status';
import WheyStudy from '@/components/WheyStudy';
import { Button } from '@heroui/react';
import React from 'react';

const HomePage = () => {
  return (
    <div>
     <Banner/>
     <HomeRoomCard/>
     <WheyStudy/>
     <Status/>
    </div>
  );
};

export default HomePage;