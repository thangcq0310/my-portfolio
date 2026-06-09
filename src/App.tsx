import { Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Analytics } from "@/components/Analytics"
import { Layout } from "@/components/Layout"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { SCMPage } from "@/pages/SCMPage"
import { SCMHub } from "@/pages/SCMHub"
import SCMBlog from "@/pages/SCMBlog"
import SCMEbook from "@/pages/SCMEbook"
import SCMTemplates from "@/pages/SCMTemplates"
import SCMServices from "@/pages/SCMServices"
import SCMBlogDetail from "@/pages/SCMBlogDetail"
import SCMChecklist from "@/pages/SCMChecklist"
import OrderPage from "@/pages/OrderPage"
import BlogEditor from "@/pages/BlogEditor"

function App() {
  return (
    <HelmetProvider>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="scm" element={<SCMHub />}>
            <Route index element={<SCMPage />} />
            <Route path="blog" element={<SCMBlog />} />
            <Route path="blog/:slug" element={<SCMBlogDetail />} />
            <Route path="ebook" element={<SCMEbook />} />
            <Route path="templates" element={<SCMTemplates />} />
            <Route path="services" element={<SCMServices />} />
            <Route path="checklist" element={<SCMChecklist />} />
          </Route>
          <Route path="order" element={<OrderPage />} />
          <Route path="scm/blog/new" element={<BlogEditor />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App