import { createContext } from 'react';
import { StockData } from '../../types';

export type StockDataContextType = {
  stockData: StockData | null;
  setStockData: (data: StockData | null) => void;
}

export const StockDataContext = createContext<StockDataContextType>({
  stockData: null,
  setStockData: () => {},
});