import { ProductStock } from './ProductStock.type';

export type StockData = {
  product: string;
  vendorCode: string;
  code: string;
  warehouses: ProductStock[];
} 