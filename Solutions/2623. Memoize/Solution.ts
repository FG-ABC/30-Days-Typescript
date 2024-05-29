type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  let cache = {};
  return function memoized(...args: number[]): number {
    const bogies: string = JSON.stringify(args);
    if (bogies in cache) {
      return cache[bogies];
    } else {
      const output = fn(...args);
      cache[bogies] = output;
      return output;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
