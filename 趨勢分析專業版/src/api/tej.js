import { mockTEJFundamentals } from "./mockData.js";

export async function getTEJFundamentals(symbol) {
  const apiKey = process.env.TEJ_API_KEY;
  const mode = process.env.API_MODE || "mock";

  if (mode === "mock" || !apiKey) {
    return mockTEJFundamentals;
  }

  const url = `https://api.tej.com.tw/api/v2/tej/finance?symbol=${symbol}`;
  const res = await fetch(url, {
    headers: { authorization: `Bearer ${apiKey}` }
  });

  const data = await res.json();
  const row = data.data[0];

  return {
    eps: row.eps,
    roe: row.roe,
    grossMargin: row.gross_margin,
    revenueGrowth: row.revenue_yoy,
    debtRatio: row.debt_ratio,
    roa: row.roa
  };
}