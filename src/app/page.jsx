import Banner from '@/components/Banner';
import Status from '@/components/Status';
import WheyStudy from '@/components/WheyStudy';
import { Button } from '@heroui/react';
import React from 'react';

const HomePage = () => {
  return (
    <div>
     <Banner/>
     <WheyStudy/>
     <Status/>
    </div>
  );
};

export default HomePage;