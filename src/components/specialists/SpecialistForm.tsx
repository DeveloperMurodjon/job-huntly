"use client";

import React, { useState } from "react";
import { usersApiT } from "@/lib/types";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "@/services/usersApiSlice";
import { Button } from "../ui/button";

interface SpecialistFormProps {
  initial?: usersApiT;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function SpecialistForm({
  initial,
  onCancel,
  onSuccess,
}: SpecialistFormProps) {
  const [form, setForm] = useState<Partial<usersApiT>>(initial || {});
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange =
    (k: keyof usersApiT) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = k === "age" ? Number(e.target.value) : e.target.value;
      setForm((prev) => ({ ...prev, [k]: v }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (form.id) {
        await updateUser(form as usersApiT);
      } else {
        await createUser(form);
      }
      onSuccess();
    } catch (err: any) {
      alert("Error: " + JSON.stringify(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        "first_name",
        "last_name",
        "username",
        "email",
        "phone",
        "position",
      ].map((field) => (
        <input
          key={field}
          placeholder={field}
          type="text"
          value={form[field as keyof usersApiT] ?? ""}
          onChange={handleChange(field as keyof usersApiT)}
          className="w-full border rounded px-3 py-2"
          required
        />
      ))}
      <input
        placeholder="age"
        type="number"
        value={form.age ?? ""}
        onChange={handleChange("age")}
        className="w-full border rounded px-3 py-2"
      />

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{form.id ? "Update" : "Create"}</Button>
      </div>
    </form>
  );
}
