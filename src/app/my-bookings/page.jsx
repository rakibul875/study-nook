import BookingTable from "@/components/BookingTable";
import NoDataFound from "@/components/NoDataFound";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

const myBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;

  const res = await fetch(`http://localhost:8000/bookings/${userId}`);
  const userBookingData = await res.json();
  const userDataLength = userBookingData.length;

  return (
    <div className="container mx-auto mt-10">
      {userDataLength > 0 ? (
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-4xl font-bold text-gray-500">My Bookings</h1>
              <p className="text-lg text-gray-400">
                Manage your upcoming and past study sessions.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="btn btn-soft rounded-full">
                <AiOutlineAlignCenter />
                Filter
              </button>
              <button className="btn btn-soft rounded-full">
                <FaDownload /> Export
              </button>
            </div>
          </div>
          <BookingTable userBookingData={userBookingData}/>
        </div>
      ) : (
        <div>
          <NoDataFound />
        </div>
      )}
    </div>
  );
};

export default myBookingsPage;
