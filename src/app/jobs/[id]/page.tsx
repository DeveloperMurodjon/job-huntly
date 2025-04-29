"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetJobByIdQuery } from "@/services/jobsApiSlice";
import { jobsApiT } from "@/lib/types";
import { JobCard } from "@/components/index";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function JobDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: job, isLoading, error } = useGetJobByIdQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error || !job) return <p>Error</p>;

  return (
    <main className="container py-10 space-y-8">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} /> Back
      </Button>

      {/* Header Card */}
      <JobCard job={job as jobsApiT} />

      {/* Details Section */}
      <section className="space-y-4 p-6 bg-white border border-neutrals-20 rounded-lg">
        <h2 className="text-2xl font-semibold text-neutrals-100">
          Job Details
        </h2>
        <p className="text-neutrals-80 leading-[160%]">{job.description}</p>

        <div className="grid grid-cols-2 gap-6 pt-4">
          <div>
            <h3 className="font-medium">Company</h3>
            <p>{job.company}</p>
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p>{job.location}</p>
          </div>
          <div>
            <h3 className="font-medium">Posted At</h3>
            <p>{new Date(job.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-medium">Work Type</h3>
            <p>{job.work_type}</p>
          </div>
          <div>
            <h3 className="font-medium">Salary</h3>
            <p>$ {job.salary}</p>
          </div>
          <div>
            <h3 className="font-medium">Work time</h3>
            <p>{job.ish_vaqti}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
