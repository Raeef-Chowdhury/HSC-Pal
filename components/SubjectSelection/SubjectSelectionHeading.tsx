"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackPageBtn } from "../UI/Buttons/BackPageBtn";
export function SubjectSelectionHeading() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center  mt-[1.2rem] flex-col ">
        <BackPageBtn />
        <div className="bg-primary/10 flex items-center gap-[0.2rem] rounded-lg p-1">
          <Link href="/prelim">
            <button
              className={`px-5 py-2 text-md ${pathname === "/prelim" ? "bg-primary-light text-primary" : "transparent text-white/80"} uppercase hover:cursor-pointer tracking-[0.2em] font-medium rounded-md transition-all duration-300 focus:outline-none`}
            >
              Preliminary
            </button>
          </Link>
          <Link href="/hsc">
            <button
              className={`px-5 py-2 text-md ${pathname === "/hsc" ? "bg-accent-glow text-accent" : "transparent text-white/80"} uppercase hover:cursor-pointer tracking-[0.2em] font-medium rounded-md transition-all duration-300 focus:outline-none`}
            >
              HSC
            </button>
          </Link>
        </div>
        <p className="text-accent/40 absolute top-5 right-10 text-[0.8rem] tracking-[0.4rem]">
          ..{pathname.toUpperCase()}
        </p>
      </div>
    </>
  );
}
