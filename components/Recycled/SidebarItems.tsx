"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarItem } from "@/public/data/Sidebar/SidebarItems";
export function SidebarItems({ item }: { item: sideBarItem }) {
  const currentPath = usePathname();
  return (
    <Link
      href={item.href}
      key={item.label}
      className={`flex h-12 focus-visible:ring-2 w-full hover:scale-105 hover:translate-y-[-2px] tracking-widest items-center gap-6 rounded-lg px-3 transition-all ${
        item.href === "/"
          ? currentPath === item.href
            ? "bg-primary/20 text-primary border-l-2 border-primary shadow-2xl"
            : "text-white hover:bg-secondary/10 hover:text-accent"
          : currentPath.includes(item.href)
            ? "bg-primary/20 text-primary border-l-2 border-primary shadow-2xl"
            : "text-white hover:bg-secondary/10 hover:text-accent"
      }`}
    >
      {item.icon && <item.icon className="w-6 h-6" />} <p>{item.label}</p>
    </Link>
  );
}
