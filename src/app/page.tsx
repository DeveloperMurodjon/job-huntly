import {
  ExploreCategory,
  FeaturedJobs,
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
      <FeaturedJobs />
    </main>
  );
}

export default Home;
