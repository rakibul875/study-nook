import NoDataFound from "@/components/NoDataFound";
import RoomCard from "@/components/RoomCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Study Nook - My Listing",
  description: "Beast Study Rooms",
};

const myListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const currentUserId = user?.id;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_UEL}/my-rooms/${currentUserId}`, {
    headers:{
      authorization: `bearer ${token}`
    },
  });
  const rooms = await res.json();
  const userId = rooms.userId;
  const currentUser = userId === currentUserId;
  const roomsLength = rooms?.length;
  console.log(roomsLength);
  return (
    <div className="container mx-auto mt-10">
      {roomsLength > 0 ? (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div>
          <NoDataFound />
        </div>
      )}
    </div>
  );
};

export default myListingsPage;
