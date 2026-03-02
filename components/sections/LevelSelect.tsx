import { ChevronDown } from "lucide-react";
import { LevelSelectBtn } from "@/components/UI/Buttons/LevelSelectBtn";
const BtnConfig = [
  { text: "Prelim - Year 11", link: "/prelim" },
  { text: "HSC - Year 12", link: "/hsc" },
];
export function LevelSelect() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-background text-foreground">
      <div className="items-center  flex flex-col">
        <h1 className="font-bold mt-[4.8rem] text-primary text-[3.2rem]  tracking-tight">
          HSC QUESTIONNAIRE
        </h1>
        <p className="mt-[2.4rem] tracking-[0.1rem] text-foreground opacity-80 text-[1.6rem]">
          All your HSC & Prelim Questions in one place
        </p>
        <div className="flex flex-col gap-[1.8rem] items-center jsutify-center ">
          <p className="mt-[9.6rem] text-[1.4rem] opacity-50 text-secondary leading-[0.1rem] ">
            Choose your Year Level to start with
          </p>
          <ChevronDown className="w-8 h-8  text-primary/70 bounce-subtle " />
        </div>
        <div className="flex items-center mt-[2.4rem] gap-[3.2rem] text-[1.8rem]">
          {BtnConfig.map((btn, index) => (
            <LevelSelectBtn key={index} text={btn.text} link={btn.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
