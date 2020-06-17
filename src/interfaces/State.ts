export interface Stock {
  id: number;
  name: string;
  description: string;
  costPerPackage: number;
  amount: number;
}

export interface Food extends Stock {
  caloriesPerPackage: number;
}

export interface Water extends Stock {
  millilitrePerPackage: number;
}

export interface Error {
  [key: string]: string;
}
export interface StockElement {
  icon: string;
  name: string;
  list: Stock[] | Water[] | Food[];
}

export interface State {
  category: string;
  stocks: StockElement[];
  initialLoad: boolean;
  errors: Error;
}
