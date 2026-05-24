import BookNowCard from '@/components/BookNowCard';
import RoomsDetailsPage from '@/components/RoomsDetailsPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "Study Nook - Room Details",
  description: "Beast Study Rooms",
};

const RoomsDetails = async({params}) => {
    const {roomId}=await params

    const res=await fetch(`http://localhost:8000/rooms/${roomId}`)
    const data=await res.json()
    return (
        <div className=''>
            <div className="">
                <RoomsDetailsPage data={data}/>
               
            </div>
        </div>
    );
};

export default RoomsDetails;