import { ChevronRight } from "lucide-react";
export function DashboardGreeting() {
  return (
    <div className="m-8  p-4 rounded-2xl w-fit flex flex-col gap-2 bg-highlight/5 ">
      <h1 className="text-primary-dark tracking-widest text-[2.4rem] ">
        Good Morning, Raeef
      </h1>
      <p className="tracking-[0.1rem] text-[1.4rem] text-secondary">
        You studied 45 mins today ⋅ HSC in 182 days
      </p>
      <div className="flex gap-6 items-center mt-6 ">
        <button className="rounded-4xl px-6 font-medium py-2 flex hover:gap-4 transition-all gap-2 hover:cursor-pointer  items-center  text-background bg-success ">
          Start Studying <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
