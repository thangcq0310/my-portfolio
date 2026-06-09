import type { Tool } from "../../types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    free: "bg-emerald-100 text-emerald-700",
    freemium: "bg-amber-100 text-amber-700",
    paid: "bg-red-100 text-red-700",
  };
  
  const pricingLabels = {
    free: "Miễn phí",
    freemium: "Freemium",
    paid: "Trả phí",
  };
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{tool.category}</span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${pricingColors[tool.pricing]}`}>
          {pricingLabels[tool.pricing]}
        </span>
      </div>
    </div>
  );
}