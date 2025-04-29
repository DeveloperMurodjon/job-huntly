"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import SpecialistForm from "./SpecialistForm";
import { usersApiT } from "@/lib/types";

interface SpecialistModalProps {
  triggerLabel: string;
  initial?: usersApiT;
  onSuccess?: () => void;
}

export default function SpecialistModal({
  triggerLabel,
  initial,
  onSuccess,
}: SpecialistModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-brands-primary text-white px-4 py-2 rounded">
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md w-full">
        <DialogTitle>
          {initial ? "Edit Specialist" : "Create Specialist"}
        </DialogTitle>

        <SpecialistForm
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
