"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const handelSgnOut = async () => {
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
            className="btn btn-ghost text-orange-500 font-bold text-2xl"
          >
            SOLSTICE
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="navbar-end gap-2">
            {/* {user ? ( */}
            {/* <div className="flex gap-3">
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <button onClick={handelSgnOut} className="btn bg-orange-500 text-white">Logout</button>
              </div> */}
            {/* ) : ( */}
            <div className="">
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
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
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
