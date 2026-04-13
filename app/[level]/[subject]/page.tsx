import fs from "fs/promises";
import path from "path";
import TopicSelector from "@/components/QuestionGeneratorScreen/TopicSelector";
export interface SubjectPageProps {
  params: Promise<{
    level: string;
    subject: string;
  }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { level, subject } = await params;

  const moduleNumbers = level === "prelim" ? [1, 2, 3, 4] : [5, 6, 7, 8];

  const modules = [];
  for (const moduleNum of moduleNumbers) {
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        "data",
        "modules",
        level,
        subject,
        `chem-mod-${moduleNum}.json`,
      );

      const fileContent = await fs.readFile(filePath, "utf-8");
      const moduleData = JSON.parse(fileContent);
      modules.push(moduleData);
    } catch (error) {
      console.error(`Error loading module ${moduleNum}:`, error);
    }
  }

  const formattedSubject = subject.replaceAll("%20", " ");
  console.log(modules);
  return (
    <>
      <h1 className="text-center mt-[1.8rem] text-gold/80 text-[2.4rem] uppercase leading-[-0.05rem] font-semibold ">
        {level} <span className="text-gold/40">⋅</span> {formattedSubject}
      </h1>
      <TopicSelector modules={modules} />
    </>
  );
}
