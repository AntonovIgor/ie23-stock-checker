import { useContext } from 'react';
import { StockDataContext, StockDataContextType } from './StockDataContext';

export function useStockData() {
  const stock = useContext<StockDataContextType>(StockDataContext);
  if (!stock) {
    throw new Error('useStock must be used within a StockProvider');
  }

  return stock;
}