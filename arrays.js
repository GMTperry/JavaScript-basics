let colors = ["red", "blue", "green", "orange"];
console.log(colors);
console.log(colors[2]);
colors[0] = "purple";
console.log(colors);

// for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// array common methods
  console.log(colors.toString()); //tuns an array into a string
  console.log(colors.join(' <-- ')); //turns an array into a string by joining things to it
  console.log(colors.pop()); //pop removes the last element in an array and returns it
  console.log(colors);
  console.log(colors.push("black")); //push adds a new element into an array and returns the elements location
  console.log(colors);

  //two lines of code below do the same thing but
  console.log(colors[4] = "blue"); //makes a new position and adds a new color "blue" to it
  console.log(colors[colors.length] = "blue"); //this one is better as you don't have to manually look for the last elements position

  console.log(colors.shift()); //removes first element in array
  console.log(colors.unshift("red")); //adds first element to array

  //combining arrays
  let favCereal = ["frosted flakes", "cheerios", "coconut cereal"];
  let all = favCereal.concat(colors)
  console.log(all);
  console.log(all.slice(1,4));

  //reversing arrays
  let reverseAll = all.reverse();
  console.log(reverseAll); //this gives us the colors before the vegetables

  //sorting arrays
  console.log(all.sort()); //sort with no parameter/filter sorts alphabetically

  let someNumbers = [5, 34, 27, 79, 0, 982, 200]
  console.log(someNumbers);
  console.log(someNumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
  console.log(someNumbers.sort(function(a, b) {return b-a})); // sorted in descending order
  
// length --> how many items there are
// position --> length minus 1
