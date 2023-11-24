/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenthesesLists = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        switch(s[i]) {
            case '(': parenthesesLists.push(')');
                break;
            case '[': parenthesesLists.push(']');
                break;
            case '{': parenthesesLists.push('}');
                break;
            default:
                if (s[i] !== parenthesesLists.pop()) {
                    return false;
                }
        }
    }
    return parenthesesLists.length === 0;
};

console.log(isValid("(]"));