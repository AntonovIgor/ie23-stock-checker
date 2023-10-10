import { useMemo, useState } from 'react';
import { StockData } from '../../types';
import { StockDataContext } from './StockDataContext';

type StockDataProviderProps = {
  children: React.ReactNode;
}

export function StockDataProvider({ children }: StockDataProviderProps) {
  const [stockData, setStockData] = useState<StockData | null>(null);
  
  const memoizedValue = useMemo(
      () => ({ stockData, setStockData }),
      [stockData]
  );
  
  return (
    <StockDataContext.Provider value={memoizedValue}>
      { children }
    </StockDataContext.Provider>
  );
};