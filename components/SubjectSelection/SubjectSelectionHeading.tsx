"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function SubjectSelectionHeading() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center mt-[1.2rem] ">
      <div className="bg-primary/10 flex items-center gap-[0.2rem] rounded-lg p-1">
        <Link href="/prelim">
          <button
            className={`px-5 py-2 text-md ${pathname === "/prelim" ? "bg-primary-light text-primary" : "transparent text-muted"} uppercase hover:cursor-pointer tracking-[0.2em] font-medium rounded-md transition-all duration-300 focus:outline-none`}
          >
            Preliminary
          </button>
        </Link>
        <Link href="/hsc">
          <button
            className={`px-5 py-2 text-md ${pathname === "/hsc" ? "bg-accent-glow text-accent" : "transparent text-muted"} uppercase hover:cursor-pointer tracking-[0.2em] font-medium rounded-md transition-all duration-300 focus:outline-none`}
          >
            HSC
          </button>
        </Link>
      </div>
    </div>
  );
}
