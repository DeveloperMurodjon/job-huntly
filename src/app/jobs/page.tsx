import { JobList } from "@/components";
import Image from "next/image";
import React from "react";

function Jobs() {
  return (
    <main>
      <div className="bg-lights-gray py-[65px]">
        <header>
          <div className="container flex flex-col items-center pb-[17px]">
            <h1 className="font-semibold text-neutrals-100 gap-4  pb-[38px] flex leading-[110%] text-5xl">
              Find your
              <div>
                <span className="text-accents-blue"> dream job</span>
                <Image
                  src={"/jobs-header-underline.png"}
                  alt=" "
                  width={241}
                  height={14}
                />
              </div>
            </h1>
            <p className="text-neutrals-80 leading-[160%] text-lg">
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </p>
          </div>
        </header>
        <JobList />
      </div>
    </main>
  );
}

export default Jobs;
