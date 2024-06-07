type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const origFn: Promise<any> = fn(...args);

    const timer: Promise<any> = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([timer, origFn]);
  };
}
