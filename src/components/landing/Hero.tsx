"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SearchJobInput } from "../index";

export default function Hero() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    router.push("/jobs");
  };

  return (
    <section className="hero pb-[103px] bg-lights-gray">
      <div className="container w-full flex flex-col items-start pt-[82px]">
        <h1 className="font-semibold text-neutrals-100 max-w-[533px] leading-[110%] text-7xl">
          Discover more than{" "}
          <span className="text-accents-blue">5000+ Jobs</span>
        </h1>
        <Image
          className="pt-[13px]"
          alt="underline"
          width={455}
          height={39}
          src="/hero-text-line.png"
        />
        <p className="text-neutral-80 opacity-70 max-w-[521px] leading-[160%] text-[20px] pt-6">
          Great platform for the job seeker that is searching for new career
          heights and passionate about startups.
        </p>

        <SearchJobInput
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmit={handleSubmit}
          selectWidth="max-w-[852px] md:w-[200px]"
        />
      </div>
    </section>
  );
}
