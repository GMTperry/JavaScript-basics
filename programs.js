//alert('This is a test');
console.log("Hello Users was typed in the p tag but i changed it using document");

document.getElementById('someText').textContent = 'hello world';

//prompt('what is your age?'); //code is executed in order so the document and console.log will appear before the prompt.

let age = prompt('what is your age');
console.log(age); // puts age in console
document.getElementById('someText').textContent = "User is " + age + " years old"; //puts age in page

let counter = 0;
while (age < 21) {
  counter += 1
  age++;
}
console.log(counter);
if (counter == 0) {  //here I had to change it from = to == or else the code wouldn't work properly
  console.log("Congrats, you meet the age requirements!");
} else {
  console.log("you are " + counter + " years to young!");
}

// gets age and sees if u meet requirement by different methods
let height = prompt("how tall are you");
height--;
height += 'ft';
console.log(height);

function fun() {   //the function in javascript is the same as the def in python
  alert('This is a function')
}
fun();

//create a function that greets you

function greeting() {
  let name = prompt('what is your name?');
  console.log("Hello" + " " + name);
}
greeting();

//adding numbers together with a function using 2 different ways

function adding() {
  let num1 = Number(prompt("enter your first number:")) //code wouldn't properly add at first because they were in strings form and not numbers form.
  let num2 = Number(prompt("enter your second number:")) //Number command turns strings into numbers so that they dont stick together but add up.
  let answer = num1 + num2;
  console.log(answer);
}
adding();

function subtracting(num1, num2) { //num1 and num2 in this case are parameters
  console.log(num1 - num2);
}
subtracting(prompt('enter a number:'), prompt('enter a second number:'));

//while vs for loops
  //while loop
    let num = 0;
    while (num < 100) {
      num +=10
      console.log(num);
    }
  //for loop
    for (let num = 0; num <= 100; num+=10) {
      console.log(num);
    }
