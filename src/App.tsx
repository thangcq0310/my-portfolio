import { Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { Home } from "@/pages/Home"
import { Articles } from "@/pages/Articles"
import { ArticleDetail } from "@/pages/ArticleDetail"
import { Books } from "@/pages/Books"
import { ProductDetail } from "@/pages/ProductDetail"
import { Tools } from "@/pages/Tools"
import { Services } from "@/pages/Services"
import { Checklist } from "@/pages/Checklist"
import { About } from "@/pages/About"
import { Learning } from "@/pages/learning/Learning"
import { LearningSupplyChainFoundation } from "@/pages/learning/LearningSupplyChainFoundation"
import { LearningDemandAnalysis } from "@/pages/learning/LearningDemandAnalysis"
import { LearningDemandManagement } from "@/pages/learning/LearningDemandManagement"
import { LearningForecasting } from "@/pages/learning/LearningForecasting"
import { LearningSOP } from "@/pages/learning/LearningSOP"
import { LearningOperationsPlanningControl } from "@/pages/learning/LearningOperationsPlanningControl"

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:slug" element={<ProductDetail />} />
          <Route path="tools" element={<Tools />} />
          <Route path="learning" element={<Learning />} />
          <Route path="learning/supply-chain-foundation" element={<LearningSupplyChainFoundation />} />
          <Route path="learning/demand-analysis" element={<LearningDemandAnalysis />} />
          <Route path="learning/demand-management" element={<LearningDemandManagement />} />
          <Route path="learning/forecasting" element={<LearningForecasting />} />
          <Route path="learning/sop" element={<LearningSOP />} />
          <Route path="learning/operations-planning-control" element={<LearningOperationsPlanningControl />} />
          <Route path="services" element={<Services />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="about" element={<About />} />
          <Route path="scm" element={<Navigate to="/" replace />} />
          <Route path="scm/*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App