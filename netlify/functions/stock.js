import { getFuglePrice } from "../../src/api/fugle.js";
import { getTEJFundamentals } from "../../src/api/tej.js";
import { computeScore } from "../../src/api/score.js";

export default async (req, res) => {
  const symbol = req.query.symbol || "2330";

  const price = await getFuglePrice(symbol);
  const fundamentals = await getTEJFundamentals(symbol);
  const score = computeScore(fundamentals);

  return res.json({
    symbol,
    price,
    fundamentals,
    score
  });
};