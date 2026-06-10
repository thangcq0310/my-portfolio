import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningDemandAnalysis() {
  const path = learningPaths.find((item) => item.slug === "demand-analysis")
  return <LearningPathPage path={path!} />
}
