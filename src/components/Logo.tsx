"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ textColor = "text-neutrals-100" }) {
  return (
    <div className="">
      <Link href={"/"}>
        <div className="flex gap-2 items-center">
          <Image alt="logo" src={"/Logo.png"} width={32} height={32} />
          <h2
            className={`font-redhat font-bold text-2xl leading-[150%] ${textColor} space-x-[-1%]`}
          >
            JobHuntly
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
