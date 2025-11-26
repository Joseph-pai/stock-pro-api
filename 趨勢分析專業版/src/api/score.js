export function computeScore(f) {
  let score = 0;
  if (f.eps >= 8) score += 10;
  if (f.roe >= 15) score += 10;
  if (f.revenueGrowth >= 10) score += 10;
  if (f.grossMargin >= 50) score += 5;
  score += 10;
  score += 8;
  return score;
}