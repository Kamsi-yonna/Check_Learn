// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// //the AND operator. if all conditions are met then it is true.
// console.log(hasDriverLicense && hasGoodVision); //true


// const hasDriverLicense = true; // A
// const hasGoodVision = false; // B

// //If one variable is false then the total result would be false.
// console.log(hasDriverLicense && hasGoodVision); //false


//THE OR OPERATOR
// const hasDriverLicense = true; // A
// const hasGoodVision = false; // B

// //It is enough for one variabe to be true..
// console.log(hasDriverLicense || hasGoodVision); //true
// //! is the NOT operator
// console.log(hasDriverLicense || !hasGoodVision); //true because of license 

// //We can use this to make decisions and set if statements
// // If sarah is old enough to drive and has good vision then she can drive

// // const drivingPermit = hasDriverLicense && hasGoodVision;
// // However, it is good practice to write out the condition in the if brackets

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Let her go ahead and drive')
// } else {
//     console.log('Someone else should drive')
// }


const hasDriverLicense = true; // A
const hasGoodVision = true; // B
const isTired = true;

if (hasDriverLicense && hasGoodVision || isTired) {
    console.log('Let her go ahead and drive')
} else {
    console.log('Someone else should drive')
}

//If she has good vision, driver's license and is not tired

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('she  can go ahead please')
} else (
    console.log('She isnt fit to drive yet')
)