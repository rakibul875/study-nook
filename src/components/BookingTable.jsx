"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";

const BookingTable = ({ userBookingData }) => {
  const [bookings, setBookings] = useState(userBookingData);

  const handleCancel = async (id) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_UEL}/bookings/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${tokenData.token}`,
          },
          body: JSON.stringify({ status: "cancelled" }),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Booking cancelled successfully!");

        const updated = bookings.map((b) =>
          b._id === id ? { ...b, status: "cancelled" } : b
        );

        setBookings(updated);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-6 px-4 md:px-0 flex flex-col gap-4">
      {bookings?.map((booking, index) => {
        const isConfirmed = booking.status === "confirmed";
        const isCancelled = booking.status === "cancelled";

        return (
          <motion.div
            key={booking._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5 flex flex-col md:grid md:grid-cols-12 md:items-center justify-between gap-4 md:gap-6 hover:bg-slate-50/60 transition-all duration-300"
          >
         
            <div className="flex items-center gap-3 md:gap-4 md:col-span-4 pb-3 md:pb-0 border-b border-dashed border-slate-100 md:border-none">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="relative w-14 h-12 md:w-16 md:h-14 rounded-xl overflow-hidden border border-slate-100 bg-slate-100 shrink-0 shadow-sm"
              >
                {booking.imageUrl ? (
                  <Image
                    src={booking.imageUrl}
                    fill
                    sizes="(max-width: 768px) 56px, 64px"
                    alt={booking.roomName || "Room Image"}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] font-medium text-slate-400 flex items-center justify-center h-full">
                    No Img
                  </span>
                )}
              </motion.div>

              <div className="min-w-0">
                <h4 className="font-bold text-[#0F172A] text-xs md:text-sm lg:text-base leading-tight truncate">
                  {booking.roomName}
                </h4>
                <p className="text-[11px] md:text-xs text-slate-400 mt-0.5 md:mt-1">
                  {booking.floorInfo || "Floor details pending"}
                </p>
              </div>
            </div>

  
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 md:grid-cols-4 md:col-span-6 items-center">
              <div>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase md:hidden">
                  Date
                </p>
                <p className="text-xs md:text-sm font-semibold text-slate-600">
                  {booking.date}
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase md:hidden">
                  Time
                </p>
                <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[11px] md:text-xs font-semibold">
                  {booking.timeSlot}
                </span>
              </div>

              <div>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase md:hidden">
                  Cost
                </p>
                <p className="text-xs md:text-sm font-bold text-[#0F172A]">
                  {booking.totalCost
                    ? `$${Number(booking.totalCost).toFixed(2)}`
                    : "—"}
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase md:hidden">
                  Status
                </p>

                <motion.span
                  animate={
                    isConfirmed
                      ? { scale: [1, 1.05, 1] }
                      : isCancelled
                      ? { opacity: 0.7 }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] md:text-xs font-bold border capitalize ${
                    isConfirmed
                      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                      : isCancelled
                      ? "bg-red-50 text-red-500 border-red-100"
                      : "bg-gray-50 text-gray-500 border-gray-100"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isConfirmed
                        ? "bg-emerald-500"
                        : isCancelled
                        ? "bg-red-500"
                        : "bg-gray-400"
                    }`}
                  />
                  {booking.status}
                </motion.span>
              </div>
            </div>

      
            <div className="flex md:col-span-2 md:justify-end pt-3 md:pt-0 border-t md:border-none border-slate-100">
              {!isCancelled ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCancel(booking._id)}
                  className="w-full md:w-auto px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-bold rounded-xl transition-all"
                >
                  Cancel
                </motion.button>
              ) : (
                <button
                  disabled
                  className="w-full md:w-auto px-4 py-2 border border-slate-200 text-slate-400 text-xs font-semibold rounded-xl bg-slate-50 cursor-not-allowed"
                >
                  Cancelled
                </button>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BookingTable;