export default function StudyPlan() {
  return (
    <div className="m-8 p-6 rounded-2xl w-full max-w-[40vw]  flex flex-col gap-5 bg-highlight/5 border border-secondary/20">
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-medium tracking-widest text-primary">
          TODAY’S PLAN
        </h1>
        <p className="text-secondary text-sm">
          Focused tasks based on what you have planned out
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-secondary">
        <div className="flex items-start gap-2">
          <span className="text-accent">•</span>
          <span className="text-white text-[1.2rem] tracking-wide">
            Trigonometry practice — 10 questions
          </span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-accent">•</span>
          <span className="text-white text-[1.2rem] tracking-wide">
            Projectile motion revision — 10 questions
          </span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-accent">•</span>
          <span className="text-white text-[1.2rem] tracking-wide">
            Physics timed test — mixed difficulty
          </span>
        </div>
      </div>

      {/* Bottom Row: Progress + CTA */}
      <div className="flex items-center justify-between gap-4">
        {/* Progress */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between text-xs text-secondary">
            <span>Progress</span>
            <span className="text-primary font-medium">70%</span>
          </div>

          <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-primary rounded-full"></div>
          </div>
        </div>

        {/* CTA */}
        <button className="shrink-0 px-4 py-2.5 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition">
          Continue
        </button>
      </div>
    </div>
  );
}
