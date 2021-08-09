/**
 * Problem
 * https://leetcode.com/problems/two-sum/
 */

const twoSum = function(nums, target) {

    const map = new Map();
    for(var i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    for(var i = 0; i < nums.length; i++){
        const sNumber = target - nums[i];
        if(map.has(sNumber) && i !== map.get(sNumber)){
            return [i, map.get(sNumber)];
        }
    }
};

const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target));