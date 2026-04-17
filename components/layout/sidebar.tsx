"use client";
import { SidebarItemsData } from "@/public/data/Sidebar/SidebarItems";
import { SidebarItems } from "@/components/Recycled/SidebarItems";
export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-[210px] flex-col bg-bg border-r border-secondary">
      <div className="flex h-16 items-center justify-center text-text/60 border-b border-secondary">
        <h1 className="text-[1.8rem] text-primary tracking-widest font-semibold">
          HSC PAL
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-12 py-6 px-3">
        {SidebarItemsData.map((item) => (
          <SidebarItems key={item.label} item={item} />
        ))}
      </nav>

      <div className="border-t border-secondary p-4 ">
        <div className="flex w-full items-center gap-3 transition-all cursor-pointer hover:scale-105 hover:translate-y-[-2px] hover:bg-accent/10 rounded-lg px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-text font-semibold">
            N
          </div>

          <div>
            <div className="text-md font-medium text-text">Your Name</div>
            <div className="text-sm text-text/50">view profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
