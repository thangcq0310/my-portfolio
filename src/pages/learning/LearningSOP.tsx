import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningSOP() {
  const path = learningPaths.find((item) => item.slug === "sop")
  return <LearningPathPage path={path!} />
}
