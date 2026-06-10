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