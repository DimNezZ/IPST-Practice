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

document.getElementById("primeNumbers").textContent = primeNumbers(100);

document.getElementById("fibonacciNumbers").textContent = fibonacciNumbers(200);

document.getElementById("seasonDefinition").textContent = seasonDefinition();

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

document.getElementById("objectToArray").textContent = objectToArray({
  a: 1,
  b: 2,
});

let worker = new Worker("Дмитрий", "Мунько", 500, 20);

document.getElementById("worker").textContent = worker.getInfo();
