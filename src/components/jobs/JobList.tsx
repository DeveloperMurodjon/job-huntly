"use client";

import React, { useState } from "react";
import SearchJobInput from "@/components/SearchJobInput";
import Filters from "@/components/Filters";
import { JobCard, CreateJobModal } from "@/components/index";
import { useGetJobsQuery } from "@/services/jobsApiSlice";
import { jobsApiT } from "@/lib/types";
import Link from "next/link";

export default function JobList() {
  const { data: jobs = [], isLoading, refetch } = useGetJobsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [employment, setEmployment] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [salaryRanges, setSalaryRanges] = useState<string[]>([]);

  const handleSearchSubmit = () => {
    setAppliedSearch(searchTerm.trim());
    setSearchTerm("");
  };

  const filteredJobs = jobs.filter((job: jobsApiT) => {
    if (
      appliedSearch &&
      !job.title.toLowerCase().includes(appliedSearch.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <main className="space-y-8">
      <SearchJobInput
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={handleSearchSubmit}
        selectWidth="w-full md:w-[200px]"
      />

      <section className="container py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Filters
          employment={employment}
          setEmployment={setEmployment}
          categories={categories}
          setCategories={setCategories}
          levels={levels}
          setLevels={setLevels}
          salaryRanges={salaryRanges}
          setSalaryRanges={setSalaryRanges}
          jobs={jobs}
        />

        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-neutrals-100 text-[32px] leading-[120%]">
                All jobs
              </h2>
              <p className="text-neutrals-60 text-base leading-[160%]">
                Showing {filteredJobs.length} results
              </p>
            </div>

            <CreateJobModal
              triggerLabel="Add Job"
              onSuccess={() => refetch()}
            />
          </div>

          {isLoading && <p>Loading…</p>}

          <div className="space-y-4">
            {!isLoading &&
              filteredJobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}/`} className="block">
                  <JobCard job={job} />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
