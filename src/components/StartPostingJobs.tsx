import Image from "next/image";
import Link from "next/link";
import React from "react";

function StartPostingJobs() {
  return (
    <section>
      <div className="container py-[72px] ">
        <div className="flex justify-between items-center bg-[url('/bg-posting-jobs.png')]   bg-no-repeat">
          <div>
            <h2 className="">Start posting jobs today</h2>
            <p>Start posting jobs for only $10.</p>
            <Link href={"/register"}>
              <button>Sign Up For Free</button>
            </Link>
          </div>
          <Image
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
