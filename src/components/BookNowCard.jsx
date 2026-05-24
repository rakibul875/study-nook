"use client";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCalendarDays, FaStar } from "react-icons/fa6";
import { EditPage } from "./EditPage";
import { DeletePage } from "./Deletepage";
import toast from "react-hot-toast";

const BookNowCard = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const currentUserId = user?.id;
  const userId = data.userId;
  const currentUser = currentUserId === userId;
  const hourlyRate = data?.hourlyRate;

  const [bookingDate, setBookingDate] = useState("2026-05-21");
  const [selectedTime, setSelectedTime] = useState({
    time: "09:00 - 11:00",
    hours: 2,
  });

  const timeSlots = [
    { time: "09:00 - 11:00", hours: 2 },
    { time: "11:00 - 13:00", hours: 2 },
    { time: "14:00 - 16:00", hours: 2 },
    { time: "16:00 - 18:00", hours: 2 },
  ];
  const hour = selectedTime.hours;
  const totalAmount = hourlyRate * hour;
  const router = useRouter();
  const handleBookingSubmit = async () => {
    if (!user) {
      router.push("/login");
      return;
    }
    const bookingDetails = {
      roomId: data?._id,
      roomName: data?.name,
      date: bookingDate,
      timeSlot: selectedTime.time,
      totalHours: hour,
      totalPrice: totalAmount,
      userId: user?.id,
      userEmail: user?.email,
      status: "confirmed",
      imageUrl: data.imageUrl,
    };

    try {
      const res = await fetch("http://localhost:8000/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });
      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }
      console.log("Booking data:", result);
      toast.success(
        `Booking confirmed for ${bookingDetails.timeSlot} on ${bookingDetails.date}`,
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-[400px] bg-white rounded-[32px] p-6 shadow-xl border border-gray-100 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-gray-900">
            ${hourlyRate}
          </span>
          <span className="text-gray-500 text-sm">/ hour</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-gray-800">
          <FaStar className="text-cyan-700 text-sm" />
          <span>4.9</span>
          <span className="text-gray-400 font-normal">(124 reviews)</span>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Reservation Date
        </label>
        <div className="relative flex items-center">
          <FaCalendarDays className="absolute left-4 text-gray-400 text-base pointer-events-none" />
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:border-cyan-700 transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
          Time Slots
        </label>
        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((slot) => {
            const isSelected = selectedTime.time === slot.time;
            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={`py-3 rounded-2xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? "border-cyan-700 bg-cyan-50/30 text-cyan-800 shadow-sm"
                    : "border-gray-100 bg-gray-50/50 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50/60 rounded-2xl p-4 mb-6 border border-gray-50">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <span>
            ${hourlyRate} * {hour} hours
          </span>
          <span className="font-medium text-gray-800">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200/60">
          <span className="text-sm font-bold text-gray-900">Total (USD)</span>
          <span className="text-sm font-bold text-gray-900">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleBookingSubmit}
        className="w-full bg-[#006677] hover:bg-[#005564] text-white font-bold py-4 rounded-2xl transition-all text-sm shadow-md shadow-cyan-900/10 active:scale-[0.99]"
      >
        Book Now
      </button>
      <div className="">
        {currentUser ? (
          <div className="flex items-center mt-5 gap-2 justify-center">
            <EditPage data={data} />
            <DeletePage data={data} />
          </div>
        ) : (
          <p className="text-center text-[11px] text-gray-400 font-medium mt-3">
            You won`t be charged yet
          </p>
        )}
      </div>
    </div>
  );
};

export default BookNowCard;
