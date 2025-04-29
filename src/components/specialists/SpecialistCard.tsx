"use client";
import { usersApiT } from "@/lib/types";

export default function SpecialistCard({ user }: { user: usersApiT }) {
  return (
    <div className="border rounded-lg shadow p-6 flex flex-col justify-between">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">
          {user.first_name} {user.last_name}
        </h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone || "N/A"}
        </p>
        <p>
          <strong>Position:</strong> {user.position || "N/A"}
        </p>
        <p>
          <strong>Age:</strong> {user.age ?? "N/A"}
        </p>
      </div>
    </div>
  );
}
