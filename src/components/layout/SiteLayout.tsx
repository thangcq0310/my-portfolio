import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Container from "./Container"

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout