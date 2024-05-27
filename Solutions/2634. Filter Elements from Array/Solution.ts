type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let output: number[] = [];
    for (let i = 0; i < arr.length ; i++){
        if (fn(arr[i], i)){
            output.push(arr[i]);
        };
    };
    return output;
};