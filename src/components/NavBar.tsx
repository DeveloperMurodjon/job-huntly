"use client";
import React from "react";
import { ModeToggle } from "./index";
import Link from "next/link";
function NavBar() {
  return (
    <nav className="flex items-center  justify-between w-full">
      <div className="flex items-center gap-4">
        <Link href={"/jobs"}>
          <p className="text-neutrals-80 font-medium text-base leading-[160%] dark:text-white">
            Find Jobs
          </p>
        </Link>

        <Link href={"/specialists"}>
          <p className="text-neutrals-80 font-medium text-base leading-[160%] dark:text-white">
            Find Specialsts
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href={"/login"}>
          <p className="bg-white border-r border-[#D6DDEB] text-brands-primary font-bold py-3 px-6 text-base leading-[160%]">
            Login
          </p>
        </Link>
        <Link href={"/register"}>
          <p className="bg-brands-primary  text-white font-bold py-3 px-6 text-base leading-[160%]">
            Register
          </p>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default NavBar;
