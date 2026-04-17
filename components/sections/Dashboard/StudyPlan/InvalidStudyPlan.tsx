export default function InvalidStudyPlan() {
  return (
    <div className="m-8 p-6 rounded-2xl w-full max-w-[40vw] flex flex-col  justify-between bg-highlight/5 border border-secondary/20">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-primary">TODAY’S PLAN</h1>

        <p className="text-[1.2rem] tracking-wide text-secondary ">
          No plan created yet! generate one to get started
        </p>
      </div>

      {/* RIGHT CTA */}
      <button className="shrink-0 max-w-[40%] px-4 py-2.5 rounded-xl bg-accent text-black font-semibold mt-8 hover:cursor-pointer hover:opacity-90 transition">
        Generate Plan
      </button>
    </div>
  );
}
