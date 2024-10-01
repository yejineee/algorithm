/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);

    const answer = [];
    const answerSet = new Set();

    for(let t = 0; t < nums.length -2; t+=1){
        const target = nums[t] * -1;
        let l = t+1;
        let r = nums.length-1;

        while(l < r){
            const left = nums[l];
            const right = nums[r];
            if(left + right === target){
                const newAnswer = [nums[t], left, right];
                const newAnswerString = newAnswer.join(",")
                if(!answerSet.has(newAnswerString)){
                    answer.push([nums[t], left, right]);
                    answerSet.add(newAnswerString);
                }
                l += 1;
                r -= 1;
            }
            else if(left + right < target){
                l += 1;
            }
            else {
                r -= 1;
            }
        }
    }

    return answer;
};
