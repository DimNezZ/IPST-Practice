"use strict";

// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const objectToArray = (object) => {
  let array = [];

  for (let key in object) {
    array.push([key, object[key]]);
  }

  return array;
};

// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get rate() {
    return this.#rate;
  }

  get days() {
    return this.#days;
  }

  getSalary() {
    return this.#rate * this.#days;
  }

  getInfo() {
    return `Работник ${this.#name} ${this.#surname} работает ${
      this.#days
    } дней и получает ${
      this.#rate
    } рублей в день. Общая заработанная сумма ${this.getSalary()} рублей`;
  }
}

export { objectToArray, Worker };
