"use client";

import React, { useState } from "react";
import { useGetJobsQuery, useDeleteJobMutation } from "@/services/jobsApiSlice";
import { jobsApiT } from "@/lib/types";
import { CreateJobModal } from "@/components/index";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";

export default function YourJobsPage() {
  const { data: jobs = [], isLoading, refetch } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobMutation();
  const [editingJob, setEditingJob] = useState<jobsApiT | null>(null);

  const currentUserId = 37;
  const yourJobs = jobs.filter((j) => j.user === currentUserId);

  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <CreateJobModal triggerLabel="Add Job" onSuccess={() => refetch()} />
      </div>

      {isLoading && <p>Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {yourJobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg shadow-md bg-white flex flex-col"
          >
            <div className="p-6 space-y-4 flex-1">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <Briefcase size={16} /> Position
                </div>
                <p className="mt-1 text-lg font-semibold text-neutrals-100">
                  {job.title}
                </p>
              </div>

              {/* Company */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <Building2 size={16} /> Company
                </div>
                <p className="mt-1 text-base">{job.company}</p>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <MapPin size={16} /> Location
                </div>
                <p className="mt-1 text-base">{job.location}</p>
              </div>

              {/* Work Type */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <Briefcase size={16} /> Work Type
                </div>
                <p className="mt-1 text-base">{job.work_type}</p>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <Clock size={16} /> Hours
                </div>
                <p className="mt-1 text-base">{job.ish_vaqti}</p>
              </div>

              {/* Salary */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <DollarSign size={16} /> Salary
                </div>
                <p className="mt-1 text-base">$ {job.salary}</p>
              </div>

              {/* Posted */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutrals-60">
                  <Calendar size={16} /> Posted on
                </div>
                <p className="mt-1 text-xs text-neutrals-60">
                  {new Date(job.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex border-t bg-neutral-50">
              <button
                className="flex-1 cursor-pointer py-2 text-sm font-medium"
                onClick={() => setEditingJob(job)}
              >
                Edit
              </button>
              <Button
                variant="destructive"
                className="flex-1 cursor-pointer"
                onClick={() => {
                  deleteJob(job.id);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      {editingJob && (
        <CreateJobModal
          triggerLabel=""
          initial={{
            id: editingJob.id,
            title: editingJob.title,
            company: editingJob.company,
            description: editingJob.description,
            location: editingJob.location,
            work_type: editingJob.work_type,
            ish_vaqti: editingJob.ish_vaqti,
            salary: editingJob.salary,
          }}
          onSuccess={() => {
            setEditingJob(null);
            refetch();
          }}
        />
      )}
    </main>
  );
}
