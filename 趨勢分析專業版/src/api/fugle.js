import { mockFuglePrice } from "./mockData.js";

export async function getFuglePrice(symbol) {
  const apiKey = process.env.FUGLE_API_KEY;
  const mode = process.env.API_MODE || "mock";

  if (mode === "mock" || !apiKey) {
    return mockFuglePrice;
  }

  const url = `https://api.fugle.tw/marketdata/v1.0/stock/intraday/quote?symbol=${symbol}&apikey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    symbol,
    price: data.data.lastPrice,
    change: data.data.change,
    changePercent: data.data.changePercent
  };
}