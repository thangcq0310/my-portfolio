import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningForecasting() {
  const path = learningPaths.find((item) => item.slug === "forecasting")
  return <LearningPathPage path={path!} />
}
