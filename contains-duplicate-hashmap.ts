//217. Contains Duplicate

//method 1: Brute force {Time Complexity : O(n^2) | Space complexity:O(1)}
function containsDuplicateBruteForce(nums: number[]): boolean {
    for(let i=0;i<nums.length-1;i++){
       for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            return true
        }
       }
    }
    return false
};
//also there is a method first sort and check with two pointers time complexity will be O   (n log n) it depends on which sorting algorithm u use
//method 2:Hash map(using key value pair set) {Time complexity:O(n) | Space complexity : O(n)}
function containsDuplicateHashMap(nums: number[]): boolean {
    const hashMap:Record<number,boolean>={}
    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]]){
           return true
        }
        else{
             hashMap[nums[i]]=true
        }
    }
    return false
};

//method 3:Set (using value set) {Time complexity : O(n) || Space complexity : O(n)} //Considered as the best method compare to hash map it stores only value space complexity less
function containsDuplicate(nums: number[]): boolean {
    const set=new Set<number>()
    for(const num of nums){
        if(set.has(num)) return true
        set.add(num)
        
    }
    return false
};