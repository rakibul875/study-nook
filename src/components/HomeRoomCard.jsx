import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import RoomCard from "./RoomCard";

const HomeRoomCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_UEL}/features`);
  const rooms = await res.json();

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0F172A]">
          Available Study Rooms
        </h2>

        <Link href={`/rooms`}>
          <button className="btn btn-outline border-none">
            View All <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}/>
        ))}
      </div>
    </div>
  );
};

export default HomeRoomCard;
