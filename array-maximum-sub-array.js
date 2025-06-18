// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
function maxSubArray1(nums) {
    var maxSum = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        var currentSum = 0;
        for (var j = i; j < nums.length; j++) {
            currentSum += nums[j];
            Math.max(currentSum, maxSum);
        }
    }
    return maxSum;
}
;
//method 2: optimized complexity {Time complexity : O(n) , Space complexity :O(1)}
function maxSubArray(nums) {
    var currentSum = nums[0];
    var maxSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (currentSum < 0)
            currentSum = 0;
        currentSum += nums[i];
        if (currentSum > maxSum)
            maxSum = currentSum;
    }
    return maxSum;
}
;
