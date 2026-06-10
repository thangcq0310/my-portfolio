import type { Tool } from "../../types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    free: "bg-[#072C2C]/10 text-[#072C2C] border-[#072C2C]/20",
    freemium: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20",
    paid: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20",
  };
  
  const pricingLabels = {
    free: "Miễn phí",
    freemium: "Freemium",
    paid: "Trả phí",
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all h-full flex flex-col">
      {/* Secondary orange header for tools */}
      <div className="h-2 bg-[#FF5F03]" />
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