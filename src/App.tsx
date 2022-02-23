import React from "react";

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

const multiArr = [1, 2, [1, 2, 3, [4, 5], [6]], [8, 5, 6, [1, [2, 3, [6]]]]];

export const App = (): JSX.Element => {
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
