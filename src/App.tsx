import React from "react";
import { getRectMaxSizes, getTopFruits, recursiveSum } from "./pureJsTasks";

const tree = {
  left: {
    left: {},
    right: {
      value: 4,
    },
    value: 1,
  },
  right: {
    left: {
      left: {
        left: {},
        right: {
          value: 5,
        },
        value: 2,
      },
      right: {},
    },
    right: {
      value: 7,
    },
  },
  value: 4,
};

const fruits: any[] = [
  "BaNaNa",
  "orange",
  "pineapple",
  "baNana",
  "banAna",
  undefined,
  0,
  true,
  "pineapple",
];

const multiArr = [1, 2, [1, 2, 3, [4, 5], [6]], [8, 5, 6, [1, [2, 3, [6]]]]];

// TODO первый вопрос про семантику в html и насколько она необходима если мы делаем SPA на реакте
// TODO задача про поиск в табах
// TODO задача на софт скиллы, что такое ревью, что если возникли ошибки в результате ревью, что если разработчик сделал мерж без ревью
// TODO вопросы по interceptors
// TODO createPortal
// TODO task about hightlight substring in string

export const App = (): JSX.Element => {
  // console.log(1680 / getRectMaxSizes(1680, 640));

  // console.log(getTopFruits(fruits));
  // console.log(
  //   parseUrlString(
  //     "user.name.firstname=Bob&user.name.lastname=Smith&user.color=red&theme=dark"
  //   )
  // );
  // console.log(
  //   solveSudoku([
  //     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  //     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  //     [".", "9", "8", ".", ".", ".", ".", "6", "."],
  //     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  //     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  //     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  //     [".", "6", ".", ".", ".", ".", "2", "8", "."],
  //     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  //     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  //   ])
  // );
  return <div></div>;
};
