/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let answer = right;

  while(left <= right) {
    let mid = Math.floor((left+right)/2)
    let sum = 0;
    for(let i=0; i<piles.length; i+=1){
      sum += Math.ceil(piles[i]/mid);
    }
    if(sum > h){
      left = mid+1;
    }else{
      answer = mid;
      right = mid-1
    }
  }
  
  return answer;
};
