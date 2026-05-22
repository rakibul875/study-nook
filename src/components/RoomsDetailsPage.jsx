"use client";
import Image from "next/image";
import React from "react";
import {
  FaUsers,
  FaMoneyBillWave,
  FaWifi,
  FaDesktop,
  FaVolumeMute,
  FaLayerGroup
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import BookNowCard from "./BookNowCard";

const RoomsDetailsPage = ({ data }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-[#eef2f3] to-[#e4efe9] p-4 lg:p-8 font-sans">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
        
        <div className="w-full lg:max-w-2xl bg-white rounded-[32px] p-6 shadow-xl border border-gray-100">
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-inner mb-6">
            <Image
              src={data?.imageUrl}
              alt={data?.name}
              fill
              sizes="(max-w-768px) 100vw, 650px"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
              <FaCircleCheck className="text-teal-600 text-xs" />
              <span className="text-[11px] font-semibold text-gray-700 tracking-wide">
                Premium Space
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {data?.name}
            </h1>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              {data?.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 py-4 border-b border-gray-100 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaLayerGroup className="text-gray-400 text-sm flex-shrink-0" />
              <span className="text-xs font-medium">Floor {data?.floor}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-6 text-gray-600">
              <FaUsers className="text-gray-400 text-sm flex-shrink-0" />
              <span className="text-xs font-medium">
                {data?.capacity} Persons
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <FaMoneyBillWave className="text-teal-600 text-sm flex-shrink-0" />
              <span className="text-xs">${data?.hourlyRate}/hr</span>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
              Available Amenities
            </h2>
            <div className="flex flex-wrap gap-2">
              {data?.amenities?.map((amenity, index) => {
                const lowerAmenity = amenity.toLowerCase();
                return (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    {lowerAmenity.includes("wifi") || lowerAmenity.includes("wi-fi") ? (
                      <FaWifi className="text-gray-500 text-xs" />
                    ) : lowerAmenity.includes("monitor") || lowerAmenity.includes("display") || lowerAmenity.includes("4k") ? (
                      <FaDesktop className="text-gray-500 text-xs" />
                    ) : lowerAmenity.includes("sound") || lowerAmenity.includes("proof") || lowerAmenity.includes("mute") ? (
                      <FaVolumeMute className="text-gray-500 text-xs" />
                    ) : (
                      <FaCircleCheck className="text-gray-400 text-xs" />
                    )}
                    {amenity}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[400px] lg:sticky lg:top-8">
          <BookNowCard data={data} />
        </div>

      </div>
    </div>
  );
};

export default RoomsDetailsPage;