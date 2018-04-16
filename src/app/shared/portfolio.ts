export class Portfolio {
  id: number;
  name: string;
  shortName: string;
  legalEntityNumber: number;
  manager: string;
  trustee: string;
  category: string;
  subCategory: string;
  quoteValueDate: string;
  creationDate: string;
  lastUpdateDate: string;
  value: number;
  quotes: number;
  quoteValue: number;
  quoteValueBenchmark: number;
  master: Portfolio;
  color: string;
  facts: PortfolioFacts;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class PortfolioFacts {
  trendType: string;
  variation: number;
  isAsset: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
