// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// PART 1 AND PART 2

// //1. Average score for each team 
// const averageD = ((96 + 108 + 89) / 3)
// const averageK = ((88 + 91 + 110) / 3)
// console.log(averageD, averageK)

// //2. Highest average
// if (averageD > averageK) {
//     console.log(`Team Dolphin wins with ${averageD} points`)
// } else if (averageD === averageK) {
//     console.log('We have a tie')
// } else (
//     console.log(`Team Koala wins with ${averageK} points`)
// )



// //BONUS 1

// //1. Average score for each team
// const averageD = ((97 + 112 + 101) / 3)
// const averageK = ((109 + 95 + 123) / 3)
// console.log(averageD, "averageD", averageK, "averageK")

// //2. Highest average
// if (averageD > averageK) {
//     console.log(`Team Dolphin wins with ${averageD} points`)
// } else if (averageD === averageK) {
//     console.log('We have a tie')
// } else (
//     console.log(`Team Koala wins with ${averageK} points`)
// )

// //3. Min Score for each team. We want to store a const for the highest average and for the minimum score
// if (averageD >= 100) {
//     console.log(`Team Dolphins may proceed`)
// } else (
//     console.log(`Team Dolphins may not proceed`)
// )
// if (averageK >= 100) {
//     console.log(`Team Koala may proceed`)
// } else (
//     console.log(`Team Koala may not proceed`)
// )

// //The winner must have a higher average and at least 100. 
// if (averageD > averageK && averageD >= 100) {
//     console.log(`The final winner is Team Dolphin with ${averageD} points`)
// } else if (averageD === averageK) {
//     console.log('We have a tie')
// } else if (averageK > averageD && averageK >= 100) {
//     console.log(`The final winner is Team Koala with ${averageK} points`)
// }


//BONUS 2

//1. Average score for each team
const averageD = ((97 + 112 + 101) / 3)
const averageK = ((109 + 95 + 106) / 3)
console.log(averageD, "averageD", averageK, "averageK")

//2. Highest average
if (averageD > averageK) {
    console.log(`Team Dolphin wins with ${averageD} points`)
} else if (averageD === averageK) {
    console.log('We have a tie')
} else (
    console.log(`Team Koala wins with ${averageK} points`)
)

//3. Min Score for each team. We want to store a const for the highest average and for the minimum score
if (averageD >= 100) {
    console.log(`Team Dolphins may proceed`)
} else (
    console.log(`Team Dolphins may not proceed`)
)
if (averageK >= 100) {
    console.log(`Team Koala may proceed`)
} else (
    console.log(`Team Koala may not proceed`)
)

//The winner must have a higher average and at least 100. 
//A draw means they both have the same score and at least 100
//If you reduce both scores so the average would be less than 100, the last console with an emoji would be given
if (averageD > averageK && averageD >= 100) {
    console.log(`The final winner is Team Dolphin with ${averageD} points`)
} else if (averageK > averageD && averageK >= 100) {
    console.log(`The final winner is Team Koala with ${averageK} points`)
} else if (averageD === averageK && averageD >= 100 && averageK >= 100) {
    console.log('We have a tie')
} else {
    console.log(`I guess nobody wins. 😪`)
}