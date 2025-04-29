"use client";
import { SpecialistsModal } from "@/components/index";
import { useRouter } from "next/navigation";

export default function CreateSpecialistPage() {
  const router = useRouter();
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Create Specialist</h1>
      <SpecialistsModal
        triggerLabel="Open Form"
        onSuccess={() => router.push("/specialists")}
      />
    </main>
  );
}
