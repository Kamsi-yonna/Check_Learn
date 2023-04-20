// We want to make a decision on if a person is old enough to drive/get a license 
//A condition returns boolean value

const age = 15; //Sets the person's age
const isOldEnough = age >= 18; //Sets the condition, (I guess)
console.log(isOldEnough); //will give a boolean value

// The  if statements are used to take decisions
// if (the condition that needs to be met) {
//     what happens when that condition is met
// }

// if (age >= 18) { //always best to write the condition and not the variable
//     console.log('Sarah can go ahead and get a license 😄')
// } else {
//     cconsole.log('Sarah is not yet old enough 😪')
// }

//IF WE WANT TO CALCULATE HOW MANY MORE YEARS IT WILL TAKE FOR HER TO BEELLIGIBLE

if (age >= 18) {
    console.log('Sarah can go ahead and get a license 😄')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah needs to wait for ${yearsLeft} more years`)
}