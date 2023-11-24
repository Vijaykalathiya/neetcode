var walkDownStairs = function (n) {
    if(n == 0 || n == 1) {
        return 1
    }
    let value = walkDownStairs(n - 1) + walkDownStairs(n - 2);
    return value;
}

console.log(walkDownStairs(3));
console.log(walkDownStairs(5));
