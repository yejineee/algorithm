/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    profit = Math.max(prices[i] - buy, profit);
    buy = Math.min(buy, prices[i]);
  }

  return profit;
};
