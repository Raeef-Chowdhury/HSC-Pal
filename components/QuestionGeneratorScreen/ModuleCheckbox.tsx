"use client";
export interface ModuleDotPoints {
  sectionId: string;
  inquiryQuestion: string;
  title: string;
  dotpoints: string[];
}
export interface Module {
  moduleId: string;
  moduleNumber: number;
  name: string;
  sections: ModuleDotPoints[];
  year: number;
}
import { Checkbox, CheckboxGroup, Label } from "@heroui/react";
import { useState } from "react";

export default function ModuleCheckbox({ module: module }: { module: Module }) {
  const [selected, setSelected] = useState([""]);
  const allOptions = module.sections;
  console.log(module);
  return (
    <div>
      <Checkbox
        isIndeterminate={
          selected.length > 0 && selected.length < allOptions.length
        }
        isSelected={selected.length === allOptions.length}
        name="select-all"
        onChange={(isSelected: boolean) => {
          setSelected(
            isSelected
              ? module.sections.map((section: ModuleDotPoints) => section.title)
              : [],
          );
        }}
      >
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>{module.name}</Label>
        </Checkbox.Content>
      </Checkbox>
      <div className="ml-6 flex flex-col gap-2">
        <CheckboxGroup value={selected} onChange={setSelected}>
          {module.sections.map((section: ModuleDotPoints, index: number) => (
            <Checkbox value={section.title} key={index}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label>{section.title}</Label>
              </Checkbox.Content>
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );
}
