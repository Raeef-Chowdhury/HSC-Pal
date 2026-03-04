interface SubjectPageProps {
  params: Promise<{
    level: string;
    subject: string;
  }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { level, subject } = await params;
  const formattedSubject = subject.replaceAll("%20", " ");
  return (
    <div>
      <h1 className="text-center mt-[1.8rem] text-gold/80 text-[2.4rem] uppercase leading-[-0.05rem] font-semibold ">
        {level} <span className="text-gold/40">⋅</span> {formattedSubject}
      </h1>
      <div className="flex flex-col ">
        <label className="text-white text-[1.6rem] font-medium flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5" />
          {level === "prelim" ? "Module 1" : "Module 5"}
        </label>
      </div>
    </div>
  );
}
