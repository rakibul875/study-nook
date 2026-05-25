"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";

export function DeletePage({ data }) {
  const { _id, name } = data;
  const router = useRouter()
  const handelDelete = async () => {
    const {data:tokenData}=await authClient.token()
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_UEL}/rooms/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization:`bearer ${tokenData?.token}`
      },
    });

    const data = await res.json();
    router.push('/rooms')
  };
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
                Are you sure you want to delete <strong> {name}</strong> This
                action cannot be undone and will permanently remove this travel
                package from the system.
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
