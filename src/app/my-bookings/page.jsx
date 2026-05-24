import NoDataFound from "@/components/NoDataFound";
import { auth } from "@/lib/auth";
import { Button, Table } from "@heroui/react";
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
  console.log(userBookingData);
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
          <div className="my-10">
            <Table variant="secondary">
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Team members"
                  className="min-w-[600px]"
                >
                  <Table.Header>
                    <Table.Column isRowHeader>Room Name</Table.Column>
                    <Table.Column>Booking Date</Table.Column>
                    <Table.Column>Booking Time</Table.Column>
                    <Table.Column>Status</Table.Column>
                    <Table.Column>Action</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {userBookingData.map((userBooking) => (
                      <Table.Row key={userBooking._id}>
                        <Table.Cell>{userBooking.roomName}</Table.Cell>
                        <Table.Cell>{userBooking.date}</Table.Cell>
                        <Table.Cell>{userBooking.timeSlot}</Table.Cell>
                        <Table.Cell>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium
                                ${
                                  userBooking.status === "confirmed"
                                    ? "bg-green-300 text-green-600"
                                    : userBooking.status === "cancelled"
                                      ? "bg-red-100 text-red-600"
                                      : "bg-gray-100 text-gray-500"
                                }
                               `}
                          >
                            {userBooking.status}
                          </span>
                        </Table.Cell>
                        <Table.Cell>
                          <Button variant="outline">Cancel</Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
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
