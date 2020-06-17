export interface StockI {
  name: string;
}

export interface ErrorI {
  [key: string]: string;
}
export interface StockElementI {
  icon: string;
  name: string;
  list: StockI[];
}

export interface StateI {
  category: string;
  stocks: StockElementI[];
  initialLoad: boolean;
  errors: ErrorI
}