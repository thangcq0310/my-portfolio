import { LearningPathPage } from "@/components/learning/LearningPathPage"
import { learningPaths } from "@/data/learningPaths"

export function LearningSupplyChainFoundation() {
  const path = learningPaths.find((item) => item.slug === "supply-chain-foundation")
  return <LearningPathPage path={path!} />
}
