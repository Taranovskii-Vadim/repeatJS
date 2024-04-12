// Task 1
// Цель: Реализовать функцию которая рекурсивно высчитывает сумму пока есть параметры

export const recursiveSum = (...init: number[]) => {
  const getCurrentSum = (data: number[]) => data.reduce((acc, item) => acc + item, 0);

  let result = getCurrentSum(init);

  const next = (...rest: number[]) => {
    if (rest.length) {
      result += getCurrentSum(rest);

      return next;
    }

    return result;
  };

  return next;
};

// Task 2
// Цель: Реализовать минимальную версию библиотеки jQuery (addClass, removeClass)

class jQuery {
  private node: HTMLElement | null = null;

  constructor(selector: string) {
    this.node = document.querySelector(selector);
  }

  addClass(classname: string) {
    if (this.node) {
      this.node.classList.add(classname);
    }

    return this;
  }

  removeClass(classname: string) {
    if (this.node) {
      this.node.classList.remove(classname);
    }

    return this;
  }

  html(markup: string) {
    if (this.node) {
      this.node.innerHTML = markup;
    }

    return this;
  }
}

export const $ = (selector: string) => new jQuery(selector);

/////////////////////////////////

// export const $ = (selector: string) => {
//   const node = document.querySelector(selector);

//   return {
//     addClass(classname: string) {
//       if (node) {
//         node.classList.add(classname);
//       }

//       return this;
//     },
//     removeClass(classname: string) {
//       if (node) {
//         node.classList.remove(classname);
//       }

//       return this;
//     },
//     html(markup: string) {
//       if (node) {
//         node.innerHTML = markup;
//       }

//       return this;
//     },
//   };
// };
