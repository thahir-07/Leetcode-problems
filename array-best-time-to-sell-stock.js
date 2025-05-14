// 121. Best Time to Buy and Sell Stock
//method:1 Bute force method complexity O(n^2) 
//Time limit exceeds error
function maxProfitBruteForce(prices) {
    var price = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            if (price < prices[j] - prices[i]) {
                price = prices[j] - prices[i];
            }
        }
    }
    return price;
}
;
console.log(maxProfitBruteForce([7, 1, 5, 3, 6, 4]));
//method:2 Two pointer method complexity O(n) //best method
function maxProfit(prices) {
    var lft = 0;
    var rgt = 1;
    var profit = 0;
    while (rgt < prices.length) {
        if (prices[lft] < prices[rgt]) {
            var value = prices[rgt] - prices[lft];
            profit = value > profit ? value : profit;
        }
        else {
            lft = rgt;
        }
        rgt++;
    }
    return profit;
}
;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
