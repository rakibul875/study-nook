import RoomCard from "@/components/RoomCard";
import React from "react";

const RoomsPage = async () => {
  const res = await fetch("http://localhost:8000/rooms");
  const data = await res.json();

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
