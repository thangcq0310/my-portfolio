import { useState } from "react"
import Container from "../components/layout/Container"
import ToolCard from "../components/cards/ToolCard"
import { seedTools } from "../data/seedData"

const categories = ["Tất cả", "Excel Template", "Logistics", "Cold Chain", "Cost Analysis", "Inventory", "Planning"]

export function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filtered = seedTools.filter(tool => {
    if (selectedCategory !== "Tất cả" && tool.category !== selectedCategory) return false
    return true
  })

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Công cụ</h1>
        <p className="text-slate-600 mb-8">Công cụ hỗ trợ quản trị Supply Chain</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === cat
                  ? "bg-[#FF5F03] text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#072C2C] hover:text-[#072C2C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </Container>
  )
}