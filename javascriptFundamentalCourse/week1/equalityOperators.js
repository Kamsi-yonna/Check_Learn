//to check if a person is old enough to be an adult
const age = 18;
//you're an adult only if you are EXACTLY 18
if (age === 18) console.log('You just became an adult'); //Whenever the if block has only one line, there is no need for curly braces

// the bouble equals on the other hand does not neccessarily mean EXACT
const newAge = 19;
if (newAge == "19") console.log(Boolean(newAge)) // will show true
//If there is no else statement, the console.log stays empty. WHY??


if (newAge === "19") {
    console.log(truee) // will show truee
} else {
    console.log("falsee") // will show falsee because new age is the number 19 and not the string 19
}

//you will have to convert this to the type of variable like this:
if (newAge === Number("19")) {
    console.log("truee") // will show truee because new age is the number 19 and we have converted the string to a number
} else {
    console.log("falsee") // will show falsee 
}

const oldAge = 70;
if (oldAge === 70) console.log(Boolean(oldAge)) // will show true

//As a rule for writing clean code, avoid using loose equality operations as much as you can and stick to strick one

//Getting values from web pages
// prompt('What is your favourite number?') //This will appear as an alert kind of popup on the webpage.
//When the user inputs a value, it needs to be stored somewhere. Hence:


// const favouriteNumber = prompt('What is your favourite number?');


// console.log(favouriteNumber); //the initial value is printed in white and so it is a string
// console.log(typeof favouriteNumber); //Its a string
// console.log(Number(favouriteNumber), favouriteNumber); //Converting to a number
// 28
// if (favouriteNumber == 28) { //this will be true because it is 28, even though the 28 is a string
//     console.log('28 is the favourite string number!')
// }



const bestNumber = Number(prompt('What is your best number?'));

if (bestNumber === 28) { //this will be false because it needs to be EXACTLY the NUMBER 28
    console.log('28 is the best number!')
} else if (bestNumber === 10) {
    console.log("10 is alright as well")
} else (
    console.log("You don't have good taste in numbers")
)
// to do the conversion, you convert the entire prompt line

//DIFFERENT OPERATOR
if (bestNumber !== 28) console.log('why not 28 tho')