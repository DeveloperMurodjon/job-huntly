"use client";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "@/services/usersApiSlice";
import { SpecialistCard, SpecialistsModal } from "@/components/index";
import { useState } from "react";
import { usersApiT } from "@/lib/types";

export default function YourSpecialistsPage() {
  const { data: users = [], isLoading, refetch } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [editing, setEditing] = useState<usersApiT | null>(null);
  const currentUserId = 37;
  const mine = users.filter((u) => u.id === currentUserId);

  if (isLoading) return <p>Loading…</p>;

  return (
    <main className="container py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Specialists</h1>
        <SpecialistsModal
          triggerLabel="Add Specialist"
          onSuccess={() => refetch()}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mine.map((u) => (
          <div key={u.id} className="relative">
            <SpecialistCard user={u} />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <button onClick={() => setEditing(u)} className="text-blue-600">
                Edit
              </button>
              <button onClick={() => deleteUser(u.id)} className="text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {editing && (
        <SpecialistsModal
          triggerLabel=""
          initial={editing}
          onSuccess={() => {
            setEditing(null);
            refetch();
          }}
        />
      )}
    </main>
  );
}
