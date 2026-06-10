import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningDemandManagement() {
  const path = learningPaths.find((item) => item.slug === "demand-management")
  return <LearningPathPage path={path!} />
}
