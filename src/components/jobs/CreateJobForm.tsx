"use client";

import React, { useState } from "react";
import {
  useCreateJobMutation,
  useUpdateJobMutation,
} from "@/services/jobsApiSlice";
import { JobFormValuesT } from "@/lib/types";
import { Button } from "../ui/button";

interface Props {
  initial?: JobFormValuesT;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function CreateJobForm({ initial, onSuccess, onCancel }: Props) {
  const [form, setForm] = useState<JobFormValuesT>({
    title: "",
    company: "",
    description: "",
    location: "",
    work_type: "",
    ish_vaqti: "",
    salary: "",
    ...initial,
  });

  const [createJob] = useCreateJobMutation();
  const [updateJob] = useUpdateJobMutation();

  const handleChange =
    (k: keyof JobFormValuesT) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [k]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      company: form.company,
      description: form.description,
      location: form.location,
      work_type: form.work_type,
      ish_vaqti: form.ish_vaqti,
      salary: form.salary,
      user: 37,
    };

    try {
      if (form.id) {
        await updateJob({ id: form.id, ...payload }).unwrap();
      } else {
        await createJob(payload).unwrap();
      }
      onSuccess();
    } catch (err: any) {
      alert("Xatolik yuz berdi:\n" + (err.error || JSON.stringify(err)));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { key: "title", label: "Title" },
        { key: "company", label: "Company" },
        { key: "location", label: "Location" },
        { key: "work_type", label: "Work Type" },
        { key: "ish_vaqti", label: "Work Hours" },
        { key: "salary", label: "Salary" },
      ].map(({ key, label }) => (
        <div key={key}>
          <label className="block text-sm font-medium">{label}</label>
          <input
            type="text"
            value={form[key as keyof JobFormValuesT] || ""}
            onChange={handleChange(key as keyof JobFormValuesT)}
            className="border w-full px-3 py-2 rounded"
            required
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={form.description}
          onChange={handleChange("description")}
          className="border w-full px-3 py-2 rounded"
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" className="cursor-pointer" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="cursor-pointer">
          {form.id ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
