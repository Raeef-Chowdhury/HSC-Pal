import fs from "fs/promises";
import path from "path";
interface SubjectPageProps {
  params: Promise<{
    level: string;
    subject: string;
  }>;
}
interface ModuleDotPoints {
  sectionId: string;
  inquiryQuestion: string;
  title: string;
  dotpoints: string[];
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
    <div>
      <h1 className="text-center mt-[1.8rem] text-gold/80 text-[2.4rem] uppercase leading-[-0.05rem] font-semibold ">
        {level} <span className="text-gold/40">⋅</span> {formattedSubject}
      </h1>
      <div className="flex flex-col ">
        {modules.map((module, index) => (
          <div key={index}>
            <label
              key={index}
              className="text-white text-[1.6rem] font-medium flex items-center gap-2"
            >
              <input type="checkbox" className="w-5 h-5" />
              {module.name}
            </label>
            {module.sections.map((section: ModuleDotPoints, index: number) => (
              <h1 key={index}>{section.title}</h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
