import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningOperationsPlanningControl() {
  const path = learningPaths.find((item) => item.slug === "operations-planning-control")
  return <LearningPathPage path={path!} />
}
