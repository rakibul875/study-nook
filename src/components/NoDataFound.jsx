import React from "react";
import { CiLock } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { MdSearchOff } from "react-icons/md";

const NoDataFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md text-center">
        
        <div className="flex justify-center mb-6">
          <div className="bg-cyan-50 p-6 rounded-2xl relative">
            <MdSearchOff className="text-5xl font-bold text-cyan-300 animate-bounce" />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Looking a bit empty here
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Your schedule is currently a clean slate. Ready to find your next
          favorite focused nook and get some serious work done?
        </p>

        <div className="flex justify-center gap-3 mb-6">
          <button className="bg-teal-500 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-teal-600 transition">
            Browse Rooms
          </button>
          <button className="border px-5 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition">
            View Past Bookings
          </button>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <div className="flex items-center gap-1">
            <FiZap /> Instant Book
          </div>
          <div className="flex items-center gap-1">
            <CiLock /> Premium Access
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;