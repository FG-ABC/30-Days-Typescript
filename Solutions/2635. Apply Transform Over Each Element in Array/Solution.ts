// arr: number[] means an arr is an array of numbers
// fn: (n: number, i: number) => number means fn is a function that takes two number inputs and returns a number
// map(): number[] means map returns an array of numbers

// Solution 1
function map1(arr: number[], fn: (n: number, i: number) => number): number[] {
  let output: number[] = [];
  arr.forEach((item, ind)=>{
      const num: number = item;
      const transformedItem: number = fn(item, ind);
      output.push(transformedItem);
  })
  return output;
};

// Solution 2
function map2(arr: number[], fn: (n: number, i: number) => number): number[] {
  let output: number[] = [];
  for (let i = 0; i < arr.length; i++){
      output[i] = fn(arr[i], i);
  };
  return output;
};