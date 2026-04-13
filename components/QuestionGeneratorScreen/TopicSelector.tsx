"use client";
import { useState } from "react";
import ModuleCheckbox from "@/components/QuestionGeneratorScreen/ModuleCheckbox";
export default function TopicSelector({ modules }) {
  const [selected, setSelected] = useState<string[]>([]);
  const sectionOptions = modules.flatMap((mod) =>
    mod.sections.map((s) => s.title),
  );
  const moduleOptions = modules.map((mod) => mod.name);
  const allOptions = [...sectionOptions, ...moduleOptions];
  const selectAll = () => {
    setSelected(allOptions);
  };
  const deselectAll = () => setSelected([]);
  return (
    <div>
      <div className="grid grid-cols-2 gap-12">
        <div className="max-w-[40vw] ml-[5vw] mt-[6rem] flex flex-col gap-12">
          <div className="flex gap-3">
            <button
              onClick={selectAll}
              className="px-3 py-1 bg-black text-white"
            >
              Select All
            </button>

            <button onClick={deselectAll} className="px-3 py-1 border">
              Clear All
            </button>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-primary text-[1.6rem]  font-semibold tracking-wider">
              TOPIC SELECTION
            </h1>
            <p className="text-[0.8rem] text-text/30">
              <span className="text-[1.2rem] text-accent/30">12</span> /
              {modules.length}
            </p>
          </div>
          {modules.map((module, index) => (
            <div key={index}>
              <ModuleCheckbox
                module={module}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
