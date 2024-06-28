"use strict";

// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
// метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }

  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str
      .split(" ")
      .map((word) => this.ucFirst(word))
      .join(" ");
  }
}

// создать класс calculation , в котором будет одна переменная calculationLine и методы:
// setterCalculationLine который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine который будет в конец строки прибавлять символ,
// gettercalCulationLine который будет выводить переменную,
// lastSymbol получение последнего символа,
// deleteLastSymbol удаление последнего символа из строки

class Calculation {
  #calculationLine;

  constructor(calculationLine) {
    this.#calculationLine = calculationLine;
  }
  get calculationLine() {
    return this.#calculationLine;
  }
  set calculationLine(newValue) {
    this.#calculationLine = newValue;
  }

  setLastSymbolCalculationLine(word) {
    this.#calculationLine += word;
  }

  lastSymbol() {
    return this.#calculationLine.slice(-1);
  }

  deleteLastSymbol() {
    this.#calculationLine = this.#calculationLine.slice(0, -1);
  }
}

export { MyString, Calculation };
