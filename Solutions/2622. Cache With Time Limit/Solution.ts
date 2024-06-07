class TimeLimitedCache {
  storage: object;
  timebomb: object;
  constructor() {
    this.storage = {};
    this.timebomb = {};
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.storage[key] != undefined) {
      // if key already exists]
      this.storage[key] = value;
      clearTimeout(this.timebomb[key]);
      this.timebomb[key] = setTimeout(() => {
        delete this.storage[key];
      }, duration);
      return true;
    } else {
      // if key does not exist
      this.storage[key] = value;
      this.timebomb[key] = setTimeout(() => {
        delete this.storage[key];
      }, duration);
      return false;
    }
  }

  get(key: number): number {
    return this.storage[key] || -1;
  }

  count(): number {
    return Object.keys(this.storage).length;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
