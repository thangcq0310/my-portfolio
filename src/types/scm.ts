export interface SCMPost {
  id: string
  title: string
  description: string
  link: string
}

export interface SCMArticle {
  title: string
  content: string
}

export type SCMSlug = 
  | 'supply-chain-la-gi'
  | 'logistics-vs-supply-chain'
  | '7-loi-quan-ly-ton-kho-excel'
  | 'abc-analysis-ton-kho'
  | 'safety-stock-la-gi'
  | 'inventory-turnover'
  | 'eoq'
  | 'lean-management'
  | 'vendor-managed-inventory'
  | 'cross-docking'
  | '3pl'
  | '4pl'
  | 'warehouse-management'
  | 'demand-forecasting'
  | 's&op'