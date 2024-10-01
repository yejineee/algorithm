// hashmap
// 시간복잡도: O(N)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const length = nums.length;
    const hashmap = new Map(); // key: element of nums, value: index of element

    for(let i = 0; i < length; i++){
        const other = target - nums[i];
        if(hashmap.has(other)){
            return [i, hashmap.get(other)];
        }
        hashmap.set(nums[i], i);
    }
    
};
