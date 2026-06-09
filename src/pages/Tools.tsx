import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ToolCard from "../components/cards/ToolCard";
import { seedTools } from "../data/seedData";

const categories = ["Tất cả", "Excel Template", "Logistics", "Cold Chain", "Cost Analysis", "Inventory", "Planning"];

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filtered = seedTools.filter(tool => {
    if (selectedCategory !== "Tất cả" && tool.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Công cụ</h1>
        <p className="text-slate-600 mb-8">Công cụ hỗ trợ quản trị Supply Chain</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-sky-500"
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
      <Footer />
    </div>
  );
}