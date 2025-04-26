"use client";
import React from "react";
import { ModeToggle } from "./index";
import Link from "next/link";
function NavBar() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Link href={"/src/app/jobs/page.tsx"}>
          <p className="text-neutrals-80 font-medium text-base leading-[160%]">
            Find Jobs
          </p>
        </Link>

        <Link href={"/src/app/specialists/page.tsx"}>
          <p className="text-neutrals-80 font-medium text-base leading-[160%]">
            Find Specialsts
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href={"/login"}>
          <p className="bg-white  text-brand-primary font-bold py-3 px-6 text-base leading-[160%]">
            Login
          </p>
        </Link>
        <Link href={"/register"}>
          <p className="bg-brands-primary  text-white font-bold py-3 px-6 text-base leading-[160%]">
            Register
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
