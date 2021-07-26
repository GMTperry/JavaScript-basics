// variables :
  //let name = 'Perry';
  //console.log(name);
  //console.log('hello world');
  // variables cannot be a reserved world
  // they have to be a meaningful name
  // cannot start with a number
  // cannot contain a space of hyphen
  //they are case sensitive ;

// constants :
  //the value of a variable can change, but a constants value cannot
  //let interestRate = 1.5;
  //interestRate = 1;
  //console.log(interestRate);
  //const hourlyPay = 12.75;
  //hourlyPay = 20;
  //console.log(hourlyPay);
  //as you can see, the constant value could not be changed but the variable value changed.
  //if you dont need to reassign, use constant(ex.earths gravity, months in a year, etc.), else use varibles ;

//Primitive/value types :
  // these include 'string', 'number', 'boolean', 'undefined', and 'null'
  //let name = 'Perry'; //string literal, which is just a fance name for a string
  //let name = 4; //number literal
  //let isApproved = true; //boolean literal
  //let lastName = undefined; //undefined literal, this is not very common
  //let lastName; //undefined literal, this is commonly used
  //let selectedColor = null; //null literal, used explicitly when trying to clear the value of the variable ;

//Reference types :
  // these include 'object', 'array', and 'function'
  // object :
    //let name = 'perry';
    //let age = 16;
    //instead of declaring two variables, we can declare a person object, allowing our code to look cleaner
    //let person = {
      //name : 'Perry',
      //age : 16
    //}; //the curly braces is what we call an object literal
    //console.log(person);

// Dot Notation
  //person.name = 'John'; //dot notation is cleaner and simple
  //console.log(person.name);

// Bracket Notation
  //person['name'] = 'Peter';
  //console.log(person.name); //bracket notation is more versatiled

// Arrays :
  //arrays are used to store lists
  //let selectedColors = []; //square brackets are what we call array literal and they indicate an empty array.
  //let selectedColors = ['red', 'blue'];
  //console.log(selectedColors);
  //console.log(selectedColors[1]);
  //selectedColors[2] = 'green';
  //console.log(selectedColors);
  //we can have different types in an array (ex.we can micx numbers with strings)

// Functions :
  // a set of statemetns that performs a task of calculates a value
  function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
  } //works the same like the def function in python
  greet('Perry', 'Dongmo'); //the argument is perry while the parameter is name
  greet('Mary', 'Dongmo');

  function double(number) {
    return number * 2;
  }
  console.log(double(6));

// Hyphens: first-name, last-name, master-card, inter-city.
// Hyphens are not allowed in JavaScript. They are reserved for subtractions.

//Underscore: first_name, last_name, master_card, inter_city.

//Upper Camel Case (Pascal Case): FirstName, LastName, MasterCard, InterCity.

//Lower Camel Case: JavaScript programmers tend to use camel case that starts with a lowercase letter:
//firstName, lastName, masterCard, interCity.

/* this is
a multi
line
comment */

var a = 10;
a -= 5
a ++;
console.log(a);

var myStr = "this is an \"example\" on how to add quotes inside a \"quote\""
console.log(myStr);
var myStr = "Firstline\n\t\\SecondLine\nThirdLine"
console.log(myStr);

/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

console.log(lastNameLength);
console.log(lastName[1]);

var game = 'blackops'
var gameLength = game[game.length-1];
console.log(gameLength);
// used this code to get the last letter of the string
