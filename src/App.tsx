// Interview Questions example
// 1) Diff between interfaces and types
// 2) What is "as" in TypeScript
// 3) What is interceptor in frontend. Where we can use it?
// 4) We have status system. Frontend send PUT request with new status, should we await API response to render new status or not.

import { findMaxLeafSum } from './pureJsTasks';

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

// const sumTo = (value: number): number => (value === 1 ? value : value + sumTo(value - 1));

// const sumTo = (value: number): number => {
//   let result = 0;

//   for (let i = 0; i <= 4; i++) {
//     result += i;
//   }

//   return result;
// };

// const sumTo = (value: number) => {
//   return (value * (value + 1)) / 2;
// };

// const factorial = (value: number): number => (value === 1 ? 1 : value * factorial(value - 1));

// const factorial = (value: number) => {
//   let result = 1;

//   for (let i = value; i > 1; i--) {
//     result *= i;
//   }

//   return result;
// };

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// type List = { value: number; next: List | null };

// const printList = ({ next, value }: List): string => (next ? `${value}, ${printList(next)}` : value.toString());

// const printList = (list: List | null): string => {
//   let result = '';

//   while (list) {
//     result += list.value + ', ';
//     list = list.next;
//   }

//   return result;
// };

// const countValues = ({ value, next }: List): number => (next ? value + countValues(next) : value);

const App = (): JSX.Element => {
  // console.log(sortPowedArray([-3, 2, 4]));
  // console.log(sortPowedArray([-4, -2, 0, 3, 5]));

  console.log(
    findMaxLeafSum({
      value: 1,
      left: { value: 2, left: { value: 1, left: { value: 9 } }, right: { value: 7 } },
      right: { value: 9, right: { value: 2 }, left: { value: 5, left: { value: 7 } } },
    }),
  );

  return <div></div>;
};

export default App;
