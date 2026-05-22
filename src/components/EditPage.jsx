"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import { CiEdit } from "react-icons/ci";

export function EditPage({data}) {
    // const { category,imageUrl,description, destinationName, country, price, duration, _id } =
    // data;
  // const handelEditDestinationSubmit = async (e) => {
  //   e.preventDefault();
  //   const fromData = new FormData(e.currentTarget);
  //   const destinationData = Object.fromEntries(fromData.entries());
  //   console.log(destinationData);

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(destinationData),
  //   });

  //   const data = await res.json();

  //   // console.log(data);
  // };
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
                {/* <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <TextField defaultValue={destinationName} name="destinationName" isRequired>
                        <Label>Destination Name</Label>
                        <Input placeholder="Bali Paradise" />
                        <FieldError />
                      </TextField>
                    </div>

                    <TextField   name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" />
                      <FieldError />
                    </TextField>

                    <div>
                      <Label className="mb-2 block">Category</Label>

                      <Select
                        name="category"
                        placeholder="Select category"
                        className="w-full"
                      >
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {[
                              "Beach",
                              "Mountain",
                              "City",
                              "Adventure",
                              "Cultural",
                              "Luxury",
                            ].map((item) => (
                              <ListBox.Item key={item} id={item}>
                                {item}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <TextField defaultValue={price} name="price" type="number" isRequired>
                      <Label>Price (USD)</Label>
                      <Input placeholder="1299" />
                      <FieldError />
                    </TextField>

                    <TextField defaultValue={duration} name="duration" isRequired>
                      <Label>Duration</Label>
                      <Input placeholder="7 Days / 6 Nights" />
                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField name="departureDate" isRequired>
                        <Label>Departure Date</Label>
                        <Input type="date" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField defaultValue={description} name="description" isRequired>
                        <Label>Description</Label>
                        <TextArea placeholder="Describe the travel experience..." />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-5">
                    <Button
                      slot="close"
                      variant="bordered"
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="w-full sm:w-auto"
                    >
                      Update Destination
                    </Button>
                  </div>
                </form> */}
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}