import { ChevronRight } from "lucide-react";
import Link from "next/link";
export function LevelSelectBtn({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link}>
      <button className="group bg-primary/80 hover:bg-primary hover:bg- flex gap-2 items-center  hover:gap-4 hover:cursor-pointer  duration-300 px-8 py-1 text-black/70 hover:text-black mx-auto rounded-2xl">
        <p>{text}</p>
        <ChevronRight className="w-6 h-6  group-hover:block group-hover:translate-x-2 opacity-0  group-hover:opacity-100 transition-all" />
      </button>
    </Link>
  );
}
