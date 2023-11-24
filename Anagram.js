/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    return reorder(s) === reorder(t); 
};

const reorder = (str) => str
    .split('')                         
    .sort((a, b) => a.localeCompare(b))
    .join('');   

console.log(isAnagram("vijay","jayvi"));