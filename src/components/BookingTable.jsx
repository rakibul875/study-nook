"use client";

import { Button, Table } from "@heroui/react";
import React, { useState } from "react";

const BookingTable = ({ userBookingData }) => {
  const [bookings, setBookings] = useState(userBookingData);

  const handleCancel = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        const updated = bookings.map((booking) =>
          booking._id === id ? { ...booking, status: "cancelled" } : booking,
        );
        setBookings(updated);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="my-10">
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Room Name</Table.Column>
              <Table.Column>Date</Table.Column>
              <Table.Column>Time</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>
              {bookings.map((booking) => (
                <Table.Row key={booking._id}>
                  <Table.Cell>{booking.roomName}</Table.Cell>
                  <Table.Cell>{booking.date}</Table.Cell>
                  <Table.Cell>{booking.timeSlot}</Table.Cell>

                  <Table.Cell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        booking.status === "confirmed"
                          ? "bg-green-300 text-green-600"
                          : booking.status === "cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    {booking.status === "cancelled" ? (
                      "__"
                    ) : (
                      <Button
                        variant="outline"
                        disabled={booking.status === "cancelled"}
                        onClick={() => handleCancel(booking._id)}
                      >
                        Cancel
                      </Button>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default BookingTable;
