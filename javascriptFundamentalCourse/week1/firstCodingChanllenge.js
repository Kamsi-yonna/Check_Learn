// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

//TEST DATA 1
// 1. Store Mark's and John's mass and height in variables
//Height
let markHeight = 1.69;
let johnHeight = 1.95;
//Weight
let markWeight = 78;
let johnWeight = 92;

// console.log(markWeight, johnWeight);
// console.log(markHeight, johnHeight);

// // 2. Calculate both their BMIs using the formula (you can even implement both
// //BMI = mass / height ** 2
// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);

// console.log(markBMI, johnBMI);

// // 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);


// TEST DATA 2 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// 1. Store Mark's and John's mass and height in variables
//Height
markHeight = 1.88;
johnHeight = 1.76;
//Weight
markWeight = 95;
johnWeight = 85;

console.log(markWeight, johnWeight);
console.log(markHeight, johnHeight);

// 2. Calculate both their BMIs using the formula (you can even implement both
//BMI = mass / height ** 2
const markBMI = markWeight / (markHeight ** 2); //already declared
const johnBMI = johnWeight / (johnHeight ** 2); //already declared

console.log(markBMI, johnBMI);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = (markBMI > johnBMI); //already declared
console.log(markHigherBMI);