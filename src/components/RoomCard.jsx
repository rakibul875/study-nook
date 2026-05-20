import React from "react";
import { FaMapMarkerAlt, FaUserFriends, FaWifi } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { LuProjector } from "react-icons/lu";
import Image from "next/image";
import { FaChalkboard } from "react-icons/fa6";

const RoomCard = ({ room }) => {
 
  const formatAmenity = (item) => {
    if (item === "wifi") return "Wi-Fi";
    if (item === "projector") return "Projector";
    if (item === "whiteboard") return "Whiteboard";
    return item;
  };
  const amenityIcon = (item) => {
    if (item === "wifi") return <FaWifi />;
    if (item === "projector") return <LuProjector />;
    if (item === "whiteboard") return <FaChalkboard />;
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">

      
      <div className="relative">
        <Image
          src={room.imageUrl}
          alt={room.name}
          height={500}
          width={300}
          className="w-full h-52 object-cover"
        />

       
        <div className="absolute top-3 right-3 bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full font-medium">
          ${room.hourlyRate}/hr
        </div>
      </div>

      <div className="p-4 space-y-3">

        
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <MdMeetingRoom className="text-gray-500" />
            {room.name}
          </h2>

          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
            <FaUserFriends />
            {room.capacity}
          </span>
        </div>

       
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaMapMarkerAlt />
          Floor {room.floor}
        </p>

       
        <p className="text-xs text-gray-400 line-clamp-2">
          {room.description}
        </p>

    
        <div className="flex flex-wrap gap-2">
          {room.amenities?.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {amenityIcon(item)}
              {formatAmenity(item)}
            </span>
          ))}
        </div>

        
        <button className="w-full border border-teal-500 text-teal-600 py-2 rounded-full text-sm hover:bg-teal-50 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;