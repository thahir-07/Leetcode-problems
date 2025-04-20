/*
1.Two sum 
method 1:Brute force method time complexity O(n^2)
method 2:Hash map method time complexity O(n)
method 3:Two pointer method time complexity O(nlogn) + O(n) = O(nlogn)
*/ 
// method 1:Brute force method time complexity O(n^2)
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }   
    }
    
    return []
    
    
};

// console.log(twoSum([2,7,11,15],9) ) // [0,1]
// console.log(twoSum([3,2,4],6) ) // [1,2]
// console.log(twoSum([3,3],6) ) // [0,1]

//2.method:Hash map method time complexity O(n)
function twoSum2(nums: any, target: number): number[] {
    const map = {};

    for (let i = 0; i < nums.length; i++) {

    const compliment=target-nums[i];
    if(compliment in map){
        return [map[compliment],i]
    }
    map[nums[i]] = i;
   };

    return [];
}


console.log(twoSum2([2,7,11,15],9) ) // [0,1]
console.log(twoSum2([3,2,4],6) ) // [1,2]    

//method 3:Two pointer method time complexity O(nlogn) + O(n) = O(nlogn)
function twoSum3(nums: number[], target: number): number[] {
    const numsWithIndex = nums.map((num, index) => ({ num, index }));
    numsWithIndex.sort((a, b) => a.num - b.num);

    let left = 0;
    let right = numsWithIndex.length - 1;

    while (left < right) {
        const sum = numsWithIndex[left].num + numsWithIndex[right].num;
        if (sum === target) {
            return [numsWithIndex[left].index, numsWithIndex[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum3([2,7,11,15],9) ) // [0,1]
console.log(twoSum3([3,2,4],6) ) // [1,2]