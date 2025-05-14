// 121. Best Time to Buy and Sell Stock
//method:1 Bute force method complexity O(n^2) 
//Time limit exceeds error
function maxProfitBruteForce(prices: number[]): number {
    let price=0
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            if(price < prices[j]-prices[i]){
                price=prices[j]-prices[i]
            }
        }
    }
        return price
};
console.log(maxProfitBruteForce([7,1,5,3,6,4]))

//method:2 Two pointer method complexity O(n) //best method
function maxProfit(prices: number[]): number {
    let lft=0;
    let rgt=1;
    let profit=0;
    while(rgt<prices.length){
        if(prices[lft]<prices[rgt]){
            let value=prices[rgt]-prices[lft];
            profit=value>profit?value:profit
        }else{
            lft=rgt;
        }
        rgt++;
    }
    return profit
};
console.log(maxProfit([7,1,5,3,6,4]))