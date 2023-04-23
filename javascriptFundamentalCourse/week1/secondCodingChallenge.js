// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �


let markHeight = 1.69;
let johnHeight = 1.95;
//Weight
let markWeight = 78;
let johnWeight = 92;

// TEST DATA 2 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// 1. Store Mark's and John's mass and height in variables
//Height
markHeight = 1.88;
johnHeight = 1.76;
//Weight
markWeight = 95;
johnWeight = 85;

// 2. Calculate both their BMIs using the formula (you can even implement both
//BMI = mass / height ** 2
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

console.log(markBMI, johnBMI);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = (markBMI > johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`)
} else {
    console.log(`John's BMI of ${johnBMI} is higher than  of  Mark's BMI ${markBMI}`)
}

//YOU ARE THE BEST IN JAVASCRIPR