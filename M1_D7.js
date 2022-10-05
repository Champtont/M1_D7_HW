/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* The main datatypes in JavaScript include the following:
1. Integers - These are numbers. They can be whole, negative, or decimals. JS does not care. You can perform mathematical operations with these.
2. Strings - These are words, characters, or at times numbers, that are contained within quotation marks. You can concatenate (or link them together) these. 
3. Boolean - This only accepts a value of true or false and is used in evaluating statements or conditional statements.
4. Undefined - This datatype is assigned if no value has been assigned to the variable after the variable has been declared.
5. Null - This datatype is used to clear any values stored inside of a variable that has already had a value assigned. 
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable is like a box, in that, it can hold things. In order to help the computer understand, we organize our information inside of labelled boxes 
(or inside of variables) so that the computer can find that information over and over again when it's needed. 
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/*console.log(12 + 20);*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/*let x = 12;*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/*let name = "John Doe" */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/*console.log(x - 12);*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/*let name1 = "john";
let name2 = "John";
//this one will print false because they are not equal
console.log(name1 === name2);
//these two will print true... I placed two because I am not sure what is being asked of me.
console.log(name1 === "john");
console.log(name1 !== name2);*/

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/*let x = 5;
if (x === 5) {
  console.log("five");
}*/

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/*let age = 19;
oldEnoughToRent =
  age >= 25 ? "You can rent on your own!" : "You need a Co-signer";
console.log(oldEnoughToRent);*/
