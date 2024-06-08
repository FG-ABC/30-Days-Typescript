type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    let pending = functions.length;
    functions.forEach(async (fn, i) => {
      try {
        const result = await fn();
        results[i] = result;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
}
