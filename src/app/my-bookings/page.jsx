import { Button, Table } from "@heroui/react";
import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

const myBookingsPage = () => {
  return (
    <div className="container mx-auto mt-10">
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
      <div className="">
        <Table variant="secondary">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Room Name</Table.Column>
                <Table.Column>Booking Date</Table.Column>
                <Table.Column>Booking Time</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kate Moore</Table.Cell>
                  <Table.Cell>CEO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>kate@acme.com</Table.Cell>
                  <Table.Cell> <Button variant="outline">Cancel</Button> </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default myBookingsPage;
