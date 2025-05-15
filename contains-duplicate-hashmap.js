//217. Contains Duplicate
//method 1: Brute force {Time Complexity : O(n^2) | Space complexity:O(1)}
function containsDuplicateBruteForce(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}
;
//method 2:Hash map(using key value pair set) {Time complexity:O(n) | Space complexity : O(n)}
function containsDuplicateHashMap(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            return true;
        }
        else {
            hashMap[nums[i]] = true;
        }
    }
    return false;
}
;
//method 3:Set (using value set) {Time complexity : O(n) || Space complexity : O(n)} //Considered as the best method compare to hash map it stores only value space complexity less
function containsDuplicate(nums) {
    var set = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (set.has(num))
            return true;
        set.add(num);
    }
    return false;
}
;
