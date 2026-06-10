import { Link, useLocation } from "react-router-dom"
import { BookOpen, Briefcase, ClipboardCheck, Menu, Package, Wrench, X } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/articles", label: "Bài viết", icon: BookOpen },
  { to: "/books", label: "Sản phẩm số", icon: BookOpen },
  { to: "/tools", label: "Công cụ", icon: Wrench },
  { to: "/services", label: "Dịch vụ", icon: Briefcase },
  { to: "/checklist", label: "Checklist", icon: ClipboardCheck },
  { to: "/about", label: "Về SCHub", icon: Package },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:rgba(247,245,238,0.92)] backdrop-blur supports-[backdrop-filter]:bg-[color:rgba(247,245,238,0.82)]">
      <nav aria-label="Điều hướng chính" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-[var(--radius-md)] px-1 py-1.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-panel)]">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-[var(--font-display)] text-[1.375rem] leading-none text-[var(--color-text)]">SCHub.vn</span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Supply Chain Knowledge Hub</span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(location.pathname, link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={[
                  "focus-ring rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/checklist" className={buttonVariants({ variant: "secondary", size: "default" })}>
            Tải checklist 50 điểm
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text)] lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(location.pathname, link.to)
              const Icon = link.icon
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "focus-ring flex items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-transparent bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-border)]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/checklist"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(buttonVariants({ variant: "secondary", size: "default" }), "mt-2 w-full")}
            >
              Tải checklist 50 điểm
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
