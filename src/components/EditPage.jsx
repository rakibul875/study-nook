"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useState } from "react";

import { CiEdit } from "react-icons/ci";

export function EditPage({ data }) {
  const {_id,name,description,floor,hourlyRate,capacity,imageUrl}=data;
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value],
    );
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
       const res = await fetch(`http://localhost:8000/rooms/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const roomData = await res.json();
    
  };
  return (
    <Modal>
      <Button className="border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 rounded px-5 py-5">
        <CiEdit className="text-xl" />
        Edit
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white">
            <Modal.CloseTrigger />

            <Modal.Header className="px-4 py-4 sm:px-6">
              <Modal.Icon className="bg-gray-100">
                <CiEdit className="text-xl" />
              </Modal.Icon>

              <Modal.Heading className="text-lg sm:text-xl">
                Edit Destination
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-3 sm:p-5 md:p-6">
              <Surface variant="default" className="rounded-2xl">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold">Add New Room</h2>
                    <p className="text-sm text-gray-400">
                      Configure your study nook with precision and atmosphere.
                    </p>
                  </div>

                  <TextField name="name" defaultValue={name} isRequired>
                    <Label>Room Name</Label>
                    <Input
                      placeholder="e.g. The Silicon Library"
                      className="rounded-full bg-gray-100 w-full"
                    />
                  </TextField>

                  <TextField name="description" defaultValue={description} isRequired>
                    <Label>Description</Label>
                    <TextArea
                      placeholder="Describe the atmosphere and unique features..."
                      className="rounded-xl bg-gray-100"
                    />
                  </TextField>

                  <div className="grid grid-cols-2 gap-4">
                    <TextField name="floor" defaultValue={floor} isRequired>
                      <Label>Floor</Label>
                      <Input
                        placeholder="4"
                        className="rounded-full bg-gray-100"
                      />
                    </TextField>

                    <TextField name="hourlyRate" defaultValue={hourlyRate} isRequired>
                      <Label>Hourly Rate ($)</Label>
                      <Input
                        placeholder="25"
                        className="rounded-full bg-gray-100"
                      />
                    </TextField>

                    <TextField name="capacity" defaultValue={capacity} isRequired>
                      <Label>Capacity</Label>
                      <Input
                        placeholder="6"
                        className="rounded-full bg-gray-100"
                      />
                    </TextField>

                    <TextField name="imageUrl" defaultValue={imageUrl} isRequired>
                      <Label>Room Image URL</Label>
                      <Input
                        placeholder="https://..."
                        className="rounded-full bg-gray-100"
                      />
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
                        const isSelected = selectedAmenities.includes(
                          item.value,
                        );

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

                  <div className="flex justify-end gap-3 pt-2">
                    <Button slot="close" className='bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full py-3 text-sm font-medium'>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-teal-500 hover:bg-teal-600 text-white rounded-full py-3 text-sm font-medium"
                    >
                      Update Room
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
