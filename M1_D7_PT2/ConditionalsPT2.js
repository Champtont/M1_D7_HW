// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/*let isMale = "female";
gender = isMale === "male" ? "male" : "female";
console.log(gender);*/

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/*let number1 = 4;
let number2 = 2;

if (number1 === 8 || number2 === 8) {
  console.log("First condition met! one of these is equal to 8!");
} else if (number1 + number2 === 8) {
  console.log("First condition failed, but you can add these together!");
} else {
  console.log("neither condition has been met");
}
*/

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/*let name1 = "Courtney";
let name2 = "Jaye";
let firstAndMiddle = name1 + " " + name2;

console.log(firstAndMiddle);
*/

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = 17;
let num2 = 4;
let num3 = 100;

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1 + ", " + num2 + ", " + num3);
  } else {
    console.log(num1 + ", " + num3 + ", " + num2);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num2) {
    console.log(num2 + ", " + num1 + ", " + num3);
  } else {
    console.log(num2 + ", " + num3 + ", " + num1);
  }
} else if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(num3 + ", " + num1 + ", " + num2);
  } else {
    console.log(num3 + ", " + num2 + ", " + num1);
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
