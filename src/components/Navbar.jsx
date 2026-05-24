"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const handelSgnOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const links = (
    <>
      <li className="font-semibold text-lg">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink href={"/rooms"}>Rooms</NavLink>
      </li>
      {/* login hole */}
      {user && (
        <>
          <li className="font-semibold text-lg">
            <NavLink href={"/add-room"}>Add Room</NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink href={"/my-listings"}> My Listings</NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink href={"/my-bookings"}> My Bookings</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost text-cyan-600 font-bold text-2xl"
          >
            StudyRoom
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="navbar-end gap-2">
            {user ? (
              <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover>
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu>
                    <Dropdown.Item id="dashboard" textValue="Dashboard">
                      
                      <Link href={'/my-listings'}>My-Listings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="profile" textValue="Profile">
                     
                      <Link href={'/my-bookings'}>My-Bookings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <button onClick={handelSgnOut} className="flex gap-3 items-center">
                          <Label>Log Out</Label>
                          <FaArrowUpRightFromSquare className="size-3.5 text-danger" />
                        </button>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            ) : (
              <div className="flex gap-1 lg:gap-3">
                <Link
                  href="/login"
                  className="btn border border-cyan-700-500 text-cyan-700"
                >
                  Login
                </Link>
                <Link href="/sineUp" className="btn bg-cyan-700 text-white">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
