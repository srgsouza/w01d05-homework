// 2018.06.15

// How do we assign a value to a variable ?
// Declare it using the equal sign -> let variable = value

//   How do we change the value of a variable ?
// reassign the value ->  variable = newValue

//     How do we assign an existing variable to a new variable ?
// let newVariable = existingVariable

// Create a variable called firstVariable.
// assign it the value of a string => "Hello World"
let firstVariable = 'Hello World';
// change the value of this variable to a number.
firstVariable = 23;
// store the value of firstVariable into a new variable called secondVariable
let secondVariable = firstVariable;
// change the value of secondVariable to a string.
secondVariable = 'hi';
// What is the value of firstVariable ?
console.log('firstVariable');
//   Create a variable called yourName and set it equal to your name as a string.
let yourName = 'Sergio';
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let expression = `Hello, my name is ${yourName}.`
console.log(expression);


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log((a === a) < d);
console.log(e === 'Kevin');
console.log(48 == '48');

// Write code that will print out "mooooo" if the variable animal is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
let animal = 'cow';
if (animal === 'cow') {
  console.log('mooooo');
} else {
  console.log('Hey! You\'re not a cow'); 
}

// Write a variable that will hold a person's age.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
let age = 15;
if (age >= 16) {
  console.log('Here are the keys');
} else {
  console.log('Sorry, you\'re too young.');
  
}


// Write code that will print out all the numbers in the range 0 - 10.
for (let i = 0; i <= 10; i++) {
  console.log(i); 
}
// Write code that will print out all the numbers in the range 10 - 4000.
for (let i = 10; i <= 4000; i++) {
  console.log(i);
}
// Write code that will print out every other number in the range 10 - 4000.
for (let i = 10; i <= 4000; i++) {
  console.log(i);
  i++;
}

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to the even number that says: "is an even number".
// Example Output:
// 2 is an even number
// 4 is an even number
// 6 is an even number
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is an even number`);
  }
}

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// 
for (let i = 0; i <= 100; i++) {
  if (i % 5 ===0) {
    console.log(`I found a ${i}. High Five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
}

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account = 0
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);


// You got a bonus! Your pay is now doubled each week.Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10, 100 in it.
bank_account = 0
for (let i = 1; i <= 100; i++) {
  bank_account += (i * 2);
}
console.log(bank_account);


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
let sumM35 = 0;
for (let i = 0; i < 1000; i++) {
  if ((i % 3 === 0) || (i % 5 === 0)) {
    sumM35 += i;
  }
}
console.log(sumM35);

// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["quote 1", "quote 2", "quote 3"];
console.log(quotes);

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
// how do you access the 1st element in the array ?
randomThings[0];
//   Change the value of "Hello" to "World".
randomThings[2] = 'World';
// Check the value of the array to make sure it updated the array.
console.log(randomThings);


// Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// What would you write to access the 3rd element of the array ?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[2] = 'Octocat';
// Add a new element, "Cloud City" to the array.
ourClass.push('Cloud City');
console.log(ourClass);

// Write an if..else statement:
//   console.log little number if the number is entered is less than 100
// If the number entered is 100 or more, alert big number.
let num = 200;
if (num < 100) {
  console.log(num);
} else {
  console.log('big number');
}


// Write an if...else if...else statement:
// console.log little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
//   Otherwise, console.log "monkey". 
num = 0;
if (num < 5) {
  console.log(num);
} else if (num > 10) {
  console.log('big number');
} else {
  console.log('monkey');
}


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset [2]} today!`);

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
const kristynShoe = kristynsCloset.shift();
console.log(kristynShoe);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(4, 0, 'raybans');

// Kristyn spilled coffee on her hat...modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0];

// In the same way, access one item from Thom's pants array.
thomsCloset[1][0];

// Access one item from Thom's accessories array.
thomsCloset[2][2];

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]} and ${thomsCloset[1][1]} `);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
const printGreeting = (name) => {
  return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));


// Write a function reverseWordOrder that accepts a single argument, a string.The function should return a string with the order of the words reversed.Don't worry about punctuation.
const reverseWordOrder = (arr) => {
  return arr.split(' ').reverse(' ').join(' ');
}
console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"



// Write a function called calculate.
// This function should take three arguments, two numbers and a string.
// Name the parameters num1, num2, and operation.
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
// Do the same thing for multiplication "mult", division "div", and exponent "exp"(where num2 is the exponent of num1).
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return num1 + num2;
      break;
    case "sub":
      return num1 - num2;
      break;
    case "mult":
      return num1 * num2;
      break;
    case "div":
      return num1 / num2;
      break;
    case "exp":
      return Math.pow(num1, num2);
      break;
    default:
      break;
  }
}
console.log(calculate(4, 3, "sub"));
// => 1
console.log(calculate(4, 3, "exp"));
// => 64


// Write a function printCool that accepts one parameter, name as an argument.The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
  return `${name} is cool.`;
}
console.log(printCool("Captain Reynolds"));


// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
  return num * num * num
}
console.log(calculateCube(5));


// Write a function isAVowel that takes a character(i.e.a string of length 1) and returns true if it is a vowel, false otherwise.The vowel could be upper or lower case.
const isAVowel = (c) => {
  return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ) 
}
console.log(isAVowel("d"));

// Write a function getTwoLengths that accepts two parameters(strings).The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (length1, length2) => {
  return arr = [length1.length, length2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings.The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arr) => {
  const arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    arrNum[i] = arr[i].length;
  }
  return arrNum;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
}
console.log(maxOfThree(6, 9, 1));
// => 9


// Write a function printLongestWord that accepts a single argument, an array of strings.The method should return the longest word in the array.In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (sentence) => {
  let longest = null;
  let word = null
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > longest) {
      longest = sentence[i].length;
      word = sentence[i];
    }
  }
  return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"


// Write a Javascript function called transmogrify.This function should accept three arguments, which you can assume will be numbers.Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is(5 times 3) to the power of 2 is 225.
const transmogrify = (n1, n2, n3) => {
  return Math.pow((n1 * n2), n3);
}
console.log(transmogrify(5, 3, 2));



// List and describe each individual piece of syntax that we use to construct an object.Don't leave anything out! The list is finite.
// Example:
// { } curly braces define the object.
const myBike = {
  wheels: 'round',
  seat: 'prologo'
}
//  const myBike -> declaration
// {} -> define the object
// property: value


// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.
// The object would look something like this if we console logged it:
const me = {
  name: 'joe',
  age: 12,
  email: 'jo@foo.bar'
}
console.log(me);
// => { name: "Kristyn", age: 98, email: "kristyn@foo.bar" }

// Using dot notation, access the name property in your object.
me.name;
// Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000;
// Using dot notation, verify that age has been updated.
console.log(me.age);
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
me["place of residence"] = 'springfield';
// Access the value of "place of residence"
console.log(me["place of residence"]);


const monster = {
  name: "Slimer",
  color: "greenish",
  type: "plasm or ghost or something"
}
// Given the slimer object:
// What would you write to access the name and console.log it ?
console.log(monster.name);
//   What would you write to change the type to 'creature' (without changing it inside the object)
monster.type = 'creature';
// What would you write to add a key to the object called age, and set the age to 6 ?
monster.age = 6;
//   console.log the object to make sure type is creature, and age is 6
console.log(monster);


// Ogres
// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
// Using objects, create models and have them interact.

// how would you model your adventurer ? Your adventurer will want a name and hitpoints.What else would your adventurer need ?
//   how would you model an ogre ? Your ogre will want hitpoints.

// Write a very small program that will simulate a battle between your adventurer and an ogre.

// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// If you want to provide input to the game, you can run it in the Chrome console(but that isn't strictly necessary for now).
let min = 1;
let max = 5;
let isGameOn = true;

const warrior = {
  name: 'w1',
  hitpoints: 50,
  weapons: ['rock', 'paper', 'scissor'],
  doesRun: true,
  attack: () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const ogre = {
  name: 'o1',
  hitpoints: 50,
  weapons: ['rock', 'paper', 'scissor'],
  doesCrush: true,
  attack: () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


while (isGameOn)  {
  warrior.hitpoints -= ogre.attack();  // ogre attacks, decrease warrior hit points
  console.log(`Ogre attacks with force of ${ogre.attack()} hit(s). Warrior has ${warrior.hitpoints} hitpoints left.`);  
  ogre.hitpoints -= warrior.attack(); // warrior attacks, decrease ogre hit points
  console.log(`Warrior attacks with force of ${warrior.attack()} hit(s). Ogre has ${ogre.hitpoints} hitpoints left.`);
  if ( (warrior.hitpoints < 0) || (ogre.hitpoints < 0) ) {
    isGameOn = false;
  }
}