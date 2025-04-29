"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { jobsApiT } from "@/lib/types";

interface JobCardProps {
  job: jobsApiT;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="border border-neutrals-20">
      <div className="flex items-center p-6 justify-between">
        <div className="flex items-start gap-6">
          <Image src="/nextjs.png" alt="company logo" width={64} height={64} />
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-neutrals-100 text-xl leading-[120%]">
              {job.title}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-neutrals-60 text-base leading-[160%]">
                {job.company}
              </p>
              <div className="w-1 h-1 rounded-full bg-neutrals-60" />
              <p className="text-neutrals-60 text-base leading-[160%]">
                {job.location}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#E0FAF4] text-[#56CDAD] rounded-4xl font-semibold py-1.5 px-2.5 text-sm leading-[160%]">
                {job.work_type}
              </div>
              <div className="h-[34px] w-[1px] bg-neutrals-20" />
              <div className="text-gray-500 bg-gray-50 border border-gray-300 font-semibold py-1.5 px-2.5 text-sm leading-[160%]">
                $ {job.salary}
              </div>
            </div>
          </div>
        </div>
        <Button className="cursor-pointer bg-brands-primary rounded-none py-3 px-[59px]">
          Apply
        </Button>
      </div>
    </div>
  );
}
