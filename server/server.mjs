import http from 'node:http';
import { store } from './store.mjs';

function handleClientsRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const searchParams = url.searchParams;
  const pathname = url.pathname;
  const vendorCode = searchParams.get('vendorCode');
  
  if (pathname === '/stock' && vendorCode === null) {
    res.statusCode = 400;
    return res.end('Bad request');
  }
  
  const stockItem = store.find((item) => item.vendorCode === vendorCode);

  if (!stockItem) {
    res.statusCode = 404
    return res.end('Not found');
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(stockItem));  
}


function bootstrap() {
  const server = http.createServer(handleClientsRequest);
  server.listen(8080, () => {
    console.log('Сервер запущен на порту 8080');
  });
}

bootstrap();