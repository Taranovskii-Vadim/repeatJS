// Task 1
// Цель: Реализовать свой deepEqual

export const deepEqual = <T>(first: T, second: T): boolean => {
  if (typeof first !== typeof second) return false;

  if (typeof first !== 'object' && typeof second !== 'object') {
    return Object.is(first, second);
  }

  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) return false;

    for (let i = 0; i < first.length; i++) {
      if (!deepEqual(first[i], second[i])) return false;
    }

    return true;
  }

  if (Array.isArray(first) || Array.isArray(second)) return false;

  if (first === null && second === null) return true;
  if (first === null || second === null) return false;
  if (first === second) return true;

  const firstEntries = Object.entries(first);
  const secondEntries = Object.entries(second);

  if (firstEntries.length !== secondEntries.length) return false;

  if (!deepEqual(firstEntries, secondEntries)) return false;

  return true;
};

// Task 2
// Цель: Реализовать свой deepClone

export const deepClone = <D>(data: D): D => {
  const result = {} as D;

  for (let key in data) {
    const item = data[key];

    if (Array.isArray(item)) {
      result[key] = item.map(deepClone);
    } else if (item instanceof Set) {
      result[key] = new Set(item);
    } else if (item instanceof Map) {
      result[key] = new Map(item);
    } else if (item instanceof Date) {
      result[key] = new Date(item);
    } else if (item instanceof Function) {
      result[key] = new Function('return ' + item.toString());
    } else if (typeof item === 'object' && item !== null) {
      result[key] = deepClone(item);
    } else {
      result[key] = data[key];
    }
  }

  return result;
};
