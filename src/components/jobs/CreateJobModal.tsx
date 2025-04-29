"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import CreateJobForm from "./CreateJobForm";
import { JobFormValuesT } from "@/lib/types";

interface Props {
  triggerLabel: string;
  initial?: JobFormValuesT;
  onSuccess?: () => void;
}

export default function CreateJobModal({
  triggerLabel,
  initial,
  onSuccess,
}: Props) {
  const [open, setOpen] = useState(false);
  const access = useSelector((state: RootState) => state.auth.access);
  const router = useRouter();

  const handleOpenChange = (next: boolean) => {
    if (next && !access) {
      router.push("/login");
    } else {
      setOpen(next);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="bg-brands-primary text-white px-4 py-2 rounded">
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md w-full">
        <DialogTitle>{initial ? "Edit Job" : "Create Job"}</DialogTitle>
        <CreateJobForm
          initial={initial}
          onCancel={() => setOpen(false)}
          onSuccess={() => {
            setOpen(false);
            onSuccess?.();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
