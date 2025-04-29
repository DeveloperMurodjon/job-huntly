import Image from "next/image";
import React from "react";

function HelpedCompanies() {
  return (
    <section className="py-12">
      <div className="container">
        <h3 className="opacity-50 text-[#202430] text-lg leading-[160%] pb-8">
          Companies we helped grow
        </h3>
        <div className="flex items-center justify-between">
          <Image
            alt="company we helped"
            width={153}
            height={40}
            src={"/vodafone.png"}
          />
          <Image
            alt="company we helped"
            width={82}
            height={32}
            src={"/intel.png"}
          />
          <Image
            alt="company we helped"
            width={182}
            height={24}
            src={"/tesla.png"}
          />
          <Image
            alt="company we helped"
            width={116}
            height={28}
            src={"/amd-logo.png"}
          />
          <Image
            alt="company we helped"
            width={108}
            height={32}
            src={"/talkit.png"}
          />
        </div>
      </div>
    </section>
  );
}

export default HelpedCompanies;
