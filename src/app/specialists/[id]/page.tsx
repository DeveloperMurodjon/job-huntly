"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetUserByIdQuery } from "@/services/usersApiSlice";
import { SpecialistCard } from "@/components/index";
import { ArrowLeft } from "lucide-react";

export default function SpecialistDetailPage() {
  const params = useParams();
  const router = useRouter();

  const rawId = params.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!id) {
    return <p>ID topilmadi</p>;
  }

  const { data: user, isLoading, error } = useGetUserByIdQuery(id);

  if (isLoading) return <p>Loading…</p>;
  if (error || !user) return <p>Foydalanuvchi topilmadi</p>;

  return (
    <main className="container py-10 space-y-6">
      <button onClick={() => router.back()} className="text-blue-600">
        <ArrowLeft /> Back
      </button>

      <SpecialistCard user={user} />
    </main>
  );
}
