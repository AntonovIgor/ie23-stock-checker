import { HttpStatuses, StockData } from '../types';

const API_ENDPOINT = 'http://192.168.1.67:8080/stock?vendorCode=';

export async function getStockData(article: string):Promise<StockData> {
  try {
    const response = await fetch(`${API_ENDPOINT}${article}`);
    
    if (response.status === HttpStatuses.NotFound) {
      throw new Error(`Товар с артикулом ${article} не найден`);
    } else if (! response.ok) {   
      throw new Error('Сетевая ошибка. Не удалось получить данные');
    }

    const stockData: StockData = await response.json();
    return stockData;
  } catch (error) {
    throw error;
  }
}