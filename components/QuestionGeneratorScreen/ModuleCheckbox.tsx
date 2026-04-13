"use client";

import { Accordion, Checkbox, CheckboxGroup, Label } from "@heroui/react";

export default function ModuleCheckbox({ module, selected, setSelected }) {
  const sectionOptions = module.sections.map((s) => s.title);
  // Include the module name itself as a selectable value
  const allOptions = [module.name, ...sectionOptions];

  const isAllSelected = allOptions.every((o) => selected.includes(o));
  const isPartialSelected =
    !isAllSelected && allOptions.some((o) => selected.includes(o));

  return (
    <Accordion className="w-full">
      <Accordion.Item value={module.name}>
        <Accordion.Heading>
          <Accordion.Trigger>
            <Checkbox
              isIndeterminate={isPartialSelected}
              isSelected={isAllSelected}
              onChange={(isChecked: boolean) => {
                setSelected((prev: string[]) =>
                  isChecked
                    ? [...new Set([...prev, ...allOptions])]
                    : prev.filter((s) => !allOptions.includes(s)),
                );
              }}
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label className="text-[1.6rem] font-bold text-accent">
                  {module.name}
                </Label>
              </Checkbox.Content>
            </Checkbox>
            <Accordion.Indicator />
          </Accordion.Trigger>
        </Accordion.Heading>

        <Accordion.Panel>
          <div className="ml-6 flex flex-col gap-2 mt-2">
            <CheckboxGroup
              value={selected}
              onChange={(vals: string[]) => {
                // When sections change, also sync the module name:
                // add module name if all sections selected, remove if any deselected
                const allSectionsSelected = sectionOptions.every((s) =>
                  vals.includes(s),
                );
                setSelected((prev: string[]) => {
                  const withoutThisModule = prev.filter(
                    (s) => !allOptions.includes(s),
                  );
                  return allSectionsSelected
                    ? [...withoutThisModule, module.name, ...vals]
                    : [...withoutThisModule, ...vals];
                });
              }}
            >
              {module.sections.map((section, i) => (
                <Checkbox key={i} value={section.title}>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <Label className="text-xs">{section.title}</Label>
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
