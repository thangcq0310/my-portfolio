import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { AboutPage } from "@/pages/AboutPage"
import { ProfilePage } from "@/pages/ProfilePage"
import { ContactPage } from "@/pages/ContactPage"
import { SCMPage } from "@/pages/SCMPage"
import { SCMHub } from "@/pages/SCMHub"
import SCMBlog from "@/pages/SCMBlog"
import SCMEbook from "@/pages/SCMEbook"
import SCMTemplates from "@/pages/SCMTemplates"
import SCMServices from "@/pages/SCMServices"
import SCMBlogDetail from "@/pages/SCMBlogDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="scm" element={<SCMHub />}>
          <Route index element={<SCMPage />} />
          <Route path="blog" element={<SCMBlog />} />
          <Route path="blog/:slug" element={<SCMBlogDetail />} />
          <Route path="ebook" element={<SCMEbook />} />
          <Route path="templates" element={<SCMTemplates />} />
          <Route path="services" element={<SCMServices />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App