import { StockElementI } from "./StockI";

export interface StateI {
  currentStock: string;
  stocks: StockElementI[];
}