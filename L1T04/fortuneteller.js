// prompt the user to input their mother's name
let userName = prompt("What is your mothers name?");

// prompt the user to input the name of the street they grew up on
let streetName = prompt("What is the name of the street you grew up on?");

//prompt the user to input their favorite color when they were a child
let favColor = prompt("What is your favorite color when you were a child?");

//prompt the user to input their age
let age = Number(prompt("How old are you?"));

//prompt the user to pick a number between 1 and 10
let randomNumber = Number(prompt("Pick a number between 1 and 10"));

//calculate the number of children the user will have
let numberOfChildren = age%randomNumber;

// Output the fortune to the user
console.log(`In ${randomNumber} years you are going to meet your best friend named ${userName} ${streetName}.
You will get married in ${age + randomNumber} years and have ${numberOfChildren} children.
In ${Math.round(age / randomNumber)} years you are going to dye your hair ${favColor}.`);