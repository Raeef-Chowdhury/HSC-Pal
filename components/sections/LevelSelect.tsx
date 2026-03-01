import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
export function LevelSelect() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-background text-foreground">
      <div className="items-center flex flex-col">
        <h1 className="font-bold mt-[1.2rem] text-primary text-[3.2rem]  tracking-tight">
          HSC QUESTIONNAIRE
        </h1>
        <p className="mt-[2.4rem] tracking-[0.1rem] text-foreground opacity-80 text-[1.6rem]">
          All your HSC & Prelim Questions in one place
        </p>
        <div className="flex flex-col gap-[1.8rem] items-center jsutify-center ">
          <p className="mt-[7.2rem] text-[1.4rem] opacity-50 text-secondary leading-[0.1rem] ">
            Choose your Year Level to start with
          </p>
          <ChevronDown className="w-8 h-8  text-primary/70 bounce-subtle " />
        </div>
        <div className="flex items-center mt-[2.4rem] gap-[3.2rem] text-[1.8rem]">
          <Link href="/prelim">
            <button className="group bg-primary hover:bg- flex gap-2 items-center  hover:gap-4 hover:cursor-pointer  duration-300 px-8 py-1 text-black mx-auto rounded-2xl">
              <p>Prelim - Year 11</p>
              <ArrowRight className="w-4 h-4  group-hover:block group-hover:translate-x-2 opacity-0  group-hover:opacity-100 transition-all" />
            </button>
          </Link>
          <Link href="/hsc">
            <button className="group bg-primary/90 hover:bg- flex gap-2 items-center  hover:gap-4 hover:cursor-pointer  duration-300 px-8 py-1 text-black mx-auto rounded-2xl">
              <p>HSC - Year 12</p>{" "}
              <ArrowRight className="w-4 h-4  group-hover:block group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
