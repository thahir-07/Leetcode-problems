/*
1.Two sum
method 1:Brute force method time complexity O(n^2)
method 2:Hash map method time complexity O(n)
method 3:Two pointer method time complexity O(nlogn) + O(n) = O(nlogn)
*/
// method 1:Brute force method time complexity O(n^2)
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
;
// console.log(twoSum([2,7,11,15],9) ) // [0,1]
// console.log(twoSum([3,2,4],6) ) // [1,2]
// console.log(twoSum([3,3],6) ) // [0,1]
//2.method:Hash map method time complexity O(n)
function twoSum2(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var compliment = target - nums[i];
        if (compliment in map) {
            return [map[compliment], i];
        }
        map[nums[i]] = i;
    }
    ;
    return [];
}
console.log(twoSum2([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum2([3, 2, 4], 6)); // [1,2]    
//method 3:Two pointer method time complexity O(nlogn) + O(n) = O(nlogn)
function twoSum3(nums, target) {
    var numsWithIndex = nums.map(function (num, index) { return ({ num: num, index: index }); });
    numsWithIndex.sort(function (a, b) { return a.num - b.num; });
    var left = 0;
    var right = numsWithIndex.length - 1;
    while (left < right) {
        var sum = numsWithIndex[left].num + numsWithIndex[right].num;
        if (sum === target) {
            return [numsWithIndex[left].index, numsWithIndex[right].index];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return [];
}
console.log(twoSum3([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum3([3, 2, 4], 6)); // [1,2]
