async function test() {
  // console.log(arguments);
  // const test = BigInt(100);
  // const test2 = 50n;
  // console.log(test, test2);
  //
  // const method = Symbol("method");
  // const payload = Symbol("payload");
  // const config = { url: "", [method]: "get", [payload]: "hello" };
  // console.log(Symbol.for("id") === Symbol.for("id"));
  // console.log(config);
  //
  // const range = { from: 1, to: 5 };
  // range[Symbol.iterator] = function () {
  //   return {
  //     last: this.to,
  //     current: this.from,
  //     next() {
  //       if (this.current <= this.last) {
  //         return { done: false, value: this.current++ };
  //       } else {
  //         return { done: true };
  //       }
  //     },
  //   };
  // };
  // for (let item of range) {
  //   console.log(item);
  // }
  //
  // const first = {
  //   hello: "world",
  //   world: {
  //     country: "russia",
  //   },
  //   sayHello() {
  //     console.log("hello");
  //   },
  //   field: new Date(),
  // };
  // const second = { ...first };
  // const second = Object.assign({}, first);
  // const second = JSON.parse(JSON.stringify(first));
  // const second = structuredClone(first);
  // console.log(first, second, first.world === second.world);
  //
  // let count = 8;
  // console.log(++count);
  // console.log(--count);
}

test();

// function Person(name: string) {
//   this.name = name;
//   this.sayName = () => {
//     return `my name is ${this.name}`;
//   };
// }

// Person.prototype.sayHello = function () {
//   return "hello to you";
// };

// function Student(name: string, major: string) {
//   Person.call(this, name);
//   this.major = major;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// const oleg = new Student("oleg", "programming");

// console.log(oleg);
//////////////////////////////////////
// const testClass = class Example {
//   name;

//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

// function log(Class) {
//   return (...args) => {
//     // console.log(args);
//     return new Class(...args);
//   };
// }

// console.log(log(testClass)("vadim", 18));

// var greeting = "hi";

// const obj = {
//   greeting: "hey",

//   fo() {
//     const greeting = "hola";

//     const arrowFo = () => {
//       console.log(this.greeting);
//     };

//     arrowFo();
//   },
// };

// obj.fo();

// const testString = {
//   0: "h",
//   1: "e",
//   2: "l",
//   3: "l",
//   4: "o",
//   length: 5,

//   // *[Symbol.iterator]() {
//   //   for (let item = 0; item < this.length; item++) {
//   //     yield this[item];
//   //   }
//   // },
// };

// testString[Symbol.iterator] = function () {
//   return {
//     ...this,
//     currentIndex: -1,
//     next() {
//       this.currentIndex = ++this.currentIndex;

//       if (this.currentIndex !== this.length) {
//         return { done: false, value: this[this.currentIndex] };
//       }
//       return { done: true };
//     },
//   };
// };

// const route = {
//   startPosition: 0,
//   goalPosition: 15,
//   step: 1.3,

//   // *[Symbol.iterator]() {
//   //   for (let item = this.startPosition; item <= this.goalPosition; item++) {
//   //     yield item;
//   //   }
//   // },

//   // [Symbol.iterator]() {
//   //   return this;
//   // },

//   // next() {
//   //   const value = +(this.startPosition += this.step).toFixed(1);

//   //   if (value < this.goalPosition) {
//   //     return { done: false, value };
//   //   } else {
//   //     return { done: true };
//   //   }
//   // },
// };

// route[Symbol.iterator] = function () {
//   return {
//     start: this.startPosition,
//     end: this.goalPosition,
//     step: this.step,
//     next() {
//       const value = +(this.start += this.step).toFixed(1);

//       if (value < this.end) {
//         return { done: false, value };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
