/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let max = Math.max(...prices);
    let min = Math.min(...prices);
    if(prices.indexOf(max) < prices.indexOf(min)) {
        prices.splice(0, prices.indexOf(max)+1);
        max = Math.max(...prices);
    }
    return [min,max];
};

console.log(maxProfit([5,8,15,2,9,3]));