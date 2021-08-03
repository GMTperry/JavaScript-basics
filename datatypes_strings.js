//data types
  let perry = {
    name : 'Gilles Dongmo', // string
    firstName : 'Gilles', // string
    lastName : 'Dongmo', // string
    age : 16, // number datatype
    height : 6,
    //skinColor :; //undefined //couldn't get undefined to work here
  }; //this is an object datatype
  console.log(perry)

// string functions

  // string length
    console.log(perry.length); //here I try to find the length of the object perry but it keeps returning undefined

    let favFruit = "watermelon";
    console.log(favFruit.length);

  // locating letters in strings
    console.log(favFruit.indexOf("a")); //shows the fisrt time the letter a appears in watermelon
    console.log(favFruit.indexOf("on")); //shows the starting point the first 'on' appears in watermelon
    console.log(favFruit.indexOf("z")); //returns a -1 if word/letter can't be found in variable

    let paragraph = "My favorite color is yellow!";
    console.log(paragraph.charAt(5)); //returns the letter at 5th position
    console.log(paragraph[5]); //does the same thing
    console.log(paragraph.charAt(paragraph.length-1)); //returns last letter of variable
    // length is 1 more than position (cuz position starts wit 0) so decreasing it by one brings it to last letter of varible.

  // Extracting string parts
    console.log(favFruit.slice(2,)); // everything before the letter on 2 is hidden
    console.log(favFruit.slice(0,)); // because 0 holds the first letter, the word is just written
    console.log(favFruit.slice(0,4)); //everything after the 3rd placement is hidden.
    // nothing appears if the first number in slice isn't a container of a letter
    // everything appears if the last number in slice is larger than the last holder of a letter, or if the number isn't stated

  // example/notes
    let moreFruits = "apples\noranges"; //here the \n (which stands for newline) seperates the two fruits into their own lines.
    console.log(moreFruits);
    console.log(moreFruits.length); //the \n is counted as 1 position so the orignall 13 length increases by 1.
    console.log(moreFruits.slice(0,8)); //same thing applies here, the \n is counted as a position
    // spaces are counted as positions as well
    // If a parameter is negative, the position is counted from the end of the string.
    // substring() method does the same thing except it doesn't take in negatives

  // replacing string content
    console.log(paragraph);
    console.log(paragraph.replace("yellow","red"));
    //console.log(paragraph.replace("yellow",prompt("enter your favorite color:")));
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools"); //this replaces all the matches with /g flag

  // Converting to upper and lower case
    console.log(paragraph.toUpperCase()); //uppercases all of variable
    console.log(paragraph.toLowerCase()); //vice versa

  // converting strings to arrays
    console.log(paragraph.split("")); // splits by character
    console.log(paragraph.split(",")); // splits by comma (since no comma, the first the appears)
    console.log(paragraph.split(" ")); // splits by space

  // the concat() method
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

  // string.trim() removes whitespace from both sides of a string
    let word = "       Hello World!        ";
    word.trim()    // Returns "Hello World!"
    console.log(word.trim());
