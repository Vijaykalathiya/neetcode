/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++) {
        let diff = target - nums[i];
        let nextNumberIndex = nums.lastIndexOf(diff);
        if(nextNumberIndex != i && nextNumberIndex >= 0) {
            return [i, nextNumberIndex];
        }
    }
};


console.log(twoSum([2,7,11,15], 39));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));