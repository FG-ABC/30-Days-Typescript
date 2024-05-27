type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let output: number = init;
    for (let i = 0; i < nums.length; i++){
        output = fn(output, nums[i]);
    }
    return output;
};