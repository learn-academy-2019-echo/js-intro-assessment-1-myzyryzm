// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

for(let i = 0; i < mantra.length; i++)
{
    let curChar = mantra.charAt(i);
    if(curChar === "B")
    {
        console.log("B exists in " + mantra);
        break;
    }
    if(i === mantra.length - 1)
    {
        console.log("B does not exist in " + mantra);
    }
}

// 1b. Write the code that determines if there is an 'x' in mantra.

for(let i = 0; i < mantra.length; i++)
{
    let curChar = mantra.charAt(i);
    if(curChar === "x")
    {
        console.log("x exists in " + mantra);
        break;
    }
    if(i === mantra.length - 1)
    {
        console.log("x does not exist in " + mantra);
    }
}

// 1c. Write the code that determines if there is a 'v' in mantra.

for(let i = 0; i < mantra.length; i++)
{
    let curChar = mantra.charAt(i);
    if(curChar === "v")
    {
        console.log("v exists in " + mantra);
        break;
    }
    if(i === mantra.length - 1)
    {
        console.log("v does not exist in " + mantra);
    }
}

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

function checkIt(word, letter)
{
    for(let i = 0; i < word.length; i++)
    {
        let curLetter = word.charAt(i);
        if(curLetter == letter)
        {
            return letter + " exists in the word " + word;
        }
    }
    return letter + " does not exist in the word " + word;
}

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

function getLongest(...words)
{
    let longestWord = "";
    for(let i = 0; i < words.length; i++)
    {
        if(words[i].length > longestWord.length)
        {
            longestWord = words[i];
        }
    }
    return longestWord;
}


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

function createArray(word1, word2)
{
    return [word1, word2]
}


// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

function lowercaseWords(...words)
{
    return words.join(" ").toLowerCase();
}


// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"
var messageArray = myMessage.split("");

// 3a. Write the code that logs each letter of the message using a for loop.

for(let i = 0; i < myMessage.length; i++)
{
    console.log(myMessage.charAt(i));
}

// 3b. Write the code that logs each letter of the message using map.

messageArray.map(value => console.log(value))

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

let count = 0;
while(count < myMessage.length)
{
    console.log(myMessage.charAt(count))
    count++;
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

messageArray.forEach(function(char){
    console.log(char);
})


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

function killVowels(word)
{
    if(typeof word != "string")
    {
        return "You did not input a string.  Please input a string."
    }
    let finStr = "";
    for(let i = 0; i < word.length; i++)
    {
        let c = word.charAt(i);
        if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
        {
            continue;
        }
        finStr+= c;
    }
    return finStr;
}

// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

let onlyCats = toonimals.filter(value => value.animal === "cat");

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

//specify a type of animal and specify whether you want that type or all types other than that type
function giveMeTheToons(type, include = true)
{
    let only = toonimals.filter(value => include ? value.animal === type : value.animal != type);
    let onlyTheNames = [];
    for(let i = 0; i < only.length; i++)
    {
        onlyTheNames.push(only[i].name);
    }
    return onlyTheNames;
}
let nonCatNames = giveMeTheToons("cat", false);
//console.log(nonCatNames);

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

function whoAreTheToonimals(toons)
{
    let finStr = "";
    for(let i = 0; i < toons.length; i++)
    {
        finStr+=whoAreYou(toons[i]);
    }
    return finStr;
}

function whoAreYou (a)
{
    var {name,animal} = a;
    return `${name} is a ${animal}. `;
}

console.log(whoAreTheToonimals(toonimals))