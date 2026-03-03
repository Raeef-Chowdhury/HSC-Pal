"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackPageBtn() {
  const pageBack = useRouter();
  return (
    <button
      onClick={() => pageBack.back()}
      className="flex gap-2 bg items-center hover:gap-4 px-6 py-2 bg-muted/80 text-left text-black text-[0.8rem] hover:bg-muted font-medium absolute top-7 left-10 tracking-[0.1rem] hover:cursor-pointer transition-all rounded-full"
    >
      <ChevronLeft className="w-3.5 h-3.5" />
      <p>Previous Page</p>
    </button>
  );
}
