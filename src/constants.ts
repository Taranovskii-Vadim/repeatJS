export const TREE = {
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

export const MULTI_ARR = [1, 2, [1, 2, 3, [4, 5], [6]], [8, 5, 6, [1, [2, 3, [6]]]]];

export const FRUITS: unknown[] = ['BaNaNa', 'orange', 'pineapple', 'baNana', 'banAna', undefined, 0, true, 'pineapple'];
