/*
152. Maximum Product Subarray
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
// Method :2 compute curMax and curMin to compute max product for each prefix subarr;
//{Time complexity : O(n) , space complexity : O(1)}
function maxProduct(nums: number[]): number {
    let minValue=1,maxValue=1;
    let result = nums[0];
    for(let i=0;i<nums.length;i++){
        let temp=maxValue*nums[i];
        maxValue=Math.max(temp,minValue*nums[i],nums[i]);
        minValue =Math.min(temp,minValue*nums[i],nums[i]);
        result =Math.max(result,maxValue)
    }
    return result;
};