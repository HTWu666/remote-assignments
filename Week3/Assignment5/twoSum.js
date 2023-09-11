function twoSum(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num in obj) {
            return [obj[num], i];
        } else {
            let shift = Math.abs(target - num);
            obj[shift] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // should print [0, 1]