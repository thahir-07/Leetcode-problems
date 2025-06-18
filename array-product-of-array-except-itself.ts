// 238. Product of Array Except Self
/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// method 1: using prefix and postfix array {Time complexity : O(3n) = o(n) , Space complexity : o(3n) = O(n)}
function productExceptSelf(nums: number[]): number[] {
    let result=new Array(nums.length);
    let postfix=new Array(nums.length).fill(1)
    let prefix=new Array(nums.length).fill(1)
    for(let i=1;i<nums.length;i++){ //[1,2,3,4] prefix [1,1,2,6] (->) default 0 index 1
        prefix[i] = prefix[i-1]*nums[i-1];
    }
    for(let j=nums.length-2;j>-1;j--){ //[1,2,3,4] postfix [24,12,4,1] (<-) default last index 1
        postfix[j]=postfix[j+1]*nums[j+1]
    }
    for (let i=0;i<nums.length;i++){
        result[i]=prefix[i]*postfix[i]
    }
    return result
};

//method 2: using post fix and prefix (Same as previous method reduced space complexity) {Time complexity : O(2n) = O(n) ,Space complexity : O(n)}
function productExceptSelfImproved(nums: number[]): number[] {
    let result=new Array(nums.length).fill(1);
    let prefix=1;
    let postfix=1;
    for(let i=0;i<nums.length;i++){
        result[i] = prefix;
        prefix *= nums[i];
    }
    for(let j=length-1;j>=0;j--){
        result[j] *=postfix;
        postfix *=nums[j]
    }
    return result
};