"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";

export function DeletePage ({data}) {
    const {_id}=data;
    const handelDelete=async()=>{
         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    redirect('/destinations')
    }
  return (
    <AlertDialog>
      <Button className="border border-red-500 bg-white text-red-500 hover:bg-gray-100 rounded px-5 py-5">
        <MdOutlineDelete />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Travel Package</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete<strong> {data.destinationName}</strong>{" "}
                This action cannot be undone and will permanently remove this
                travel package from the system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}