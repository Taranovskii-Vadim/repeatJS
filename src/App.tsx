// Interview Questions example
// 1) Diff between interfaces and types
// 2) What is "as" in TypeScript
// 3) What is interceptor in frontend. Where we can use it?
// 4) We have status system. Frontend send PUT request with new status, should we await API response to render new status or not.

import { dict, findElementsSum, promise, recursiveString, stonks } from './pureJsTasks';

// Interview Tasks example
// 1) We have string and search string. Need create a function that can return JSX with string and substring highlighted

// TODO первый вопрос про семантику в html и насколько она необходима если мы делаем SPA на реакте
// TODO задача про поиск в табах
// TODO задача на софт скиллы, что такое ревью, что если возникли ошибки в результате ревью, что если разработчик сделал мерж без ревью
// TODO createPortal
// TODO diff between array and list
// TODO question about unit tests, we have parent component and we have unit test, and we have child component but we dont have unit test but this component 100%
// TODO what is em? rem? vh? vw?
// TODO назвать способы подключения шрифтов в react проект
// TODO задача с изменением цвета тега body при переходе из формы логина в продукт
// TODO tree-shaking what is it

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

const App = (): JSX.Element => {
  // const [person, setPerson] = useState({ name: "vadim" });
  // const [count, setCount] = useState(5);

  // const descrement = () => {
  //   setCount((prev) => prev - 1);
  //   setCount((prev) => prev - 1);
  // };

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

  // for (let item of testString) {
  //   console.log(item);
  // }

  const route = {
    startPosition: 0,
    goalPosition: 15,
    step: 1.3,

    // *[Symbol.iterator]() {
    //   for (let item = this.startPosition; item <= this.goalPosition; item++) {
    //     yield item;
    //   }
    // },

    // [Symbol.iterator]() {
    //   return this;
    // },

    // next() {
    //   const value = +(this.startPosition += this.step).toFixed(1);

    //   if (value < this.goalPosition) {
    //     return { done: false, value };
    //   } else {
    //     return { done: true };
    //   }
    // },
  };

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

  // const data = [
  //   { country: 'russia', cities: ['moscow', 'samara'] },
  //   { country: 'england', cities: ['london'] },
  // ];

  // const [index, setIndex] = useState<number>(0);

  // const handleChange = (value: number): void => setIndex(value);

  // return (
  //   <div>
  //     <select value={index} onChange={(e) => handleChange(+e.target.value)}>
  //       {data.map(({ country }, index) => (
  //         <option key={country} value={index}>
  //           {country}
  //         </option>
  //       ))}
  //     </select>
  //     <select>
  //       {data[index].cities.map((item) => (
  //         <option key={item} value={item}>
  //           {item}
  //         </option>
  //       ))}
  //     </select>
  //   </div>
  // );

  // promise
  //   .then((item) => {
  //     console.log(item);

  //     return item * 2;
  //   })
  //   .then((item) => {
  //     console.log(item);

  //     return item;
  //   });

  return <div></div>;
};

export default App;
