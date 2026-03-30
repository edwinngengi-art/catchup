function calculateTax(amount) {
  return amount * 0.1; 
}
 
let taxableAmount = 1000;
let tax = calculateTax(taxableAmount);
console.log(tax);


function convertToUpperCase(text) {
  return text.toUpperCase();
}

let result1 = convertToUpperCase("hello");
console.log(result1); 

let result2 = convertToUpperCase("javascript");
console.log(result2); 

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
let num1 = 5;
let num2 = 10;
let maximum = findMaximum(num1, num2);
console.log(maximum);


let userAge = 25;
const firstName = "John";
console.log(typeof userAge)

let favouriteColor = "blue";
favouriteColor = "red";
console.log(favouriteColor);

function isPalindrome(word) {
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}


function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}
let price1 = calculateDiscountedPrice(100, 20);
console.log("Final price:", price1);

let price2 = calculateDiscountedPrice(250, 15);
console.log("Final price:", price2); 