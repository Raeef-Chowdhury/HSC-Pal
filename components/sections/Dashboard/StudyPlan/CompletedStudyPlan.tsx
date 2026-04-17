import { PartyPopper } from "lucide-react";
export default function CompletedStudyPlan() {
  return (
    <div className="m-8 p-6 rounded-2xl w-full max-w-[40vw] flex items-center justify-between bg-highlight/5 border border-highlight/20">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-primary">TODAY’S PLAN</h1>

        <p className="text-[1rem] text-secondary mb-4 flex gap-2 items-center ">
          <PartyPopper className="w-4 h-4 inline text-primary" /> All tasks
          completed — great work today
        </p>

        <div className="flex items-center gap-3">
          <span className="text-xs text-secondary">Progress</span>

          <div className="w-40 h-2 bg-secondary/20 rounded-full overflow-hidden">
            <div className="h-full w-full bg-primary rounded-full"></div>
          </div>

          <span className="text-xs text-primary font-medium">100%</span>
        </div>
      </div>

      <button className="shrink-0 self-end hover:cursor-pointer px-4 py-2.5 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition">
        New Plan
      </button>
    </div>
  );
}
