type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let value : number = init;
    return {
        increment: () => {
            value++;
            return value
        },
        decrement: () => {
            value--;
            return value
        },
        reset: () => {
            value = init;
            return value
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */