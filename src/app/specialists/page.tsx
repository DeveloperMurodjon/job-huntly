"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { useRouter } from "next/navigation";
import { useGetUsersQuery } from "@/services/usersApiSlice";
import { SpecialistCard, SpecialistsModal } from "@/components/index";
import Link from "next/link";

export default function SpecialistsPage() {
  const { data: users = [], isLoading, error, refetch } = useGetUsersQuery();

  const token = useSelector((s: RootState) => s.auth.access);

  const router = useRouter();

  if (isLoading) return <p>Loading…</p>;

  if (error) {
    return (
      <div className="text-red-500">
        <p>
          Specialistlarni yuklashda xato yuz berdi. Iltimos, keyinroq qayta
          urinib ko'ring.
        </p>
      </div>
    );
  }

  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Specialistlarni topish</h1>

        {token ? (
          <SpecialistsModal
            triggerLabel="Specialist qo'shish"
            onSuccess={() => refetch()}
          />
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="bg-brands-primary text-white px-4 py-2 rounded"
          >
            Specialist qo'shish
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((u) => (
          <Link key={u.id} href={`/specialists/${u.id}`}>
            <SpecialistCard user={u} />
          </Link>
        ))}
      </div>
    </main>
  );
}
