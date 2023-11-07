/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around 
the name is displayed. Then print the name after striping the white spaces.*/

let nameWithWhitespace: string = '\t\n   Legend : Sir Zia Khan   \t\n';
console.log("Name with whitespace:", nameWithWhitespace);

let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);

//=============== And ====//

// Declare a variable called name and assign it a string value with whitespace characters
let name: string = "\t Muhammad Ali \n ";

// Print the name with the whitespace
console.log(name);

// Strip the whitespace from the name using the trim method
name = name.trim();

// Print the name without the whitespace
console.log(name);
