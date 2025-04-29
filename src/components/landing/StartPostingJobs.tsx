import Image from "next/image";
import Link from "next/link";
import React from "react";

function StartPostingJobs() {
  return (
    <section>
      <div className="container py-[72px]">
        <div className="flex justify-between items-center bg-[url('/bg-posting-jobs.png')]   px-[70px]  bg-no-repeat">
          <div className="max-w-[364px] ">
            <h2 className="font-semibold text-white text-5xl ">
              Start posting jobs today
            </h2>
            <p className="font-medium text-white text-base leading-[160%] py-6">
              Start posting jobs for only $10.
            </p>
            <Link href={"/register"}>
              <button className="bg-white cursor-pointer text-brands-primary font-bold py-3 px-6">
                Sign Up For Free
              </button>
            </Link>
          </div>
          <Image
            className="pt-[70px]"
            src={"/start-posting-dashboard.png"}
            alt="out statistics"
            width={564}
            height={344}
          />
        </div>
      </div>
    </section>
  );
}

export default StartPostingJobs;
