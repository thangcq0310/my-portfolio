/**
 * @file Fix unused var/import warnings for ESLint --max-warnings 0
 * 
 * Reads each file, finds the lucide-react import line(s), removes unused symbols,
 * and prefixes unused destructured vars with underscore.
 * 
 * Files & unused symbols to remove:
 * 
 * src/sections/scm/HeroSection.tsx: Package,TrendingUp,FileSpreadsheet,Users,Truck,Clock
 * src/sections/scm/PainPointsSection.tsx: FileSpreadsheet,GitBranch,BarChart3
 * src/sections/scm/AboutSection.tsx: User
 * src/sections/scm/ArticlesSection.tsx: FileSpreadsheet,Package,TrendingDown,Clock,BarChart3,BookOpen,Users
 * src/sections/scm/CTASection.tsx: ArrowRight
 * src/sections/scm/FreeToolsSection.tsx: CheckCircle
 * src/sections/scm/ProductsSection.tsx: Bell
 * src/sections/scm/ServicesSection.tsx: TrendingDown,Package,FileSpreadsheet
 * src/pages/SCMChecklist.tsx: _role,_setRole (prefix unused vars)
 * src/pages/SCMEbook.tsx: ArrowRight,Download,Mail
 * src/pages/SCMServices.tsx: MessageCircle,ArrowRight,Mail
 * src/pages/SCMShop.tsx: ArrowRight, _container,_item (prefix unused vars)
 */

import { readFileSync, writeFileSync } from "fs";

const fixes = [
  // Sections
  {
    file: "src/sections/scm/HeroSection.tsx",
    remove: ["Package", "TrendingUp", "FileSpreadsheet", "Users", "Truck", "Clock"],
  },
  {
    file: "src/sections/scm/PainPointsSection.tsx",
    remove: ["FileSpreadsheet", "GitBranch", "BarChart3"],
  },
  {
    file: "src/sections/scm/AboutSection.tsx",
    remove: ["User"],
  },
  {
    file: "src/sections/scm/ArticlesSection.tsx",
    remove: ["FileSpreadsheet", "Package", "TrendingDown", "Clock", "BarChart3", "BookOpen", "Users"],
  },
  {
    file: "src/sections/scm/CTASection.tsx",
    remove: ["ArrowRight"],
  },
  {
    file: "src/sections/scm/FreeToolsSection.tsx",
    remove: ["CheckCircle"],
  },
  {
    file: "src/sections/scm/ProductsSection.tsx",
    remove: ["Bell"],
  },
  {
    file: "src/sections/scm/ServicesSection.tsx",
    remove: ["TrendingDown", "Package", "FileSpreadsheet"],
  },
  // Pages
  {
    file: "src/pages/SCMEbook.tsx",
    remove: ["ArrowRight", "Download", "Mail"],
  },
  {
    file: "src/pages/SCMServices.tsx",
    remove: ["MessageCircle", "ArrowRight", "Mail"],
  },
  {
    file: "src/pages/SCMShop.tsx",
    remove: ["ArrowRight"],
  },
];

function removeImportSymbol(content, symbol) {
  // Match the lucide-react import block (may span multiple lines)
  const importRegex = /import\s*\{([^}]*)\}\s*from\s*["']lucide-react["']/;
  const match = content.match(importRegex);
  if (!match) return content;
  
  let symbols = match[1].split(",").map(s => s.trim()).filter(Boolean);
  symbols = symbols.filter(s => s !== symbol);
  
  if (symbols.length === 0) {
    // Remove entire import line
    return content.replace(importRegex, "");
  }
  
  const newImport = `import { ${symbols.join(", ")} } from "lucide-react"`;
  return content.replace(importRegex, newImport);
}

function prefixUnusedVar(content, varName, prefix = "_") {
  // Replace `const [varName` or `const [varName,` with `const [_varName`
  const patterns = [
    new RegExp(`const \\[${varName}([,\\]])`, "g"),
    new RegExp(`const ${varName}\\b`, "g"),
  ];
  for (const pat of patterns) {
    content = content.replace(pat, (match) => {
      return match.replace(varName, `_${varName}`);
    });
  }
  return content;
}

// Replace all fs.readFileSync/fs.writeFileSync with direct calls
const files = fixes.map(f => f.file);
  
  if (fix.remove) {
    for (const sym of fix.remove) {
      content = removeImportSymbol(content, sym);
    }
  }
  
  if (fix.prefixVars) {
    for (const v of fix.prefixVars) {
      content = prefixUnusedVar(content, v);
    }
  }
  
  fs.writeFileSync(fix.file, content);
  console.log(`✅ ${fix.file}`);
}

// Manual fixes for vars
const scmChecklist = fs.readFileSync("src/pages/SCMChecklist.tsx", "utf-8");
const fixed = scmChecklist
  .replace(/const \[role, setRole\]/g, "const [_role, _setRole]")
  .replace(/const \[_role, _setRole\]/g, "const [_role, _setRole]");
fs.writeFileSync("src/pages/SCMChecklist.tsx", fixed);
console.log("✅ src/pages/SCMChecklist.tsx (var prefix)");

const scmShop = fs.readFileSync("src/pages/SCMShop.tsx", "utf-8");
const fixedShop = scmShop
  .replace(/const container/g, "const _container")
  .replace(/const item/g, "const _item");
fs.writeFileSync("src/pages/SCMShop.tsx", fixedShop);
console.log("✅ src/pages/SCMShop.tsx (var prefix)");