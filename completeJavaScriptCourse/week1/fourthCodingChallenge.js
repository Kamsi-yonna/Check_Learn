// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �


//PART 1

// The tip is 15% if bill value is >=50 && <=100 and 20% otherwise
// const billValue = 301;
// let tip;
// if (billValue >= 50 && billValue <= 300) {
//     tip = 0.15
// } else (
//     tip = 0.2
// )
// console.log(tip);


//DATA 1

// Using the tenary if else method
// const billValue = 275;
// const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(tip)


// //To get the total value
// const totalValue = billValue + tip;
// console.log(totalValue)
// //Console logging the string
// console.log(`The bill was ${billValue}, the tip was ${tip} and the total value was ${totalValue}`)


//DATA 2

//Using the tenary if else method
// const billValue = 40;
// const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(tip)


// //To get the total value
// const totalValue = billValue + tip;
// console.log(totalValue)
// //Console logging the string
// console.log(`The bill was ${billValue}, the tip was ${tip} and the total value was ${totalValue}`)


//DATA 3

//Using the tenary if else method
const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(tip)


//To get the total value
const totalValue = billValue + tip;
console.log(totalValue)
//Console logging the string
console.log(`The bill was ${billValue}, the tip was ${tip} and the total value was ${totalValue}`)