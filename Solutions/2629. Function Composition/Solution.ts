type F = (x: number) => number;

function compose(functions: F[]): F {
    return function composed(x: number): number {
        let output: number = x;
        for(let i = functions.length - 1; i >=0; i--){
            output = functions[i](output);
        }
        return output
    };
};


// const fn = compose([x => x + 1, x => 2 * x])
// fn(4); // 9
