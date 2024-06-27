"use strict";

// Вывести все числа делящиеся только на себя и на единицу до 100

const primeNumbers = (range) => {
  let numbers = [];
  nextPrime: for (let i = 2; i <= range; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
    }
    numbers.push(i);
  }

  return numbers;
};

// Вывести числа фибаначи до 200

const fibonacciNumbers = (range) => {
  let fibonacci = [];
  let previousNumber = 1;
  let currentNumber = 1;

  do {
    fibonacci.push(previousNumber);
    let nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  } while (previousNumber <= range);

  return fibonacci;
};

// В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). В переменной year лежит какой то год например 2022. Определите високосный это год или нет.

const seasonDefinition = () => {
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 2500) + 1;
  let season = "";
  let leapYear = "";

  switch (month) {
    case 1:
    case 2:
    case 12:
      season = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "Лето";
      break;
    case 9:
    case 10:
    case 11:
      season = "Осень";
      break;
  }

  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    leapYear = "високосный";
  } else {
    leapYear = "невисокосный";
  }

  return `${year} ${leapYear} год, ${month} месяц - "${season}"`;
};

export { primeNumbers, fibonacciNumbers, seasonDefinition };
