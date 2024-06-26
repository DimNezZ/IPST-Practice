"use strict";

// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке (в ответе должно получиться "DAS")
const uniqueLetters = (sentence) => {
  let unique = [];
  for (let i = 0; i < sentence.length; i++) {
    if (!unique.includes(sentence[i])) {
      unique.push(sentence[i]);
    }
  }
  unique = unique.join("");

  return unique;
};
document.getElementById("uniqueLetters").textContent =
  uniqueLetters("DDADSADASDAAADS");

// Данна строка 'hello  alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

const duplicateFirstLetters = (sentence) => {
  let words = sentence.split(" ");
  let duplicateLetters = "";
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      duplicateLetters += words[i].slice(0, 1);
    }
    duplicateLetters += " ";
  }

  return duplicateLetters;
};
document.getElementById("duplicateFirstLetters").textContent =
  duplicateFirstLetters("hello alexandr!");

// сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

const palindrome = (word) => {
  return word + word.split("").slice(0, -1).reverse().join("");
};

document.getElementById("palindrome1").textContent = palindrome("дим");
document.getElementById("palindrome2").textContent = palindrome("манек");
document.getElementById("palindrome3").textContent = palindrome("рота");

// вывести из объекта (тут fetch'ем отправить запрос надо) адресс в формате
// 'Город: city2
//  Улица: street2
//  Дом: house2'.
//  из этого же объекта вывести
//  'фамилия: personLastName
//   имя: personFirstName
//   купил 5 штук товаров: name'

const fetchRequest = () => {
  return fetch("https://raw.githubusercontent.com/jakiichu/data/main/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return `Город: ${data.address.city} </br>
      Улица: ${data.address.street} </br>
      Дом: ${data.address.house} </br>
      Фамилия: ${data.person.lastName} </br>
      Имя: ${data.person.firstName} </br>
      Купил ${data.productsOrder.count} товаров: ${data.productsOrder.product.name}`;
    });
};

fetchRequest().then((result) => {
  document.getElementById("fetchRequest").innerHTML = result;
});

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

document.getElementById("primeNumbers").textContent = primeNumbers(100);

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

document.getElementById("fibonacciNumbers").textContent = fibonacciNumbers(200);

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

document.getElementById("seasonDefinition").textContent = seasonDefinition();
