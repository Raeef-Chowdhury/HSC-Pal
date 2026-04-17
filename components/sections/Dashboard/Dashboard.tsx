import { DashboardGreeting } from "./DashboardGreeting";
import { AnalyticsPreview } from "./AnalyticsPreview";
import StudyPlan from "./StudyPlan/StudyPlan";
import CompletedStudyPlan from "./StudyPlan/CompletedStudyPlan";
import InvalidStudyPlan from "./StudyPlan/InvalidStudyPlan";
export function Dashboard() {
  return (
    <section className="ml-[210px]">
      <div className="flex  items-start">
        <DashboardGreeting />
        <InvalidStudyPlan />
      </div>
      <AnalyticsPreview />
    </section>
  );
}
