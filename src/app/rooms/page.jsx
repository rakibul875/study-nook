import NoDataFound from "@/components/NoDataFound";
import RoomCard from "@/components/RoomCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Study Nook - Rooms",
  description: "Beast Study Rooms",
};

const RoomsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const minRate = params?.minRate || "";
  const maxRate = params?.maxRate || "";
  const amenities = params?.amenities || "";

  const queryUrl = `${process.env.NEXT_PUBLICK_UEL}/rooms?search=${search}&minRate=${minRate}&maxRate=${maxRate}&amenities=${amenities}`;

  const res = await fetch(queryUrl, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="container mx-auto my-5 px-4">
      <form
        method="GET"
        className="bg-white shadow-md rounded-2xl md:rounded-full p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border border-gray-100 max-w-5xl mx-auto"
      >
        <div className="flex flex-col flex-1 px-3 py-2 md:py-0 border-b border-gray-100 md:border-b-0">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Search Name
          </label>

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="enter title"
            className="text-sm text-gray-700 outline-gray-200 p-2 rounded-full bg-gray-100 placeholder-gray-400 w-full"
          />
        </div>

        <div className="hidden md:block h-8 w-[1px] bg-gray-200"></div>

        <div className="flex flex-col px-3 py-2 md:py-0 border-b border-gray-100 md:border-b-0">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Price ($)
          </label>

          <div className="flex items-center gap-2">
            <input
              type="number"
              name="minRate"
              defaultValue={minRate}
              placeholder="Min"
              className="text-sm text-gray-700 outline-gray-200 bg-gray-100 p-2 rounded-full placeholder-gray-400 w-full md:w-16"
            />

            <span className="text-gray-300">|</span>

            <input
              type="number"
              name="maxRate"
              defaultValue={maxRate}
              placeholder="Max"
              className="text-sm outline-gray-200 bg-gray-100 p-2 rounded-full text-gray-700 placeholder-gray-400 w-full md:w-16"
            />
          </div>
        </div>

        <div className="hidden md:block h-8 w-[1px] bg-gray-200"></div>

        <div className="flex flex-col flex-1 px-3 py-2 md:py-0 border-b border-gray-100 md:border-b-0 mb-2 md:mb-0">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Amenities
          </label>

          <input
            type="text"
            name="amenities"
            defaultValue={amenities}
            placeholder="WiFi, AC, Projector"
            className="text-sm text-gray-700 outline-gray-200 bg-gray-100 p-2 rounded-full placeholder-gray-400 w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-[#006677] hover:bg-[#004d5a] text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 text-center w-full md:w-auto"
          >
            Apply Filters
          </button>

          {(search || minRate || maxRate || amenities) && (
            <Link
              href={"/rooms"}
              className="h-11 px-3 flex items-center justify-center text-xs font-medium text-gray-500 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all"
            >
              <p>Reset</p>
            </Link>
          )}
        </div>
      </form>

      {data.length == 0 ? (
        <NoDataFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
