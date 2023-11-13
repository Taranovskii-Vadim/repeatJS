// Divide long number with the help of _
export const TEST_NUMBER = 1_000_000_000;

// Logical Assigment

// let a = 1;
// let b = 69;

// // Easy
// if (a) {
//   a = b;
// }
// // Medium
// a && (a = b);
// a || (a = b);
// a ?? (a = b);
// // hard
// a &&= b;
// a ||= b;
// a ??= b;

// ReplaceAll

const test = 'JavaScript is the best language in the world because it is JavaScript';

export const removeJsWord = () => test.replaceAll('JavaScript', 'Python');

// Promise.any

const getPromise = (val: number, timeout: number, error: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val > 5) {
        resolve(val);
      } else {
        reject(error);
      }
    }, timeout);
  });
};

export async function start() {
  try {
    const promises = [6, 7, 8].map((item) => getPromise(item, 2000, 'error'));
    const response = await Promise.all(promises);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

// Private methods

class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  logInfo() {
    return `Hello world`;
  }
}

class Person extends Human {
  birthYear: number;
  constructor(birthYear: number, name: string) {
    super(name);
    this.birthYear = birthYear;
  }

  // get #age() {
  //   const val = new Date().getFullYear() - this.birthYear;
  //   return val;
  // }

  getInfo() {
    console.log(this.logInfo());
    // return `${this.name} ${this.#age}`;
  }
}

const person = new Person(1998, 'Vadim');

console.log(person.getInfo());
