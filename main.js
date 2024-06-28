import {
  uniqueLetters,
  duplicateFirstLetters,
  palindrome,
  fetchRequest,
} from "./js/day1.js";
import { primeNumbers, fibonacciNumbers, seasonDefinition } from "./js/day2.js";
import {
  filterAndSearching,
  bubbleFiltrationAndСoncat,
  conversionAndSorting,
} from "./js/day3.js";
import { objectToArray, Worker } from "./js/day4.js";
import { MyString, Calculation } from "./js/day5.js";

// 1-й день
document.getElementById("uniqueLetters").textContent =
  uniqueLetters("DDADSADASDAAADS");

document.getElementById("duplicateFirstLetters").textContent =
  duplicateFirstLetters("hello alexandr!");

document.getElementById("palindrome1").textContent = palindrome("дим");
document.getElementById("palindrome2").textContent = palindrome("манек");
document.getElementById("palindrome3").textContent = palindrome("рота");

fetchRequest().then((result) => {
  document.getElementById("fetchRequest").innerHTML = result;
});

// 2-й день
document.getElementById("primeNumbers").textContent = primeNumbers(100);

document.getElementById("fibonacciNumbers").textContent = fibonacciNumbers(200);

document.getElementById("seasonDefinition").textContent = seasonDefinition();

// 3-й день
document.getElementById("filterAndSearching").textContent = filterAndSearching(
  [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5],
  0
);

document.getElementById("bubbleFiltrationAndСoncat").textContent =
  bubbleFiltrationAndСoncat(
    [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4],
    ["one", "two", "three"]
  );

document.getElementById("conversionAndSorting").textContent =
  conversionAndSorting([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ]);

// 4-й день
document.getElementById("objectToArray").textContent = objectToArray({
  a: 1,
  b: 2,
});

// 4,5-й день
let worker = new Worker("Дмитрий", "Мунько", 500, 20);
worker.rate = 300;
worker.days = 10;

document.getElementById("worker").textContent = worker.getInfo();

let myString = new MyString();

document.getElementById("myString1").textContent =
  myString.reverse("Любая строка");
document.getElementById("myString2").textContent = myString.ucFirst(
  "строка без первой заглавной буквы"
);
document.getElementById("myString3").textContent = myString.ucWords(
  "строка без заглавных букв в каждом слове"
);

let calculation = new Calculation();
calculation.calculationLine = "Строка";

document.getElementById("calculation1").textContent =
  calculation.calculationLine;

calculation.setLastSymbolCalculationLine(" + новое слово");

document.getElementById("calculation2").textContent =
  calculation.calculationLine;

document.getElementById("calculation3").textContent = calculation.lastSymbol();

calculation.deleteLastSymbol();

document.getElementById("calculation4").textContent =
  calculation.calculationLine;
