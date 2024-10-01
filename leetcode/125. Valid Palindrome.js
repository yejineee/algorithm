// Time Complexity: O(N)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z\d]/g, '');

    let left = 0;
    let right = str.length-1;



    while(left <= right){
        if(str[left] !== str[right]){
            return false;
        }

        left += 1;
        right -= 1;
    }

    return true;
};
