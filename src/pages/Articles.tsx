import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ArticleCard from "../components/cards/ArticleCard";
import { seedArticles } from "../data/seedData";

const topics = ["Tất cả", "Warehouse", "Inventory", "Cold Chain", "FEFO/FIFO", "WMS", "3PL", "S&OP", "Demand Planning", "Procurement", "Logistics Cost", "Digital SCM"];

export default function Articles() {
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  const filtered = seedArticles.filter(article => {
    if (selectedTag !== "Tất cả" && !article.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Bài viết</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTag(topic)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                selectedTag === topic
                  ? "bg-sky-500 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-sky-500"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center py-12">Chưa có bài viết nào.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}