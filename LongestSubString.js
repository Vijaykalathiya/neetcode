/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let result = [];
    let secondString = [];
    let startSecondString = false;
    while(i < s.length) {
        if(result.indexOf(s[i]) == -1 && startSecondString == false) {
            result.push(s[i]);
        } else {
            startSecondString = true;
            if(secondString.indexOf(s[i]) == -1) {
                secondString.push(s[i]);
            } else {
                if(result.length < secondString.length) {
                    result = secondString;
                }
                secondString = [];
            }
        }
        i++;
    }
    return result.length;

};

console.log(lengthOfLongestSubstring("pwwkew"));