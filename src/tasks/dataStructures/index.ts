// Task 1
// Цель: Реализовать класс store, и методы (insert, remove, random) которые должны выполнятся за O(1)

class Store {
  data: string[] = [];

  map: Map<string, number> = new Map();

  constructor() {}

  insert(value: string) {
    if (this.map.has(value)) return;

    const newLendth = this.data.push(value);

    this.map.set(value, newLendth - 1);
  }

  remove(value: string) {
    if (!this.map.has(value)) return;

    const itemIndex = this.map.get(value) as number;
    const lastItem = this.data.at(-1) as string;

    [this.data[itemIndex], this.data[this.data.length - 1]] = [lastItem, this.data[itemIndex]];

    this.map.set(lastItem, itemIndex);

    this.data.pop();
    this.map.delete(value);
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.data.length);

    return this.data[randomIndex];
  }
}

export const store = new Store();

// Task 2
