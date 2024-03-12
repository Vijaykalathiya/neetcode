// Find the sum of the two numbers from the array which are matching the value of target.

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
    return null;
};

// only works in ascending order
// also called two pointer method
var twoSumUsingLoop = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let currentSumOfNumber = nums[left] + nums[right];
        if(currentSumOfNumber == target) {
            return [nums[left], nums[right]];
        } else if(currentSumOfNumber < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}


console.log(twoSum([2,7,11,15], 39));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

console.log("in a ascending order approch");
console.log(twoSumUsingLoop([2,7,11,15], 9));
console.log(twoSumUsingLoop([3,2,4], 6));