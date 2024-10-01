// 시간복잡도: O(N^2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const length = nums.length;

    for(let i = 0; i < length-1; i++){
        for(let k = i+1; k < length; k++){
            if(nums[i] + nums[k] === target){
                return [i, k]
            }
        }
    }
    
};
