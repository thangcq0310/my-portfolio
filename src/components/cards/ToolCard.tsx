import type { Tool } from "../../types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    free: "bg-teal-50 text-teal-700 border-teal-200",
    freemium: "bg-amber-50 text-amber-700 border-amber-200",
    paid: "bg-red-50 text-red-700 border-red-200",
  };
  
  const pricingLabels = {
    free: "Miễn phí",
    freemium: "Freemium",
    paid: "Trả phí",
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col">
      {/* Visual header - amber for tools */}
      <div className="h-2 bg-amber-600" />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">{tool.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-500">{tool.category}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${pricingColors[tool.pricing]}`}>
            {pricingLabels[tool.pricing]}
          </span>
        </div>
      </div>
    </div>
  );
}