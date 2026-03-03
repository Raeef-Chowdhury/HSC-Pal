"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const categories = {
  SCIENCES: {
    color: "accent",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Earth & Env Science",
      "Psychology",
    ],
  },
  MATHEMATICS: {
    color: "primary",
    subjects: [
      "Maths Advanced",
      "Maths Extension 1",
      "Maths Extension 2",
      "Maths Standard",
    ],
  },
  HUMANITIES: {
    color: "gold",
    subjects: [
      "English Advanced",
      "English Standard",
      "Modern History",
      "Ancient History",
      "Legal Studies",
      "Economics",
      "Business Studies",
      "Geography",
    ],
  },
};

const colorMap = {
  accent: {
    label: "text-accent/50",
    divider: "from-accent/20",
    cardBorder: "border-accent/15 hover:border-accent/40",
    cardBg: "hover:bg-accent/[0.04]",
    cardGlow: "hover:shadow-[0_0_20px_var(--color-accent-glow)]",
    text: "text-accent/70 group-hover:text-accent",
    sub: "text-accent/25 group-hover:text-accent/50",
  },
  primary: {
    label: "text-primary/50",
    divider: "from-primary/20",
    cardBorder: "border-primary/15 hover:border-primary/40",
    cardBg: "hover:bg-primary/[0.04]",
    cardGlow: "hover:shadow-[0_0_20px_var(--color-primary-light)]",
    text: "text-primary/70 group-hover:text-primary",
    sub: "text-primary/25 group-hover:text-primary/50",
  },
  gold: {
    label: "text-gold/50",
    divider: "from-gold/20",
    cardBorder: "border-gold/15 hover:border-gold/40",
    cardBg: "hover:bg-gold/[0.04]",
    cardGlow: "hover:shadow-[0_0_20px_rgba(212,180,90,0.12)]",
    text: "text-gold/70 group-hover:text-gold",
    sub: "text-gold/25 group-hover:text-gold/50",
  },
  success: {
    label: "text-success/50",
    divider: "from-success/20",
    cardBorder: "border-success/15 hover:border-success/40",
    cardBg: "hover:bg-success/[0.04]",
    cardGlow: "hover:shadow-[0_0_20px_rgba(16,217,138,0.1)]",
    text: "text-success/70 group-hover:text-success",
    sub: "text-success/25 group-hover:text-success/50",
  },
  warning: {
    label: "text-warning/50",
    divider: "from-warning/20",
    cardBorder: "border-warning/15 hover:border-warning/40",
    cardBg: "hover:bg-warning/[0.04]",
    cardGlow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]",
    text: "text-warning/70 group-hover:text-warning",
    sub: "text-warning/25 group-hover:text-warning/50",
  },
};

export function SubjectSelectionChoice() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen px-24 pt-8 pb-24">
      <div className="mb-16 mt-8 text-center">
        <h1 className="text-[2.4rem] tracking-[0.15em] text-foreground/80 font-light uppercase">
          Select a Subject
        </h1>
        <p className="text-muted tracking-[0.06em] text-sm mt-2">
          Choose a subject to configure and generate practice questions
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {Object.entries(categories).map(([category, { color, subjects }]) => {
          const c = colorMap[color];
          return (
            <div key={category}>
              <div className="flex gap-3 items-center mb-5">
                <span
                  className={`text-[0.6rem] tracking-[0.3em] font-semibold shrink-0 ${c.label}`}
                >
                  {category}
                </span>
                <div
                  className={`flex-1 h-px bg-gradient-to-r ${c.divider} to-transparent`}
                />
              </div>

              {/* Subject Cards */}
              <div className="flex gap-3 flex-wrap">
                {subjects.map((subject) => (
                  <Link href={`${pathname}/${subject}`} key={subject}>
                    <button
                      key={subject}
                      className={`
                        group relative px-6 py-4 rounded-2xl text-left
                      border bg-card ${c.cardBorder} ${c.cardBg} ${c.cardGlow}
                      hover:bg-card-hover active:scale-[0.97]
                      transition-all duration-200 cursor-pointer
                    `}
                    >
                      <span
                        className={`block text-[1.05rem] tracking-[0.04em] font-light transition-colors duration-200 ${c.text}`}
                      >
                        {subject}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
