var missingNumberFromArrayMethodOne = function (nums, set = new Set(nums)) {
  for (let i = 0; i <= nums.length; i++) if (!set.has(i)) return i;
};

var missingNumberFromArrayMethodTwo = function (nums, set = new Set(nums)) {
  let len = nums.length;
  let sum = (len * (len + 1)) / 2;
  for (let i = 0; i < nums.length; i++) sum -= nums[i];
  return sum;
};
