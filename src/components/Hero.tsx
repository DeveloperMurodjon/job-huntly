import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="hero  pb-[103px] bg-lights-gray">
      <div className="flex container flex-col items-start pt-[82px] ">
        <h2 className="font-semibold text-neutrals-100 align-baseline max-w-[533px] leading-[110%] text-7xl">
          Discover more than{" "}
          <span className="text-accents-blue">5000+Jobs</span>
        </h2>
        <Image
          className="pt-[13px]"
          alt="hero title"
          width={455}
          height={39}
          src={"/hero-text-line.png"}
        />
        <p className="text-neutral-80 opacity-70 max-w-[521px] leading-[160%] text-[20px] pt-23px">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
      </div>
    </section>
  );
}

export default Hero;
