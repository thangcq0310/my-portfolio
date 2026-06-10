import { Link, useLocation } from "react-router-dom"
import { BookOpen, ChevronDown, GraduationCap, Lightbulb, Menu, Package, X } from "lucide-react"
import { useMemo, useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/blog", label: "Blog", icon: BookOpen },
  {
    to: "/solutions",
    label: "Giải pháp",
    icon: Lightbulb,
    children: [
      { to: "/solutions/resources", label: "Tài nguyên" },
      { to: "/solutions/products", label: "Sản phẩm số" },
      { to: "/solutions/tools", label: "Công cụ" },
      { to: "/solutions/services", label: "Dịch vụ" },
      { to: "/solutions/checklist", label: "Checklist" },
    ],
  },
  { to: "/learning", label: "Học theo lộ trình", icon: GraduationCap },
  { to: "/about", label: "Về SCHub", icon: Package },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  const activeSolutions = useMemo(
    () => location.pathname === "/solutions" || location.pathname.startsWith("/solutions/"),
    [location.pathname],
  )

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
            const Icon = link.icon

            if (link.children) {
              return (
                <div
                  key={link.to}
                  className="group relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={solutionsOpen}
                    className={[
                      "focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors",
                      activeSolutions
                        ? "bg-[var(--color-primary)] text-white"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
                    ].join(" ")}
                    onClick={() => setSolutionsOpen((open) => !open)}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", solutionsOpen && "rotate-180")} />
                  </button>

                  {solutionsOpen && (
                    <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-2 shadow-[var(--shadow-panel-hover)]">
                      <Link
                        to={link.to}
                        className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                      >
                        Tổng quan giải pháp
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={[
                  "focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/solutions/checklist" className={buttonVariants({ variant: "secondary", size: "default" })}>
            Checklist 50 điểm
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

              if (link.children) {
                return (
                  <div key={link.to} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <button
                      type="button"
                      aria-expanded={solutionsOpen}
                      onClick={() => setSolutionsOpen((open) => !open)}
                      className={[
                        "focus-ring flex w-full items-center justify-between rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium transition-colors",
                        activeSolutions ? "text-[var(--color-primary)]" : "text-[var(--color-text)]",
                      ].join(" ")}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", solutionsOpen && "rotate-180")} />
                    </button>
                    {solutionsOpen && (
                      <div className="space-y-1 px-2 pb-2">
                        <Link
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-raised)]"
                        >
                          Tổng quan giải pháp
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

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
              to="/solutions/checklist"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(buttonVariants({ variant: "secondary", size: "default" }), "mt-2 w-full")}
            >
              Checklist 50 điểm
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
