function createHelloWorld() {
    
    return function(...args): string {
        const output: string = "Hello World"
        return output;
    };
};