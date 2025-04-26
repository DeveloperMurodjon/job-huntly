import {
  ExploreCategory,
  HelpedCompanies,
  Hero,
  StartPostingJobs,
} from "@/components";
import React from "react";

function Home() {
  return (
    <main className=" min-h-screen ">
      <Hero />
      <HelpedCompanies />
      <ExploreCategory />
      <StartPostingJobs />
    </main>
  );
}

export default Home;
