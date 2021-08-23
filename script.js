//Create a function called 'shortcut' to remove all the lowercase vowels in a given string. Don't worry about uppercase vowels.

//shortcut("codewars") // --> cdwrs
//shortcut("goodbye")  // --> gdby

function shortcut(string){
  string = string.replace(/a|e|i|o|u/gi, "");
  console.log(string);
}

shortcut("codewars");
shortcut("goodbye");
shortcut("I heart JWD");
