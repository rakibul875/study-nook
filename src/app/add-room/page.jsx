"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Input, Label, TextArea, TextField } from "@heroui/react";
import React, { useState } from "react";

const AddRoomsPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value],
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.amenities = selectedAmenities;
    data.userEmail=user?.email;
    data.userId=user?.id

    const res = await fetch("http://localhost:8000/rooms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const roomData = await res.json();
      alert('Room Add Successfully')
  
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-xl">
        <div className="text-center mb-4">
          <span className="px-4 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">
            Room details saved
          </span>
        </div>

        <Card className="p-8 rounded-2xl shadow-md bg-white">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Add New Room</h2>
              <p className="text-sm text-gray-400">
                Configure your study nook with precision and atmosphere.
              </p>
            </div>

          
            <TextField name="name" isRequired>
              <Label>Room Name</Label>
              <Input placeholder="e.g. The Silicon Library" className="rounded-full bg-gray-100 w-full" />
            </TextField>

            
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the atmosphere and unique features..."
                className="rounded-xl bg-gray-100"
              />
            </TextField>

            
            <div className="grid grid-cols-2 gap-4">
              <TextField name="floor" isRequired>
                <Label>Floor</Label>
                <Input placeholder="4" className="rounded-full bg-gray-100" />
              </TextField>

              <TextField name="hourlyRate" isRequired>
                <Label>Hourly Rate ($)</Label>
                <Input placeholder="25" className="rounded-full bg-gray-100" />
              </TextField>

              <TextField name="capacity" isRequired>
                <Label>Capacity</Label>
                <Input placeholder="6" className="rounded-full bg-gray-100" />
              </TextField>

              <TextField name="imageUrl" isRequired>
                <Label>Room Image URL</Label>
                <Input placeholder="https://..." className="rounded-full bg-gray-100" />
              </TextField>
            </div>

            
            <div>
              <Label>Amenities</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  { label: "Wi-Fi", value: "wifi" },
                  { label: "Whiteboard", value: "whiteboard" },
                  { label: "Projector", value: "projector" },
                  { label: "Quiet Zone", value: "quiet_zone" },
                  { label: "Power Outlets", value: "power_outlets" },
                  { label: "Air Conditioning", value: "ac" },
                ].map((item) => {
                  const isSelected = selectedAmenities.includes(item.value);

                  return (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => toggleAmenity(item.value)}
                      className={`px-3 py-1 rounded-full text-sm border transition
                        ${
                          isSelected
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-gray-100 text-gray-600 border-gray-200"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

           
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-3 text-sm font-medium"
            >
              Add Room
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddRoomsPage;