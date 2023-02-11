/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const s1Map = [...s1].reduce((obj, alpha) => {
    const prevCount = obj[alpha] ?? 0;
    return { ...obj, [alpha]: prevCount + 1 };
  }, {});

  let start = 0;
  while(start + s1.length -1 <= s2.length){
    if(!s1Map[s2[start]]){
      start += 1;
    }else{
      const copy = {...s1Map};
      for(let i = start ; i < start + s1.length; i++){
        copy[s2[i]] =( copy[s2[i]] ?? 0 ) -1;
      }
      const isPermutation = Object.values(copy).every(count => count === 0);
      if(isPermutation){
        return true;
      }
      start += 1;
    }
  }
  return false;
};
