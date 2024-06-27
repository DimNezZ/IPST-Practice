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
// сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

const palindrome = (word) => {
  return word + word.split("").slice(0, -1).reverse().join("");
};

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

export { uniqueLetters, duplicateFirstLetters, palindrome, fetchRequest };
