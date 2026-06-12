"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUserFriends, FaWifi } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { LuProjector } from "react-icons/lu";
import { FaChalkboard } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={room.imageUrl}
            alt={room.name}
            height={500}
            width={300}
            className="w-full h-52 object-cover"
          />
        </motion.div>

        <div className="absolute top-3 right-3 bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full font-medium shadow">
          ${room.hourlyRate}/hr
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
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

        <p className="text-sm text-gray-500 line-clamp-2">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {room.amenities?.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {amenityIcon(item)}
              {formatAmenity(item)}
            </motion.span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/rooms/${room._id}`} className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-teal-500 text-teal-600 py-2 rounded-full text-sm font-medium hover:bg-teal-50 transition"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RoomCard;