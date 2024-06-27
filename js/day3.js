"use strict";

// отфильтровать выборкой массив и бинарным поиском найти элемент. массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0

const filterAndSearching = (array, target) => {
  const copyArray = array.slice();

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }

  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (array[middle] < target) {
      low = middle + 1;
    } else if (array[middle] > target) {
      high = middle - 1;
    } else {
      return `Изначальый массив [${copyArray}] был отсортирован в [${array}]. Искомый элемент ${target} находится на позиции ${middle}`;
    }
  }
};

// Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three'] решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

const bubbleFiltrationAndСoncat = (sortArray, concatArray) => {
  const copyArray = sortArray.slice();

  for (let j = sortArray.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (sortArray[i] > sortArray[i + 1]) {
        let elem = sortArray[i];
        sortArray[i] = sortArray[i + 1];
        sortArray[i + 1] = elem;
      }
    }
  }

  return `Изнчальный массив [${copyArray}], массив для склейки [${concatArray}]. Результат [${sortArray.concat(
    concatArray
  )}]`;
};

// вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его

const conversionAndSorting = (twoDimensionalArray) => {
  let oneDimensionalArray = [];
  for (let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {
      oneDimensionalArray.push(twoDimensionalArray[i][j]);
    }
  }

  return oneDimensionalArray.sort();
};

export { filterAndSearching, bubbleFiltrationAndСoncat, conversionAndSorting };
