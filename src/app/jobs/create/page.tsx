"use client";
import React from "react";
import { CreateJobModal } from "@/components/index";
import { useRouter } from "next/navigation";

export default function CreateJobPage() {
  const router = useRouter();
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-semibold">Create Job</h1>
      <CreateJobModal
        triggerLabel="Open Form"
        onSuccess={() => router.push("/jobs/your")}
      />
    </main>
  );
}
