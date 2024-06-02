type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const chunk = (arr: Obj[], size: number): Obj[][] => {
  var output: Obj[][] = [];
  var counter: number = 0;
  var subarr: Obj[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (counter === size) {
      counter = 1;
      output.push(subarr);
      subarr = [arr[i]];
    } else {
      subarr.push(arr[i]);
      counter++;
    }
  }
  if (subarr.length > 0) {
    output.push(subarr);
  }
  return output;
};
