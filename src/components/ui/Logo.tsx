"use client";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image alt="logo" src={"/Logo.png"} width={80} height={80} />
      <h2 className="font-redhat font-bold text-2xl leading-[150%] bg-neutrals-100 space-x-[-1%]">
        JobHuntly
      </h2>
    </div>
  );
}

export default Logo;
